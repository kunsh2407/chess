var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var playerColor = "";
var turn = 1;
var form, player, game;
var path = [];
var board = [];
var boxes = [];
var players = [];
var playState = "wait";
var selectedpeg = "";
var selectedpos = "";

function preload() {
  
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if (playerCount === 2 && gameState === 0) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
}
