//script for lab 8.1 using JQuery
var items = [
	{name: "beans", 				price: 0.99,		tax: "no tax"},
	{name: "rice", 					price: 3.99,		tax: "no tax"},
	{name: "flour", 				price: 1.99,		tax: "no tax"},
	{name: "truffle oil", 			price: 7.25,		tax: "no tax"},
	{name: "spinach", 				price: 2.00,		tax: "no tax"},
	{name: "artichokes", 			price: 2.50,		tax: "no tax"},
	{name: "rotisserie chicken",	price: 5.99,		tax: "no tax"},
	{name: "almonds", 				price: 9.99,		tax: "taxable"}
];

/*
items.forEach(function(item){

		var food = document.createElement("li");
food.innerHTML = item.name + " $" + item.price.toFixed(2);
list.appendChild(food);

	});*/

for (var i=0; i<items.length; i++) {
var $item = $("<li>");
$item.text(items[i].name + " $" + items[i].price.toFixed(2));
$("#list").append($item);
}



	var runningTotal = 0;
	items.forEach(function(item) {

		runningTotal += items[i].price; //price of each grocery
		//line below needs to be changed for jQuery
		//document.getElementById("total").innerHTML = "$" + runningTotal.toFixed(2);
		$("#total").text("$" + runningTotal.toFixed(2));
	});
			console.log ("$" + runningTotal.toFixed(2));


// In Michigan sales tax is not actually collected on groceries, but may be used in this exercise regardless
