var express = require("express");
var http = require("http");

var app = express();


app.use(function(request, response, next){
	console.log("request received from "+request.url);
	next();
});

app.use(function(request, response){
	
	response.send("hellod")
	
}).listen(52280);