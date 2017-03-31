var names = ["Den","Sasha","Nadya","Masha","Lera","Kolya",
			"Kirill","Artsiom","Alina","Kekosik","Lolchik",
			"Pavel","Sveta","Ivan","Evgenyi", "Dmitry", "Vasil", 
			"Makar", "Andrew", "Diana", "Olga", "Karina", "Maks",
			"Kesha","Alex","Kris","Sonya","Jenya", "Ryslan",
			"Vitaly","Tatsiana","Sasha","Nadya","Masha","Lera","Kolya",
			"Kirill","Artsiom","Alina","Kekosik","Lolchik",
			"Pavel","Sveta","Ivan","Evgenyi", "Dmitry", "Vasil", 
			"Makar", "Andrew", "Diana", "Olga", "Karina", "Maks",
			"Kesha","Alex","Kris","Sonya","Jenya", "Ryslan",
			"Vitaly"];
var numFl = 20;


var house={
 	humans: [], 
 	flats: [],
 	addHuman: function(name, number){
 		
 		if(typeof "undefined"){
 			 var name = prompt("Введите имя нового жильца: ");
 			 var number = prompt("Введите № кв. для нового жильца: ");
 		}
 		
 		if(number && (number <= this.flats.length)){
	 		this.humans.push({name: name, flatNumber: number});
	 		this.flats[number-1].humans.push(name);
	 	}
	 	else{
	 		console.error("Неверный номер :( ");
	 	}
 	},
 	cleanFlat: function(number){
 		if(typeof "undefined"){
 			var number = prompt("Введите № кв. для очистки: ");
 		}
 		if(number && (number <= this.flats.length)){
	 		 this.flats[number-1].humans.length = 0;
	 		 for(var i = 0; i < this.humans.length; i++){
	 		 	if(this.humans[i].flatNumber == number){
	 		 		this.humans.splice(i, 1);
	 		 		i--;
	 		 	}
	 		 }
 		}
 		else{
 			console.error("Неверный номер :(");
 		}

 	},
 	ListOfhumans: function(number){
 		if(typeof  "undefined"){
 			var number = parseInt(prompt("Введите № кв, чтобы увидеть её жильцов: "));
 		}
 		if(number && (number <= this.flats.length)){
 			if(this.flats[number-1].humans.length){
 				console.log("Жильцы кв №" + number + ": " + this.flats[number-1].humans.join(", "));
 			}
 			else{
 				console.log("В кв №" + number + " никого");
 			}
	 	}	
	 	else{
	 		console.error("Неверный номер :(");
	 	}
 	},
 	calculateCost: function(sum){
 		if(typeof "undefined"){
 			var sum = parseFloat(prompt("Введите сумму коммунальных: "));
 		}
 		if(parseFloat(sum) && (sum > 0)){
	 		var totalsqr=0;
	 		var listOfCost = [];

	 		this.flats.forEach(function(e){
	 			if(e.humans.length){
	 				totalsqr +=e.sqr;
	 			}
	 		});
	 		this.flats.forEach(function(e){
	 			if(e.humans.length){
	 				var cost = sum / totalsqr * e.sqr / e.humans.length;
	 				e.humans.forEach(function(c){
	 					listOfCost.push({name: c, cost: cost});
	 				})
	 				
	 			}
	 		})
	 		listOfCost.forEach(function(e){
	 			console.log(""+ e.name + " : " + e.cost.toFixed(3));
	 		})
		}
		else{
			console.error("Неверная сумма :(");
		}
 	}
}

for(var i = 0; i < numFl; i++){
	house.flats[i] = {
		sqr: Math.floor(Math.random()*100+100),
		humans: []
	}
}
for(var i=0; i<names.length; i++){
	house.humans[i] = {
		name: names[i],
		flatNumber: Math.floor(Math.random()*(numFl)+1)
	}
	house.flats[house.humans[i].flatNumber-1].humans.push(names[i]) ;
}


house.ListOfhumans();
console.log("Количество жильцов в доме: " + house.humans.length);
house.addHuman();
house.ListOfhumans();
house.cleanFlat();
house.ListOfhumans();
house.calculateCost();

