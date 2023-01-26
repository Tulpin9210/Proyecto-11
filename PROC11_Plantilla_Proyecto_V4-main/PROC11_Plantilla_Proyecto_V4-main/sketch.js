var ship_moevement;
var ship;
var sea;
var sea_visual;
function preload(){
ship_moevement = loadImage("ship-4.png", "ship-3.png");
sea_visual = loadImage("sea.png");
}

function setup(){
createCanvas(1800,934);
sea = createSprite(500,200);
sea.addImage(sea_visual);
sea.velocityX = 10
ship = createSprite(850,462);
ship.addImage(ship_moevement);
}

function draw() {
  background("blue");
  if(sea.x <0)[
    sea.x=sea.width/2
  ]
setup();
preload();
drawSprites();
}