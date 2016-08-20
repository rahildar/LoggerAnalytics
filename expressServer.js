var express = require('express');
var logger = require('morgan');
const fs = require('fs');
const morgan = require('morgan');
var customMiddleware = require('./customMiddleware.js');
// console.log(customMiddleware);
var app = express();
var port = 7770;

  app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return next();
  });

//raw log file => rawfile.log
var accessLogStream = fs.createWriteStream(__dirname + '/rawfile.log', {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}));

//generate json file from logs
app.use(customMiddleware);

// Respond to GET request on the root route (/), the application’s home page
var arr = [];
app.get('/', function (req, res) {
    res.end('Hello Express!');
});

app.get('/logs',function(req,res){
  // arr = [];
  var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./access.log')
  });

  lineReader.on('line', function (line) {
    arr.push(JSON.parse(line))
  });

  lineReader.on('close',function(){
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(arr);
    res.send(arr);
  })

});

// Wait and listen to incoming web requests on http://localhost:3000
app.listen(port, function () {
    console.log('Example app listening on http://localhost:' + port);
});
