import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Comments extends BaseSchema {
  protected tableName = 'comments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('body')
      table.integer('post_id').unsigned()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
