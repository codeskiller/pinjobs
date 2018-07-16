var express = require('express');
var app = express();

//set port
var port = process.env.PORT || 8000;

app.use(express.static(__dirname));
app.get('/', function (req,res){
	res.render("index.html");
});

app.listen(port,function(){
	console.log("App is running at port 6000");
});