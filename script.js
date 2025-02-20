import { fetchData } from "./fetchProduct.js";
import { displayProducts } from "./displayProduct.js";
import { createlimitProductCard } from "./createProductCard.js";

const allSlidingList = document.querySelector(".sliding-list");
const slideListItems = document.querySelectorAll(".slide-list-item");
let currentCount = 0;

const slideNext = document.querySelector("#slideNext");
slideNext.addEventListener("click", () => {
  if (Array.from(slideListItems).length - 1 > currentCount) {
    currentCount++;
    allSlidingList.style.transform = `translateX(${-37.5 * currentCount}vw)`;
  }
});

const slidePrev = document.querySelector("#slidePrev");
slidePrev.addEventListener("click", () => {
  if (currentCount > 0) {
    currentCount--;
    allSlidingList.style.transform = `translateX(${-37.5 * currentCount}vw)`;
  }
});

const limitProductPath = "/products?limit=3"

async function initializeApp() {
  const allProductList = await fetchData(limitProductPath);

  displayProducts(allProductList, createlimitProductCard, "limitProductList");
}

document.addEventListener("DOMContentLoaded", initializeApp);
