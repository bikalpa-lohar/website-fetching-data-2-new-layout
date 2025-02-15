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
