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
var city = ["Minsk","Gomel","Grodno","Pinsk","Brest","Mogilev",
			"Moskva","Vitebsk","Mir","Borisov", "London", "San-Andreas", 
			"Chicago", "New-York", "Zaporojie", "Krakow"];
var prod=[];
prod[0]={
	img:"Chair.png",
	name:"Стул"
}
prod[1]={
	img:"leks.jpg",
	name:"Лексус"
}
prod[3]={
	img:"fic.jpg",
	name:"Фикус"
}
prod[4]={
	img:"Pay.jpeg",
	name:"Паяльник"
}
prod[5]={
	img:"ckl.jpg",
	name:"Часы"
}
prod[6]={
	img:"sh.jpg",
	name:"Шалаш"
}
prod[7]={
	img:"zont.jpg",
	name:"Зонт"
}
prod[8]={
	img:"dog.jpg",
	name:"Странную собаку"
}
prod[9]={
	img:"bay.png",
	name:"Тележку"
}
var Func=setInterval(function(){
	var el=document.getElementById("products");
	var div=document.createElement("div");
	el.appendChild(div);
	var x=parseInt(Math.random()*10);


	var cont= "<img src=\"img/"+prod[x].img+"\">"+names[parseInt(Math.random()*names.length)]+"в городе "+city[parseInt(Math.random()*city.length)]+" купил "+prod[x].name +" "+ (parseInt(Math.random()*100))+" штук";
	div.innerHTML=cont;


	var button = document.createElement('button');
	button.setAttribute('type', 'button');
	button.innerText = 'X';
	div.appendChild(button);
	var fun = function(){
		this.parentNode.remove();
	}
	button.addEventListener("click", fun);	


},1000)
