class ColumnWinInspector {
    constructor(columnObj) {
        this.columnObj = columnObj;
    }

    inspect() {
        for (let i = 0; i <= 2; i++) {
            const token1 = this.columnObj.getTokenAt(i);
            const token2 = this.columnObj.getTokenAt(i + 1);
            const token3 = this.columnObj.getTokenAt(i + 2);
            const token4 = this.columnObj.getTokenAt(i + 3);

            if (token1 === token2 && token2 === token3 && token3 === token4 && token1 !== null) {
                return token1;
            }
        }
        return 0;
    }
}


export default ColumnWinInspector;
