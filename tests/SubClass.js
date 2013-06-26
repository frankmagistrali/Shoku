

function SubClass(hat){
	
	myHat = hat;
	a = 3;
	b = "woo!"
	c = true;
	SubClass.prototype = new BaseClass(a, b, c);
//	name = "blah";
	//x = 3;
	//truthiness = false;
}

SubClass.prototype = new BaseClass();
SubClass.prototype.constructor = SubClass;

