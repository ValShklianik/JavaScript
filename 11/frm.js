var framework = {

	append: function(t,w){
		w.appendChild(t);
	},

	prepend: function(t,w){
		w.insertBefore(t, w.firstChild);
	},

	remove: function(t){
		t.remove();
	},

	create: function(s){
		return document.createElement(s);
	},

	replace: function(t,w){
		w.parentNode.replaceChild(w,t); //заменяет t(old) на w(new)
	},

	event: function(t,e,f){

		if(typeof t.attachEvent == "function")
		
			t.attachEvent('on' + e, f);
		
		else
			t.addEventListener(e, f);
	},

	unevent: function(t,e,f){

		if(typeof t.attachEvent == "function")
			t.detachEvent('on' + e, f);
		
		else
			t.removeEventListener(e,f);		},

	dispatch: function(t,e){
		var event = new Event(e);
		t.dispatchEvent(event);
	},

	get: { 
		byId: function(e){
			return document.getElementById(e);
		},

		byClass: function(e){
			return document.getElementsByClassName(e);
		},

		byTag: function(e){
			return document.getElementsByTagName(e);
		},

		bySelectorAll: function(e){
			return document.querySelectorAll(e);
		},

		bySelector: function(e){
			return document.querySelector(e);
		}



	},

	width: function(e){
		return e.clientWidth;
	},

	height: function(e){
		return e.clientHeight;
	},

	pageTop: function(e){           //____не забыть_доделать!!ч/з вайл
		var offset = 0;
		while(e.offsetParent!= null){
			offset = e.offsetTop;
			e = e.offsetParent;
		}
		return offset;
	},


	pageLeft: function(e){         //___________________2______
		var offset = 0;
		while(e.offsetParent!= null){
			offset = e.offsetLeft;
			e = e.offsetParent;
		}
		return offset;
	},



	css: function(e, prop, val){
		if(arguments.length == 2){
			var style = window.getComputedStyle(e);
			return style[prop];
		}


		if(arguments.length == 3){
			e.style[prop] = val;
		//return style[prop]
		}
	},

	ajax: function(m, p, f){
		var xhr = new XMLHttpRequest();
		xhr.onload = f;
		xhr.open(m, p, true); 
		xhr.send();
	}
}


