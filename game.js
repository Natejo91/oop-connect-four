//manage player names, create the name of the specific game
class Game {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.currentPlayer = 1;
    }
    getName() {
        return `${this.p1} vs. ${this.p2}`;
    }
    playInColumn () {
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }
}

export default Game
