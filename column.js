

class Column {
    constructor(name) {
        //needs to be filled
        this.column = [];
        this.name = name;
    }
    add(playerNum) {
        this.column.push(playerNum);

    }
    getTokenAt(row) {
        if (column === []) {
            return null;
        }
        return this.column[row];
    }
}

export default Column
