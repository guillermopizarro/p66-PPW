const model = require('./model')
const country = require('../country/model')

async function addCity( data ) {
    if (!data?.name) throw new Error('Falta el nombre de la ciudad.')
    if (!data?.country) throw new Error('Falta country')
    
    let country_id

    // En el caso de no existir el país lo crea; caso contrario,
    // lo busca y se obtiene el id del objeto country para asociarlo
    // con el dato de la ciudad. 
    if (data.country && data.country.name) {
        const country_name = String(data.country.name).trim()
        const doc = await country.findOneAndUpdate(
            { name: country_name },
            { $setOnInsert: { name: country_name } },
            { new: true, upsert: true }
        )
        country_id = doc._id
    } 
    try {
        const result = await model.create({ name: data.name.trim(), country: country_id })
        if (result)
            return {"message":"ok:inserted"}
    } catch(err) {
        if (err?.code === 11000) {
            const e = new Error("error:repeated")
            e.status = 409
            throw e
        }
        throw error
    }
}

async function getCity(data) {
    const filter = data?.name ? { name: data.name } : {};

    // Obtén docs como POJOs y con country poblado
    const docs = await model
        .find(filter)
        .populate('country', 'name')  // sólo el campo name
        .lean()

    // Mapea al formato que necesitas
    const cities = docs.map(d => ({
        id: d._id,
        city: d.name,
        country: d.country?.name ?? null
    }));

    return cities;
}

async function updateCity( data ) {
    const object = await model.findOne( {_id: data.id} )

    if ( object ) {
        object.name = data.name
        const result = await object.save()
        if (result)
            return {"message":"ok:updated"}
    } else {
        return null
    }
}

async function deleteCity( data ) {
    const result = await model.deleteOne({_id: data.id})
    return {"message":"ok:deleted"}
}

module.exports = {
    add:addCity,
    get:getCity,
    update:updateCity,
    delete:deleteCity
}