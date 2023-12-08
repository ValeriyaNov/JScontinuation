"use strict";
const productEl = document.querySelector('.container-board');

function greatCard(img, title, text, price, id) {
    //console.log(id);
    return `<div class="board1 fon ">
    <div class="flex-board1 cont "><img src="${img}" alt="AI " class="picture-board1 "> <button  id="${id}" class="btn ">
        <img src="img/carrt.png " alt="cart "> 
        Add to Cart
    </button></div>
    <div class="text-price cont-pr1 ">
        <div class=" ">
            <h2 class="title-board ">${title}</h2>
            <p class="text-board ">${text}</p>
            <p class="price-board ">${price}</p>
        </div>
    </div>
</div>`
}

function greatProduct(data) {
    const dataEl = JSON.parse(data);
    dataEl.forEach(element => {
        productEl.insertAdjacentHTML('beforeend', greatCard(element.img, element.title, element.description, element.price, element.id));

    });
}
greatProduct(dataInfo);

//New
//nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
const previosEl = document.querySelector('.footertotal');
//console.log(previosEl);

function greatItemCartCard(img, title, price, id, color, size) {
    return `<div id = "${id}" class="cart__cards-item">
    <div class='cart__cards-img'>
    <img  src="${img}" alt="AI"></div>
    <div class="cart__cards-desc">
        <div class="cart__cards-title">
        ${title}
        </div>
        <div>
        <svg class="cart__cards-close" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
                d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                fill="#575757"
            />
        </svg></div>
        <div class="cart__cards-price">
            Price: <span>${price}</span>
        </div>
        <div class="cart__cards-color">Color: ${color}</div>
        <div class="cart__cards-size">Size: ${size}</div>
        <div class="cart__cards-quantity">
            Quantity:
            <input class = quantyty type="number" name="t" id="y" value="1">
        </div>
    </div>
</div>`
}

function greatItem(data, idEl, cardEl) {
    const dataEl = JSON.parse(data);
    dataEl.forEach(elementJS => {
        const arrayCart = document.querySelectorAll('.cart__cards-item');

        let counter = 0;
        arrayCart.forEach(el => {

            if ((idEl === el.id)) {
                console.log('Товар уже добавлен');
                counter = counter + 1;
            }
        });
        console.log(counter);
        if ((elementJS.id === idEl) && (counter === 0)) {
            cardEl.insertAdjacentHTML('beforeend', greatItemCartCard(elementJS.img, elementJS.title, elementJS.price, elementJS.id, elementJS.color, elementJS.size));
        }

    })
};

const btnEl = document.querySelectorAll('.btn');
const bodyy = document.querySelector('body');
btnEl.forEach(element => {
    let idEl = element.id;
    element.addEventListener('click', function(e) {
        let quantyty = document.querySelector('.quantyty');
        let cardEl = document.querySelector('.car_items');
        console.log(cardEl);
        if (cardEl === null) {
            cardEl = document.createElement("div");
            cardEl.classList.add("car_items");
            const divTitleCardEl = document.createElement('div');
            divTitleCardEl.classList.add('divTitleCardEl');
            const titleCartEl = document.createElement('h2');
            titleCartEl.textContent = 'Cart Items';
            divTitleCardEl.insertAdjacentElement('beforeend', titleCartEl);
            cardEl.insertAdjacentElement('beforeend', divTitleCardEl);
            previosEl.insertBefore(cardEl, previosEl.children[1]);

        }
        greatItem(dataInfo, idEl, cardEl);

    });

});
const closeEl = document.querySelector('.cart__cards-close');
previosEl.addEventListener('click', function(e) {
    console.log('Privet');
    const elTarget = e.target.closest('.cart__cards-close');
    //elTarget.remove();
    const parent1 = elTarget.parentElement;
    const parent2 = parent1.parentElement;
    const parent3 = parent2.parentElement;
    //console.log(parent3);
    parent3.remove();
    const parentParent = document.querySelector('.car_items');
    const cartCart = document.querySelector('.cart__cards-item');
    console.log(cartCart);
    if (cartCart === null) {
        parentParent.children[0].remove();
        parentParent.remove();
    }
    console.log(parentParent);
});