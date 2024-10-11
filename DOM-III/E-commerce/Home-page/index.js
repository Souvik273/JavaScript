var mensData = [
  {
    id: 1,
    image_url:
      "https://rukminim2.flixcart.com/image/750/900/xif0q/shoe/x/2/x/-original-imahfuejz8gzzcuc.jpeg?q=20&crop=false",
    name: "MEN'S REEBOK RUNNING ROADMAP SHOES",
    price: 1170,
    strikedoffprice: 2599,
  },
  {
    id: 2,
    image_url:
      "https://rukminim2.flixcart.com/image/850/1000/jq2np8w0/slipper-flip-flop/v/e/u/cn8472-12-reebok-bunker-blue-original-imafc6f6w9gffhzc.jpeg?q=90&crop=false",
    name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
    price: 699,
    strikedoffprice: 999,
  },
  {
    id: 3,
    image_url:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/1/y/o/-original-imagzhzsxs6nhjzy.jpeg?q=90&crop=false",
    name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
    price: 945,
    strikedoffprice: 2099,
  },
  {
    id: 4,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMpw0u-sPlcDMrhpLBgt-L_CpKS8OB8Gkxw&s",
    name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
    price: 699,
    strikedoffprice: 999,
  },
  {
    id: 5,
    image_url:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/9/w/z/-original-imahy3zv3gff6ped.jpeg?q=90&crop=false",
    name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
    price: 945,
    strikedoffprice: 2099,
  },
  {
    id: 6,
    image_url:
      "https://images.jdmagicbox.com/quickquotes/images_main/reebok-men-s-swim-adv-flip-enhanced-slippers-white-camo-bunker-blue-size-6-108503670-xvx16.jpg",
    name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
    price: 699,
    strikedoffprice: 999,
  },
  {
    id: 7,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ2lxoAHGOCVFvoGBmMladiBwNdUsa4KIvcw&s",
    name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
    price: 945,
    strikedoffprice: 2099,
  },
  {
    id: 8,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPTENwd2UrJAWfd31fXVZa5eC1_Aqas1mIw&s",
    name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
    price: 699,
    strikedoffprice: 999,
  },
  {
    id: 9,
    image_url:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/c/2c6958cREB-GA1261_1.jpg?rnd=20200526195200&tr=w-512",
    name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
    price: 945,
    strikedoffprice: 2099,
  },
];

displayProducts(mensData);

function displayProducts(data) {
  data.filter(function (elem , index) {
    var div = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", elem.image_url);
    var productName = document.createElement("h5");
    productName.innerText = elem.name;
    var priceBox = document.createElement("div");
    var price = document.createElement("p");
    price.innerText = elem.price;
    var strikedPrice = document.createElement("p");
    strikedPrice.innerText = elem.strikedoffprice;
    priceBox.append(price, strikedPrice);
    //  priceBox.style.display = "flex" we won't use this now because this will create inline styles
    priceBox.setAttribute("class", "priceBox");

    var cartBtn = document.createElement("button");
    cartBtn.innerText = "Add to Cart";
    cartBtn.setAttribute("class", "cartBtn");
    cartBtn.addEventListener("click", function () {
      addToCart(index);
    });

    div.append(image, productName, priceBox, cartBtn);
    document.querySelector("#mensData").append(div);

    
    var productsInCart = JSON.parse(localStorage.getItem("cart")) || [];
    function addToCart(i) {
      var product = mensData.filter(function (elem, index) {
        return index == i;
      });
      productsInCart.push(product);
      localStorage.setItem("cart", JSON.stringify(productsInCart));
    }
    
  });
}
