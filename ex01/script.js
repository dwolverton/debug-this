$(document).ready(function(){

//gorceries objects in array
  var groceries = [
                     {name:"flour", price:5},
                     {name:"sugar", price:3.50},
                     {name:"butter", price:.99},
                     {name:"yeast", price:.98} ];

  var total = 0;
  groceries.forEach(function(item)) {
    var name = item.name;
    var price = item.price;

    var $groceryItem = $("<li>");
    $groceryItem.text(name + " $ "+ price.toFixed(2));
    $("#list").append($groceryItem);



  };

  for(var i=0; i< groceries.length; i++){
    total+= groceries[i].price;    //loops through groceries array and adds price to toal each time
  }

  var $subtotal= $("<h4>");
  $subtotal.text("Your total is "+ "$" + total);
  $("#total").append($subtotal);


}); //end ready
