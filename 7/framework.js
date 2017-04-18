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
	}
}