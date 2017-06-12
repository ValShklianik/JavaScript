

var audio = document.getElementsByTagName('audio')[0];
console.log(audio);

var play = document.getElementById('play');
var count=1;
play.addEventListener('click',function(){
	if(count){
		audio.play();
		play.value="||";
		count=0;
	}else{
		audio.pause();
		play.value="►";
		count=1;
	}
});

var stop = document.getElementById('stop');
stop.addEventListener('click',function(){
	audio.pause();
	audio.currentTime=0;
	play.value="►";
})

var faster = document.getElementById('faster');
faster.addEventListener('click',function(){
	audio.playbackRate=2;
})

var slower = document.getElementById('slower');
slower.addEventListener('click',function(){
	audio.playbackRate=0.5;
})

var volume = document.getElementById('volume');
var x=1;
volume.addEventListener('click',function(){
	if(x){
		audio.muted=true;
		volume.value="-";
		x=0;
	}else{
		audio.muted=false;
		volume.value="♫";
		x=1;
	}
});


function sizePic() {
    range = document.getElementById("range").value;
   audio.volume=range/100;
}

var a =audio.duration;
var time = document.getElementById('time');
audio.addEventListener('loadedmetadata',function(){
	setInterval(function(){
time.innerHTML ="0:"+ Math.round(audio.currentTime)+"|"+ Math.round(audio.duration/60)+":"+"03";
		
	},1000)

});


setInterval(audioSlider,100);

function audioSlider(){
	var load = document.getElementById('load');
	var c = audio.currentTime/audio.duration*100;
		load.style.width=c*2+'px';
}




localStorage.getItem(audio.currentTime);

/*
var time=document.getElementById('time');
var tv=time.value;
tv.innerHTML =audio.currentTime;
*/