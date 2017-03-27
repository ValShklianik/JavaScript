var date = new Date();
var end;

console.log(date);

var hrs = 24 - date.getHours();
var min = 60 - date.getMinutes();
var sec = 60 - date.getSeconds();

console.log("До конца дня еще: " + hrs + " часов " + min + " минуток " + sec + " секундок "); 