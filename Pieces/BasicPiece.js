BasicPiece.prototype = new fabric.Circle({radius: 20, fill: 'green', left: 750, top: 750});

function BasicPiece(x, y, size, fillColor){
  
    this.defaultColor = fillColor;
    this.containedBy = null;

    this.left = x;
    this.top = y;
    this.fill = fillColor;
    this.lockScalingX = this.lockScalingY = true;
	this.hasControls = this.hasBorders = false;
	this.lockMovementX = this.lockMovementY = true;
	this.type = "BasicPiece";
	//this.selectable = false;
}


BasicPiece.prototype.setSelected = function(){
	
}
BasicPiece.prototype.setSelected = function(hex){
	if(hex != null){
		// tell the previous containedBy hex that it doesn't have this piece anymore
		if(this.containedBy != null){
			this.containedBy.setSelected(null);
		}
		this.left = hex.left;
		this.top = hex.top;
		this.containedBy = hex;
		hex.setSelected(this);
	}else{
		this.containedBy = null;
		this.visible = false;
		this.selectable = false;
		this.active = false;
	}
}
	
	

