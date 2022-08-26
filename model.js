
const knex=require('./knex')

module.exports. getNewUsers = async function ()  {
    let result = await knex.select('name','phone_number','phone_number_code').from('users').where('created_at','>=','today')
    
    console.log(result)
    return result
  }