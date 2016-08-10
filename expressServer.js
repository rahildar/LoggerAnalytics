var express = require('express');
var logger = require('morgan');
const fs = require('fs');
var customMiddleware = require('./customMiddleware.js');
// console.log(customMiddleware);
var app = express();
var port = 7770;

// Use app.use() to log request information for every single incoming request
// 'common' log format:
//    :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]
// 'dev' log format:
//    :method :url :status :response-time ms - :res[content-length]
// var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})

// setup the logger

// app.use(logger('tiny', {stream: accessLogStream}))
app.use(customMiddleware);

// Respond to GET request on the root route (/), the application’s home page
app.get('/', function (req, res) {
    res.end('Hello Express!');
});

// Wait and listen to incoming web requests on http://localhost:3000
app.listen(port, function () {
    console.log('Example app listening on http://localhost:' + port);
});
