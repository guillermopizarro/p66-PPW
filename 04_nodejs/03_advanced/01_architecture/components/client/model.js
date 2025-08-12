const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const client_schema = new Schema({
    identify: req_string,
    name: req_string,
    lastname: req_string,
    city: {
        type: Schema.ObjectId,
        ref: 'city',
    },
})

const model = mongoose.model('client', client_schema)
module.exports = model