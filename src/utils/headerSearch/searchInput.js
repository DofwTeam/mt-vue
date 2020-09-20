/**
 * input防抖处理
 */
let timer
function debounce(context, fn, delay) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
        fn.apply(context)
    }, delay)
}

export default {
    debounce
}
