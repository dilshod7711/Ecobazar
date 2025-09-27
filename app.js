const img1 = document.getElementById("Product1");
const img2 = document.getElementById("Product2");
const img3 = document.getElementById("Product3");
const img4 = document.getElementById("Product4");
const mainImg = document.getElementById("MainProduct");
const actives = document.getElementById("actives");
const actives1 = document.getElementById("actives1");
const actives2 = document.getElementById("actives2");
const actives3 = document.getElementById("actives3");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const countText = document.getElementById("count");
const dele1 = document.getElementById("dele1");
const dele2 = document.getElementById("dele2");
const dele3 = document.getElementById("dele3");
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");


d1.addEventListener("click", () => {
  dele1.classList.remove("hidden");
  dele2.classList.add("hidden");
  dele3.classList.add("hidden");
});
d2.addEventListener("click", () => {
  dele1.classList.add("hidden");
  dele2.classList.remove("hidden");
  dele3.classList.add("hidden");
});
d3.addEventListener("click", () => {
  dele1.classList.add("hidden");
  dele2.classList.add("hidden");
  dele3.classList.remove("hidden");
});

img1.addEventListener("click", () => {
  mainImg.src = "./img/k.jpg";
});
img2.addEventListener("click", () => {
  mainImg.src = "./img/Napa Cabbage on White Background.png";
});
img3.addEventListener("click", () => {
  mainImg.src = "./img/Napa Cabbage Halves in Detail.png";
});
img4.addEventListener("click", () => {
  mainImg.src = "./img/cb00ab131cedd52fb9502b0468325f36.jpg";
});

actives.addEventListener("click", () => {
  actives.classList.add("border-2", "border-[#00B207]");
});
actives1.addEventListener("click", () => {
  actives1.classList.add("border-2", "border-[#00B207]");
});
actives2.addEventListener("click", () => {
  actives2.classList.add("border-2", "border-[#00B207]");
});
actives3.addEventListener("click", () => {
  actives3.classList.add("border-2", "border-[#00B207]");
});

let num = 0;

function increment() {
  num++;
  updateUI();
}
function decrement() {
  num--;
  if (num < 0) {
    num = 0;
  }
  updateUI();
}

function updateUI() {
  countText.innerHTML = num;
}

plus.addEventListener("click", increment);
minus.addEventListener("click", decrement);


const cartMinus = document.getElementById("cartMinus");
const cartPlus = document.getElementById("cartPlus");
const cartCount = document.getElementById("cartCount");
let sum = 0;

function incrementC() {
  sum++;
  updateCartUI();
}
function decrementC() {
  sum--;
  if (sum < 0) {
    sum = 0;
  }
  updateCartUI();
}

function updateCartUI() {
  cartCount.textContent = sum;
}

cartPlus.addEventListener("click", incrementC);
cartMinus.addEventListener("click", decrementC);
