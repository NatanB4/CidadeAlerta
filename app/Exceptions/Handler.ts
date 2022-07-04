/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/

import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }

  public async handle(error: any, ctx: HttpContextContract) {
    switch (error.status) {
      case 422:
        return {
          code: 'validation_error',
          message: error.message,
          friendly_message: 'Existem campos inválidos ou não preenchidos',
          details: error.messages.errors,
        }
      case 401:
        return {
          code: 'unauthorized',
          message: error.responseText,
          friendly_message: 'Você não tem permissão para acessar este recurso',
          details: error.messages || '',
        }
      case 404:
        return {
          code: 'not_found',
          message: 'not_found..',
          friendly_message: 'Recurso não encontrado',
          details: error.messages || '',
        }
      default:
        return {
          code: 'internal_error',
          message: error.message,
          friendly_message: 'Algo deu errado, tente novamente mais tarde',
          details: error,
        }
    }
  }
}
