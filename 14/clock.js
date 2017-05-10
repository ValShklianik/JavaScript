var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
	ctx.strokeStyle= "red";


ctx.beginPath();
ctx.arc(200, 200, 150, 0, 2 * Math.PI);
ctx.font = "30px Arial";
var str ="12";
ctx.strokeText(str,180,80);
var str ="11";
ctx.strokeText(str,120,100);
var str ="10";
ctx.strokeText(str,80,150);
var str ="6";
ctx.strokeText(str,190,325);
var str ="5";
ctx.strokeText(str,250,310);
var str ="4";
ctx.strokeText(str,290,270);
var str ="3";
ctx.strokeText(str,310,215);
var str ="2";
ctx.strokeText(str,290,150);
var str ="1";
ctx.strokeText(str,250,100);
var str ="9";
ctx.strokeText(str,70,215);
var str ="8";
ctx.strokeText(str,80,270);
var str ="7";
ctx.strokeText(str,130,310);
ctx.stroke(); 
ctx.translate(200,200);
ctx.lineWidth = 3;


var Oclock = function(){

var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
var time = hour*3600 + minute*60 + second;
	var koordHour =time/86400;
	
	ctx.save();
	ctx.rotate(4*Math.PI*koordHour)
	ctx.moveTo(0, 0)
	ctx.lineTo(0, -70)
	ctx.restore();
	
	var koordMin = minute/60;
	ctx.rotate(2*Math.PI*koordMin)
	ctx.moveTo(0, 0)
	ctx.lineTo(0, -100)
	ctx.rotate(-2*Math.PI*koordMin)

	var koordSec = second/60;
	ctx.rotate(2*Math.PI*koordSec);
	ctx.moveTo(0,0)
	ctx.lineTo(0,-120);
	ctx.moveTo(0,0);

	ctx.rotate(-2*Math.PI*koordSec)
	ctx.stroke();
  }	

window.onload = function() {
   	setInterval(Oclock, 1000);
}

ctx.stroke();
ctx.closePath();
