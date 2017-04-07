var x = prompt("Enter x: ");
for(var i = 1; i <= x; i++){
	var tr = document.createElement("tr");
	for(var j = 1; j <= x; j++){
		var td = document.createElement("td");
			var mult = j * i;
			td.innerHTML=mult;
			tr.appendChild(td);
			if(mult == i*i)
				td.setAttribute("style", "color: red");
		}
table.appendChild(tr)
}