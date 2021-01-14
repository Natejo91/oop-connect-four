

class Column {
    constructor(num) {
        //needs to be filled
        this.column = [];
        this.num = num;
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
