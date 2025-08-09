const model = require('./model')

async function addUser( data ) {
    const user =  new model( data )
    return await user.save()
}

async function getUser( data ) {
    let filter = {}

    if (data.user != null) {
        filter = { user: data.user }
    }
    const results = await model.find( filter )
    return results
}

async function updateUser( data ) {

}

async function deleteUser( data ) {

}

module.exports = {
    add:addUser,
    get:getUser,
    update:updateUser,
    delete:deleteUser
}