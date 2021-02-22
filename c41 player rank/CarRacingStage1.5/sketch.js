var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var iCar1, iCar2, iCar3, iCar4, groundImg, trackImg; 
function preload(){

 iCar1 = loadImage('images/car1.png');
 iCar2 = loadImage('images/car2.png');
 iCar3 = loadImage('images/car3.png');
 iCar4 = loadImage('images/car4.png');
 
 
 groundImg = loadImage('images/ground.png');
 trackImg = loadImage('images/track.jpg');
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
