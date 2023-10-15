"use strict";


// const text = document.querySelector('#block p:first-child');
// console.log(text);

// const text2 = document.getElementById('block').children[0];
// console.log(text2);

// const text3 = document.querySelector('.www');
// console.log(text3);

// const text4 = document.getElementsByClassName('www')[0];
// console.log(text4);
// Дан тег < a class = "link"
// href = "#" > link text html < /a>
// Вам необходимо поменять текст внутри ссылки на“ link text js”
// Заменить href, на значение https: //developer.mozilla.org/ru/ 
//     Дан тег < img class = "photo"
// src = ""
// alt = "" >
//     Вам необходимо с помощью js поменять значение src на любое изображение из интернетаconst link = document.querySelector(".link");

// link.setAttribute("href", "https://developer.mozilla.org/ru/ ");
// link.textContent = "link text js";

// const image = document.querySelector(".photo");
// image.setAttribute("src", "https://alexdev.ru/wp-content/uploads/2015/06/JS-logo.png");
// Дан тег < div class = "content" > < /div> 
// Создайте новый элемент p
// Добавьте в него текст“ Новый текстовый элемент”
// Добавьте созданный элемент внутри < div class = "content" > < /div>
// Удалите добавленный узел
// const newElement = document.createElement('p');
// newElement.textContent = 'Новый текстовый элемент';
// console.log(newElement);
// const oldElement = document.querySelector('.content');
// oldElement.appendChild(newElement);
// console.log(oldElement);
// oldElement.removeChild(newElement);
// console.log(oldElement);
// const content = document.querySelector('.content');
// const buttonAdd = document.querySelector('.add');
// const buttonRemove = document.querySelector('.remove');

// buttonAdd.addEventListener('click', () => {
//     const paragraph = document.createElement('p');
//     content.appendChild(paragraph);
//     paragraph.textContent = 'Новый текстовый элемент';
// });
// buttonRemove.addEventListener('click', () => {
//     const paragraph = content.querySelector('p');
//     paragraph.remove();
// });
// Создать элемент button, добавить в блок < div class = "content" > < /div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку
// const button = document.querySelector('button');
// let counter = 0;
// button.addEventListener('click', () => {
//     console.log(`на кнопку нажали ${++counter} раз`);
// });
// Дан тег < div class = "content" > < /div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки“ Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на“ Текст отправлен”
// Создать вторую кнопку, при клике на которую должен появляться параграф с произвольным текстом.
// При нажатии на вторую кнопку еще раз, текст должен пропадать.
buttonPar.addEventListener('mousedown', () => {
    let paragraph = content.querySelector('p');
    if (paragraph) {
        paragraph.remove();
    } else {
        paragraph = document.createElement('p');
        content.appendChild(paragraph);
        paragraph.textContent = 'Новый текстовый элемент';
    }
});