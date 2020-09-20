const md5 = require('md5')

exports.register = function(body) {
    console.log(body)
    const iphone = Number(body.iphone)
    const passWord = md5(body.affirmPass)
    return {
        iphone,
        passWord
    }
}
