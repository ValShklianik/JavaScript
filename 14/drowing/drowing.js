var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');  
 
var cnvWidth = canvas.width;
var cnvHeig = canvas.height;
console.log(cnvHeig);
console.log(cnvWidth);
 
var dragging = false;
ctx.lineWidth=2;

var drow = function(e){
	if(dragging	){
			ctx.lineTo(e.clientX,e.clientY);
			ctx.stroke();
			ctx.beginPath();
			ctx.fill();
			ctx.moveTo(e.clientX,e.clientY	);
	}
}

var eng =function(e){
	dragging=true;
	drow(e);
}
var diseng =function(){
	dragging=false;
	ctx.beginPath();
}

canvas.addEventListener('mousedown',eng);
canvas.addEventListener('mousemove',drow);
canvas.addEventListener('mouseup',diseng);
var button = document.getElementById('button');
button.addEventListener('click', function(){
	var str = canvas.toDataURL('image.png');
	window.open(str);

})