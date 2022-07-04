import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    username: schema.string({}, [rules.unique({ table: 'users', column: 'username' })]),
    password: schema.string({}, [rules.confirmed('password_confirmation')]),
    password_confirmation: schema.string({}, []),
  })

  public messages: CustomMessages = {
    'username.required': 'Username is required',
    'password.required': 'Password is required',
    'password.confirmed': 'Password confirmation does not match',
    'username.exists': 'Username does not exist',
  }
}
