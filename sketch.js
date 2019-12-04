
//declare global variables
var tz = 30;
var tposx = 610;
var tposy = 610;

let eLL;

//setup
function setup() {
  createCanvas(600, 600);
  eLL = new bEllipse(120, 70, 50);//initialize ellipse object

}

//draw
function draw() {
  background(51, 0, 0);

  eLL.display(); //ellipse object function
  y = eLL.posY;
 
  if(mouseIsPressed){
    eLL.move(); //move ellpse with created fuction
  }

  //if ellpse falls off the rect, recreate ellipse
  if(y >= 150){
    eLL = new bEllipse(120, 70, 50); 
    eLL.display();
  }

  //create a rectangle object
  fill(67,	80,	19);
  strokeWeight(5);
  stroke(204, 153, 0);
  rect(50, 100, 400, 120);


  //create text objects with random variable positions
  fill(0);
  stroke(0,	200,	100);
  textSize(tz);
  textFont("Courier New");
  text("Hello", mouseX, 280);

  fill(51, 0, 0);
  stroke(0, 200, 100);
  textSize(20);
  textFont("Courier New");
  text("Chinonso is waving at you :)", tposx, tposy);

}

/*create a custom elipse oject accepting parameters
*Creating this object will enable the program recreate
*the object at certain events like postion exceeded
*/

class bEllipse {
  constructor(posix, posiy, diamE){
    this.x = posix;
    this.y = posiy;
    this.d = diamE;
  }

  //move function of the ellipse object
  move() {
    this.x += 2;
    if(this.x >= 450){
      this.y += 50;
    }
  }

  //display function of the ellipse object
display() {
  let inside = color(204, 102, 0);
  let outside = color(153, 51, 0);
  fill(inside);
  strokeWeight(5);
  stroke(outside);
  ellipse(this.x, this.y, this.d, this.d); 
}

//accessor to know the y-position of ellipse at every point
 get posY() {
   return this.y;
 }

}

//mouse-pressed function: event that generates random values used
function mousePressed(){
  tposx = random(50, 100);
  tposy = random(120, 200);
  tz = random(10,70);
}

