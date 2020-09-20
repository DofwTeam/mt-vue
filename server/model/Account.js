const Mongoose = require('mongoose')

module.exports = Mongoose.model(
    'Account',
    new Mongoose.Schema({
        iphone: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
            select: false,
            set(val) {
                return require('bcrypt').hashSync(val, 10)
            }
        }
    })
)
