
const knex = require('./knex')

module.exports.getNewUsers = async function () {
  let result = await knex.select('name', 'phone_number as phoneNumber', 'phone_number_code as phoneNumberCode')

    .from('users')
    .where('last_loggedin_at', '>=', 'today')
    .whereNot('id', '40')
  return result
}