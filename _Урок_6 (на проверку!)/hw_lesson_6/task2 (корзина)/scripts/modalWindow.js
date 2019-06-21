'use strict';

let modalWindow = {
    window: document.querySelector('.b-modal'),
    modalClose: document.querySelector('.b-modal__close'),

    hide() {
        this.window.classList.remove('b-modal_hide');
    },

    refresh() {
        this.clear();
        this.window.insertAdjacentHTML('beforeend', this.getBasketHMTL());
    },

    clear() {
        let content = this.window.querySelector('div');
        if (!(content === null)) {
            this.window.removeChild(content);
        }

    },

    getBasketHMTL() {
        let basketHTML = '';
        if (basket.basketList.length === 0) {
            basketHTML = `<div class="emptyBasket">Корзина пуста</div>`;
            return basketHTML;
        }
        basketHTML = `<div class="fullBasket">Корзина заполняется</div>`;
        return basketHTML;
    }
};