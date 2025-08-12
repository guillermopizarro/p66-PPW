const model = require('./model')

async function getCountry(data) {
    const filter = data?.name ? { name: data.name } : {};

    // Obtén docs como POJOs y con country poblado
    const docs = await model.find(filter)

    return docs;
}

module.exports = {
    get:getCountry,
}