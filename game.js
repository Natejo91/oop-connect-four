import Column from "./column.js";

//manage player names, create the name of the specific game
class Game {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.currentPlayer = 1;
        this.columns = [
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
        ];
    }
    getName() {
        return `${this.p1} vs. ${this.p2}`;
    }

    getTokenAt(rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAt(rowIndex);
    }

    isColumnFull(columnIndex) {
        return this.columns[columnIndex].isFull();

    }

    playInColumn(columnIndex) {
        this.columns[columnIndex].add(this.currentPlayer);

        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }

}

export default Game;
