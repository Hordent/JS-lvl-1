'use strict';

let createBoard = function () {

    let boardHTML = '<table cellspacing="0" class="board">';
    let bgColor = '#fff';
    let text = '';
    for (let y = 9; y >= 0; y--) {
        boardHTML += '<tr>'
        for (let x = 0; x <= 9; x++) {
            if (y > 0 && y < 9 && x > 0 && x < 9) {
                if ((y + x) % 2 == 0) {
                    bgColor = '#e5ad34';
                } else {
                    bgColor = '#ffe1a0';
                }
            }
            if ((x === 0 || x === 9) && y > 0 && y < 9) {
                text = y;
            }

            if (y === 0 || y === 9) {

                switch (x) {
                    case 1:
                        text = 'A';
                        break;
                    case 2:
                        text = 'B';
                        break;
                    case 3:
                        text = 'C';
                        break;
                    case 4:
                        text = 'D';
                        break;
                    case 5:
                        text = 'E';
                        break;
                    case 6:
                        text = 'F';
                        break;
                    case 7:
                        text = 'G';
                        break;
                    case 8:
                        text = 'H';
                        break;
                }
            }
            boardHTML += '<td class="data-x:' + x + ' data-y:' + y + '" width="48" height="48" align="center" bgcolor=' + bgColor + '>' + text + '</td>';
            bgColor = '#fff';
            text = '';
        }
        boardHTML += '</tr>';
    }
    document.body.innerHTML = boardHTML;
}
