const Mongoose = require('mongoose')

module.exports = Mongoose.model(
    'Page',
    new Mongoose.Schema({
        category: String,
        content: {
            type: Object || Array
        }
    }),

    'pages'
)
