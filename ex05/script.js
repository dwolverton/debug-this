var cart = [
{
  name: 'banana',
  price: 1,
  taxed: true
},
{
  name: 'salmon',
  price: 20.72,
  taxed: true
},
{
  name: 'yogurt',
  price: 4.49,
  taxed: true
},
{
  name: 'lettuce',
  price: 2.00,
  taxed: true
},
{
  name: 'blueberries',
  price: 4.39,
  taxed: true
},
{
  name: 'asparagus',
  price: 4.49,
  taxed: true
},
{
  name: 'potatoes',
  price: 3.49,
  taxed: true
},
{
  name: 'ginger root',
  price: 1.79,
  taxed: true
},
{
  name: 'brussel sprouts',
  price: 3.49,
  taxed: true
},
{
  name: 'curry powder',
  price: 4.99,
  taxed: true
},

];

// SAVE IF NEEDED ADJUSTING THE COPY
// var total = 0;
//
// cart.forEach(function(i){
//     // document.write(i.name);
//     // document.write(i.price);
//
//     total += i.price;
// });

// CONTAINER FOR FORM
var containerform = document.createElement('div');
containerform.style.backgroundColor = "black";
containerform.style.height = "100px";
document.body.appendChild(containerform);

// FORM ELEMENT
var formEl = document.createElement('form');
formEl.setAttribute('method', "post");
formEl.setAttribute('action', "#");
containerform.appendChild(formEl);


// FORM INPUT
var formIn = document.createElement("input");
formIn.setAttribute('type', "text");
formIn.setAttribute('name', 'food');
formIn.setAttribute('id', "foodNameIn")
formIn.style.marginLeft = "10px";
formIn.style.marginTop = "10px";
formEl.appendChild(formIn);

// FORM INPUT 2
var formIn = document.createElement("input");
formIn.setAttribute('type', "text");
formIn.setAttribute('name', 'food');
formIn.setAttribute('id', "priceNameIn")
formIn.style.marginLeft = "10px";
formIn.style.marginTop = "10px";
formEl.appendChild(formIn);

// SUBMIT BUTTON
var sub = document.createElement("input");
sub.setAttribute("type", "submit");
sub.setAttribute("value", "Submit");
sub.style.marginLeft = "10px";
formEl.appendChild(sub);

//CONTAINER FOR FOOD PARAGRAPHS
var container = document.createElement('div');
container.className = "container";
document.body.appendChild(container);


var userFood = document.getElementById('foodName').value;
console.log(userFood);

var userPrice = document.getElementById('priceNameIn').value;
console.log(userPrice);

/*  TOTAL  */

var total = 0;


cart.forEach(function(i){

  var foodName = document.createElement('p');
  foodName.innerText = i.name + " $ " + i.price;
  container.appendChild(foodName);

  // var priceName = document.createElement('p');
  // priceName.innerText = i.price;
  // container.appendChild(priceName);

    // document.write(i.name);
    // document.write(i.price);

    total += i.price;
});

console.log(total.toFixed(2));


/*  Tax  */

var taxTotal = 0;

cart.forEach(function(t){
  if(t.taxed === true) {
    taxTotal += t.price * 0.06;
  }
});

console.log(taxTotal.toFixed(2));

//To USER

// var container = document.createElement('div');
// container.className = "container";
// document.body.appendChild(container);
//
var totalPrint = document.createElement('h3');
totalPrint.innerText = "Total: $" + total;
container.appendChild(totalPrint);

var taxPrint = document.createElement('h3');
taxPrint.innerText = "Tax: $" + taxTotal;
container.appendChild(taxPrint);

var totalPayment = document.createElement('h3');
totalPayment.innerText = "Total: $" + " " + (taxTotal + total);
container.appendChild(totalPayment);
