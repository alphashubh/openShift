var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors');

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var app = express();
 
app.use(cors());
app.use(bodyParser.json());


 var input = {};
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {

	res.end('Hello YouTube!');

});

app.post('/user', function(req, res) {  
   
   // input=req.body
console.log(req.body.name);
 input={user:req.body.name};


res.send(input);
   
});

app.get('/user', function(req,res){
    res.send(input);
});


app.listen(server_port, server_ip_address, function () {
	 console.log( "Listening on " + server_ip_address + ", server_port " + server_port );
});