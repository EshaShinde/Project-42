var hr;
var mn;
var sc;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  hr = hour();
  mn = minute()
  sc = second();

  angleMode(DEGREES);

  
}

function draw() {
  background(0);  

   translate(400,200)
   rotate(-90);

   scAngle  = map(sc,0,60,0,360)
  hrAngle  = map(hr%12,0,12,0,360)
  mnAngle  = map(mn,0,60,0,360)

  push();
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop();

  push();
  rotate(hrAngle)
  stroke(0, 255, 64)
  strokeWeight(8)
  line(0,0,100,0)
  pop();

  push();
  rotate(mnAngle)
  stroke(30, 55, 255)
  strokeWeight(10)
  line(0,0,100,0)
  pop();


  stroke(255,20,150);
  point(0,0)
  
  strokeWeight(7)
  noFill();
  stroke("red");
  arc(0,0,300,300,0,hrAngle)
  stroke("blue");
  arc(0,0,290,290,0,mnAngle)
  stroke(0, 255, 64);
  arc(0,0,280,280,0,scAngle)
  


  drawSprites();
}