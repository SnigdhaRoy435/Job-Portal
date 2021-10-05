'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments() // increase id auto
      table.string('username', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('role', 1).defaultTo(2)
      table.timestamps() // date
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
