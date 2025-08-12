const model = require('./model')

async function addUser( data ) {
    const user = new model( data )
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
    
    const user = await model.findOne( { user: data.user } )
    user.name = data.name
    user.last_name = data.last_name
    user.date_birth = data.date_birth

    const result = await user.save()
    return result
}

async function deleteUser( data ) {
    const result = await model.deleteOne( {user: data.user} )
    return result
}

module.exports = {
    add:addUser,
    get:getUser,
    update:updateUser,
    delete:deleteUser
}