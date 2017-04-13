var deshfr = document.getElementById("deshfr");
var btn_s = document.getElementById("btn_s");
btn_s.addEventListener("click", function(){
    var res = "";
    var value = shfr.value;
    
    for (var i = 0; i < value.length; i++){
        var char = value.charCodeAt(i);
        var charShfr = char + 2;
        res+= String.fromCharCode(charShfr);
   }
    	deshfr.value = res;
});



var shfr = document.getElementById("shfr");
var btn_d = document.getElementById("btn_d");
btn_d.addEventListener("click", function(){
    var res = "";
    var value = deshfr.value;
    
    for (var i = 0; i < value.length; i++){
        var char = value.charCodeAt(i);
        var charShfr = char - 2;
        res+= String.fromCharCode(charShfr);
   }
    	shfr.value = res;
})