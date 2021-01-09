var bg,tom,jerry;
var bgimg,tomimg1,tomimg2,tomimg3,tomimg4,jerryimg;
function preload() {
    //load the images here
bgimg = loadAnimation("garden.png");
jerryimg1 = loadAnimation("jerryOne.png");
jerryimg2 = loadAnimation("jerryTwo.png");
jerryimg3 = loadAnimation("jerryThree.png");
jerryImg4 = loadAnimation("jerryFour.png");
tomimg1 = loadAnimation("tomOne.png");
tomimg2 = loadAnimation("tomTwo.png");
tomimg3 = loadAnimation("tomThree.png");
tomimg4 = loadAnimation("tomFour.png");

}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
bg = createSprite(500,400,1000,800);
bg.addAnimation("background",bgimg);
  bg.scale = 1.1;
 jerry = createSprite(170,670,600,500);
jerry.addAnimation("jerryrest",jerryimg2)
  jerry.scale = 0.1
  tom = createSprite(730,670,500,600);
  tom.addAnimation("tomsit",tomimg1);
  tom.scale = 0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (tom.x - jerry.x <=50  ) 
        {
          
          tom.collide(jerry);
          tom.velocityX = 0;                              
          tom.addAnimation("catLastImage",tomimg4);
        tom.changeAnimation("catLastImage"); 
      
      
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW  ) {
      tom.velocityX = -5;
      tom.addAnimation("catrun",tomimg2);
      tom.changeAnimation("catrun");
      
      jerry.addAnimation("jerrydetective",jerryImg4);
      jerry.changeAnimation("jerrydetective");
      
      
  }

}
