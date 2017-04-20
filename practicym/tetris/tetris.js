var table = document.getElementById('table').children[0];
var i = 0;
var key = [];
console.log(table.firstElementChild);

function createRow() {
	var tr = document.createElement('tr');
	var td =null;
	for(var i=0; i<10; i++ ){
		td = document.createElement('td');
		if(Math.random()*10 >6){
	td.style.backgroundColor='black';
	} else td.style.backgroundColor='white';
	tr.appendChild(td);
	}
	return tr;
}

var i = setInterval(function() {
   table.insertBefore(createRow(), table.firstElementChild);
   table.removeChild(table.children[9]);
}, 3000);


var trP = document.createElement('tr');
var player = document.createElement('td');
for(var i = 0; i<=8; i++){
	var td= document.createElement('td');
trP.appendChild(td);
}
player.style.backgroundColor='grey';
trP.appendChild(player);
table.appendChild(trP);






document.addEventListener("keydown", function(e){
	if(e.keyCode == 39 && player.nextSibling!=undefined){
	 player = player.nextSibling;
	 player.style.backgroundColor = 'grey';
	 if(player.previousSibling!=undefined){
	 player.previousSibling.style.backgroundColor = 'white';
	} else player.nextSibling.style.backgroundColor = 'white';

	}
});

// document.addEventListener("keyup", function(e){
// 	 if(player.nextSibling!=undefined){
// 	 	player.nextSibling.style.backgroundColor = 'white';
// 	 } else player.previousSibling.style.backgroundColor = 'white';

// 	 if(player.previousSibling!=undefined){
// 	 player.previousSibling.style.backgroundColor = 'white';
// 	} else player.nextSibling.style.backgroundColor = 'white';
// });


document.addEventListener("keydown", function(e){
	if(e.keyCode == 37 && player.previousSibling!=undefined){
	player = player.previousSibling;
	 player.style.backgroundColor = 'grey';
	}
	if(player.nextSibling!=undefined){
	 	player.nextSibling.style.backgroundColor = 'white';
	 } else player.previousSibling.style.backgroundColor = 'white';
});






var score = 0;
var scorerem = 0;
//score.classList.add('score');
document.addEventListener("keydown", function(e) {
		var index = Number(player.cellIndex);
	if(e.keyCode == 32) {
	score++;
		
		for(i=0 ;i<=9 ;i++ ){
			if(table.rows[i].cells[index].style.backgroundColor == 'white'  ){
				var a = i;
			}
		}		


		var count = 0;
		
			table.rows[a].cells[index].style.backgroundColor = 'black';
			for(i=0; i<=9; i++){
				if(table.rows[a].cells[i].style.backgroundColor == 'black'){
					count++;
					var x= a;
				} else break;
				if(count == 9){
					var rem = table.removeChild(table.children[x]);
					 table.insertBefore(createRow(), table.firstElementChild);
					scorerem++;
				}	
			}
			for(var z=0; z<10; z++){
			if(table.rows[8].cells[z].style.backgroundColor == 'black'){
				alert("gameover.kek");
				}
			}
	};
	var sc = document.getElementById('score');
	var screm = document.getElementById('scorerem');
    sc.innerHTML= 'кол-во  выстрелов:' + score;
    screm.innerHTML= 'кол-во  удаленных строк:' + scorerem;
});








	