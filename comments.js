// Create web server
// Create a server that listens on port 3000 and serves the comments.html file
// Create a route that listens for POST requests to /comments and logs the comment to the console

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/comments.html');
});

app.post('/comments', (req, res) => {
    console.log(req.body.comment);
    fs.appendFile('comments.txt', req.body.comment + '\n', (err) => {
        if (err) {
            console.log(err);
        }
    });
    res.send('Comment received');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});