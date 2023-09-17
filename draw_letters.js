/* these are optional special variables which will change the system */
var systemBackgroundColor = "#ead4b8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(5);
  noStroke();
  angleMode(DEGREES);

  // determine parameters for second circle
  // let size2 = letterData["size"];
  let pos2x =  letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let size_v= letterData["size_v"];
  let pos3x= letterData["x_2"];
  let pos3y= letterData["y_2"];
  let rotate_1 = letterData["rotate_1"];
  let size3= letterData["size3"];


  let pos4x =letterData["x_4"]
  let pos4y =letterData["y_4"]
  let rotate_2=letterData["rotate_2"]
  let size4=letterData["size4"]

  let pos5x =letterData["x_5"]
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
  ellipse(50, 150, 75, 75);
  fill(lightBlue);
  ellipse(50, 75, 30, 30);
  fill("#37211C")
 
  push();
  translate(pos2x, pos2y,);
  rotate(rotate_0)
  rect (pos2x, pos2y, 14, size_v);
  pop();



  push();
  translate(pos3x, pos3y,)
  rotate(rotate_1)
  rect (pos3x, pos3y, size3, 14)
  pop();

  push();
  translate(pos4x, pos4y)
  rotate(rotate_2)
  rect (pos4x, pos4y, size4, 14)
  pop();

  push();
  translate(pos6x, pos6y)
  rotate(rotate_4)
  rect (pos6x, pos6y, size6, 14)
  pop();


  push();
  translate(pos5x, pos5y)
  rotate(rotate_3)
  rect (pos5x, pos5y, 14, size_v2);
  pop();



}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
