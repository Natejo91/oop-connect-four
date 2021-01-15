class Column {
    constructor(name) {
        //needs to be filled
        this.tokens = [null, null, null, null, null, null];
    }
    add(playerNumber) {
        for (let index = 5; index >= 0; index -= 1) {
            if (this.tokens[index] === null) {
                this.tokens[index] = playerNumber;
                break;
            }
        }
    }
    getTokenAt(rowIndex) {
        return this.tokens[rowIndex];
    }
}

export default Column;
