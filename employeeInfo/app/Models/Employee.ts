import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import CamelCaseNamingStrategy from 'App/Strategies/camelStrategy'
export default class Employee extends BaseModel {
  public static namingStrategy = new CamelCaseNamingStrategy()
  public static table='employee'
  @column({ isPrimary: true })
  public id: number

  @column ()
  public name:string
  @column()
  public jobTitle:string
  @column()
  public department:string
  @column()
  public startDate:DateTime
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
