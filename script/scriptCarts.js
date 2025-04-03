"use strict";
// Функция для добавления продуктов в список
function addProductsToList(products) {
    // Получаем элемент ul для добавления продуктов
    const productList = document.getElementById('product-list');
    // Генерация HTML-кода для списка продуктов
    let htmlContent = '';
    products.forEach(product => {
    htmlContent += `
    <li>
    <img src="${product.img}" alt="${product.title}"
    width="150" height="150">
    <h2>${product.title}</h2>
    <p>${product.content}</p>
    <p>Price: ${product.price.toFixed(2)}</p>
    <button class="add-to-cart"
    data-id="${product.id}">Add to Cart</button>
    </li>
    `;
    });
    // Добавляем HTML-код в элемент ul
    productList.insertAdjacentHTML('beforeend', htmlContent);
    }
    // Функция для добавления товара в корзину
    function addToCart(productId) {
    // Найти продукт по ID
    const product = data.find(item => item.id === productId);
    // Если продукт найден, добавить его в корзину
    if (product) {
    // Получаем элемент ul для добавления товаров в корзину
    const cartList = document.getElementById('cart-list');
    // Генерация HTML-кода для товара в корзине
    const cartItemHTML = `
    <li>
    <img src="${product.img}" alt="${product.title}"
    width="50" height="50">
    <h3>${product.title}</h3>
    <p>Price: ${product.price.toFixed(2)}</p>
    </li>
    `;
    // Добавляем товар в корзину
    cartList.insertAdjacentHTML('beforeend', cartItemHTML);
    }
    }
    // Обработчик клика на кнопки "Add to Cart"
    document.addEventListener('click', (event) => {
    if (event.target &&
    event.target.classList.contains('add-to-cart')) {
    const productId =
    parseInt(event.target.getAttribute('data-id'), 10);
    addToCart(productId);
    }
    });
    // После загрузки DOM вызываем функцию для добавления продуктов
    document.addEventListener('DOMContentLoaded', () => {
    addProductsToList(data);
    });