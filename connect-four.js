import Game from './game.js'

let game = undefined;
let board = document.getElementById('board-holder');
let gameName = document.getElementById('game-name');

function updateUI() {
    if (game === undefined) {
        board.className = 'is-invisible';
    } else {
        board.removeAttribute('class');
        gameName.innerHTML = game.getName();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    let p1Name = document.getElementById('player-1-name');
    let p2Name = document.getElementById('player-2-name');
    let newGameBtn = document.getElementById('new-game');
    let formName = document.getElementById('form-holder');

    formName.addEventListener('keyup', () => {
        if (p1Name.value.length > 0 && p2Name.value.length > 0) { // checking against undefined didnt work?
            newGameBtn.removeAttribute('disabled');   //might have to check
        }
    })
    newGameBtn.addEventListener('click', event => {
        event.preventDefault();
        game = new Game(p1Name.value, p2Name.value);
        p1Name.value = '';
        p2Name.value = '';
        newGameBtn.setAttribute('disabled', 'true');
        updateUI();
    })

})
