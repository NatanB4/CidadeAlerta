import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class CriminalCode extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({})
  public name: string

  @column({})
  public description: string

  @column({})
  public penality: number

  @column({ columnName: 'prison_time' })
  public prisonTime: number

  @column({ columnName: 'status_id' })
  public statusId: number

  @column({ columnName: 'create_user_id' })
  public createUserId: number

  @column({ columnName: 'update_user_id' })
  public updateUserId: number

  @belongsTo(() => User, {
    foreignKey: 'createUserId',
  })
  public createUser: BelongsTo<typeof User>

  @belongsTo(() => User, {
    foreignKey: 'updateUserId',
  })
  public updateUser: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
