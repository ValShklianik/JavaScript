var countries = [];
countries[0] = {
	name: "Беларусь",
	flag: "bel.jpg",
	population: 9466000,
	code: "+375"
}
countries[1] = {
	name: "Россия",
	flag: "ros.jpg",
	population: 143500000,
	code: "+7"
}
countries[2] = {
	name: "Черногория",
	flag: "mont.jpg",
	population: 552000,
	code: "+382"
}
countries[3] = {
	name: "Польша",
	flag: "pol.jpg",
	population: 38530000,
	code: "+48"
}
countries[4] = {
	name: "Ватикан",
	flag: "vat.jpg",
	population: 800,
	code: "+379"
}
countries[5] = {
	name: "Япония",
	flag: "jap.jpg",
	population: 126910000,
	code: "+81"
}
countries[6] = {
	name: "Зимбабве",
	flag: "zim.jpg",
	population: 8991870,
	code: "+263"
}


var table = document.createElement('table');
var thead = document.createElement('thead');
var tr = document.createElement('tr');
	for(var i = 0; i <=4; i++){
		var th = document.createElement('th');
		switch(i){
			case 0: th.innerHTML = "Флаг";
				break;
			case 1: th.innerHTML = "Страна";
				break;
			case 2: th.innerHTML = "Население";
				break
			case 3: th.innerHTML = "Телефонный код";	
				break;
		}
		tr.appendChild(th);
	}
thead.appendChild(tr);
table.appendChild(thead);




var tbody = document.createElement('tbody');
	for(var i = 0; i <=6; i++){
		tr = document.createElement('tr');
			for(var j = 0; j <=4; j++){
				var td = document.createElement('td');
				switch(j){
					case 0: td.innerHTML = "<img src =\"img/" + countries[i].flag + "\">";
						break;
					case 1: td.innerHTML = countries[i].name;
						break;	
					case 2: td.innerHTML = countries[i].population;
						break;	
					case 3: td.innerHTML = countries[i].code;
						break;		
				}	
				tr.appendChild(td);
			}
		tbody.appendChild(tr);	
	}
table.appendChild(tbody);
document.body.appendChild(table);