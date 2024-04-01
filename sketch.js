
var bg
var helicopter
var girl1
var girl
function preload(){
  bg=loadImage("FLOOdbg.jpg")
  girl1=loadImage("girl1sad.png")
}




function setup() {
  createCanvas(900,600);


  girl=createSprite(400,200)
  girl.addImage("girl",girl1)
  
}


function draw() 
{
  background(bg);

  drawSprites()
}

