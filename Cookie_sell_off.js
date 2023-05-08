<!DOCTYPE html>
<html>
<head>
	<title>Cookie Shop</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script>
		$(document).ready(function(){
			$("#add-to-cart").click(function(){
				var quantity = parseInt($("#quantity").val());
				var price = parseFloat($("#price").text().replace("$", ""));
				var total = quantity * price;
				var cart_total = parseFloat($("#cart-total").text().replace("$", ""));
				$("#cart-total").text("$" + (cart_total + total).toFixed(2));
			});
		});
	</script>
</head>
<body>
	<h1>Cookie Shop</h1>
	<h2>Chocolate Chip Cookies</h2>
	<img src="cookie.jpg" alt="Chocolate Chip Cookie" width="200">
	<p>Price: <span id="price">$2.00</span></p>
	<label for="quantity">Quantity:</label>
	<input type="number" id="quantity" value="1" min="1">
	<button id="add-to-cart">Add to Cart</button>
	<p>Cart Total: <span id="cart-total">$0.00</span></p>
</body>
</html>
