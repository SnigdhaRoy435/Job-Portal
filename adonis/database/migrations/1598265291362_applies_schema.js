'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AppliesSchema extends Schema {
  up() {
    this.create('applies', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.integer('job_id').unsigned().references('id').inTable('jobs');
      table.integer('app_id').notNullable();
      table.string('title').notNullable();
      table.string('name');
      table.string('fatherName');
      table.text('biography');
      table.string('dob');
      table.string('email', 254)
      table.string('mobile', 12);
      table.string('experience');
      table.string('qualification');
      table.integer('yoq');
      /*
      table.string('qualification');
      table.integer('yoq');
      //table.integer('experience');
      //table.string('image');
      table.integer('mobile');
      table.string('email', 254)*/
      table.timestamps()
    })
  }

  down() {
    this.drop('applies')
  }
}

module.exports = AppliesSchema
