var canvas,bgImg;
var together;
var cat, catImg1,catImg2,catImg3;
var mouse, mouseImg1,mouseImg2,mouseImg3;

function preload() {
    bgImg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/tomOne.png");
    catImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    catImg3= loadAnimation("images/tomFour.png");
    mouseImg1=loadAnimation("images/jerryOne.png");
    mouseImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    mouseImg3=loadAnimation("images/jerryFour.png");

}

function setup(){

    canvas = createCanvas(1000,800);

    cat = createSprite(870, 600);
    cat.addAnimation("catDurmiendo", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseParado", mouseImg1);
    mouse.scale = 0.15;

}

function draw() {

    background(bgImg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/0.7){ 
      cat.addAnimation("catQuieto", catImg3);
      cat.changeAnimation("catQuieto");
      mouse.addAnimation("mouseQuieto", mouseImg3);
      mouse.changeAnimation("mouseQuieto");
      cat.velocityX = 0;
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("catCorriendo", catImg2);
        cat.changeAnimation("catCorriendo");
        
        mouse.addAnimation("mouseMolestando", mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseMolestando");
    }
}