var txt = 0;
var comments = 0;
var atrib = 0;

var Nodes = function(e){
	console.log(e);

	if(e.nodeType == 3) txt++;
	if(e.nodeType == 8) comments++;
	if(e.nodeType == 1) atrib++;

	if(e.childNodes.length){
		for (var i = 0; i < e.childNodes.length; i++) {
			Nodes(e.childNodes[i]);
		}
	}
}
Nodes(document);
console.log("тегов: " + atrib + ", комментариев: " + comments + ", текстовых узлов: " + txt);
