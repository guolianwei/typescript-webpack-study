"use strict";
const hello = "Hello World!";
console.log(hello);
class Site {
    name() {
        console.log("Runoob");
    }
}
var obj = new Site();
obj.name();
let binaryLiteral = 0b1010; // 二进制
let octalLiteral = 0o744; // 八进制
let decLiteral = 6; // 十进制
let hexLiteral = 0xf00d; // 十六进制
let nameMy = "Runoob";
let years = 5;
let words = `您好，今年是 ${nameMy} 发布 ${years + 1} 周年`;
let flag = true;
let arr = [1, 2];
let x;
x = ['runoob', 1];
let x1;
x = (() => { throw new Error('exception'); })();
function loop() {
    while (true) { }
}
var global_num = 12; // 全局变量
class Numbers {
    constructor() {
        this.num_val = 13; // 类变量
    }
    storeNum() {
        var local_num = 14; // 局部变量
    }
}
Numbers.sval = 10; // 静态变量
console.log("全局变量为: " + global_num);
console.log(Numbers.sval); // 静态变量
var obj1 = new Numbers();
console.log("类变量: " + obj1.num_val);
class Car {
    // 构造函数 
    constructor(engine) {
        this.engine = engine;
    }
    // 方法 
    disp() {
        console.log("发动机为 :   " + this.engine);
    }
}
function addPoints(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 });
// var newPointE=addPoints({x:1},{x:4,y:3})
var SomeNameSpaceName;
(function (SomeNameSpaceName) {
    class SomeClassName {
    }
    SomeNameSpaceName.SomeClassName = SomeClassName;
})(SomeNameSpaceName || (SomeNameSpaceName = {}));
