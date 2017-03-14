var express = require("express");
var logger = require("morgan");
var path = require("path");
var http = require("http");

var app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use(logger("short"));

//routing using express
app.get("/",function(request, response){
	console.log("homepage");
	response.send("Welcome to homepage");
	
});

//usage of express redirect method
app.get("/google",function(request, response){
	console.log("google homepage");
	response.redirect("https://www.google.com/");
	
});

app.get("/aboutus",function(request, response){
	console.log("about us page ");
	response.send("About us");
	
});

app.get("/aboutus/:who",function(request, response){
	console.log("about us page ");
	response.send("About us"+ request.params.who);
	
});

app.use(function(request, response) {
response.statusCode = 404;
response.end("404!");
});



http.createServer(app).listen(52280);
