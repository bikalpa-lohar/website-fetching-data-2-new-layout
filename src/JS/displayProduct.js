export function displayProducts(products, productCardFunc, id) {
  const fragmentEle = productsFragment(products, productCardFunc);
  const productLists = document.querySelector(`#${id}`);
  if (!productLists) {
  }

  productLists.appendChild(fragmentEle);
}

function productsFragment(fProductList, productCardFunc) {
  const productCardList = fProductList.map((product) => {
    const productsListItem = document.createElement("li");
    productsListItem.setAttribute("id", `${product.id}`)
    const cardItem = productCardFunc(product);
    productsListItem.appendChild(cardItem);
    return productsListItem;
  });
  const fragmentElement = document.createDocumentFragment();
  productCardList.forEach((card) => {
    fragmentElement.appendChild(card);
  });
  return fragmentElement;
}

export function displayProductsByMenu(products, productCardFunc, sectionTitle) {
  const sectDisplayCatg = document.querySelector("#sectDisplayCatg");

  const SectHeading = document.createElement("h3");
  SectHeading.textContent = `${sectionTitle}`;

  const fragmentEle = productsFragment(products, productCardFunc);
  const productLists = document.createElement("ul");
  if (!productLists) {
  }

  productLists.appendChild(fragmentEle);
  sectDisplayCatg.appendChild(SectHeading);
  sectDisplayCatg.appendChild(productLists);
}
