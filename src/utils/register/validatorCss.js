/**
 * 1.判断手机号格式是否正确
 * @param {Number} value
 */
function isEleven(value, fn) {
    const reg = /\d{11}/g
    const result = {
        hint: '注册成功后 , 全美团通用',
        isBlock: false,
        isError: false,
        isYes: false
    }
    if (value.length !== 11 && !reg.test(value)) {
        result.hint = '请输入正确的11位手机号码'
        result.isBlock = true
        result.isError = true
    } else {
        result.isYes = true
    }
    fn(result)
}

/**
 * 动态密码，验证功能
 * @param {Number} value
 * @param {*} fn
 */
function verifyCode(value, fn) {
    const reg = /\d{6}/g
    const result = {
        hint: null,
        isBlock: false,
        isYes: false
    }
    if (value.length !== 6 && !reg.test(value)) {
        if (value === '') {
            result.hint = '请输入短信验证码'
        } else {
            result.hint = '验证码输入有误'
        }
        result.isBlock = true
    } else {
        result.isYes = true
    }
    fn(result)
}

/**
 * 创建密码 验证功能
 * @param {security} value
 * @param {*} fn
 * 提倡：将处理的状态数据，通过回调的方式传递到.vue文件中，容易阅读。
 */
function createPass(value, fn) {
    const reg = /^[\d|A-z丨_*]{8,23}$/g
    const result = {
        isSpanBlock: true,
        status: null,
        isYes: null,
        isBlock: null,
        strengthLevel: 0
    }
    if (!reg.test(value)) {
        if (value === '') {
            result.status = '请输入密码'
        } else if (value.length < 8) {
            result.status = '密码长度最少为8位，请重新输入'
        } else if (value.length > 23) {
            result.status = '抱歉！您输入的密码长度超出23位最大限度'
        } else {
            result.status = '抱歉！输入格式有误'
        }
    } else {
        if (
            /[a-z|A-Z]/g.test(value) &&
            /\d/g.test(value) &&
            value.length > 10
        ) {
            result.strengthLevel = 3
        } else if (/[a-z|A-Z丨_*]/g.test(value) && /\d/g.test(value)) {
            result.strengthLevel = 2
        } else {
            result.strengthLevel = 1
        }
        result.isYes = true
        result.isSpanBlock = false
    }

    fn(result)
}

/**
 * 确认密码 验证功能
 * @param {security} value
 * @param {*} fn
 */
function affirmPass(value, createValue, fn) {
    const result = {
        isYes: null,
        hint: null,
        isBlock: null
    }
    if (value === createValue && value !== '') {
        result.isYes = true
    } else {
        if (value === '') {
            result.hint = '请再次输入密码'
        } else {
            result.hint = '两次输入的密码不一致，，请核对！'
        }
        result.isBlock = true
    }
    fn(result)
}

/**
 * 聚焦，隐藏功能
 * @param {this} instance
 * @param {*} e
 */
function focusChange(instance, e) {
    const inputType = e.target.name
    if (inputType === 'iphone') {
        instance.iphoneInpHint.isBlock = false
    } else if (inputType === 'dynamicPass') {
        instance.dynamicInpHint.isBlock = false
    } else if (inputType === 'createPass') {
        instance.createInpHint.isBlock = false
    } else if (inputType === 'affirmPass') {
        instance.affirmInpHint.isBlock = false
    }
}
export default {
    isEleven,
    focusChange,
    verifyCode,
    createPass,
    affirmPass
}
