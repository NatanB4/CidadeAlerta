import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({}, [rules.unique({ table: 'statuses', column: 'name' })]),
  })

  public messages: CustomMessages = {
    'name.required': 'Name is required',
    'name.exists': 'Name does not exist',
  }
}
