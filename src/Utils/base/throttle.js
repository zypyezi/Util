


const throttle = (fn, threshhold = 250) => {

    let timer

    return function () {
        let context = this
        let args = arguments

        if(timer) return

        timer = setTimeout(() => {
            clearTimeout(timer)
            fn.apply(context, args)
        }, threshhold)

    }
}