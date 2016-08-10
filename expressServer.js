var express = require('express');
var logger = require('morgan');
const fs = require('fs');
var customMiddleware = require('./customMiddleware.js');
// console.log(customMiddleware);
var app = express();
var port = 7770;
//var jsonFile =  require('jsonfile')
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

// var reader = fs.createReadStream('./access.log','utf8');
// var i=0;
//var objectArray=[];
// reader.on('data',function (chunk) {
//     objectArray = JSON.parse(chunk)
// })
// var lineReader = require('readline').createInterface({
//   input: require('fs').createReadStream('./access.log','utf8')
// });
//
// lineReader.on('line', function (line) {
//
//   objectArray.push(line);
// });
// lineReader.on('close',function(){
//   console.log(JSON.parse(JSON.parse(JSON.stringify(objectArray))));
// })

app.get('/logs',function(req,res){
fs.readFile('./access.log','utf8', function(err ,data) {
    //  data = data.trim().split("\n");
    // data = data.trim();
    // console.log(data);

    console.log(JSON.parse(data));
    // console.log(JSON.parse(data));
})


})
// Wait and listen to incoming web requests on http://localhost:3000
app.listen(port, function () {
    console.log('Example app listening on http://localhost:' + port);
});
