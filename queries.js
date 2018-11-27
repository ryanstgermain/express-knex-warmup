const db = require('./database-connections.js')

module.exports = {
    getAll() {
       return db.select().from('students') 
    }
}
