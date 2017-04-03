function scr(y){
	return Math.pow(y, 2);
}

var y = 32;
var scroll = setInterval(function(){
	window.scrollBy(0, scr(y));
	y--;	
}, 200)