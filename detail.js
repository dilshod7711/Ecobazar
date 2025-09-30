const productDetail = document.getElementById("pruduct-detail");

let Products = [
  {
    id: 1,
    img: "./imgs/Product Image.png",
    name: "Green Apple",
    price: "$14.99",
    oldPrice: "$20.99",
    sale: true,
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 2,
    img: "./imgs/malto.png",
    name: "Fresh Indian Malta",
    price: "$20.00",
    oldPrice: "$25.00",
    sale: false,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    img: "./imgs/Chinese cabbage.png",
    name: "Chinese cabbage",
    price: "$12.00",
    oldPrice: "$18.00",
    sale: false,
    rating: "⭐⭐⭐",
  },
  {
    id: 4,
    img: "./imgs/Green Lettuce.png",
    name: "Green Lettuce",
    price: "$9.00",
    oldPrice: "$12.00",
    sale: false,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 5,
    img: "./imgs/Eggplant.png",
    name: "Eggplant",
    price: "$34.00",
    oldPrice: "$40.00",
    sale: false,
    rating: "⭐⭐⭐⭐⭐",
  },
];

Products.map((product) => {
  const box = document.createElement("div");
  box.className =
    "group lg:w-[240px] lg:h-[300px] md:w-[230px] md:h-[290px] w-[200px] h-[250px] border border-[#e5e5e5] hover:border-[#00B207] transition p-[5px] cursor-pointer flex flex-col justify-between py-[10px] px-[10px] relative";
  if (product.sale) {
    const saleBtn = document.createElement("button");
    saleBtn.className =
      "ml-[5px] absolute w-[80px] h-[25px] bg-[#EA4B48] text-white text-[12px] rounded-[4px]";
    saleBtn.innerHTML = "Sale 50%";
    box.appendChild(saleBtn);
  }

  const img = document.createElement("img");
  img.src = product.img;
  box.appendChild(img);
  const name = document.createElement("p");
  name.className =
    "text-[#4D4D4D] lg:text-[14px] md:text-[12px] text-[12px] font-Poppins] group-hover:text-[#00B207]";
  name.innerHTML = product.name;
  box.appendChild(name);
  const price = document.createElement("p");
  price.className =
    "text-[#1A1A1A] lg:text-[15px] md:text-[13px] text-[12px] font-Poppins";
  price.innerHTML = product.price;
  const oldPrice = document.createElement("p");
  oldPrice.className =
    "text-[#999999] lg:text-[15px] md:text-[13px] text-[12px] font-Poppins";
  oldPrice.innerHTML = product.oldPrice;
  const flexBox = document.createElement("div");
  flexBox.className = "flex gap-[5px] items-center";
  flexBox.append(price, oldPrice);
  const cart = document.createElement("div");
  cart.className = "flex items-center justify-between w-full";
  const cartIcon = document.createElement("img");
  cartIcon.src = "./imgs/Add To Cart.svg";
  cartIcon.classList = "w-[10px] h-[10px]";
  cart.append(flexBox, cartIcon);
  box.appendChild(cart);
  const rating = document.createElement("p");
  rating.innerHTML = product.rating;
  box.appendChild(rating);

  productDetail.appendChild(box);
});
productDetail.innerHTML = Products.map(
  (product) => `
  <a href="./detail.html">
    <div
      class="group lg:w-[240px] lg:h-[300px] md:w-[230px] md:h-[290px]
             w-[200px] h-[250px] border-[1px] border-[#e5e5e5]
             hover:border-[#00B207] transition p-[5px] cursor-pointer
             flex flex-col justify-between py-[10px] px-[10px] relative"
    >
      ${
        product.sale
          ? `<button
              class="ml-[5px] absolute w-[80px] h-[25px] bg-[#EA4B48] text-white text-[12px] rounded-[4px]"
            >
              Sale 50%
            </button>`
          : ""
      }

      <div
        class="absolute top-[10px] right-[10px] flex gap-[10px] flex-col hidden group-hover:block"
      >
        <img class="w-[30px]" src="./imgs/Add To wishlist.svg" alt="wishlist" />
        <img class="w-[30px]" src="./imgs/Quick View.svg" alt="quick view" />
      </div>

      <div>
        <img src="${product.img}" alt="${product.name}" />
      </div>

      <div class="flex justify-between items-center">
        <div>
          <p class="text-[#4D4D4D] lg:text-[14px] md:text-[12px] text-[12px] group-hover:text-[#00B207]">
            ${product.name}
          </p>
          <span class="text-[#1A1A1A] lg:text-[15px] md:text-[13px] text-[12px]">
            ${product.price}
            <del class="text-[#999999] lg:text-[15px] md:text-[13px] text-[12px]">
              ${product.oldPrice}
            </del>
          </span>
          <img src="/imgs/Rating.svg" alt="rating" />
        </div>
        <div>
          <img src="./imgs/Add To Cart.svg" alt="add to cart" />
        </div>
      </div>
    </div>
  </a>
`
).join("");
