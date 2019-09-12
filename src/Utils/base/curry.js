/**
 * 柯里化  用于创建已经设置好了一个或者多个参数的函数
 * 使用闭包返回一个函数
 * es6 的bing 函数也实现了柯里化
 * 
 */


 /**
  * 使用场景
  * 1. 参数复用
  * 2. 延迟执行  ： bind  箭头函数   常见于onClick  性能： 箭头函数 > bind > curry
  * 3. 函数式编程 ： 纯函数、 compose、 container 
  * @param {*} fn 
  */


// 只能执行一次
 const curry = function(fn) {
     let args = Array.prototype.slice.call(arguments, 1)

     return function () {
        let innerArgs = Array.prototype.slice.call(arguments)
        let finalArgs = args.concat(innerArgs)

        return fn.apply(null, finalArgs)
    
     }
 }


// 可进行多次计算， 当不传参数时，才真正调用
 const multiCurry = function (fn){
    var args = Array.prototype.slice.call(arguments, 1)

    return function cb(){
        if(arguments.length == 0) {
            return fn.apply(this, args)
        }

        cb(fn.apply(this, args), )
        Array.prototype.push.apply(args, [].slice.call(arguments))
        return cb
    }
 }



 
