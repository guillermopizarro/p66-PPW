const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const country_schema = new Schema({
    name: req_string
})

const model = mongoose.model('country', country_schema)
module.exports = model