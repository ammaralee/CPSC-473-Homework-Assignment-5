// Homework Assignment 04
// Ammar Yasir Ali & Megan Bond

var express;
express = require("express");
var JSONObj = {
  outcome: "",
  wins: 0,
  losses: 0
};
var win = 0;
var loss = 0;
var http = require("http");
var game;
game = express();
http.createServer(game).listen(3000);

function CALL(req, res) {
  game.use('/result', express.static(__dirname + '/result'));
  res.sendFile('result/index.html', {
    root: __dirname
  });
  return res;
}
game.get('/', function(req, res) {
  res = CALL(req, res);
});
game.post('/output', function(req, res) {
  res.json(JSONObj);
});
game.post("/play/heads", function(req, res) {
  var Users = 'heads';
  var Servers = ["heads", "tails"];
  var rest = Servers[Math.floor(Math.random() * Servers.length)];

  if (Users === rest) {
    win = win + 1;
    JSONObj.outcome = 'win';
    JSONObj.wins = win;
    JSONObj.losses = loss;
    res = CALL(req, res);
  } else if (rest === "tails") {
    loss = loss + 1;
    JSONObj.outcome = 'loss';
    JSONObj.wins = win;
    JSONObj.losses = loss;
    res = CALL(req, res);
  }
});

game.post("/play/tails", function(req, res) {
  var Users = 'tails';
  var Servers = ["heads", "tails"];
  var rest = Servers[Math.floor(Math.random() * Servers.length)];

  if (Users === rest) {
    loss = loss + 1;
    JSONObj.outcome = 'loss';
    JSONObj.wins = win;
    JSONObj.losses = loss;
    res = CALL(req, res);
  } else if (rest === "heads") {
    win = win + 1;
    JSONObj.outcome = 'win';
    JSONObj.wins = win;
    JSONObj.losses = loss;
    res = CALL(req, res);
  }
});

console.log("Ready to play on http://localhost:3000/ !");
