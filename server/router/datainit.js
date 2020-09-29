module.exports = app => {
    const router = require('express').Router()
    // const searchWord = require('../model/searchWord.js')
    // const Page = require('../model/Page.js')

    // 哪个模型，需要初始化数据，就导入哪个。

    router.get('/api/datainit', async (req, res) => {
        // 先清空
        // await Page.remove({})
        // const arr = arr.forEach(item => {
        //     Page.create({
        //         category: item.arear,
        //         content: item.content
        //     })
        // })
        res.send('数据导入成功！')
    })

    app.use(router)
}
