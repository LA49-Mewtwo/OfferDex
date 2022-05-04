const { Pool } = require('pg')

const PG_URI = "postgres://eqoiiljb:ykekMdI30pfr4Ku4CPqvaPeaae-oGEtD@heffalump.db.elephantsql.com/eqoiiljb"

//create a new pool
const pool = new Pool({
  connectionString: PG_URI,
})

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text, '\nparams\n', params);
    return pool.query(text, params, callback);
  }
};