$(function() {
	$("#itemName").focus();
	var shoppingCart = [];

	$("#groceryBtn").click(function() {
		var itemName = $("#itemName").val();
		var itemPrice = Number($("#itemPrice").val()).toFixed(2);
		var itemQty = Number($("#itemQty").val());
	
		shoppingCart.push({itemName: itemName, itemPrice: itemPrice, itemQty: itemQty});
		$("#groceryList").append("<li>" + itemQty + "x " + itemName + "<br>" + "Price: $" + itemPrice + "</li>");
		$("#groceryList li").addClass("list-group-item");

		var cartTotal = 0;

		for (var i = 0; i < shoppingCart.length; i++) {
			cartTotal += shoppingCart[i].itemPrice * shoppingCart[i].itemQty;
		}

		$("#cartTotalOutput").html("Your total is $" + cartTotal.toFixed(2) + ".");
		$("#itemName").val("");
		$("#itemPrice").val("");
		$("#itemQty").val("");
		$("#itemName").focus();
	});
});