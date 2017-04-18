document.addEventListener("contextmenu", function(event) {
	event.preventDefault();  //действ по умолчанию вып-ся не будет
}); 



var menu = document.getElementById('menu');
menu.classList.add('menu');

function showMenu(x, y){
menu.style.left = x + 'px';
menu.style.top = y + 'px';
menu.classList.add('show-menu');
}


function onContextMenu(e){
e.preventDefault();
showMenu(e.pageX, e.pageY);
addEventListener("mousedown", function(e){
		menu.classList.remove('show-menu');
});
}



document.addEventListener('contextmenu', onContextMenu);
