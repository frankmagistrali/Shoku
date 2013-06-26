
HexWithCircle.prototype = new fabric.Polygon(getPoints(0,0, 50), {left: 20, top:20, fill:"black"});

function HexWithCircle(x, y, size, fillColor){
  
    this.defaultColor = fillColor;
    this.containsPiece = null;

    this.left = x;
    this.top = y;
    this.fill = fillColor;
    this.lockScalingX = this.lockScalingY = true;
	this.hasControls = this.hasBorders = false;
	this.lockMovementX = this.lockMovementY = true;
	
	//this.on('selected', function() {
		//this.fill = "black";
	  //console.log('selected a rectangle');
	//});
	
	
	
	
}

HexWithCircle.prototype.setSelected = function(){
	
}
HexWithCircle.prototype.setSelected = function(piece){
	if(piece != null){
		
		//piece.left = this.left;
		//piece.top = this.top;
		this.containsPiece = piece;
	}else{
		this.containsPiece = null;
	}
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
