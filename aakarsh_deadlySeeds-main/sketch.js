var shooter;
var alship;
var shooterImg;
var ship;
var shipImg;
var laser;
var seedImg;
var seed;


function preload(){

shooterImg=loadImage("shooter.png");
shipImg=loadImage("spaceship.png");
seedImg=loadImage("seed.png");



}
function setup(){
    createCanvas(1200,800);

ship=createSprite(1000,100,40,10);
ship.addImage(shipImg); 
ship.velocityX=-6;

shooter=createSprite(1000,700,40,40);
shooter.addImage(shooterImg);
}


function draw(){
background("yellow");

shooter.x=mouseX;

if(World.frameCount % 60 === 0) {

}

if(ship.x<0){
    ship.velocityX=6;
}

if(ship.x>1200){
    ship.velocityX=-6
}

if(seedl.position.y < laser.position.y){
seed.destroy();

 }
    


drawSprites();
lazer();
seedl();
}
function lazer(){
    
    if(keyDown("space")){
        laser=createSprite(1000,620,10,40);
    laser.shapeColor="red";
    laser.x=mouseX;
        laser.velocityY=-50;        
        }
     
}

function seedl(){
    if(World.frameCount % 60 === 0) {
        seed = createSprite(10,10);
        seed.x=ship.x;
        seed.y=200;
        seed.velocityY = 6;
        seed.addImage(seedImg);
        seed.scale=0.2;
    }

}















