import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserStore from 'App/Validators/User/StoreValidator'
import UserUpdate from 'App/Validators/User/UpdateValidator'

export default class UsersController {
  public async index({}: HttpContextContract) {
    return {
      users: [],
    }
  }

  public async store({ request, response, auth }: HttpContextContract) {
    const { username, password } = await request.validate(UserStore)
    const user = await User.create({ username, password })
    const accessToken = await auth.use('api').generate(user)

    response.created({ data: { user, accessToken } })
  }

  public async show({ request, response, bouncer }: HttpContextContract) {
    const { username } = request.params()

    const user = await User.findByOrFail('username', username)

    await bouncer.authorize('showUser', user)
    response.accepted({ data: { user } })
  }

  public async update({ request, response, bouncer }: HttpContextContract) {
    const { username, password } = await request.validate(UserUpdate)

    const user = await User.findByOrFail('username', username)
    user.password = password
    await user.save()

    await bouncer.authorize('updateUser', user)
    response.accepted({ data: { user } })
  }

  public async destroy({ request, response, bouncer }: HttpContextContract) {
    const { username } = request.params()
    const user = await User.findByOrFail('username', username)

    await bouncer.authorize('destroyUser', user)
    await user.delete()
    response.noContent()
  }
}
