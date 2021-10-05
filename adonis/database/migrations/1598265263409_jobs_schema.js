'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JobsSchema extends Schema {
  up() {
    this.create('jobs', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('title')
      table.string('image')
      table.text('description')
      table.string('qualification')
      table.integer('experience')
      table.string('category')
      table.timestamps()
    })
  }

  down() {
    this.drop('jobs')
  }
}

module.exports = JobsSchema
