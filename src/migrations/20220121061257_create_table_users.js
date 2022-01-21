/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema.createTable ('funcionarios', table => {
        table.incremesnts('id').primary()
        table.string('name', 80).notNullable()
        table.string('document', 12).notNullable()
        table.string('email', 80).notNullable()
        table.string('phone', 10).notNullable()
        table.string('birth_date', 8).notNullable()
        table.string('salary', 50).notNullable()
        table.string('created_at', 50).notNullable()



    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('funcionarios')
  
};
