var shoppingCart = [
{
	name: 'Cheese',
	price: 1.50,
	isTaxable: false
},
{
	name: 'Milk',
	price: 2.00,
	isTaxable: false
},
{
	name: 'Bread',
	price: 0.99,
	isTaxable: false
},
{
	name: 'Turkey',
	price: 2.99,
	isTaxable: false
},
{
	name: 'Hamburger',
	price: 5.00,
	isTaxable: false
},
{
	name: 'Chicken',
	price: 3.29,
	isTaxable: false
},
{
	name: 'Ham',
	price: 14.00,
	isTaxable: false
},
{
	name: 'Ranch',
	price: 2.49,
	isTaxable: false
},
{
	name: 'Pepsi',
	price: 4.00,
	isTaxable: false
},
{
	name: 'Cookies',
	price: 2.99,
	isTaxable: false
},
{
	name: 'Cottage Cheese',
	price: 4.09,
	isTaxable: false
},
{
	name: 'Apples',
	price: 1.72,
	isTaxable: false
},
{
	name: 'Greeting Card',
	price: 4.99,
	isTaxable: true
},
{
	name: 'VCR tapes',
	price: 0.05,
	isTaxable: true
},
{
	name: 'Light Bulbs',
	price: 8.00,
	isTaxable: true
},
{
	name: 'Antiacds',
	price: 3.65,
	isTaxable: true
},
{
	name: 'Toilet Paper',
	price: 3.50,
	isTaxable: true
}
];

	//Creates page
window.addEventListener("load", createPage());
	//Event handler for on click function of add button
document.getElementById('addBtn').addEventListener('click', function(){
	addItems();
});


// Function Declarations

// Create HTML Base
function createPage(){
var header = document.createElement('h3');
header.innerText = "Shopping List";
document.body.appendChild(header);
createForm();
populateList();
}

//Calculate totals
function total(){
	var total = 0;
	for (var i = 0; i < shoppingCart.length; i++); {
		if (shoppingCart[i].isTaxable) {
			total += shoppingCart[i].price * 1.06;
		} else {
			total += shoppingCart[i].price;
		}
	};
	return "$ " + money_round(total);
}

function money_round(tot) {
	return Math.ceil(tot * 100) / 100;
}

function populateList(){
	//Checks to see if a table already exists if so, deletes and repopulates with new object
	//Fix for this is to delete only total, append to table, and then only repopulate/update appendTotal.
	if(document.getElementById('tableId')){
		var element = document.getElementById('tableId');
		element.parentNode.removeChild(element);
	}
	//Creates parent elements for appending table cells
	var table = document.createElement('table');
	table.setAttribute('id', 'tableId');
	document.body.appendChild(table);
	var titleRow = document.createElement('tr');
	var title1 = document.createElement('th');
	var title2 = document.createElement('th');
	title1.innerText = "Item";
	titleRow.appendChild(title1);
	title2.innerText = "Price";
	titleRow.appendChild(title2);
	table.appendChild(titleRow);

	// Loop through shoppingCart and dynamically create table
	shoppingCart.forEach(function(x){
		var listRow = document.createElement('tr');
		for (var i = 0; i < 2; i++) {
			var item = document.createElement('td');
			if (i === 0) {
				item.innerText = x.name;
				listRow.appendChild(item);

			} else if (i === 1) {
				item.innerText = "$" + x.price.toFixed(2);
				listRow.appendChild(item);
			};
		};

		table.appendChild(listRow);
	});

	appendTotal(table);

}

	// Appends total to bottom of table
function appendTotal(table) {
	var priceRow = document.createElement('tr');
	table.appendChild(priceRow);
	var totalHeading = document.createElement('th');
	totalHeading.setAttribute('colspan', '2');
	totalHeading.innerText = 'Total';
	priceRow.appendChild(totalHeading);
	var totalRow = document.createElement('tr');
	var totalCell = document.createElement('td');
	totalCell.innerText = total();
	totalCell.setAttribute('colspan', '2');
	totalRow.appendChild(totalCell);
	table.appendChild(totalRow);
}

function createForm() {
		// Create form element
	var form = document.createElement('form');
		// Create addItem Text box and set Attributes
	var textBox1 = document.createElement('input');
	textBox1.setAttribute('type', 'textbox');
	textBox1.setAttribute('id', 'addItem');
	textBox1.setAttribute('placeholder', 'Item');
		// Create addPrice Text box and set Attributes
	var textBox2 = document.createElement('input');
	textBox2.setAttribute('type', 'textbox');
	textBox2.setAttribute('id', 'addPrice');
	textBox2.setAttribute('placeholder', 'Price');
		// Create addButton and set Attributes
	var button = document.createElement('button');
	button.innerText = 'Add';
	button.setAttribute('id', 'addBtn');
	button.setAttribute('type', 'button');
		// Create taxable item checkbox and set Attributes
	var checkBox = document.createElement('input');
	checkBox.setAttribute('type', 'checkbox');
	checkBox.setAttribute('id', 'checkbox');
	checkBox.setAttribute('value', 'Taxable');
		// Create label for checkbox and set Attributes
	var checkLabel = document.createElement('label');
	checkLabel.setAttribute('for', 'checkbox');
	checkLabel.innerText = 'Taxable?';
		// Appends all elements
	document.body.appendChild(form);
	form.appendChild(textBox1);
	form.appendChild(textBox2);
	form.appendChild(checkBox);
	form.appendChild(checkLabel);
	form.appendChild(button);
}

	// Pull values from text boxes and check box
function addItems(){
	var itemVal = document.getElementById('addItem').value;
	var priceVal = Number(document.getElementById('addPrice').value);
	var taxable = document.getElementById('checkbox').checked;
	addToList(itemVal, priceVal, taxable);
	document.getElementById('addItem').value = "";
	document.getElementById('addPrice').value = "";

}

	// Takes arguments to create new object and add to shoppingCart array
function addToList(newName, newPrice, newIsTaxable){
	if (newName.length > 0 && isNaN(newPrice) === false) {
		shoppingCart[shoppingCart.length] = {
			name: newName,
			price: newPrice,
			isTaxable: newIsTaxable
		}
	} else {
		alert('Please input an item name and valid dollar amount.');
	}
		populateList();

}






// Make an array

// function makeArray(num1, num2) {
// 	var min = Math.min(num1, num2);
// 	var max = Math.max(num1, num2);
// 	var arr = [];
// 	for (var i = min; i <= max; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }

// console.log(makeArray(-4, 2));
