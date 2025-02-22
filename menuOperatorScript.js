import { fetchData } from "./fetchProduct.js";
import { displayProductsByMenu } from "./displayProduct.js";
import { createlimitProductCard } from "./createProductCard.js";

async function fetchAndDisplay(productPath, catgName, ulId) {
  const allProductList = await fetchData(productPath);

  displayProductsByMenu(allProductList, createlimitProductCard, catgName);

  // displayProducts(allProductList, createlimitProductCard, ulId);
}
const menuList = document.querySelectorAll(".menu > li");
menuList.forEach(displayByCatg);

const CatgList = document.querySelectorAll(".asideCatgList > li");
CatgList.forEach(displayByCatg);

function displayByCatg(catg) {
  catg.addEventListener("click", (e) => {
    e.preventDefault();
    removeAndAddActiveStyle(catg);

    const sectDisplayCatg = document.querySelector("#sectDisplayCatg");
    sectDisplayCatg.innerHTML = "";

    if (e.target.textContent.toUpperCase() === "ALL") {
      const allProductPath = "/products";
      fetchAndDisplay(allProductPath, `Products`);

    } else if (e.target.textContent.toUpperCase() === "MEN'S") {
      const menProductPath = "/products/category/men's clothing";
      fetchAndDisplay(menProductPath, `Men's Clothing`);

    } else if (e.target.textContent.toUpperCase() === "WOMEN'S") {
      const womenProductPath = "/products/category/women's clothing";
      fetchAndDisplay(womenProductPath, `Women's Clothing`);

    } else if (e.target.textContent.toUpperCase() === "JEWELERY") {
      const jeweleryProductPath = "/products/category/jewelery";
      fetchAndDisplay(jeweleryProductPath, `Jewelery`);
      
    } else if (e.target.textContent.toUpperCase() === "ELECTRONICS") {
      const electronicsProductPath = "/products/category/electronics";
      fetchAndDisplay(electronicsProductPath, `Electronics`);
    }
  });
}

function removeAndAddActiveStyle(element) {
  menuList.forEach((item) => {
    item.classList.remove("active");
  });

  CatgList.forEach((item) => {
    item.classList.remove("active-two");
  });
  element.classList.add("active-two");
  element.classList.add("active");
}




// const liProduct = document.querySelectorAll("#sectDisplayCatg > ul >li");
// Array.from(liProduct).forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.preventDefault();
//     removeAndAddActiveStyle(element)
//     console.log(item.getAttribute("id"))
//     // const aProductCardPath = `/products/${}`;
//     // fetchAndDisplay(aProductCardPath, `singleProduct`)
//   })
// })
