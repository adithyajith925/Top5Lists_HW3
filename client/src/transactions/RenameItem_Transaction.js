import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveItem_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
    
    @author McKilla Gorilla
 */
export default class RenameItem_Transaction extends jsTPS_Transaction {
    constructor(initStore, initItemNum, initOldName, initNewName) {
        super();
        this.store = initStore;
        this.initItemNum = initItemNum;
        this.initOldName = initOldName;
        this.initNewName = initNewName;
    }

    doTransaction() {
        this.store.changeItemName(this.initItemNum, this.initNewName)
    }
    
    undoTransaction() {
        this.store.changeItemName(this.initItemNum, this.initOldName)
    }
}