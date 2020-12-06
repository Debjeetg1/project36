var dog , dogimg , doghappyimg;
var database;
var foodS , foodStack;
var milk , milkimg;
var food
var feedbutton , addFood; 
var fedTime , lastFed;

function preload()
{
  dogimg = loadImage("images/dog.png")
  doghappyimg = loadImage("images/dogHappy.png");
 
}

function setup() {
  database = firebase.database();
  createCanvas(800, 700);

  foodStack = database.ref('Food');
  foodStack.on("value" , readStock);
  
  dog = createSprite(400 , 600 , 20, 20);
  dog.addImage(dogimg);
  dog.scale = 0.2;

  food = new Food(200 , 20 ,50);

  feedbutton = createButton('Feed The Dog')
  feedbutton.position(950 , 605);
  feedbutton.mousePressed(feed)

  addFood = createButton('Add Food')
  addFood.position(950 , 655)
  
}





function draw() {  
  background(46, 139, 87);
    
  drawSprites();

   stroke("white");
  textSize(50);
  text("Food left: " + foodS , 200 , 100);

  food.display();



}

function feed()
{

    writeStock(foodS);
    dog.addImage(doghappyimg)
    
  

}

function readStock(data)
{
  foodS = data.val();

 
}

function writeStock(x)
{
  if(x <= 0)
 {
   x = 0
 }
 else
 {
   x -= 1;
 }
 
 
  database.ref('/').set({
   Food: x 
 })


}



