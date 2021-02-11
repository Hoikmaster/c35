var balloon
var balloonImg
var background
var backgroundImg

function preload() {
  balloonImg = loadImage("images/balloon.png")
  backgroundImg = loadImage("images/background.png")
}


function setup() {
  createCanvas(1000,500);
  balloon = createSprite(400, 300, 10, 10);
  balloon.addImage(balloonImg)
}

function draw() {
  background(backgroundImg)

  if (keyDown(LEFT_ARROW)) {
    balloon.x = balloon.x-10;
  } else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10
  } else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10;
    balloon.scale = balloon.scale - 0.02
  } else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10
    balloon.scale = balloon.scale + 0.02
  }
  drawSprites();
}

function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x' : height.x+x ,
    'y' : height.y+y
  })
}

function readHeight(data){
  height = data.val();
  balloon.x = height.x
  balloon.y = height.y
}

function showError(){
  console.log("Error in writing to the database");
}