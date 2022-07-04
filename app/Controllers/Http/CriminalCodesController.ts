import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CriminalCode from 'App/Models/CriminalCode'
import CriminalIndex from 'App/Validators/CriminalCode/IndexValidator'
import CriminalStore from 'App/Validators/CriminalCode/StoreValidator'
import CriminalUpdate from 'App/Validators/CriminalCode/UpdateValidator'

export default class CriminalCodesController {
  public async store({ request, response, auth }: HttpContextContract) {
    const { name, description, penality, prisonTime, statusId } = await request.validate(
      CriminalStore
    )

    const criminalcode = await CriminalCode.create({
      name,
      description,
      penality,
      prisonTime,
      statusId,
      createUserId: auth.user!.id,
      updateUserId: undefined,
    })

    return response.accepted({ data: { criminalcode } })
  }

  public async update({ request, response, auth }: HttpContextContract) {
    const { id, name, description, penality, prisonTime, statusId } = await request.validate(
      CriminalUpdate
    )

    const criminalcode = await CriminalCode.findByOrFail('id', id)
    criminalcode.name = name
    criminalcode.description = description
    criminalcode.penality = penality
    criminalcode.prisonTime = prisonTime
    criminalcode.statusId = statusId
    criminalcode.updateUserId = auth.user!.id
    await criminalcode.save()

    return response.accepted({ data: { criminalcode } })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const criminalcode = await CriminalCode.findByOrFail('id', id)
    await criminalcode.delete()

    return response.noContent()
  }

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const criminalcode = await CriminalCode.findByOrFail('id', id)
    return response.accepted({ data: { criminalcode } })
  }

  public async index({ request, response }: HttpContextContract) {
    const { page, perPage, orderByDirection, orderByColumn, filterValue, filterColumn } =
      await request.validate(CriminalIndex)
    let criminalcodes = await CriminalCode.query()

    if (filterColumn && filterValue)
      criminalcodes = await CriminalCode.query()
        .whereLike(filterColumn || '', filterValue)
        .orderBy(orderByColumn || '')
        .paginate(page, perPage)
    else {
      criminalcodes = await CriminalCode.query()
        .orderBy(orderByColumn || 'name', orderByDirection || 'desc')
        .paginate(page, perPage)
    }

    return response.accepted({ data: { criminalcodes } })
  }
}
