import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Status from 'App/Models/Status'
import StatusStore from 'App/Validators/Status/StoreValidator'
import StatusUpdate from 'App/Validators/Status/UpdateValidator'

export default class StatusesController {
  public async store({ request, response }: HttpContextContract) {
    const { name } = await request.validate(StatusStore)
    const status = await Status.create({ name })
    return response.accepted({ data: { status } })
  }

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params()
    const status = await Status.findByOrFail('id', id)
    return response.accepted({ data: { status } })
  }

  public async update({ request, response }: HttpContextContract) {
    const { name, id } = await request.validate(StatusUpdate)
    const status = await Status.findByOrFail('id', id)
    status.name = name
    await status.save()
    return response.accepted({ data: { status } })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()
    const status = await Status.findByOrFail('id', id)
    await status.delete()
    return response.noContent()
  }
}
