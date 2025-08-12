const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true,
    trim: true
}

const city_schema = new Schema({
    name: req_string,
    country: {
        type: Schema.ObjectId,
        ref: 'country',
        required: true
    },
})

// Comparación sin distinguir mayúsculas/minúsculas (y acentos según locale)
city_schema.set('collation', { locale: 'es', strength: 2 })

// Unicidad por (name, country)
city_schema.index(
    { name: 1, country: 1 }, 
    { unique: true, collation: 
        { locale: 'es', strength: 2 } 
    }
)

const model = mongoose.model('city', city_schema)
module.exports = model