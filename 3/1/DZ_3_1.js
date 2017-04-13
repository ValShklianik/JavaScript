var names = ["Den","Sasha","Nadya","Masha","Lera","Kolya",
			"Kirill","Artsiom","Alina","Kekosik","Lolchik",
			"Pavel","Sveta","Ivan","Evgenyi", "Dmitry", "Vasil", 
			"Makar", "Andrew", "Diana", "Olga", "Karina", "Maks",
			"Kesha","Alex","Kris","Sonya","Jenya", "Ryslan",
			"Vitaly","Tatsiana"];
var city = ["Minsk","Gomel","Grodno","Pinsk","Brest","Mogilev",
			"Moskva","Vitebsk","Mir","Borisov", "London", "San-Andreas", 
			"Chicago", "New-York", "Zaporojie", "Krakow"];
var humans = [];

function rand(a,b){
	return Math.round(Math.random()*(b-a)+a);
}

function Human(name,city,age) {
	this.name = name;
	this.city = city;
	this.age = age;
};


for (var i = 0; i<=names.length; i++){
		humans[i] = new Human(names[rand(0,names.length-1)],city[rand(0,city.length-1)],Math.floor(Math.random()*100));
	}

function srt(property){
	return function(a,b){
		return b[property]-a[property];
	}
}
	
console.log(humans.sort(srt("age")));

function onHtml(humans) {
    for (i = 0; i < names.length; i++) {
        var newLi = document.createElement('li');
        newLi.innerHTML = "Name: "+humans[i].name+". City: "+humans[i].city+". Age: "+humans[i].age+'</p></p>'
        list.appendChild(newLi);
    }
}
onHtml(humans);