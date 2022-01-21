const db = require('../config/db')

module.exports = {
    Query: {
        async getFuncionario(_, { id }){
            return await db('funcionarios').where({id: id})
        }, 
        async getFuncionarios(){
            return await db('funcionarios')
        }
    },
    Mutation:{
        async createFuncionario (_, {input}) {
            const result await db('funcionarios').insert({
                name: input.name,
                document: input.document,
                email: input.email,
                phone: input.phone,
                birth_date: input.birth_date,
                salary: input.salary,
                created_at: input.created_at,
            })

            const id = result [0]
            return await db('funcionarios').where({id}).first()
        }
    }
}