import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    id: schema.number([]),
    name: schema.string({}, [rules.unique({ table: 'statuses', column: 'name' })]),
  })

  public messages: CustomMessages = {
    'name.required': 'Name is required',
    'name.unique': 'Name already exists',
  }
}
