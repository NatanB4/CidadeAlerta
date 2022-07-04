import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Status from 'App/Models/Status'

export default class extends BaseSeeder {
  public async run() {
    await Status.create({ name: 'complicado' })
  }
}
