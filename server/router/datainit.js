module.exports = app => {
    const router = require('express').Router()

    // 哪个模型，需要初始化数据，就导入哪个。

    router.get('/api/datainit', async (req, res) => {
        // 先清空

        res.send('123')
    })

    app.use(router)
}
