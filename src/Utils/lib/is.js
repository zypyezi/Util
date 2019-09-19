import {baseIs} from './regexp'

export default {
    ...baseIs,

    // 为空 或不存在, 数字大于0 
    isEmpty: (obj)=> {

        if (!obj) {
            return true
        }
    
        if (obj instanceof Array) {
            return obj.length === 0
        }
    
        if(typeof obj == 'string' ){
            return obj.trim().length == 0
        }
    
        if (typeof obj == 'number' ){
            return !(obj > 0)
        }
    
        return Object.keys(obj).length === 0
    },

    // 一个简单数组里面值是否唯一, 返回去重的后的数组
    isUnique: (arr, newArr =[] ) => {
        let num
    
        if ( arr.length >0 && arr.indexOf(num = arr.shift()) == -1 ) {
            newArr.push(num)
        }
    
        arr.length && isUnique(arr, newArr)

        return newArr
    }

}