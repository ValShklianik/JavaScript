function iframe() {
	editor.document.designMode = "on";
}

function bold(){
	editor.document.execCommand('bold', false, null);
}

function italic(){
	editor.document.execCommand('italic', false, null);
}

function underline(){
	editor.document.execCommand('underline', false, null);
}

function fontsize(){
	var size = prompt("enter a size 1-7");
	editor.document.execCommand('fontsize', false,size);
}

function fontcolor(){
	var color = prompt("enter a color");
	editor.document.execCommand('forecolor', false, color);
}

function highlight(){
	editor.document.execCommand('backcolor', false, "yellow");
}

function link(){
	var link = prompt("enter a link")
	editor.document.execCommand('createlink', false, link);
}

function unlink(){
	editor.document.execCommand('unlink', false, null);
}
function InsertUnorderedList(){
	editor.document.execCommand('InsertUnorderedList', false, null);
}
function indent(){
	editor.document.execCommand('indent', false, null);
}
function outdent(){
	editor.document.execCommand('outdent', false, null);
}
function inserthorizontalrule(){
	editor.document.execCommand('inserthorizontalrule', false, null);
}

function justifyright(){
	editor.document.execCommand('justifyright', false, null);
}

function juitifyLeft(){
	editor.document.execCommand('justifyleft', false, null);
}

function justifycenter(){
	editor.document.execCommand('justifycenter', false, null);
}

function insertparagraph(){
	editor.document.execCommand('insertparagraph', false, null);
}

function fontname(){
	var font = prompt('enter a font');
	editor.document.execCommand('fontname', false, font);
}


