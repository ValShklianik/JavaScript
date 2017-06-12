var createStartArray = function() { 
var arr = [ 
[0, 0, 0], 
[1, 0, 1], 
[1, 0, 0], 
[0, 1, 0], 
[1, 0, 0], 
[0, 2, 0] 
]; 
return arr; 
} 

var createTmpArray = function(arr) { 

var N = arr.length; 
var tmpField = new Array(N); 

for (var i = 0; i < N; i++) { 
tmpField[i] = new Array(3); 
} 

for (var i = 0; i < N; i++) { 
for (var j = 0; j < 3; j++) { 
if (arr[i][j] == 1) tmpField[i][j] = -1; 
if (arr[i][j] == 0) tmpField[i][j] = 0; 
if (arr[i][j] == 2) tmpField[i][j] = 2; 
} 
} 
return tmpField; 

} 

var findPlayer = function(arr) { 
var N = arr.length; 
for (var i = 0; i < N; i++) { 
for (var j = 0; j < 3; j++) { 
if (arr[i][j] == 2) return { 
x: i, 
y: j 
} 
} 
} 
return "player not found"; 
} 

var field = createStartArray(); 
var tmpField = createTmpArray(field); 

var Queue = []; 
var from = findPlayer(tmpField); 

var to = { 
x: 0, 
y: 0 
}; 

var BFS = function(from) { 
var neighbours = []; 
if (tmpField[from.x][from.y+1] == 0) { 
neighbours.push({ 
x: from.x, 
y: from.y+1 
}); 
tmpField[from.x][from.y+1] = 3; 
} 
if (tmpField[from.x][from.y-1] == 0) { 
neighbours.push({ 
x: from.x, 
y: from.y-1 
}); 
tmpField[from.x][from.y-1] = 3; 
} 
if (from.x != 0) { 
if (tmpField[from.x-1][from.y] == 0) { 
neighbours.push({ 
x: from.x-1, 
y: from.y 
}); 
tmpField[from.x-1][from.y] = 3; 
} 
} 
if (from.x != 5) { 
if (tmpField[from.x+1][from.y] == 0) { 
neighbours.push({ 
x: from.x+1, 
y: from.y 
}); 
tmpField[from.x+1][from.y] = 3; 
} 
} 
for (var i in neighbours) { 
Queue.push(neighbours[i]); 
if (neighbours[i].x == to.x && neighbours[i].y == to.y) return true; 
} 

if (Queue.length == 0) { 
return false; 
}; 
return BFS(Queue.shift()); 
} 

console.log(BFS(from));