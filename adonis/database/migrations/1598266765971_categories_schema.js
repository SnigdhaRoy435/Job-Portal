'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriesSchema extends Schema {
  up() {
    this.create('categories', (table) => {
      table.increments()
      table.integer('job_id').unsigned().references('id').inTable('jobs');
      table.string('title');
      table.timestamps()
    })
  }

  down() {
    this.drop('categories')
  }
}

module.exports = CategoriesSchema
