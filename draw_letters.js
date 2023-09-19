/* these are optional special variables which will change the system */
var systemBackgroundColor = "#ead4b8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";



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

//1st vertical stroke
  let pos2x =  letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let size_v= letterData["size_v"];
  let rotate_0 = letterData["rotate_0"];

//1st horizontal stroke
  let pos3x= letterData["x_2"];
  let pos3y= letterData["y_2"];
  let rotate_1 = letterData["rotate_1"];
  let size3= letterData["size3"];

//2nd horizontal stroke
  let pos4x =letterData["x_4"]
  let pos4y =letterData["y_4"]
  let rotate_2=letterData["rotate_2"]
  let size4=letterData["size4"]

//2nd vertical stroke
  let pos5x =letterData["x_5"]
  let pos5y =letterData["y_5"]
  let rotate_3=letterData["rotate_3"]
  let size_v2= letterData["size_v2"]
 

//3rd horizontal stroke
  let pos6x = letterData["x_6"]
  let pos6y =letterData["y_6"]
  let rotate_4=letterData["rotate_4"]
  let size6= letterData["size6"]
 


  
  fill("#37211C")//Brown
 
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
  new_letter["size_v"] = map(percent, 0, 100, oldObj["size_v"], newObj["size_v"]);


  new_letter["x_2"] = map(percent, 0, 100, oldObj["x_2"], newObj["x_2"]);
  new_letter["y_2"] = map(percent, 0, 100, oldObj["y_2"], newObj["y_2"]);
  new_letter["rotate_1"] = map(percent, 0, 100, oldObj["rotate_1"], newObj["rotate_1"]);
  new_letter["size3"] = map(percent, 0, 100, oldObj["size3"], newObj["size3"]);

  

  new_letter["rotate_0"] = map(percent, 0, 100, oldObj["rotate_0"], newObj["rotate_0"]);

  new_letter["x_6"] = map(percent, 0, 100, oldObj["x_6"], newObj["x_6"]);
  new_letter["y_6"] = map(percent, 0, 100, oldObj["y_6"], newObj["y_6"]);
  new_letter["rotate_4"] = map(percent, 0, 100, oldObj["rotate_4"], newObj["rotate_4"]);
  new_letter["size6"] = map(percent, 0, 100, oldObj["size6"], newObj["size6"]);


// creat different pace for the animation.
    if (percent < 50) {
     
  
      new_letter["x_5"] = map(percent, 0, 49, oldObj["x_5"], 0);
      new_letter["y_5"] = map(percent, 0, 49, oldObj["y_5"], 0);
      new_letter["rotate_3"] = map(percent, 0, 49, oldObj["arotate_3"], 0);
      new_letter["size_v2"] = map(percent, 0, 49, oldObj["size_v2"], 0);
  
   
    } else {

   
      new_letter["x_5"] = map(percent, 50, 100, 0, newObj["x_5"]);
      new_letter["y_5"] = map(percent, 50, 100, 0, newObj["y_5"]);
      new_letter["rotate_3"] = map(percent, 50, 100, 0, newObj["rotate_3"]);
      new_letter["size_v2"] = map(percent, 50, 100, 0, newObj["size_v2"]);
    }


    if (percent < 80) {
     
  
      new_letter["x_4"] = map(percent, 0, 79, oldObj["x_4"], 0);
      new_letter["y_4"] = map(percent, 0, 79, oldObj["y_4"], 0);
      new_letter["rotate_2"] = map(percent, 0, 79, oldObj["arotate_2"], 0);
      new_letter["size_4"] = map(percent, 0, 79, oldObj["size4"], 0);
  
   
    } else {

   
      new_letter["x_4"] = map(percent, 80, 100, 0, newObj["x_4"]);
      new_letter["y_4"] = map(percent, 80, 100, 0, newObj["y_4"]);
      new_letter["rotate_2"] = map(percent, 80, 100, 0, newObj["rotate_2"]);
      new_letter["size4"] = map(percent, 80, 100, 0, newObj["size4"]);
    }



  return new_letter;
}

var swapWords = [
  "FUTHARKY",
  "21RUNE12",
  "MYSTICAL",
  "TIMELESS",
  "WIZARDRY",
  "PECULIAR",
  "WITCHERY"



]
