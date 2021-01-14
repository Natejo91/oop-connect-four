import Game from './game.js'

let game = undefined;
let board = document.getElementById('board-holder');
let gameName = document.getElementById('game-name');
let clickTargets = document.getElementById("click-targets");

function updateUI() {
    if (game === undefined) {
        board.classList.add('is-invisible');
    } else {
        board.classList.remove('is-invisible');
        gameName.innerHTML = game.getName();
        const currentPlayer = game.currentPlayer;

        if (currentPlayer === 1) {
            clickTargets.classList.add("red");
            clickTargets.classList.remove("black");
        } else if (currentPlayer === 2) {
            clickTargets.classList.remove('red');
            clickTargets.classList.add('black');
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    let p1Name = document.getElementById('player-1-name');
    let p2Name = document.getElementById('player-2-name');
    let newGameBtn = document.getElementById('new-game');
    let formName = document.getElementById('form-holder');

    formName.addEventListener('keyup', () => {                      //if both are empty, disable button
        if (p1Name.value.length > 0 && p2Name.value.length > 0) { // checking against undefined didnt work?
            newGameBtn.removeAttribute('disabled');   //might have to check
        } else {
            newGameBtn.setAttribute("disabled", 'true')
        }
    })


    newGameBtn.addEventListener('click', event => {
        event.preventDefault();
        game = new Game(p1Name.value, p2Name.value);     // THIS IS OUR GAME!
        p1Name.value = '';
        p2Name.value = '';
        newGameBtn.setAttribute('disabled', 'true');
        updateUI();
    })

    clickTargets.addEventListener("click", event => {
        game.playInColumn();
        updateUI();
    })


})
