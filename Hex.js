

function Hex(x, y, size, fillColor){
		
	var that = new fabric.Polygon(getPoints(x, y, size),{ left:x, top:y, fill:fillColor});
	that.lockScalingX = that.lockScalingY = true;
	that.hasControls = that.hasBorders = false;
	return that;
	
}

function getPoints(xCenter, yCenter, size){
	var a = size/2;
	var b = size*(Math.sqrt(3)/2);
	var c = size;
	
		
	var points = [
		{x: -b, y: -a},
		{x: 0, y: -c},
		{x: b, y:-a},
		{x: b, y: a},
		{x: 0, y: c},
		{x: -b, y: a}];
		
	return points;
}

function include(url) {
  var s = document.createElement("script");
  s.setAttribute("type", "text/javascript");
  s.setAttribute("src", url);
  document.body.appendChild(s);
}
