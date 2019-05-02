"use strict";
function f(run) {
    if (run) {
        let x = 10;
    }
    return x;
}
f(true);
let a = f(false);
console.log(a);
var mySymbol = Symbol();
