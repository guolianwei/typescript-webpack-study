"use strict";
let sym1 = Symbol();
let sym2 = Symbol("key"); // 可选的字符串key
let sym3 = Symbol('key');
console.info(sym3);
//Symbols是不可改变的唯一的
console.info(sym2 === sym3); //返回false，Symbol的实例是唯一的
//像字符串一样，symbols也可以被用作对象属性的键。
let sym = Symbol();
let obj = {
    [sym]: 'value'
};
console.info(obj);
console.info(obj[sym]);
console.info(sym === sym1); //返回false，每次调用Symbol()都返回不同的实例
//Symbols也可以用来声明对象的属性和类成员
const getClassNameSymbol = Symbol();
class C {
    [getClassNameSymbol]() {
        return "C";
    }
}
let c = new C();
let className = c[getClassNameSymbol]();
console.info(c);
console.log(className);
