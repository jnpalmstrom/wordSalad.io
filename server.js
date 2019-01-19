const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// For Socket.io
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/palavramix/build')));


// Sets relative path for Express to serve files out of views folder
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

let keyList = [];
let allPosts = [];
let currColor = 1;


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

    // Generate a unique for the connected user
    let uniqueKey = Math.random();
    keyList.push(uniqueKey);

    socket.emit('key', uniqueKey);
    socket.emit('current-color', currColor);

    // Handles when a user makes a new post
    socket.on('Post', function (data) {
        console.log(data);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        delete keyList[]
    })


});


function clearPosts() {
    // Update the archivePost DB with highest rated post
    let hackathonDB = mysql.createConnection({
        host: 'postDB.cmrpubhiwsmb.us-east-1.rds.amazonaws.com',
        port: '3306',
        user: 'masterAdmin',
        password: 'Pa55word',
        database: 'wordSaladDB'
    });

    // Prepared statement to insert into archivedPosts table
    let addRequestStmt = 'INSERT INTO archivedPosts(post, numLikes, numDislikes, timeStamp) VALUES (?, ?, ?, ?)';

    // Find the top post
    let mostLikes = 0;
    let topPostIndex = 0;
    allPosts.forEach((aPost) => {
        if (aPost.numLikes > mostLikes) {
            topPostIndex = allPosts[aPost];
        }
    });

    let topPost = [allPosts[topPostIndex].post, allPosts[topPostIndex].numLikes, allPosts[topPostIndex].numDislikes, allPosts[topPostIndex].timeStamp];

    // Execute the insert statement
    hackathonDB.query(addRequestStmt, topPost, (err, results, fields) => {
        if (err) { return console.error(err.message); }
    });
    hackathonDB.end();

    // Clears all posts
    allPosts.length = 0;

    // Generate a new color for the current time period
    currColor = Math.floor(Math.random() * 359);

    // Loop thru all connected sockets and notify that Posts have been cleared & send them the new color
    keyList.forEach((aKey) => {
        const currSocket = keyList[aKey];
        currSocket.emit('allPosts-cleared');
        currSocket.emit('current-color', currColor);
    });
}
// Clear all posts after 2 minutes
setTimeout(clearPosts, 120000);


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/palavramix/build/index.html'));
});

//Define express js routes
require('./routes/routes.js')(app);

// Listen for the server to start
app.listen(port, function () {
    console.log("App is running on PORT: " + port);
});