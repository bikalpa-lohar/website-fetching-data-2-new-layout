import { fetchData } from "./JS/fetchProduct.js";
import { displayProducts } from "./JS/displayProduct.js";
import { createlimitProductCard } from "./JS/createProductCard.js";
import "./styles/style.css";
import "./images/main-img.jpg";
import "./images/about.jpg";
import "./images/articleSect.jpg";
import "./images/cart.svg";
import "./images/categorySectImg.jpg";
import "./images/person-icon.svg";
import "./images/search.svg";
import "./images/slide-img (1).jpg";
import "./images/slide-img (2).jpg";
import "./images/slide-img (3).jpg";
import "./images/slide-img (4).jpg";
import "./images/slide-img (5).jpg";
import "./images/slide-img (6).jpg";
import "./images/slide-img (7).jpg";
import "./images/slide-img (8).jpg";



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
