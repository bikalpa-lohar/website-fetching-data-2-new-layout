import { fetchData } from "./fetchProduct.js";
import { displayProductsByMenu } from "./displayProduct.js";
import { createlimitProductCard } from "./createProductCard.js";


async function fetchAndDisplay(productPath, ulId) {
  const allProductList = await fetchData(productPath);

  displayProductsByMenu(allProductList, createlimitProductCard, ulId);
}


const menuList = document.querySelectorAll(".menu > li");
Array.from(menuList).forEach((catg) => {
    catg.addEventListener("click", e => {
        e.preventDefault();
        removeAndAddActiveStyle(catg);

        const sectDisplayCatg = document.querySelector("#sectDisplayCatg");
        sectDisplayCatg.innerHTML = "";

        if(e.target.textContent ==="ALL"){
            const allProductPath = "/products";
            fetchAndDisplay(allProductPath, `Products`);
            
        }else if(e.target.textContent ==="MEN'S"){
            const menProductPath = "/products/category/men's clothing";
            fetchAndDisplay(menProductPath, `Men's Clothing`);
            
        }else if(e.target.textContent ==="WOMEN'S"){
            const womenProductPath = "/products/category/women's clothing";
            fetchAndDisplay(womenProductPath, `Women's Clothing`);
            
        }else if(e.target.textContent ==="JEWELERY"){
            const jeweleryProductPath = "/products/category/jewelery";
            fetchAndDisplay(jeweleryProductPath, `Jewelery`);
            
        }else if(e.target.textContent ==="ELECTRONICS"){
            const electronicsProductPath = "/products/category/electronics";
            fetchAndDisplay(electronicsProductPath, `Electronics`);
            
        }
    })
})


function removeAndAddActiveStyle(element) {
    Array.from(menuList).forEach(item => {
      item.classList.remove("active")
    })
  
    element.classList.add("active")
}
  