const assert = require('http-assert')

module.exports = app => {
    const express = require('express')
    const Word = require('../model/searchWord')
    const Page = require('../model/Page')
    const Message = require('../model/Message')
    const assert = require('http-assert')

    // const assert = require('http-assert')

    const router = express.Router()

    // 请求search word
    router.get('/api/word', async (req, res) => {
        if (req.query.word === '') {
            return res.status(200).send([])
        }
        const data = await Word.find({
            word: eval('/' + '^' + req.query.word + '/i')
        })
        res.status(200).send(data[0].content)
    })

    // 请求leftList
    router.get('/api/page/leftList', async (req, res) => {
        const leftListData = await Page.findOne({ category: 'leftList' })

        res.status(200).send(leftListData.content)
    })
    // 请求homeMovie
    router.get('/api/page/homeMovie', async (req, res) => {
        const Data = await Page.findOne({ category: 'homeMovie' })

        res.status(200).send(Data.content)
    })
    // 请求footer
    router.get('/api/page/footer', async (req, res) => {
        const Data = await Page.findOne({ category: 'footer' })

        res.status(200).send(Data.content)
    })

    // userinfo留言
    router.post('/api/message/add', async (req, res) => {
        const msg = req.body.data.value
        const result = await Message.create({
            text: msg
        })
        assert(result, 500, {
            message: '输入有误'
        })

        res.status(200).send(req.body.data)
    })
    router.get('/api/message/get', async (req, res) => {
        const arr = await Message.find()
            .sort({ $natural: -1 })
            .limit(7)
        res.status(200).send(arr)
    })

    app.use(router)
}
