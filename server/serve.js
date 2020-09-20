const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')

const app = express()

app.set('secret', 'abcdef') // 提供全局变量
app.use('/', express.static(path.join(__dirname, '/public/')))
app.use(
    '/node_modules/',
    express.static(path.join(__dirname, '/node_modules/'))
)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(
    session({
        secret: 'My-mt',
        resave: false,
        saveUninitialized: true // 不管添没添加，都会给一个session。false，只有添加的时候才发送。
    })
)

require('./model/mongoose.js')(app)
require('./router/account.js')(app)
require('./router/data')(app)
require('./router/datainit')(app)

// 统一的错误处理函数
app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        message: err.message
    })
})

app.listen('3000', () => {
    console.log('running')
})
