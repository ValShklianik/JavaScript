var interv = 0, i = 3;


function scroll(interv, i){
  return Math.pow(interv / i, 3);
}


var time = setInterval(function(){
 	window.scrollBy(0,scroll(interv,i));
 	 	interv += 0.1;
 	if ((window.innerHeight+window.scrollY) >=10000){
 		clearInterval(time); 
 	}
},50)