/***
 * (function (z,b){
 *   z+b
 * })(1,2)
 * 立即执行的函数表达式
 *  */

var Runoob;
(function (Runoob){
    var Calc=(function(){

    })
    Calc.prototype.doSum = function(limit){
        var sum=0;
        for(var i=0;i<=limit;i++){
            sum=sum+i;
        }
        return sum;
    }
    Runoob.Calc =Calc;
    return Calc;
})(Runoob || (Runoob = {}));

var test= new Runoob.Calc();