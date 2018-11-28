const db = require('./database-connections.js')

module.exports = {
    getAll() {
       return db.select().from('students') 
    },
    getById(id){
        return db('students').where('id', id)
    },
    createStudent(newStudent){
        return db('students').insert(newStudent)
    }
}
