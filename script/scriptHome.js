const dataProducts = [
  {
    id: 1,
    img: "/img/image1.webp",
    title: "ELLERY X M'O CAPSULE",
    price: "$52.00",
    content:
      "Known for her sculptural takes on traditional tailoring,Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
  },
  {
    id: 2,
    img: "/img/image2.webp",
    title: "ELLERY X M'O CAPSULE",
    price: "$52.00",
    content:
      "Known for her sculptural takes on traditional tailoring,Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
  },
  {
    id: 3,
    img: "/img/image3.webp",
    title: "ELLERY X M'O CAPSULE",
    price: "$52.00",
    content:
      "Known for her sculptural takes on traditional tailoring,Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
  },
  {
    id: 4,
    img: "/img/image4.webp",
    title: "ELLERY X M'O CAPSULE",
    price: "$52.00",
    content:
      "Known for her sculptural takes on traditional tailoring,Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
  },
  {
    id: 5,
    img: "/img/image5.webp",
    title: "ELLERY X M'O CAPSULE",
    price: "$52.00",
    content:
      "Known for her sculptural takes on traditional tailoring,Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
  },
  {
    id: 6,
    img: "/img/image6.webp",
    title: "ELLERY X M'O CAPSULE",
    price: "$52.00",
    content:
      "Known for her sculptural takes on traditional tailoring,Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
  }
];

dataProducts.forEach((dataProduct) => {
  const productEl = document.querySelector(".product");
  const productCardEl = document.createElement("div");
  productCardEl.classList.add("product__card");

  const productCardImgEl = document.createElement("a");
  productCardImgEl.classList.add("product__card-image");

  const imgEl = document.createElement("img");
  imgEl.setAttribute(dataProduct.src, dataProduct.title);
  imgEl.src = dataProduct.img;
  imgEl.alt = dataProduct.title;
  
  const productCardBgEl = document.createElement("div");
  productCardBgEl.classList.add("product__card-bg");

  const productBtmEl = document.createElement("button");
  productBtmEl.classList.add("product__add");
  const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgEl.setAttribute("width", "27");
  svgEl.setAttribute("height", "25");
  svgEl.setAttribute("fill", "#fff");
  const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path1.setAttribute("d", "M21.877 22.266a.146.146 0 0 0 .084-.053c.007-.01.015-.018.023-.027.036-.042.04-.13.039-.175-.013-.107-.104-.18-.181-.18h-.01c-.078.006-.166.11-.16.232.01.116.096.203.168.203h.037ZM8.22 22.26c.1 0 .18-.095.18-.21 0-.116-.08-.21-.18-.21-.1 0-.18.094-.18.21 0 .116.08.21.18.21ZM22 24.266h-.16c-1.138 0-2.083-.911-2.163-2.068-.08-1.205.817-2.28 2.019-2.362.049-.003.097-.005.146-.005 1.138 0 2.1.901 2.178 2.057.031.603-.145 1.173-.53 1.613a2.16 2.16 0 0 1-1.49.765ZM8.22 24.26c-1.204 0-2.18-.99-2.18-2.21s.976-2.21 2.18-2.21c1.204 0 2.18.99 2.18 2.21s-.976 2.21-2.18 2.21Zm12.979-6.866H9.134a.965.965 0 0 1-.93-.716L4.278 2.247H1.522a.972.972 0 0 1-.961-.978c0-.537.433-.977.961-.977H5c.432 0 .816.293.929.717l3.925 14.43h10.704l3.557-8.306H12.258a.973.973 0 0 1-.962-.978c0-.537.433-.977.962-.977H25.59a.95.95 0 0 1 .801.44 1 1 0 0 1 .08.928l-4.39 10.26a.963.963 0 0 1-.881.587Z");
  path1.setAttribute("stroke", "currentColor");
  path1.setAttribute("stroke-width", "0");
  
  const text = document.createTextNode("Add to Cart");
  
  const productContentEl = document.createElement("div");
  productContentEl.classList.add("product__content");
  const productContentNameEl = document.createElement("h2");
  productContentNameEl.classList.add("product__content-name");
  productContentNameEl.textContent = dataProduct.title;
  const productContentDiscrEl = document.createElement("p");
  productContentDiscrEl.classList.add("product__content-description");
  productContentDiscrEl.textContent = dataProduct.content;
  const productContentPriceEl = document.createElement("h2");
  productContentPriceEl.classList.add("product__content-price");
  productContentPriceEl.textContent = dataProduct.price;

  productEl.appendChild(productCardEl);
  productCardEl.appendChild(productCardImgEl);
  productCardImgEl.appendChild(imgEl);
  productCardImgEl.appendChild(productCardBgEl);
  productCardBgEl.appendChild(productBtmEl);
  svgEl.appendChild(path1);
  productBtmEl.appendChild(svgEl);
  productBtmEl.appendChild(text);
  productCardEl.appendChild(productContentEl);
  productContentEl.appendChild(productContentNameEl);
  productContentEl.appendChild(productContentDiscrEl);
  productContentEl.appendChild(productContentPriceEl);
});
