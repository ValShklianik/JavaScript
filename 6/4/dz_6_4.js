var field = document.getElementById("field");
var operation = "";

var num1 = document.getElementById("1").addEventListener("click", function(){
	field.value += "1";
})

var num2 = document.getElementById("2").addEventListener("click", function(){
	field.value += "2";
})

var num3 = document.getElementById("3").addEventListener("click", function(){
	field.value += "3";
})

var num4 = document.getElementById("4").addEventListener("click", function(){
	field.value += "4";
})

var num5 = document.getElementById("5").addEventListener("click", function(){
	field.value += "5";
})

var num6 = document.getElementById("6").addEventListener("click", function(){
	field.value += "6";
})

var num7 = document.getElementById("7").addEventListener("click", function(){
	field.value += "7";
})

var num8 = document.getElementById("8").addEventListener("click", function(){
	field.value += "8";
})

var num9 = document.getElementById("9").addEventListener("click", function(){
	field.value += "9";
})

var num0 = document.getElementById("0").addEventListener("click", function(){
	field.value += "0";
})

var dot = document.getElementById("dot").addEventListener("click", function	(){
	if(!field.value.includes(".")){
		field.value +=".";
	} 
})

var n1 = 0, n2 = 0;

var sum = document.getElementById("sum").addEventListener("click", function	(){
	n1 = Number(field.value);
	field.value = "";
	operation = "+";
})

var diff = document.getElementById("diff").addEventListener("click", function	(){
	n1 = Number(field.value);
	field.value = "";
	operation = "-";
})

var mult = document.getElementById("mult").addEventListener("click", function	(){
	n1 = Number(field.value);
	field.value = "";
	operation = "*";
})

var divv = document.getElementById("divv").addEventListener("click", function	(){
	n1 = Number(field.value);
	field.value = "";
	operation = "/";
})

var res = document.getElementById("res").addEventListener("click", function	(){
	n2 = Number(field.value);
	field.value = "";
	switch(operation){
		case "+": field.value = n1 + n2; break;
		case "*": field.value = n1 * n2; break;
		case "-": field.value = n1 - n2; break;
		case "/": field.value = n1 / n2; break;

	}
})
var M = 0;
var MR = document.getElementById("mr").addEventListener("click", function(){
	field.value = M;
})

