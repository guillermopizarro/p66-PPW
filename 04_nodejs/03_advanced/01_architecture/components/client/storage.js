const model = require('./model')

async function addClient( data ) {
    
    try {
        const client = new model( {
            identify: String(data.identify).trim(),
            name:     String(data.name).trim(),
            lastname: String(data.lastname).trim(),
            city: data.city
        } )
        client.save()
        return {"message":"ok:inserted"}
    } catch(err) {
        if (err?.code === 11000) {
            const e = new Error('error:repetido');
            e.status = 409;
            throw e;
        }
        throw err;
    }
}

async function getClient(data) {
    let filter = {}

    if (data) {
        filter = { indetify:data }
    }

    const doc = await model.find(filter)
        .populate('city', 'name') 
        .lean()
    return doc
}

module.exports = {
    add:addClient,
    get:getClient
}