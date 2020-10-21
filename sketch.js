var dog, happyDog
var database
var foodS, foodStock;
var dog_img, dog_img2;

function preload(){
  dog_img = loadImage("images/dog.png");
  dog_img2 = loadImage("images/happydog.png");
}

function setup() {
  createCanvas(250,250);
  database = firebase.database();
  dog = createSprite(100,100,5,5);
  dog.addImage("dogImg",dog_img);
  foodStock = database.ref('food')
  foodStock.on("value",readStock)
  
}


function draw() {
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("happyDog",dog_img2);
  }  

  drawSprites();
  text('note-press up arrow to feed drago')
  textSize(36);
  fill("red");
  stroke("red");

}

function readStock(data){
  foodS=data.val();
   }
    
function writeStock(x){

  if(x<-0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
  Food:x
  })
}