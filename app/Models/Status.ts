import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import CriminalCode from './CriminalCode'

export default class Status extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({})
  public name: string

  @belongsTo(() => CriminalCode, {
    foreignKey: 'id',
  })
  public CriminalCode: BelongsTo<typeof CriminalCode>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
