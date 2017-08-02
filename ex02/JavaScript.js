$(document).ready(function() {

//Set up variable with grocery items that have name, price, & quantity variables.
var grocery = [
  { name: "Apples",
    price: 2,
    quantity: 3},
  { name: "Oranges",
    price: 2,
    quantity: 3},
  { name: "Strawberries",
    price: 3,
    quantity: 3},
  { name: "Pineapple",
    price: 4,
    quantity: 1},
  { name: "Nutella",
    price: 5,
    quantity: 2}
];
    //loops to print out what's in the array and add it to list
    for (var i = 0; i < grocery.length; i++)
    {
        var $item = $("<li>");
        $item.text("Item: " + grocery[i].name + "  Price: " + "$" + grocery[i].price.toFixed(2) + "  Quantity: " + grocery[i].quantity);
        $("#listItems").append($item);
    }
    //for loop counts indexes in array, stores values into item variables, prints list items
    //multiplies item prices by their quantities and adds items together for total bill
    function totalBillNoTax () {
         var itemNsame;
         var itemPrice;
         var itemQuantity;
         var totalBillNoTax = 0;

         for (i = 0; i < grocery.length; i++)
         {
           totalBillNoTax += grocery[i].price * grocery[i].quantity;
          }
          return totalBillNoTax;  //return this into variable that can be accessed in totalBill function
    }
     //calculates tax
    function calcTax(subtotal) {
          return subtotal * 0.06;
    }
    //prints what we returned from totalBillNoTax function + calcTax function and rounds to 2 places
    $('button').on('click', function()
    {
          var noTax = totalBillNoTax();
          var total = noTax + calcTax(noTax);
          var $target = $("#total");
          $target.text(total.toFixed(2));
    });

});
