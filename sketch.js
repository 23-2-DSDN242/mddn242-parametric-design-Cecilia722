const canvasWidth = 960;
const canvasHeight = 500;



/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {

  
   
    "size_v": 147.5,
    "offsetx": 1,
    "offsety": 18.00000000000003,
    "rotate_0": 0,
    "size3": 76.5,
    "x_2": 110,
    "y_2": -180,
    "rotate_1": 36,
    "size4": 70.5,
    "x_4": 140,
    "y_4": -200,
    "rotate_2": 36,
    "size_v2": 0,
    "x_5": -30,
    "y_5": -100,
    "rotate_3": -180,
    "size6": 0,
    "rotate_4": -180,
    "x_6": -30,
    "y_6": -100
      
    
    
  

  
  



}

const letterB = {
  "size_v": 152.5,
      "offsetx": 6.0200000000000005,
      "offsety": 18.00000000000003,
      "rotate_0": 0,
      "size3": 65,
      "x_2": 0,
      "y_2": 8,
      "rotate_1": 0,
      "size4": 70,
      "x_4": -260,
      "y_4": 290,
      "rotate_2":-30,
      "size_v2": 70,
      "x_5": 110,
      "y_5":-290,
      "rotate_3": 30,
      "size6": 100,
      
      "x_6":100,
      "y_6": -330,
      "rotate_4": 40,

}

const letterC = {
  "size_v": 110,
  "offsetx": 6.88,
  "offsety": 33,
  "rotate_0": 0,
  "size3": 52.5,
  "x_2": -120,
  "y_2": 270,
  "rotate_1": -19,
  "size4": 66,
  "x_4": 7.200000000000003,
  "y_4": 82,
  "rotate_2": 0,
 

}

const backgroundColor  = "#ead4b8";
const strokeColor      = "#03045e";

const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const Brown ="#37211C"

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
 

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let pos2x =  posx+letterData["offsetx"];
  let pos2y = posy+letterData["offsety"];
  let size_v= letterData["size_v"];
  let pos3x= posx+letterData["x_2"];
  let pos3y= posy+letterData["y_2"];
  let rotate_1 = letterData["rotate_1"];
  let size3= letterData["size3"];


  let pos4x =posx+letterData["x_4"]
  let pos4y =posy+50+letterData["y_4"]
  let rotate_2=letterData["rotate_2"]
  let size4=letterData["size4"]

  let pos5x =posx+letterData["x_5"]
  let pos5y =posy+letterData["y_5"]
  let rotate_3=letterData["rotate_3"]
  let size_v2= letterData["size_v2"]
  let rotate_0 = letterData["rotate_0"]


  let pos6x = posx+letterData["x_6"]
  let pos6y =posy+letterData["y_6"]
  let rotate_4=letterData["rotate_4"]
  let size6= letterData["size6"]
 
 

  // draw two circles
  
  angleMode(DEGREES);

  push();
  noFill();
  stroke(strokeColor);
  strokeWeight(10);
  
  ellipse(posx-40, posy-30, 100);
  
  
  pop();
 
  noStroke()
;
  push();
  noStroke()
  fill(darkBlue);

  ellipse(posx+30, posy+80, 150, 250);
 
  
  pop();




  


// My Letters

  fill(Brown)
  push();
  translate(0,0);
  rotate(rotate_0)
  rect (pos2x, pos2y, 14, size_v);
  pop();



  push();
  translate(0,0)
  rotate(rotate_1)
  rect (pos3x, pos3y, size3, 14)
  pop();

  push();
  translate(0,0)
  rotate(rotate_2)
  rect (pos4x, pos4y, size4, 14)
  pop();

  push();
  translate(0,0)
  rotate(rotate_4)
  rect (pos6x, pos6y, size6, 14)
  pop();


  push();
  translate(0,0)
  rotate(rotate_3)
  rect (pos5x, pos5y, 14, size_v2);
  pop();




}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
