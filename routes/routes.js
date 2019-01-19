const mysql = require('mysql');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('index.html', {});
    });

    app.get('/index', function (req, res) {
        res.render('index.html', {});
    });

    app.get('/archive', function (req, res) {
        let allPosts = [];
        let currPost = 0;

        let hackathonDB = mysql.createConnection({
            host: 'postDB.cmrpubhiwsmb.us-east-1.rds.amazonaws.com',
            port: '3306',
            user: 'masterAdmin',
            password: 'Pa55word',
            database: 'wordSaladDB'
        });
        // Execute the insert statement
        hackathonDB.query('SELECT * FROM archivedPosts', (err, rows) => {
            if (err) {
                return console.error(err.message);
            } else {

                for (let i in rows) {
                    allPosts[currPost++] = {
                        idarchivedPosts: rows[i].idarchivedPosts,
                        post: rows[i].post,
                        numLikes: rows[i].numLikes,
                        numDislikes: rows[i].numDislikes,
                        timeStamp: rows[i].timeStamp,
                    };
                }

                res.render('archive.html', {});
            }
        });
        hackathonDB.end();
    });

/*
    // Adds the newRequest to the AWS MySQL DB
    app.post('/submitRequest', function (req, res) {
        // Connect to the dispatcher database
        let dispatcherDB = mysql.createConnection({
            host: 'snapdispatcherdb.ca40maoxylrp.us-east-1.rds.amazonaws.com',
            port: '3306',
            user: 'masterAdmin',
            password: 'Pa55word',
            database: 'snapDB'
        });
        // Prepared statement to insert into newrequests table
        let addRequestStmt = 'INSERT INTO newRequests(rideTo, rideFrom, numPassengers, ' +
            'accommodations, timeIn) VALUES (?, ?, ?, ?, ?)';

        let newRequest = [req.body.goingTo, req.body.comingFrom, req.body.numPassengers, req.body.accommodations, moment(new Date()).toString()];

        // Execute the insert statement
        dispatcherDB.query(addRequestStmt, newRequest, (err, results, fields) => {
            if (err) {
                return console.error(err.message);
            }
            // Retrieve inserted id
            console.log("Going to: " + req.body.goingTo);
            dispatcherDB.end();
            // Sends the user back to the home page
            res.redirect('/index');
        });
    });
*/

};