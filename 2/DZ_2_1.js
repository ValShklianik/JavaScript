/*обаратиться к каждому элементу массива 
и рандомно его заполнить числами умнож от с на р, среднее ар, отсортировать*/
var n = Number(prompt("введите кол-во элементов массива"));
var s = Number(prompt("введите значения элементов"));
var p = Number(prompt("ведите процент отклонения"));
var p = p/100;
var sum = 0;
var arr = [];
var avg = 0;

for (var i = 0; i < n; i++) {
	arr[i] = Math.random()*((s + s * p) - (s - s * p) + 1) + (s - s * p);
	console.log(arr[i]);
}


for (i = 0; i <= n; i++) {
            avg = avg + arr[i];
        }

 avg = avg / arr.length;

console.log("среднее арифметическое:" + avg);



function compareNumbers(a, b) {
  return a - b;
}

console.log('Сортировка:', arr.sort(compareNumbers));