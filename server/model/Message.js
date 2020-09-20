const Mongoose = require('mongoose')

module.exports = Mongoose.model(
    'Message',
    new Mongoose.Schema({
        text: String,
        date: { type: Date, default: Date.now }
    })
)
