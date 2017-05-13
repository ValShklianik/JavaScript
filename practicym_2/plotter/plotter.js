var canvas = document.getElementById('canvas');
var ctx	 = canvas.getContext('2d');  
ctx.translate(500,400);

function drawSystCoord(){
ctx.lineWidth=4;
ctx.strokeStyle= "red";
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(0,350);
ctx.lineTo(6,340);
ctx.lineTo(0,350);
ctx.lineTo(-6,340);
ctx.moveTo(0,0);
ctx.lineTo(0,-350);
ctx.lineTo(6,-340);
ctx.lineTo(0,-350);
ctx.lineTo(-6,-340);
ctx.moveTo(0,0);
ctx.lineTo(450,0);
ctx.lineTo(440,6);
ctx.lineTo(450,0);
ctx.lineTo(440,-6);
ctx.moveTo(0,0);
ctx.lineTo(-450,0);
ctx.lineTo(-440,6);
ctx.lineTo(-450,0);
ctx.lineTo(-440,-6);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.lineWidth=0.3;
ctx.strokeStyle= "black";
//vertical lines
var x = -450;
var y = 400;
	for(var i=0; i<20; i++ ){
		ctx.moveTo(x,y);
		ctx.lineTo(x,y*(-1));
		ctx.moveTo(x,y);
		x+=50;
		y+=50;
	}
//gorizontal lines
x = -450;
y = 400;
		for(var i=0; i<20; i++ ){
		ctx.moveTo(x,y);
		ctx.lineTo(x*(-1),y);		
		ctx.moveTo(x,y);		
		x-=50;
		y-=50;
		}	

ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.strokeStyle= "red";
ctx.fillStyle= "red";

//points
	var radius=4;
	x=-400;
	y=0;
	for(var i=0; i<17; i++){
	ctx.arc(x,y,radius,0, Math.PI*2);
	ctx.fill();
	x+=50;
	}

ctx.closePath();
ctx.beginPath();
ctx.strokeStyle= "red";
ctx.fillStyle= "red";
	var r=4;
	var a=0;
	var b=-300;
	for(var i=0; i<14; i++){
	ctx.arc(a,b,r,0, Math.PI*2);
	ctx.fill();
	b+=50;
	}
ctx.strokeStyle= "black";
ctx.fillStyle= "black";
	ctx.font = "15px Arial";
	 x=-453;
	 y=20;
	var numbers=["",-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9];
	for(var i =0; i<18; i++){
		ctx.fillText(numbers[i],x,y);
		ctx.stroke;
		x+=50;
	}
ctx.closePath();
ctx.beginPath();
ctx.strokeStyle= "black";
ctx.fillStyle= "black";
	ctx.font = "15px Arial";
	var x=10;
	var y=-345;
	var numbers=["",6,5,4,3,2,1,"",-1,-2,-3,-4,-5,-6,-7];
	for(var i =0; i<14; i++){
		ctx.fillText(numbers[i],x,y);
		ctx.stroke;
		y+=50;
	}
ctx.save();
};
drawSystCoord();

var button = document.getElementById('button');
	button.addEventListener('click', drawLine);
	
function drawLine(){
	ctx.restore();
	ctx.clearRect(-500,-400,1000,800);
	drawSystCoord();
	var a = document.getElementById('a');
	var b = document.getElementById('b')

	var coofA = Number(a.value);
	var coofB = Number(b.value);
	ctx.lineWidth=3;
	
	var x=-7;
	var y=0;
	var dx=1;
	for(var i=0; i<19; i++){
		y=coofA*(x)+coofB;
		ctx.lineTo(x*(50),y*(-50));
		ctx.stroke();
		x+=dx;
	}
};
var button = document.getElementById('sqr');
	button.addEventListener('click', drawSqr)
		
function drawSqr(){

	ctx.restore();
	ctx.clearRect(-500,-400,1000,800);
	drawSystCoord();
	ctx.lineWidth=3;
	var x=-7;var y=0;var dx=0.1;
	for(var i=0; i<100; i++){
		y=x*x
		ctx.lineTo(x*(50),y*(-50));
		ctx.stroke();
		x+=dx;
	}
};


var button = document.getElementById('cub');
	button.addEventListener('click', drawCub);

function drawCub(){

	ctx.restore();
	ctx.clearRect(-500,-400,1000,800);
	drawSystCoord();	
	ctx.lineWidth=3;	
	var x=-7;var y=0;var dx=0.1;
	for(var i=0; i<100; i++){
		y=x*x*x;
		ctx.lineTo(x*(50),y*(-50));
		ctx.stroke();
		x+=dx;
	}
};


var button = document.getElementById('sin');
	button.addEventListener('click', drawSin);

function drawSin(){

	ctx.restore();
	ctx.clearRect(-500,-400,1000,800);
	drawSystCoord();
	var a = document.getElementById('sinA');
	var b = document.getElementById('sinB')

	var coofA = Number(a.value);
	var coofB = Number(b.value);
	ctx.lineWidth=3;	
	var x=-10	;
	var y=0;
	var dx=1/10;
	for(var i=0; i<200; i++){
		y=coofA*Math.sin(coofB*x);
		ctx.lineTo(x*(50),y*(-50));
		ctx.stroke();
		x+=dx;
	}

}


var button = document.getElementById('cos');
	button.addEventListener('click', drawCos);

function drawCos(){

	ctx.restore();
	ctx.clearRect(-500,-400,1000,800);
	drawSystCoord();
	var a = document.getElementById('cosA');
	var b = document.getElementById('cosB')

	var coofA = Number(a.value);
	var coofB = Number(b.value);
	ctx.lineWidth=3;	
	var x=-10	;
	var y=0;
	var dx=1/10;
	for(var i=0; i<200; i++){
		y=coofA*Math.cos(coofB*x);
		ctx.lineTo(x*(50),y*(-50));
		ctx.stroke();
		x+=dx;
	}

};

var button = document.getElementById('tg');
	button.addEventListener('click', drawTg);


function drawTg(){

	ctx.restore();
	ctx.clearRect(-500,-400,1000,800);
	drawSystCoord();
	var a = document.getElementById('tgA');
	var b = document.getElementById('tgB')

	var coofA = Number(a.value);
	var coofB = Number(b.value);
	ctx.lineWidth=2;	
	var x=-8	;
	var y=0;
	var dx=1/10;
	for(var i=0; i<200; i++){
		y=coofA*(Math.sin(coofB*x)/Math.cos(coofB*x));
		ctx.lineTo(x*(50),y*(-50));
		ctx.stroke();
		x+=dx;
	}

}


var button = document.getElementById('ctg');
	button.addEventListener('click', drawCtg);


function drawCtg(){

	ctx.restore();

	ctx.clearRect(-500,-400,1000,800);
	drawSystCoord();
	var a = document.getElementById('ctgA');
	var b = document.getElementById('ctgB')

	var coofA = Number(a.value);
	var coofB = Number(b.value);
	ctx.lineWidth=2;	
	var x=0;	;
	var y=0;
	var dx=1/10;
	for(var i=0; i<100; i++){
		y=coofA*(Math.cos(coofB*x)/Math.sin(coofB*x));
		ctx.lineTo(x*(50),y*(-50));
		ctx.stroke();
		x+=dx;
	}

};


var button = document.getElementById('log');
	button.addEventListener('click', drawLog);

function drawLog(){

	ctx.restore();
	ctx.clearRect(-500,-400,1000,800);
	drawSystCoord();
	var a = document.getElementById('logA');
	var b = document.getElementById('logB')

	var coofA = Number(a.value);
	var coofB = Number(b.value);
	ctx.lineWidth=3;	
	var x=0;
	var y=0;
	var dx=1/10;
	for(var i=0; i<200; i++){
		y=Math.log(coofB*x)/Math.log(coofA);
		ctx.lineTo(x*(50),y*(-50));
		ctx.stroke();
		x+=dx;
	}

};


var button = document.getElementById('fun');
	button.addEventListener('click', drawFun);


function drawFun(){

	ctx.restore();

	ctx.clearRect(-500,-400,1000,800);
	drawSystCoord();
	var a = document.getElementById('funA');

	var coofA = Number(a.value);
	ctx.lineWidth=2;	
	var x=-20	;
	var y=0;
	var dx=1/10;
	for(var i=0; i<1000; i++){
		y=Math.pow(coofA,x);
		ctx.lineTo(x*(50),y*(-50));
		ctx.stroke();
		x+=dx;
	}

};



var button = document.getElementById('ellips');
	button.addEventListener('click', drawEllips);

function drawEllips(){

	ctx.restore();
	ctx.clearRect(-500,-400,1000,800);
	drawSystCoord();
	var a = document.getElementById('elA');
	var b = document.getElementById('elB')

	var coofA = Number(a.value);
	var coofB = Number(b.value);
	ctx.lineWidth=3;	
	var x=0;
	var y=0;
		ctx.ellipse(x, y, coofA*50, coofB*50, 0 * Math.PI/180, 0, 2 * Math.PI);
		ctx.stroke();

};



var button = document.getElementById('gip');
	button.addEventListener('click', drawGiperbola);


function drawGiperbola(){
	
	ctx.restore();

	ctx.clearRect(-500,-400,1000,800);
	drawSystCoord();
	var a = document.getElementById('gipA');

	var coofA = Number(a.value);
	ctx.lineWidth=2;	
	var x=-40	;
	var y=0;
	var dx=1/10;
	var x2=0;
	var y2=0;
	for(var j=0; j<1000; j++){
		y2=coofA/x2;
		ctx.lineTo(x2*(50),y2*(-50));
		ctx.stroke();
		x2+=dx;
	}
	for(var i=0; i<1000; i++){
		y=coofA/x;
		ctx.lineTo(x*(50),y*(-50));
		ctx.stroke();
		x+=dx;
	}

};


var button = document.getElementById('sin2');
	button.addEventListener('click', draw);




function fun1(x) {
	var a = document.getElementById('sin2A');
	var b = document.getElementById('sin2B');

	var coofA = Number(a.value);
	var coofB = Number(b.value);
	return coofA*Math.sin(coofB*x);
}

function fun2(x) {

	var c = document.getElementById('sin3A');
	var d = document.getElementById('sin3B')

	var coofC = Number(c.value);
	var coofD = Number(d.value);

	return coofC*Math.sin(coofD*x);
}
function fun3(x) {

	var e = document.getElementById('sin4A');
	var f = document.getElementById('sin4B');

	var coofE = Number(e.value);
	var coofF = Number(f.value);
	return coofE*Math.sin(coofF*x);
}
function fun4(x) {
	var g = document.getElementById('sin5A');
	var h = document.getElementById('sin5B');

	var coofG = Number(g.value);
	var coofH = Number(h.value);


	return coofG*Math.sin(coofH*x);
}

function draw() {
 if (null==canvas || !canvas.getContext) return;

 var axes={}; 
 axes.x0 = .5 + .5*canvas.width;  // x0 pixels from left to x=0
 axes.y0 = .5 + .5*canvas.height; // y0 pixels from top to y=0
 axes.scale = 40;                 // 40 pixels from x=0 to x=1
 axes.doNegativeX = true;

 showAxes(ctx,axes);
 funGraph(ctx,axes,fun1,"rgb(11,153,11)",1); 
 funGraph(ctx,axes,fun2,"rgb(106,104,100)",2);
 funGraph(ctx,axes,fun3,"rgb(1,4,255)",3);
 funGraph(ctx,axes,fun4,"rgb(66,0,5)",4);
}

function funGraph (ctx,axes,func,color,thick) {
 var xx, yy, dx=4, x0=axes.x0, y0=axes.y0, scale=axes.scale;
 var iMax = Math.round((ctx.canvas.width-x0)/dx);
 var iMin = axes.doNegativeX ? Math.round(-x0/dx) : 0;
 ctx.beginPath();
 ctx.lineWidth = thick;
 ctx.strokeStyle = color;

 for (var i=iMin;i<=iMax;i++) {
  xx = dx*i; yy = scale*func(xx/scale);
  if (i==iMin) ctx.moveTo(x0+xx,y0-yy);
  else         ctx.lineTo(x0+xx,y0-yy);
 }
 ctx.stroke();
}

function showAxes(ctx,axes) {
	ctx.clearRect(-500,-400,1000,800);
	drawSystCoord();
	ctx.translate(-500,-400);
 var x0=axes.x0, w=ctx.canvas.width;
 var y0=axes.y0, h=ctx.canvas.height;
 var xmin = axes.doNegativeX ? 0 : x0;
 ctx.beginPath();
 ctx.strokeStyle = "rgb(128,128,128)"; 
 ctx.moveTo(xmin,y0); ctx.lineTo(w,y0);  // X axis
 ctx.moveTo(x0,0);    ctx.lineTo(x0,h);  // Y axis
 ctx.stroke();
}
