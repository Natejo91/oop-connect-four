import Column from "./column.js";

//manage player names, create the name of the specific game
class Game {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.currentPlayer = 1;
        this.columns = [new Column('column-0'), new Column("column-1"), new Column("column-2"), new Column("column-3"), new Column("column-4"), new Column("column-5"), new Column("column-6")];
    }
    getName() {
        return `${this.p1} vs. ${this.p2}`;
    }

    playInColumn (columnName) {
        let currentColumn = this.columns[columnName.slice(columnName.length - 1)];
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
