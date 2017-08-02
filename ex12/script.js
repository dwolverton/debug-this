var list = [
  {name: 'salad', price: 5.99, quant: 1},
  {name: 'soup', price: 10.99, quant: 1},
  {name: 'chips', price: 2.95, quant: 1},
  {name: 'shoes', price: 79.99, quant: 1},
  {name: 'cheese', price: 5.99, quant: 1},
  {name: 'eggs', price: 2.95, quant: 1},
  {name: 'fruit', price: 0.05, quant: 1},
  {name: 'yogurt', price: 3.99, quant: 1},
  {name: 'pb', price: 4.99, quant: 1},
  {name: 'ice cream', price: 3.99, quant: 1},
  {name: 'meat', price: 6.99, quant: 1},
  {name: 'cake', price: 8.95, quant: 1}
];
var names = [];
//access p to hold list that will be created
var results = document.getElementById('results');
//create list
function maker () {
  var itemList = document.createElement('ul');
  for (var i = 0; i < list.length; i++) {
    var total = 0;
    //creates new list item
    var item = document.createElement('li');
    //populate list item
    item.innerText = list[i].quant + ' ' + list[i].name[0].toUpperCase() + list[i].name.substr(1) + '. ' + 'Individual price: $' + list[i].price + '. Total price: $' + (list[i].price * list[i].quant).toFixed(2);
    total += (list[i].price * list[i].quant);
    //append list item to results list
    itemList.appendChild(item);
    //add item in list to the names array if it isn't in there already
    if (names.indexOf(list[i].name) < 0) {
      names.push(list[i].name);
    }
  }
  results.appendChild(itemList);
  //calculate values to display
  var tax = total * 0.06;
  document.getElementById('total').innerText = 'Total: $' + total.toFixed(2);
  document.getElementById('tax').innerText = 'Tax: $' + tax.toFixed(2);
  document.getElementById('gt').innerText = 'Grand Total: $' + (total + tax).toFixed(2) + '. Completing lab 8? Priceless.';
}

//handle adding new items
var submit = document.getElementById('submit');
submit.addEventListener('click', function() {
  //get values from input
  var newItem = document.getElementById('newItem').value.toLowerCase();
  var newPrice = document.getElementById('newPrice').value;
  var newQuant = document.getElementById('newQuant').value;
  //if the item is not already in the list, add it
  if (names.indexOf(newItem) < 0) {
    list.push({name: newItem, price: Number(newPrice), quant: Number(newQuant)});
    //if item is already in list, update the number and quantity
  } else {
    list[names.indexOf(newItem)].quant = Number(newQuant);
    list[names.indexOf(newItem)].price = Number(newPrice);
  }
  //reset total, destroy old list, and make new one
  total = 0;
  results.removeChild(results.childNodes[0]);
  maker();
});

//submit validation, probably a more efficient way to do this but ran out of time
document.getElementById('newItem').addEventListener('keyup', validate);
document.getElementById('newPrice').addEventListener('keyup', validate);
document.getElementById('newQuant').addEventListener('keyup', validate);
function validate () {
  if (document.getElementById('newItem').value !== '' && document.getElementById('newPrice').value !== '' && document.getElementById('newQuant').value !== '') {
    document.getElementById('submit').disabled = false;
  } else {
    document.getElementById('submit').disabled = true;
  }
}

//make initial list
maker();
