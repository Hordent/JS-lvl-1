'use strict';
let images = document.querySelectorAll('.product img');
let buttons = document.querySelectorAll('.product button');
let showInfo = function (element) {
    element.addEventListener('click', function (event) {
        let imgCheck = event.target.parentNode.querySelector('.img__hide');
        let button = event.target;
        let image = button.parentNode.querySelector('img');
        
        if (imgCheck === null) {            
            button.innerText = 'Отмена';
            let paragraph = document.createElement('p');
            paragraph.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsa officia provident laboriosam rem sit labore necessitatibus debitis ab est.'
            button.parentNode.insertBefore(paragraph, button);
            image.classList.add('img__hide');
        } else {
            button.innerText = 'Подробнее';
            //button.parentNode.removeChild(document.querySelector('p'));
            button.parentNode.removeChild(button.parentNode.querySelector('p'));
            image.classList.remove('img__hide');
        }

        
    })
}
buttons.forEach(showInfo);