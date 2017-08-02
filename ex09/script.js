var list = [
{
  name:'bread',
  price:2.55,
},
{
  name:'cheese',
  price:2.25,
},
{
  name:'steak',
  price:15.65,
},
{
  name:'apples',
  price:2.55,
},
{
  name:'potatoes',
  price:3.49,
},
{
  name:'oranges',
  price:5.00,
},
{
  name:'chicken',
  price:9.54,
},
{
  name:'popcorn',
  price:6.89,
},
{
  name:'eggs',
  price:2.55,
},
{
  name:'notepad',
  price:3.50,
},
]
var total=0;
var totalTax=0;
var returned=[];
var returnedDisp;
var obj={};

// add item function
var addMe = function(){
obj.name=document.getElementById('form').value;
obj.price=Number(document.getElementById("form2").value);
  list.push(obj);
  console.log(list)
  theFunction();
  theFunction2();

}

// function for adding totals
var theFunction = function(){
  // var returned = [];
list.forEach(function(itm){
  returned.push(list.name + " " +list.price);
  total+=list.price;
  totalTax+=list.price*1.06;
});

}
// var theFunctionb = function(){
//   // var returned = [];
//   for(i=0; i<1; i++){
//   returned.push(itm.name + " " +itm.price);
//   // total+=itm.price;
//   // totalTax+=itm.price*1.06;
// }
//
// }

// function for displaying to html
var theFunction2=function(){
returned.forEach(function (itm){
    var listAry = document.createElement('li');
    listAry.className="listed";
    returnedDisp=itm;
    listAry.innerText = returnedDisp;
    document.body.appendChild(listAry);
});
}



  // console.log("sub-total " + total);
  // console.log("your total after tax " + totalTax.toFixed(2));
  // console.log("The total tax you paid is " + (totalTax-total).toFixed(2));
// header
var header1 = document.createElement('h1');
header1.innerText = 'Shopping List';
document.body.appendChild(header1);

var container = document.createElement('div');
container.className=('container');
container.style.width = '1px';
container.style.height = '1px';

document.body.appendChild(container);

theFunction();
theFunction2();


//TotalLable
var totalLable = document.createElement('h3');
totalLable.innerText = ('Total');
totalLable.className =('lables');
document.body.appendChild(totalLable);

// display total
var totalDisp = document.createElement('p');
totalDisp.innerText = total;
document.body.appendChild(totalDisp);
// .className =

//TotalWTax
var TotalWTax = document.createElement('h3');
TotalWTax.innerText = ('Total w/Tax');
TotalWTax.className =('lables');
document.body.appendChild(TotalWTax);
// Total with Tax
var totalDisp = document.createElement('p');
totalDisp.innerText = totalTax.toFixed(2);
document.body.appendChild(totalDisp);
// item input
var x = document.createElement('input');
x.id=('form');
x.type=('text')
document.body.appendChild(x);
// price input
var y = document.createElement('input');
y.id=('form2');
y.type=('text')
document.body.appendChild(y);
// button
var buttonAdd =document.createElement('button');
buttonAdd.innerText=('add');
console.log(buttonAdd);
buttonAdd.onclick=(addMe);
document.body.appendChild(buttonAdd);
