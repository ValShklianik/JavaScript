

var video = document.getElementsByTagName('video')[0];
console.log(video);

var play = document.getElementById('play');
var count=1;
play.addEventListener('click',function(){
	if(count){
		video.play();
		play.value="||";
		count=0;
	}else{
		video.pause();
		play.value="►";
		count=1;
	}
});

var stop = document.getElementById('stop');
stop.addEventListener('click',function(){
	video.pause();
	video.currentTime=0;
	play.value="►";
})

var faster = document.getElementById('faster');
faster.addEventListener('click',function(){
	video.playbackRate=2;
})

var slower = document.getElementById('slower');
slower.addEventListener('click',function(){
	video.playbackRate=0.5;
})

var volume = document.getElementById('volume');
var x=1;
volume.addEventListener('click',function(){
	if(x){
		video.muted=true;
		volume.value="-";
		x=0;
	}else{
		video.muted=false;
		volume.value="♫";
		x=1;
	}
});


function sizePic() {
    range = document.getElementById("range").value;
   video.volume=range/100;
}

var a =video.duration;
var time = document.getElementById('time');
video.addEventListener('loadedmetadata',function(){
	setInterval(function(){
time.innerHTML ="0:"+ Math.round(video.currentTime)+"|"+ Math.round(video.duration/60)+":"+"27";
		
	},1000)

});


setInterval(videoSlider,100);

function videoSlider(){
	var load = document.getElementById('load');
	var c = video.currentTime/video.duration*100;
		load.style.width=c*2+'px';
}






/*
var time=document.getElementById('time');
var tv=time.value;
tv.innerHTML =video.currentTime;
*/