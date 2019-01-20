const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const rword = require('rword');

const app = express();
const port = process.env.PORT || 3000;

// For Socket.io
const http = require('http').Server(app);
const io = require('socket.io')(http);

const CollegiateDictionary = require("mw-dict").CollegiateDictionary;

const MW_API_KEY = 'f79df243-30e7-417b-9072-5161ebc7e154';
const dict = new CollegiateDictionary(MW_API_KEY);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/palavramix/build')));

// Sets relative path for Express to serve files out of views folder
//app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/views'));

let keyList = [];
let allPosts = [];
let currColor = 1;

let allWords = [];
allWords = rword.rword.generate(8);
allWords.push('The');
allWords.push('A/An');

let postID = 0;

// Initialize connection to AWS RDS mySQL database
let connection = mysql.createConnection({
    // Properties for the DB
    host: 'postdb.cmrpubhiwsmb.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'masterAdmin',
    password: 'Pa55word',
    database: 'wordSaladDB'
});

connection.connect(function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Database Connection Successful!")
    }
});

// Listen for connections and log to console
io.on('connection', function (socket) {

    // Add the socket to the list of currently connected sockets
    keyList.push(socket);

    //socket.emit('key', socket);
    socket.emit('current-color', currColor);
    socket.emit('all-words', allWords);
    allPosts.forEach((aPost) => {
        socket.emit('a-post', {
            id: aPost.id,
            phrase: aPost.phrase,
            timestamp: aPost.timestamp
        });
    });

    // Handles when a user makes a new post
    socket.on('post', function (data) {

        let newPost = {
            id: socket,
            phrase: data.phrase,
            numLikes: 0,
            numDislikes: 0,
            timestamp: data.timestamp
        };
        allPosts.push(newPost);

        // Goes thru all current connected sockets
        keyList.forEach((aKey) => {
            const currSocket = keyList[aKey];

            // Sends new lists of posts
            allPosts.forEach((aPost) => {
                currSocket.emit('a-post', {
                    id: aPost.id,
                    phrase: aPost.phrase,
                    timestamp: aPost.timestamp
                });
            });
        });
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        delete keyList[socket]
    });

});

const allFunctionalLabels = ['adjective', 'noun', 'adverb', 'preposition', 'conjunction',
    'pronoun', 'interjection', 'verb'];

// Randomly chooses 5 functional labels
function labelPicker() {
    let newSetOfLabels = ['adjective', 'noun', 'verb'];

    for (let i=0; i < 6; i++) {
        let randIndex = Math.floor(Math.random() * 8);
        newSetOfLabels.push(allFunctionalLabels[randIndex]);
    }
    return newSetOfLabels;
}

//
function generateWords(setOfLabels) {

    setOfLabels.forEach((aLabel) => {
        let randomWord = rword.generate();
    });

}

// Loop thru all connected sockets and notify that Posts will be deleted soon
function warnUsers() {
    keyList.forEach((aKey) => {
        const currSocket = keyList[aKey];
        currSocket.emit('warning');
    });
}

function clearPosts() {
    // Set warning timeOut Interval
    setTimeout(warnUsers, 90000);

    // Update the archivePost DB with highest rated post
    let hackathonDB = mysql.createConnection({
        host: 'postDB.cmrpubhiwsmb.us-east-1.rds.amazonaws.com',
        port: '3306',
        user: 'masterAdmin',
        password: 'Pa55word',
        database: 'wordSaladDB'
    });

    // Find the top post
    let mostLikes = 0;
    let topPostIndex = 0;
    allPosts.forEach((aPost) => {
        let score = aPost.numLikes - aPost.numDislikes;
        if (score > mostLikes) { topPostIndex = allPosts[aPost]; }
    });

    // Prepared statement to insert into archivedPosts table
    let addRequestStmt = 'INSERT INTO archivedPosts(post, numLikes, numDislikes, timeStamp) VALUES (?, ?, ?, ?)';

    let topPost = [allPosts[topPostIndex].post, allPosts[topPostIndex].numLikes, allPosts[topPostIndex].numDislikes, allPosts[topPostIndex].timeStamp];

    // Execute the insert statement
    hackathonDB.query(addRequestStmt, topPost, (err, results, fields) => {
        if (err) { return console.error(err.message); }
    });
    hackathonDB.end();

    // Clear all posts
    allPosts = [];

    // Clear all words
    allWords = [];
    allWords = rword.rword.generate(8);
    allWords.push('The');
    allWords.push('A/An');
    shuffle(allWords);

    // Generate a new color for the current time period
    currColor = Math.floor(Math.random() * 359);

    // Loop thru all connected sockets and notify that Posts have been cleared & send them the new color
    keyList.forEach((aKey) => {
        const currSocket = keyList[aKey];
        currSocket.emit('all-posts-cleared');
        currSocket.emit('current-color', currColor);
    });
}

// Clear all posts after 2 minutes
setInterval(clearPosts, 120000);

function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

// Sends initial index page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/palavramix/build/index.html'));
});

//Define express js routes
require('./routes/routes.js')(app);

// Listen for the server to start
app.listen(port, function () {
    console.log("App is running on PORT: " + port);
    dict.lookup('').then(result => {console.log(result)})
});