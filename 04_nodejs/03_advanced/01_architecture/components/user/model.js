const mongoose = require('mongoose')
const schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const user_schema = new schema({
    user: req_string,
    name: req_string,
    last_name: req_string,
    date_birth: Date,
    date_create: Date,
    date_update: Date
}, {
    timestamps: { createdAt: 'date_create', updatedAt: 'date_update' }
})

const model = mongoose.model('user', user_schema)
module.exports = model