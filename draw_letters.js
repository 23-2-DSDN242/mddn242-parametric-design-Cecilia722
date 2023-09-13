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

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];
  let size_v= letterData["size_v"];
  let pos3x= 50+letterData["x_2"];
  let pos3y=150 +letterData["y_2"];
  let roate_1 = letterData["rotate_1"];
  let size3= letterData["size3"];
  let size_v3= letterData["size_v3"]


  // draw two circles
  fill(darkBlue);
  ellipse(50, 150, 75, 75);
  fill(lightBlue);
  ellipse(pos2x, pos2y, size2, size2);
  fill("#37211C")
  rect (pos2x, pos2y, 22.5, size_v);
  rotate(roate_1)
  rect (pos3x, pos3y, size3, 22.5)
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
