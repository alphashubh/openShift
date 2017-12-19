var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
 
app.use(cors());
app.use(bodyParser.json());


 var input = {};
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
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


app.listen(8005, "10.224.213.130");  