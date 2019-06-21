'use strict';
//Работа с корзиной
let modal = document.querySelector('.b-modal');
let basketBtn = document.querySelector('.header_basketBtn');
let modalClose = document.querySelector('.b-modal__close');

basketBtn.addEventListener('click', function (event) {
    modal.classList.remove('b-modal_hide');
    modal.innerHTML = getBasketHMTL();
});
modalClose.addEventListener('click', function (event) {
    modal.classList.add('b-modal_hide');
});

//Работа с карточками товара
let productBtns = document.querySelectorAll('.productList .product .product_btn');
productBtns.forEach(function (element) {
    element.addEventListener('click', function (event) {
        let productCard = event.target.parentNode;
        let productId = +productCard.querySelector('.id').innerText;
        let productName = productCard.querySelector('h3').innerText;
        let productPrice = +productCard.querySelector('.product_price').innerText;
        basket.addProduct(productId, productName, productPrice);

    });
});

function getBasketHMTL () {
    let basketHTML = '';
    if (basket.basketList.length === 0) {
        basketHTML = `<div class="emptyBasket">Корзина пуста</div>`;
        return basketHTML;
    }
}





