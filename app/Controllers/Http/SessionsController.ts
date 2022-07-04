import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import StoreValidator from 'App/Validators/Session/StoreValidator'
import { DateTime } from 'luxon'

export default class SessionsController {
  public async store({ request, response, auth }: HttpContextContract) {
    const { username, password } = await request.validate(StoreValidator)
    const accessToken = await auth.use('api').attempt(username, password, {
      expiresIn: '7days',
      name: `LOGIN ${username} in ${DateTime.local().toFormat('yyyy-MM-dd HH:mm:ss')}`,
    })
    if (!accessToken) throw new Error('Invalid credentials')
    const user = await User.findByOrFail('username', username)

    return response.accepted({ data: { user, accessToken } })
  }

  public async destroy({ response, auth }: HttpContextContract) {
    await auth.use('api').logout()
    return response.noContent()
  }
}
