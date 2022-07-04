import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    User.createMany([{ id: 1, username: 'admin', password: 'admin' }])
  }
}
