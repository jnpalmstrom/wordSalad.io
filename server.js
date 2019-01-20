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
let timeLeft = 90;

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

// Lists of good words
const goodAdjectives = ['dead',
    'hairless',
    'sadistic',
    'metal',
    'wild',
    'domesticated',
    'abnormal',
    'medicated',
    'cocky',
    'massive',
    'disrespectful',
    'impressive',
    'hilarious',
    'sexy',
    'hot',
    'very-tactful',
    'bearded',
    'duck-like',
    'violent',
    'slimy',
    'insanely-creepy',
    'embarrassed-to-the-bone',
    'self-centered',
    'talking',
    'naked',
    'angry',
    'shaky',
    'deep',
    'sick',
    'zippy',
    'sticky',
    'fluffy',
    'frozen',
    'unholy',
    'painfully-honest',
    'filthy',
    'fighting',
    'bonkers',
    'harsh',
    'frisky',
    'greedy',
    'crawly',
    'insane',
    'hideous',
    'ungodly',
    'abusive',
    'drunken',
    'hateful',
    'idiotic',
    'twisted',
    'useless',
    'yapping',
    'magical',
    'indecent',
    'godawful',
    'arrogant',
    'confused',
    'flirting',
    'high-end',
    'insecure',
    'maniacal',
    'sickened',
    'slippery',
    'stubborn',
    'tripping',
    'vengeful',
    'sinister',
    'costumed',
    'cowardly',
    'haunting',
    'startled',
    'alcoholic',
    'demanding',
    'shivering',
    'offensive',
    'nighttime',
    'startling',
    'disgusting',
    'slap-happy',
    'disturbing',
    'adulterous',
    'blathering',
    'flickering',
    'rebellious',
    'impertinent',
    'bull-headed',
    'hyperactive',
    'infuriating',
    'outnumbered',
    'pea-brained',
    'territorial',
    'underhanded',
    'zombie-like',
    'mischievous',
    'at-the-ready',
    'free-loading',
    'house-broken',
    'up-to-no-good',
    'cruel-hearted',
    'misunderstood',
    'narrow-minded',
    'self-absorbed',
    'bat-shit-crazy',
    'fiercely-loyal',
    'out-of-control',
    'fear-inspiring',
    'bat-shit-crazy',
    'mentally-impaired'];
const goodVerbs = ['surround',
    'stab',
    'return',
    'medicate',
    'blindside',
    'boogie',
    'flap',
    'trip',
    'swat',
    'suck-in',
    'harass',
    'trap',
    'snoop',
    'explode',
    'sketch',
    'scatter',
    'challenge',
    'fight',
    'bury',
    'splatter',
    'smack',
    'peddle',
    'balance',
    'trip-up',
    'boggle',
    'poke',
    'critique',
    'fear',
    'initiate',
    'line-up',
    'run-over',
    'schedule',
    'cook',
    'imprison',
    'underestimate',
    'cajole',
    'wheedle',
    'soft-soap',
    'butter-up',
    'sweet-talk',
    'prevail',
    'shred',
    'drink',
    'dispute',
    'echo',
    'mimic',
    'berate',
    'castigate',
    'underrate',
    'taunt'];
const goodNouns = ['factory-reset-button',
    'blood-rage',
    'idiot',
    'toaster',
    'legend',
    'death-wish',
    'therapy',
    'goal-in-life',
    'marketing-idea',
    'psychic',
    'knife',
    'sandwich',
    'hunting-ground',
    'lettuce',
    'kitty',
    'friendly-grandma',
    'french-chef',
    'antidepressant-drug',
    'corn-cake',
    'president-of-the-night',
    'candlestick-maker',
    'coffee-pot',
    'brethren',
    'national-security-agency',
    'tank',
    'useless-brakes',
    'international-law-enforcement-agency',
    'sound-barrier',
    'skinny-woman',
    'private-investor',
    'main-people',
    'stock-car',
    'elastic-band',
    'whole-blood',
    'telephone',
    'mad-cow-disease',
    'scourge-upon-the-earth',
    'rough-skinned-newt',
    'karate',
    'pistol',
    'legal-warrant',
    'people-who-are-hurt',
    'idea-he-suggested',
    'party-of-the-first-part',
    'place-of-business',
    'double-fault',
    'kitty-cat',
    'famous-landscape-painting',
    'hairy-legs',
    'old-irish-cottage',
    'pocket-flask',
    'liquid-oxygen',
    'laser-beams',
    'preventive-strike',
    'dingle-berry',
    'reading-party',
    'generalized-bond',
    'indirect-expression',
    'messiness',
    'love-of-her-life',
    'trust-fund',
    'volcanic-crater',
    'travel-guidebook',
    'electric-furnace',
    'internal-respiration',
    'police-squad',
    'mad-dog-skullcap',
    'sneaky-criminal',
    'new-version',
    'keepsake-machete',
    'gaming-laptop',
    'hissy-fit',
    'dog-poop',
    'dragon',
    'mediation',
    'patrolman',
    'pervert',
    'toilet-seat',
    'haunted-graveyard',
    'really-tough-guy',
    'twinkling-uncleanness',
    'wrinkle',
    'personal-credit-line',
    'multi-billionaire',
    'mental-disorder',
    'sweet-tailpipe',
    'boiling-water',
    'deer-antler',
    'background-story',
    'striped-hyena',
    'weed-whacker',
    'backstabbing-misfortune',
    'bad-striped-hyena',
    'bat-shit-crazy-Amish-folk',
    'beautiful-elastic-band',
    'best-failure',
    'big-bellied-bad-mood',
    'bitchy-peace-offering',
    'bloody-indignation',
    'bone-chilling-legal-warrant',
    'boring-heartbreak',
    'bottle-conditioned-trainer',
    'bottled-sweet-tailpipe',
    'brainless-ways-of-the-world',
    'brewery-fresh-sleazeball',
    'bright-eyed-double-fault',
    'brokenhearted-druggie',
    'bull-headed-lover',
    'busty-descending-color',
    'buxom-personality',
    'cask-conditioned-freak',
    'cat-friendly-reading-party',
    'caught-in-the-act-jackass',
    'chauvinistic-pup',
    'cheap-natural-history',
    'cheeky-keepsake-machete',
    'cheerful-toilet-seat',
    'chilled-good-for-nothing',
    'chunky-drug-addict',
    'cocky-matrimonial-law',
    'cold-hearted-Eskimo',
    'colored-snuggle-bug',
    'colossal-love-of-her-life',
    'comforting-grouch',
    'comic-divergent-thinking',
    'common-toilet-seat',
    'compassionate-bad-mood',
    'complex-guilt',
    'confrontational-freak',
    'considerate-louse',
    'contemporary-queen',
    'content-dirtbag',
    'control-top-light-bulb',
    'corrupt-broken-promises',
    'craft-brewed-police-squad',
    'crappy-lack-of-morality',
    'crate-trained-mood',
    'crawly-mistake',
    'crazed-master',];
const personalPronouns = ['he', 'she', 'they', 'them', 'I', 'his', 'her', 'my', 'their'];

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
allWords.push('will');

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

// Generate 8 random words
function generateWords() {
    let newWords = [];

    if (nounList.length > 1) { var rand1 = nounList[Math.floor(Math.random() * nounList.length)].word;}
    if (verbList.length > 1) { var rand2 = verbList[Math.floor(Math.random() * verbList.length)].word;}
    if (adjList.length > 1) { var rand3 = adjList[Math.floor(Math.random() * adjList.length)].word;}
    newWords.push(rand1);
    newWords.push(rand2);
    newWords.push(rand3);

    var rand4 = personalPronouns[Math.floor(Math.random() * personalPronouns.length)];
    newWords.push(rand4);
    var rand5 = personalPronouns[Math.floor(Math.random() * personalPronouns.length)];
    newWords.push(rand5);

    var rand6 = goodAdjectives[Math.floor(Math.random() * goodAdjectives.length)];
    newWords.push(rand6);
    var rand7 = goodAdjectives[Math.floor(Math.random() * goodAdjectives.length)];
    newWords.push(rand7);
    var rand8 = goodAdjectives[Math.floor(Math.random() * goodAdjectives.length)];
    newWords.push(rand8);

    var rand9 = goodNouns[Math.floor(Math.random() * goodNouns.length)];
    newWords.push(rand9);
    var rand10 = goodNouns[Math.floor(Math.random() * goodNouns.length)];
    newWords.push(rand10);

    var rand12 = goodVerbs[Math.floor(Math.random() * goodVerbs.length)];
    newWords.push(rand12);
    var rand13 = goodVerbs[Math.floor(Math.random() * goodVerbs.length)];
    newWords.push(rand13);

    return newWords;
}

// Loop thru all connected sockets and notify that Posts will be deleted soon
function warnUsers() {
    io.emit('warning');
}

function clearAllPosts() {
    allPosts = [];
    io.emit('all-posts-cleared');
}

function clearPosts() {
    // Set warning timeOut Interval
    setTimeout(warnUsers, 90000);
    timeLeft = 90;

    // Clear all words
    allWords = [];
    allWords = generateWords();
    allWords.push('the');
    allWords.push('a');
    allWords.push('will');
    shuffle(allWords);

    // Generate a new color for the current time period
    currColor = Math.floor(Math.random() * 359);

    io.emit('all-words', allWords);
    io.emit('current-color', currColor);
}

function broadcastTime() {
    io.emit('timer-update', timeLeft);
    timeLeft--;
}

// Clear all posts after 2 minutes
setInterval(clearPosts, 90000);
setInterval(broadcastTime, 1000);
setInterval(clearAllPosts, 86400000);

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