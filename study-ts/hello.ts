const hello : string = "Hello World!"
console.log(hello)
class Site{
    name():void{
        console.log("Runoob");
    }
}
var obj=new Site();
obj.name();


let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744;    // 八进制
let decLiteral: number = 6;    // 十进制
let hexLiteral: number = 0xf00d;    // 十六进制

let nameMy: string = "Runoob";
let years: number = 5;
let words: string = `您好，今年是 ${ nameMy } 发布 ${ years + 1} 周年`;

let flag: boolean = true;
let arr:Array<number>=[1,2];
let x:[String,number];
x=['runoob',1];
let x1:never;
x=(()=>{throw new Error('exception')})();

function loop():never{
    while(true){}
}

var global_num = 12          // 全局变量
class Numbers { 
   num_val = 13;             // 类变量
   static sval = 10;         // 静态变量
   
   storeNum():void { 
      var local_num = 14;    // 局部变量
   } 
} 
console.log("全局变量为: "+global_num)  
console.log(Numbers.sval)   // 静态变量
var obj1 = new Numbers(); 
console.log("类变量: "+obj1.num_val)

class Car { 
    // 字段 
    engine:string; 
 
    // 构造函数 
    constructor(engine:string) { 
        this.engine = engine 
    } 
    // 方法 
    disp():void { 
        console.log("发动机为 :   "+this.engine) 
    } 
}
interface IPoint {
    x:number;
    y:number;
}
function addPoints(p1:IPoint,p2:IPoint):IPoint{
    var x =p1.x +p2.x
    var y=p1.y +p2.y
    return {x:x,y:y}
}
var newPoint=addPoints({x:3,y:4},{x:5,y:1})
// var newPointE=addPoints({x:1},{x:4,y:3})
namespace SomeNameSpaceName{
    export interface ISomeInterfaceName{}
    export class SomeClassName{}
}