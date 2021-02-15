var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var car1Image,car2Image,car3Image,car3Image,trackImage;
var cars, car1, car2, car3, car4;
var groundImage;

function preload() {

  trackImage= loadImage("track.png");
  car1Image= loadImage("car1.png");
  car2Image= loadImage("car2.png");
  car3Image= loadImage("car3.png");
  car4Image= loadImage("car4.png");
  groundImage= loadImage("ground.png"); 
}



function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
    }
