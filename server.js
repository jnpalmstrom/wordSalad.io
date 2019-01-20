const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const rword = require('rword');
const request = require('request');

const app = express();
const port = process.env.PORT || 3000;

let adjList = [];
let nounList = [];
let verbList = [];

//const starterWords = ['furniture', 'greeting', 'drink', 'fuck', 'drugs', 'whores', 'food', 'school', 'tools', 'mood'];
request('https://api.datamuse.com/words?md=p&sp=a*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});

request('https://api.datamuse.com/words?md=p&sp=b*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=c*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=d*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=e*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=f*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=g*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=h*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=i*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=j*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=k*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=l*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=m*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=n*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=o*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=p*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=q*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=r*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=s*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=t*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=u*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=v*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=w*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=x*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=y*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});
request('https://api.datamuse.com/words?md=p&sp=z*', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    body.forEach((item) => {
        if (typeof item.tags !== 'undefined') {
            switch (item.tags[0]) {
                case 'adj':
                    adjList.push(item);
                    break;
                case 'n':
                    nounList.push(item);
                    break;
                case 'v':
                    verbList.push(item);
                    break;
                default:
                    break;
            }
        }
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/palavramix/build')));

// For Socket.io
const server = require('http').createServer(app);

// Listen for the server to start
server.listen(port, function () {
    console.log("App is running on PORT: " + port);
});

const io = require('socket.io').listen(server);

let keyList = [];
let allPosts = [];
let currColor = 1;

let allWords = [];
allWords = generateWords();
allWords.push('the');
allWords.push('a/an');

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
            timestamp: aPost.timestamp,
            color: aPost.color
        });
    });

    // Handles when a user makes a new post
    socket.on('post', function (data) {

        let newPost = {
            postID: Math.random(),
            phrase: data.phrase,
            timestamp: data.timestamp,
            color: data.color
        };

        // Update the archivePost DB with highest rated post
        let hackathonDB = mysql.createConnection({
            host: 'postDB.cmrpubhiwsmb.us-east-1.rds.amazonaws.com',
            port: '3306',
            user: 'masterAdmin',
            password: 'Pa55word',
            database: 'wordSaladDB'
        });

        // Prepared statement to insert into archivedPosts table
        let addRequestStmt = 'INSERT INTO archivedPosts(post, color, timeStamp) VALUES (?, ?, ?)';

        let topPost = [newPost.phrase, newPost.color, newPost.timestamp];

        // Execute the insert statement
        hackathonDB.query(addRequestStmt, topPost, (err, results, fields) => {
            if (err) { return console.error(err.message); }
        });
        hackathonDB.end();

        allPosts.push(newPost);

        io.emit('a-post', newPost);

    });

    // Handle disconnection
    socket.on('disconnect', () => {
        delete keyList[socket]
    });

});

// Randomly chooses 5 functional labels
function labelPicker() {
    let newSetOfLabels = ['adjective', 'noun', 'verb'];

    for (let i=0; i < 6; i++) {
        let randIndex = Math.floor(Math.random() * 8);
        newSetOfLabels.push(allFunctionalLabels[randIndex]);
    }
    return newSetOfLabels;
}

// Generate 8 random words
function generateWords() {
    let newWords = [];

    // 3 Nouns, 2 Verbs, 3 Adj
    if (nounList.length > 1) {
        var rand1 = nounList[Math.floor(Math.random() * nounList.length)].word;
        var rand2 = nounList[Math.floor(Math.random() * nounList.length)].word;
        var rand3 = nounList[Math.floor(Math.random() * nounList.length)].word;
    }
    if (verbList.length > 1) {
        var rand4 = verbList[Math.floor(Math.random() * verbList.length)].word;
        var rand5 = verbList[Math.floor(Math.random() * verbList.length)].word;
    }
    if (adjList.length > 1) {
        var rand6 = adjList[Math.floor(Math.random() * adjList.length)].word;
        var rand7 = adjList[Math.floor(Math.random() * adjList.length)].word;
        var rand8 = adjList[Math.floor(Math.random() * adjList.length)].word;
    }

    newWords.push(rand1);
    newWords.push(rand2);
    newWords.push(rand3);
    newWords.push(rand4);
    newWords.push(rand5);
    newWords.push(rand6);
    newWords.push(rand7);
    newWords.push(rand8);
    return newWords;
}

// Loop thru all connected sockets and notify that Posts will be deleted soon
function warnUsers() {
    io.emit('warning');
}

function clearPosts() {
    // Set warning timeOut Interval
    setTimeout(warnUsers, 90000);
/*

*/
    // Clear all posts
    allPosts = [];

    // Clear all words
    allWords = [];
    allWords = generateWords();
    allWords.push('the');
    allWords.push('a');
    shuffle(allWords);

    // Generate a new color for the current time period
    currColor = Math.floor(Math.random() * 359);

    //io.emit('all-posts-cleared');
    io.emit('all-words', allWords);
    io.emit('current-color', currColor);
}

// Clear all posts after 2 minutes
setInterval(clearPosts, 90000);

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