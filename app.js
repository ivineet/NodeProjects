var express = require("express");
var logger = require("morgan");
var http = require("http");

var app = express();

app.use(logger("short"));

app.use(function(request, response){
		console.log("koder");
		response.send("logged in");
	
}).listen(52280);
