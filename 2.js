var a = Number(prompt("enter a"));
var b = Number(prompt("enter b"));
var operation = (prompt("enter operation"));

switch (operation) {
    case "+":
        alert (a+b);
    break;

    case "-":
        alert (a-b);
    break;

    case "*":
        alert (a*b);
    break;

    case "/":
        alert (a/b);
    break;
}