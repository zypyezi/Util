

 /**
  *  实现以下逻辑 
  * var result = sum(1)(2)(3);
  * console.log(result);//6
  */

 function add(x) {
    return function(y) {
        if (typeof y !== 'undefined') {
            x = x + y;
            return arguments.callee;
        } else {
            return x;
        }
    };
}


function add(a, b = 0) {
    return a + b
}

sum = multiCurry(add)



function add(n) {
    sum = n;
    const proxy = new Proxy(function a () {}, {
      get (obj, key) {
        return () => sum;
      },
      apply (receiver, ...args) {
        sum += args[1][0];
        return proxy;
      },
    });
    return proxy
  }
