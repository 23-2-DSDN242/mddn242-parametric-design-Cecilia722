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
  "size_v": 125,
  "offsetx": 12.040000000000001,
  "offsety": 24,
  "rotate_0": 0,
  "size3": 57,
  "x_2": 26.700000000000003,
  "y_2": 43,
  "rotate_1": 25.19999999999999,
  "size4": 57,
  "x_4": 23.4,
  "y_4": 20,
  "rotate_2": 21.600000000000023,
  "size_v2": 0,
  "x_5": 0,
  "y_5": 0,
  "rotate_3": -108,
  "size6": 0,
  "rotate_4": 0,
  "x_6": 0,
  "y_6": 0



}

const letterB = {
  "size_v": 125,
  "offsetx": 100,
  "offsety": 24,
  "rotate_0": 0,
  "size3": 57,
  "x_2": 26.700000000000003,
  "y_2": 43,
  "rotate_1": 25.19999999999999,
  "size4": 57,
  "x_4": 23.4,
  "y_4": 20,
  "rotate_2": 21.600000000000023,
  "size_v2": 0,
  "x_5": 0,
  "y_5": 0,
  "rotate_3": -108,
  "size6": 0,
  "rotate_4": 0,
  "x_6": 0,
  "y_6": 0

}

const letterC = {
  "size_v": 125,
  "offsetx": 12.040000000000001,
  "offsety": 24,
  "rotate_0": 0,
  "size3": 57,
  "x_2": 26.700000000000003,
  "y_2": 43,
  "rotate_1": 25.19999999999999,
  "size4": 57,
  "x_4": 23.4,
  "y_4": 20,
  "rotate_2": 21.600000000000023,
  "size_v2": 0,
  "x_5": 0,
  "y_5": 0,
  "rotate_3": -108,
  "size6": 0,
  "rotate_4": 0,
  "x_6": 0,
  "y_6": 0

}

const backgroundColor  = "#caf0c8";
const strokeColor      = "#03045e";

const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const Brown ="#37211C"

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

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
  let size2 = letterData["size"];
  let pos2x =  75+letterData["offsetx"];
  let pos2y = 250+letterData["offsety"];
  let size_v= letterData["size_v"];
  let pos3x= 75+letterData["x_2"];
  let pos3y= 250+letterData["y_2"];
  let rotate_1 = letterData["rotate_1"];
  let size3= letterData["size3"];


  let pos4x = letterData["x_4"]
  let pos4y =letterData["y_4"]
  let rotate_2=letterData["rotate_2"]
  let size4=letterData["size4"]

  let pos5x = letterData["x_5"]
  let pos5y =letterData["y_5"]
  let rotate_3=letterData["rotate_3"]
  let size_v2= letterData["size_v2"]
  let rotate_0 = letterData["rotate_0"]


  let pos6x = letterData["x_6"]
  let pos6y =letterData["y_6"]
  let rotate_4=letterData["rotate_4"]
  let size6= letterData["size6"]
 

  // draw two circles
  fill(darkBlue);
  ellipse(posx, posy, 150, 150);
  fill(lightBlue);
 
  


// My Letters
  noStroke()
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
