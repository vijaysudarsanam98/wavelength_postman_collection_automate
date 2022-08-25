
const knex=require('./knex')

module.exports. getNewUsers = async function ()  {
    let result = await knex.select('*').from('users').where('created_at','>=','today')
    
    console.log(result)
    return result
  }