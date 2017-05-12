function Product(name, type, price, releaseDate){
	this.releaseDate = releaseDate;
	this.id=0;
	this.name = name;
	this.type = type;
	this.price = price;
};

var id = 0;
Product.prototype.Id = function(){
	id++;
	this.id = id;
};

var products = new Array();
function Shop(name,adres, markup, income, products){
	this.name = name;
	this.adres = adres;
	this.markup	= markup;
	this.income = income;
	this.products = products;
};

function sum(products){
	var n=0;
	for (var i = 0; i < this.products.length; i++) {
		n+=this.products[i].cost;
	}
	return count;
};


Shop.prototype.addProduct = function(Product, a){
	for(var i=0; i<a; i++){
		this.products.push(Product);
	}
};

Shop.prototype.deleteProduct=function(pr){
	for(var i = 0; i<pr; i++)
	this.products.pop();
};

Shop.prototype.saleProduct=function(pr){
	for(var i = 0; i<pr; i++){
		this.sum+=products[pr-i-1].price;
		this.products.pop();
	}
};
Shop.prototype.Inform=function(){
	console.log("name :"+this.name);
	console.log("addres :"+this.adres);
	console.log("markUP :"+this.markup);
	console.log("Income :"+this.income);
	console.log("sum :"+this.sum);
}

var kek = new Shop("KEK_MARKET","Minsk","30%",1000,products);
kek.addProduct(Product,4);
kek.deleteProduct(2);
kek.saleProduct(2);
kek.Inform();
console.log(kek)
