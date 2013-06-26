
#import fabric/all.min.js; 
var startPoints3 = [
			  {x: -50, y: 0},
			  {x: -25, y: -50-Math.sqrt(3/2)},
			  {x: 25, y: -50-Math.sqrt(3/2)},
			  {x: 50, y: 0},
			  {x: 25, y: 50-Math.sqrt(3/2)},
			  {x: -25, y: 50-Math.sqrt(3/2)}
			  
			];
			
function Hex(x:int, y:int, fill:String){
	var that = new fabric.Polygon(startPoints3,{ x, y});
	return that;
	
}
