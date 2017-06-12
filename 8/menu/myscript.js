var li=document.getElementsByTagName('li');
for (var i = 0; i < li.length; i++) {
	li[i].addEventListener('click',function(e){
		e.stopPropagation;

		var arr=this.parentNode.children;
		for (var i = 0; i < arr.length; i++) {
			if(arr[i].classList.contains('active')){
				arr[i].classList.remove('active')

			}
			 arr1=this.children[0].children
		}
		this.classList.toggle('active');

	})
};
