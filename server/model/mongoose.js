module.exports = app => {
    const Mongoose = require('mongoose')
    Mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
}
