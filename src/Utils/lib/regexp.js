/**
 *  记录一些使用过的正则方法
 */

 // (?=exp):零宽度正预测先行断言，它断言自身出现的位置的后面能匹配表达式exp
    //  /(?=product)_/.test('product_path')  false 
 // ? 负向零宽度断言   -- 不匹配， 零宽度
 // (?<=exp):零宽度正回顾后发断言，它断言自身出现的位置的前面能匹配表达式exp
 // (?!exp):零宽度负预测先行断言，断言此位置的后面不能匹配表达式exp
 // (?<!exp):零宽度负回顾后发断言 断言此位置的前面不能匹配表达式exp
 // (?:x) 匹配 'x' 但是不记住匹配项。这种括号叫作非捕获括号

// is 型函数
 export const baseIs = {
     // 手机号 13-19 号段
    isMobile: ( mobile ) => {
        return /^0?(13|14|15|16|17|18|19)[0-9]{9}$/.test(mobile)
    },

    // 邮箱
    isEmail: (email) => {
        return /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(email)
    },

    // 正整数
    isNumber: (value)=>{
        return /^\d+$/g.test(value)
    },

    // 为空
    isBlank: (value)=> {
        return !/\S/g.test(value)
    }

 }


// 格式化相关的正则
 export const baseFormat = {
    // 银行卡 四位一空格展示, (?=.) 确保最后一位后面没有空格
    formatBankCardId: (value) => {
        value = value || ''
        value = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ')
        return value
    },

    // 金额 三位逗号分隔
    formatMoney: (value) => {
        return value.replace(/\B(?=(?:\d{3})+\b)/g, ',')
    },

    // 金额大写
    formatCapital: (value) => {
        if (Number(n) === 0) {
            return '零元整'
        } 
        let unit = '京亿万仟佰拾兆万仟佰拾亿仟佰拾万仟佰拾元角分',
            str = ''
            n += '00'

        let p = n.indexOf('.')

        if (p >= 0)
            n = n.substring(0, p) + n.substr(p+1, 2)

        unit = unit.substr(unit.length - n.length)

        for (let i=0; i < n.length; i++) {
            str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i)
        }

        str = str.replace(/零(仟|佰|拾|角)/g, "零")
            .replace(/(零)+/g, "零")
            .replace(/零(兆|万|亿|元)/g, "$1")
            .replace(/(兆|亿)万/g, "$1")
            .replace(/(京|兆)亿/g, "$1")
            .replace(/(京)兆/g, "$1")
            .replace(/(京|兆|亿|仟|佰|拾)(万?)(.)仟/g, "$1$2零$3仟")
            .replace(/^元零?|零分/g, "")
            .replace(/(元|角)$/g, "$1整")

        return str
    },

    // 手机号脱敏
    formatPhoneDesensitization: phone => {
        const reg = /(\d{3})\d{4}(\d{4})/
        return `${phone}`.replace(reg, '$1****$2')
      }
 }

