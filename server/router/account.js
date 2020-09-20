module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Account = require('../model/Account.js')
    const bcrypt = require('bcrypt')
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')

    // mt - 账号注册
    router.post('/api/mt/register', async (req, res) => {
        const data = req.body.data
        const user = await Account.findOne({ iphone: data.iphone })
        // 判断是否已注册
        assert(!user, 422, {
            message: '账号已经被注册'
        })

        // 注册新账号
        const account = new Account({
            iphone: data.iphone,
            password: data.password
        })
        const isSave = await account.save()
        assert(isSave, 422, {
            message: '请核对，登录信息格式'
        })
        res.send({
            status: 200,
            info: '注册成功'
        })
    })

    // mt - 登录
    router.post('/api/mt/login', async (req, res) => {
        const data = req.body.data
        const user = await Account.findOne({
            iphone: data.iphone
        }).select('+password')

        // 用户是否存在
        assert(user, 422, {
            message: '账号不存在'
        })

        // 用户密码校验
        const isCorrect = bcrypt.compareSync(data.password, user.password)

        assert(isCorrect, 422, {
            message: '密码错误'
        })

        // 传递token
        const token = jwt.sign(
            {
                id: user._id,
                iphone: user.iphone
            },
            app.get('secret')
        )
        res.status(200).send({
            info: '登录成功',
            isSuccess: true,
            token: token
        })
    })

    app.use(router)
}
