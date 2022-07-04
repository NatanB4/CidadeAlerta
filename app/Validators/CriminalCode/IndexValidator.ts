import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class IndexValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    page: schema.number([rules.range(0, 1000)]),
    perPage: schema.number([rules.range(0, 1000)]),
    orderByColumn: schema.enum.optional([
      'id',
      'name',
      'description',
      'penality',
      'prisonTime',
      'statusId',
    ]),
    orderByDirection: schema.enum.optional(['asc', 'desc']),
    filterValue: schema.string.optional(),
    filterColumn: schema.enum.optional([
      'id',
      'name',
      'description',
      'penality',
      'prisonTime',
      'statusId',
    ]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    'page.range': 'Page must be between 0 and 1000',
    'perPage.range': 'Per page must be between 0 and 1000',
    'orderByColumn.in':
      'Order by column must be one of the following: id, name, description, penality, prisonTime, statusId',
    'orderByDirection.in': 'Order by direction must be one of the following: asc, desc',
    'filterColumn.in':
      'Filter column must be one of the following: id, name, description, penality, prisonTime, statusId',
  }
}
