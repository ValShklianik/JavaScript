var n = 1; 
function fnct(n)
{
 	return n*n - 2*n;
 	console.log(n);
}
var I = setInterval(function () 
{
	scrollBy(0, fnct(n));
		if(scrollY + innerHeight >= 100000 - 30)
			{
				clearInterval(I);
			}
	n += 0.01;
}, 	n);