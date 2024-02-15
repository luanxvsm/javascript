'use strict';

const images = [
    {'id': '1', 'url': './img/warriors1.jpg'},
    {'id': '2', 'url': './img/warriors2.jpg'},
    {'id': '3', 'url': './img/warriors3.jpg'},
    {'id': '4', 'url': './img/warriors4.jpg'},
    {'id': '5', 'url': './img/warriors5.jpg'},
    {'id': '6', 'url': './img/warriors6.jpg'}
]

const containerItems = document.querySelector('#container-items')

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length -1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
