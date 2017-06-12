var block=document.getElementById('block');
window.addEventListener('scroll', function(){
	if(window.pageYOffset>1000 && window.pageYOffset<6000){
		block.classList.add('fixed');
	}	
	else{
		block.classList.remove('fixed')
	}
}
)


