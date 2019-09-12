/**
 *  多次触发的相同事件的触发合并为一次触发， 频繁事件的回调函数在某段连续时间内，在事件触发后只执行一次
 */


/**
 * 
 * @param {Function} fn    执行函数
 * @param {Number} delay  单位是毫秒
 * 
 * @return {Function}
 */
 const debounce = (fn, delay = 100, immidate) => {
    let timer = null

    return function () {

        let context = this
        console.log(this)
        let args = arguments

        if(timer) clearTimeout(timer)

        if(immidate){
            let callNow = !timer
        }
        timer = setTimeout(() => {
            console.log(this)
            fn.apply(context, args)
        }, delay)
    }

 }




 const _debounce = () => {

 }



 export default {
     debounce, 
     _debounce
}
