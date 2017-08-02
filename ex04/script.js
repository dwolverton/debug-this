 var costArray = [2, 6];
var nameList = document.getElementById('name');
var quantityList = document.getElementById('quantity');
var priceList = document.getElementById('price');
var totalDisplay = document.getElementById('total-display');

function addItem() {
	var total = 0;
	//add name to list
	var name = document.createElement('li');
	name.innerText = document.getElementById('name-input').value;;
	nameList.appendChild(name);
	//add quantity to list
	var quantity = Number(document.getElementById('quantity-input').value);
	var quantityDisplay = document.createElement('li');
	quantityDisplay.innerText = quantity;
	quantityList.appendChild(quantityDisplay);
	//add price to list
	var price = Number(document.getElementById('price-input').value);
	price = price.toFixed(2);
	priceDisplay = document.createElement('li');
	priceDisplay.innerText = "$" + price;
	priceList.appendChild(priceDisplay);
	//add total price to array
	var cost = quantity * price;
	costArray.push(cost);
	//total all cost
	costArray.forEach(function(itemCost){
		total += itemCost;
	});
	total = Number(total.toFixed(2));
	//display total on page
//	var totalDisplay = document.getElementById('total-display');
	totalDisplay.innerText = "$" + total;
}

function removeItem() {
	total = 0;
	// remove name
	nameList.removeChild(nameList.lastChild);
	// remove quantity
	quantityList.removeChild(quantityList.lastChild);
	// remove price
	priceList.removeChild(priceList.lastChild);
	//alter total
	costArray.pop();
	costArray.forEach(function(itemCost){
		total += itemCost;
	});
	total = Number(total.toFixed(2));
	//display total on page
	totalDisplay.innerText = "$" + total;
}
