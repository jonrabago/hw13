var R1 = 224;
var G1 = 172;
var B1 = 105;

var R2 = 0;
var G2 = 0;
var B2 = 0;

var x = 50;
var y = 50;
var w = 200;
var h = 200;

var drag = false;
var unDrag = false;

var thick = 2;

function preload() {
   soundFormats("wav");
  mySound = loadSound("button.wav");
}

function setup() {
  createCanvas(1000, 1000);
  // strokeWeight(10);
  // stroke(0);



  rect(200, 100, 400, 435);
  fill(108, 160, 220);
  rect(215, 115, 370, 405);
  fill(R1, G1, B1);
  circle(400, 270, 200);
  arc(400, 520, 300, 300, 210.49, 0, OPEN);
  // strokeWeight(thick);
}



// P5 Reference: https://p5js.org/examples/mobile-simple-draw.html
function touchMoved() {


  strokeWeight(thick);
  stroke(R2, G2, B2)
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

function keyPressed() {
  // if (key == "w") {
  //   // noStroke();
  //   R1 = R1 + 20;
  //   G1 = G1 + 20;
  //   B1 = B1 + 20;
  // }
  // if (key == "s") {
  //   R1 = R1 - 20;
  //   G1 = G1 - 20;
  //   B1 = B1 - 20;
  // }
  if (key == "1") {
    thick = 2;
  } else if (key == "2") {
    thick = 4;
  } else if (key == "3") {
    thick = 6;
  } else if (key == "4") {
    thick = 8;
  } else if (key == "5") {
    thick = 10;
  } else if (key == "6") {
    thick = 12;
  } else if (key == "7") {
    thick = 14;
  } else if (key == "8") {
    thick = 16;
  } else if (key == "9") {
    thick = 18;
  } else if (key == "0") {
    thick = 20;
  }
}

function draw() {
  noStroke();
    // brown  
  fill(121, 64, 42);
  rect(200, 30, 40, 40);
  // red
  fill(206, 36, 16);
  rect(252, 30, 40, 40);
  // purple
  fill(142, 69, 133);
  rect(304, 30, 40, 40);
  // orange
  fill(255, 117, 24);
  rect(356, 30, 40, 40);
  // yellow
  fill(255, 222, 25);
  rect(408, 30, 40, 40);
  // green
  fill(81, 157, 60);
  rect(460, 30, 40, 40);
  // blue
  fill(43, 108, 196);
  rect(512, 30, 40, 40);
  // black
  fill(0, 0, 0);
  rect(564, 30, 40, 40);
}

function mousePressed() {
  if (mouseX > 200 && mouseX < 240 && mouseY > 30 && mouseY < 70) {
    R2 = 121;
    G2 = 64;
    B2 = 42;
    mySound.play();
  } else if (mouseX > 252 && mouseX < 292 && mouseY > 30 && mouseY < 70) {
    R2 = 206;
    G2 = 36;
    B2 = 16;
    mySound.play();
  } else if (mouseX > 304 && mouseX < 344 && mouseY > 30 && mouseY < 70) {
    R2 = 142;
    G2 = 69;
    B2 = 133;
    mySound.play();
  } else if (mouseX > 356 && mouseX < 396 && mouseY > 30 && mouseY < 70) {
    R2 = 255;
    G2 = 117;
    B2 = 24;
    mySound.play();
  } else if (mouseX > 408 && mouseX < 448 && mouseY > 30 && mouseY < 70) {
    R2 = 255;
    G2 = 222;
    B2 = 25;
    mySound.play();
  } else if (mouseX > 460 && mouseX < 500 && mouseY > 30 && mouseY < 70) {
    R2 = 81;
    G2 = 157;
    B2 = 60;
    mySound.play();
  } else if (mouseX > 512 && mouseX < 552 && mouseY > 30 && mouseY < 70) {
    R2 = 43;
    G2 = 108;
    B2 = 196;
    mySound.play();
  } else if (mouseX > 564 && mouseX < 604 && mouseY > 30 && mouseY < 70) {
    R2 = 0;
    G2 = 0;
    B2 = 0;
    mySound.play();
  }
}
