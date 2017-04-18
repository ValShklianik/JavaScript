var block = document.querySelector(".block");

addEventListener("scroll", function(){
	if(this.scrollY < 7000 && this.scrollY > 3000)
		{
			block.style.position ="fixed";
			block.style.top = 0+"px";
			block.style.display = "block";

		}

	if(this.scrollY > 7000)
	{
		block.style.top = 3000+"px";
		block.style.display = "block";
	}

	(this.scrollY < 3000) ? block.style.top = 7000+"px" : false;

})