//Declare the Color Object with our new keyword below here.
Const Color = new Object()
/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >= 0) && (rgb[1] <= 255);
  let blueworks = (rgb[2] >= 0) && (rgb[2] <= 255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
var rt = rgb[0]/255
rt = Math.Round(rt)*100
return rt
};

//greenIntensity
Color.greenIntensity = function(rgb){
var gt = rgb[1]/255
gt = Math.Round(rt)*100
return gt
};

//blueIntensity
Color.blueIntensity = function(rgb){
var gt = rgb[2]/255
bt = Math.Round(bt)*100
return bt

//brightness
Color.brightnessIntensity = function(rgb){
  let bright = (Color.blueIntensity(rgb)+Color.greenIntensity(rgb)+Color.redIntensity(rgb))/3;
  bright = Math.round(bright);
  return bright;
}
//complement
Color.complement = function(rgb)
{
  var comp=[]
  for(var i=0,i<3, i++)
  {
    comp.push(255-rgb[i])
  }
  return comp
};

Color.greyScale = function()
