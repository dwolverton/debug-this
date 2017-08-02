$(function() {

var total = 0;
var groceries = [ {name:"Elbow Macaroni", price: 1},
				  {name:"Cheese", price: 3},
				  {name:"Cream cheese", price: 2},
				  {name:"Salt", price: 1},
				  {name:"Pepper", price: 1},
				  {name:"Pet Milk", price: 1},
				  {name:"Butter", price: 2}
];

// groceries.forEach(function(grocery) {
  //console.log(grocery.name + " cost $" + grocery.price);


	// var listItem = document.createElement("li");
// 	listItem.innerHTML = grocery.name + " cost $" + grocery.price;
// 	document.body.appendChild(listItem);

	for (var i=0, i < groceries.length, i++) {
	var $listItem = $('<li>');
	$listItem.text(groceries[i].name + ' $' + groceries[i].price);
	$("#list").append($listItem);

	}


for (var i=0; i < groceries.length; i++) {
 total += groceries[i].price;

 console.log(total); }

 var $total= $("<p>");
 $total.html ("<p>The subtotal to make macaroni n cheese is $" + total + ".</p> ")
 $("body").append($total);


// 	var subtotal = document.createElement("p");
// 	subtotal.innerHTML = "The subtotal to make macaroni n cheese is $" + total;
// 	document.body.appendChild(subtotal);


// console.log("The subtotal of the objects is $" + total + ".");

function endingTotal(total)  {
 return (total * .06) + total ; }

var totalCost = endingTotal(total);
// console.log("With tax, the total cost is $" + totalCost);
var $to = $("<p>");
$to.html("<p>You will pay $" + totalCost + " altogether for your small piece of heaven.");
$("body").append($to);

// 	var to = document.createElement("p");
// 	to.innerHTML = "To make the macaroni and cheese, you will pay $" + totalCost + " altogether.";
// 	document.body.appendChild(to);

}); // end ready
