const url = "/script/data.js";
async function getDataCart(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

document.addEventListener("DOMContentLoaded", async (e) => {
  const data = await getDataCart(url);
  const list = document.querySelector(".product-cards");
  data.forEach((element) => {
    list.insertAdjacentHTML(
      "beforeend",
      `
          <div class="cards">
          <div class="card__image">
            <img src="${element.img}" alt="${element.title}" class="stretch-image">
          </div>+
          -
          <div class="card__content">
            <div class="card__content-name">${element.title}</div>
            <div class="card__content-description">
              <p class="price">Price: <span class="colorful">$${element.price}</span></p>
              <p class="col">Color: $</p>
              <p class="size">Size: $</p>

              <form class="quan">
                <label for="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quan"
                  name="quantity"
                  min="1"
                  max="100"
                  value="$"
                />
              </form>
            </div>
          </div>
          <button class="delete">
          <button class="delete">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="#575757" d="m11.245 9 6.285-6.285a1.59 1.59 0 0 0-2.245-2.25L9 6.752 2.715.466a1.59 1.59 0 0 0-2.25 2.25L6.752 9 .466 15.285a1.59 1.59 0 0 0 2.25 2.25L9 11.248l6.285 6.285a1.591 1.591 0 0 0 2.25-2.25L11.244 9Z"/></svg>
            </button>
        </button>
        </div>
    `
    );
  });
  list.addEventListener('click', (e) => {
    if(e.target.closest('.delete')) {
       const item = e.target.closest('.card');
       if(item){
        item.remove();
       }
    }
})
});
