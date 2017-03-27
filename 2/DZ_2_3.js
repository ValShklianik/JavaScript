var n = prompt("Введите n: ");
var x = prompt("Введите x: ");

var arr = [];
var res = 0;

for(var i = 0; i <= n; i++){

	arr[i] = prompt("Введите а "+ i);
	res = res + arr[i]*Math.pow(x, i);
	
}
console.log("Результат вычисления= " + res);
