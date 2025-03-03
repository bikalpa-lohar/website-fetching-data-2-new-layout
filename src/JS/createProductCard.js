export const createlimitProductCard = (fProduct) => {
  const productCardDiv = document.createElement("div");
  productCardDiv.setAttribute("class", "product-card");

  const productFigure = document.createElement("figure");
  productFigure.setAttribute("class", "product-fig");

  const productImage = document.createElement("img");
  productImage.setAttribute("src", fProduct.image);
  productImage.setAttribute("class", "product-img");
  // productImage.setAttribute("width", "200px");
  // productImage.setAttribute("height", "250px");
  productFigure.appendChild(productImage);

  const productInfoDiv = document.createElement("div");
  productInfoDiv.setAttribute("class", "product-info");

  const productHeading = document.createElement("h3");
  productHeading.setAttribute("class", "product-heading");
  productHeading.textContent = fProduct.title;
  productInfoDiv.appendChild(productHeading);

  const productPrice = document.createElement("p");
  productPrice.setAttribute("class", "product-price");
  productPrice.textContent = `$${fProduct.price}`;
  productInfoDiv.appendChild(productPrice);

  productCardDiv.appendChild(productFigure);
  productCardDiv.appendChild(productInfoDiv);

  return productCardDiv;
};
