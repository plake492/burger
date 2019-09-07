const connection = require("../config/connection")

function questionMarks(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}