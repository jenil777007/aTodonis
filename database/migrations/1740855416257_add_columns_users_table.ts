import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      /**
       * Add first_name and last_name columns
       */
      table.string('username')
      table.string('email')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      /**
       * Add first_name and last_name columns
       */
      table.dropColumn('username')
      table.dropColumn('email')
    })
  }
}
