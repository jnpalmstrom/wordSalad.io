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
app.use(express.static(path.join(__dirname, './client/build')));


// Sets relative path for Express to serve files out of views folder
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

// Socket.io
io.on('connection', function(socket){
    console.log('a user connected');
});

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

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/palavramix/build/index.html'));
});

//Define express js routes
require('./routes/routes.js')(app);

// Listen for the server to start
app.listen(port, function () {
    console.log("App is running on PORT: " + port);
});