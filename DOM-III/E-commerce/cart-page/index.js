var products = JSON.parse(localStorage.getItem("cart")) || [];
  var cart = document.getElementById("cart");
  if (products.length == 0) {
    cart.innerText = "Cart is empty. Add products to cart.";
  } else {
    displayProducts();
    calculateTotal();
  }

  function displayProducts() {
    cart.innerText = "";
    products.map(function (elem) {
      var div = document.createElement("div");
      div.setAttribute("class", "product");
      var image = document.createElement("img");
      image.setAttribute("src", elem.image_url);
      var productName = document.createElement("h5");
      productName.innerText = elem.name;
      var price = document.createElement("p");
      price.innerText = elem.price;
      div.append(image, productName, price);
      cart.append(div);
    });
  }
  function calculateTotal() {
    var total = products.reduce(function (acc, curr) {
      return acc + curr.price;
    }, 0);
    var cartVal = document.createElement("h5");
    cartVal.innerText = "₹ " + total;
    var p = document.createElement("p");
    p.innerText = "Total";
    var div = document.createElement("div");
    div.append(p, cartVal);
    div.setAttribute("id", "total");
    document.querySelector("body").append(div)
}