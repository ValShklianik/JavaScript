function Yscroll(){
	var wrap = document.getElementById('wrap');
	var contentHeight = wrap.offesHeight;
	var yOffset = window.pageYOffset;
	var y = yOffset + window.innerHeight;
	if(y<=contentHeight){
		wrap.innerHTML += '<div class="newData"></div>';

	}
	var status = document.getElementById('status');
	status.innerHTML = contentHeight+" | " + y;
}
window.onsroll = Yscroll;

