//Lab 8 Dom Manipulation

var shoppingList = [
  {
    name: 'kale',
    price: 2.79,
  },
 {
    name: 'eggs',
    price: 3.59,
  },
  {
    name: 'almond milk',
    price: 5.99,
  },
  {
    name: 'green onions',
    price: 2.00,
  },
  {
    name: 'oranges',
    price: 4.00,
  },
  {
    name: 'cheese',
    price: 7.00,
  },
  {
    name: 'wine',
    price: 12.99,
  },
  {
    name: 'toilet paper',
    price: 11.29,
  },
  {
    name: 'bodywash',
    price: 8.99,
  },
  {
    name: 'shampoo',
    price: 5.99,
  },
  {
    name: 'conditioner',
    price: 4.45,
  }
  ];



//adds shopping list names and prices to dom
  shoppingList.forEach(function(i){
    var liName = document.createElement('p');
    var liPrice = document.createElement('p');

    liName.innerText = i.name;
    liPrice.innerText = i.price;
    document.getElementsByClassName("wrapper").appendChild(liName).style.margin = '5px 550px';
    document.getElementsByClassName("wrapper").appendChild(liPrice).style.margin = '0px 650px';
  });
//creates label for total
var labelTotal = document.createElement('h4');
labelTotal.innerText = 'Total: ';
document.body.appendChild(labelTotal).style.margin = '0px 550px';

//adds the total of shopping list to dom
var liTotal = document.createElement('h4');
var total = 0;
  shoppingList.forEach(function(i){
    total += i.price;
    liTotal.innerText = total;
    document.body.appendChild(liTotal).style.color = 'green';
    liTotal.style.margin = '0px 650px';
    console.log(i.name + " " + i.price);
  });
  console.log("Total: " + total);
