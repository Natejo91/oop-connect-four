import Column from "./column";

//manage player names, create the name of the specific game
class Game {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.currentPlayer = 1;
        this.columns = [new Column(0), new Column(1), new Column(2), new Column(3), new Column(4), new Column(5), new Column(6)];
    }
    getName() {
        return `${this.p1} vs. ${this.p2}`;
    }
    playInColumn (columnIndex) {
        let currentColumn = this.columns[columnIndex];
        currentColumn.add(this.currentPlayer);
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }
    getTokenAt(rowIndex, colIndex) {
        let cColumn = this.columns[colIndex];
        return cColumn.getTokenAt(rowIndex);
    }
}

export default Game;
