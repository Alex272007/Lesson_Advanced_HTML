document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('cart')) || [];
  const list = document.querySelector('.cards');

  if (data.length === 0) {
    list.innerHTML = "<p>Корзина пуста</p>";
    return;

  }
  data.forEach((element, index) => {
    list.insertAdjacentHTML('beforeend', `
      <div class="card" data-index="${index}">
        <img src="${element.img}" alt="${element.title}">
        <div class="card__content">
          <h2 class="card__content-name">${element.title}</h2>
          <div class="card__content-description">
            <p>Price: <span class="colorful">${element.price}</span></p>
            <p>Color: <span class="gray">${element.color}</span></p>
            <p>Size: <span class="gray">${element.size}</span></p>
            <p>Quantity: <input type="number" value="${element.count}" /></p>
          </div>
        </div>
        <button class="delete">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="#575757" d="m11.245 9 6.285-6.285a1.59 1.59 0 0 0-2.245-2.25L9 6.752 2.715.466a1.59 1.59 0 0 0-2.25 2.25L6.752 9 .466 15.285a1.59 1.59 0 0 0 2.25 2.25L9 11.248l6.285 6.285a1.591 1.591 0 0 0 2.25-2.25L11.244 9Z"/></svg>
        </button>
      </div> 
    `);
  });

  list.addEventListener('click', (e) => {
    if (e.target.closest('.delete')) {
      const item = e.target.closest('.card');
      const index = item.dataset.index;
      item.remove();

      // Удалить из localStorage
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  });
});

