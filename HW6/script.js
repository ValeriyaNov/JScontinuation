"use strict";
const productEl = document.querySelector('.container-board');

function greatCard(img, title, text, price) {
    return `<div class="board1 fon ">
    <div class="flex-board1 cont "><img src="${img}" alt="AI " class="picture-board1 "> <button class="btn ">
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
        productEl.insertAdjacentHTML('beforeend', greatCard(element.img, element.title, element.description, element.price));

    });
}
greatProduct(dataInfo);