const express = require('express');
var app = express();

var coinState = true;

app.get('/', function(req, res){
	res.send("Hello World");
	}
);

app.get('/hello', function(req, res){
	res.send("hello");
});

app.get('/coin', function(req, res) {
	var randomNumber = Math.random();
	if(randomNumber > 0.5){
		var coin = 'Heads';
	}
	else{
		var coin = 'Tails';
	}
	res.send(coin);
});

app.get('/getcoinstate', function(req, res) {
	if(coinState){
		res.send('Heads');
	} else {
		res.send('Tails');
	}	
});

app.get('/flipcoin', function(req, res) {
	var randomNumber = Math.random();
	if(randomNumber > 0.5) {
		coinState = true;
	}
	else{
		coinState = false;
	}
	res.send();
});

app.listen(3000, function(){
	console.log("Server running on port 3000");
});
