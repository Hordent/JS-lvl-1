'sue strict';
let modal = document.querySelector('.b-modal');
let button = document.querySelector('.b-btn');
let close = document.querySelector('.b-modal__close');
modal.classList.add('animated');
button.addEventListener('click', function(event) {
    modal.classList.remove('rollOut');
    modal.classList.add('rollIn');
    modal.classList.remove('b-modal_hide');
})
close.addEventListener('click', function(event) {
    modal.classList.remove('rollIn');
    modal.classList.add('rollOut');
})


