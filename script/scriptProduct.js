const data = JSON.parse(dataProducts);

const productCards = document.querySelector('.cards');

data.forEach(element => {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');

    const cardImg = document.createElement('img');
    cardImg.classList.add('img');
    cardImg.src = element.url;
      
    const cardContent = document.createElement('div');
    cardContent.classList.add('card__content');

    const cardContentName = document.createElement('h3');
    cardContentName.classList.add('card__content-name');
    cardContentName.textContent = element.name;

    const cardContentDesc = document.createElement('div');
    cardContentDesc.classList.add('card__content-description');
    const cardText = document.createElement('p');
    cardText.classList.add('desc__text');
    cardText.textContent = `Price: `;

    const cardSelect = document.createElement('span');
    cardSelect.classList.add('colorful');
    cardSelect.textContent = `$${element.price}`;

    const cardColor = document.createElement('p');
    cardColor.classList.add('desc__text');
    cardColor.textContent = `Color: ${element.color}`;

    const cardSize = document.createElement('p');
    cardSize.classList.add('desc__text');
    cardSize.textContent = `Size: ${element.size}`;

    const cardQuantity = document.createElement('p');
    cardQuantity.classList.add('desc__text');
    cardQuantity.textContent = `Quantity: `;

    const cardInput = document.createElement('input');
    cardInput.classList.add('quan');
    cardInput.setAttribute('value', 1)

    productCards.appendChild(cardEl);
    cardEl.appendChild(cardImg);
    cardEl.appendChild(cardContent);
    cardContent.appendChild(cardContentName);
    cardContent.appendChild(cardContentDesc);
    cardContentDesc.appendChild(cardText); 
    cardText.appendChild(cardSelect);
    cardContentDesc.appendChild(cardColor);
    cardContentDesc.appendChild(cardSize);
    cardContentDesc.appendChild(cardQuantity);
    cardQuantity.appendChild(cardInput);

});
