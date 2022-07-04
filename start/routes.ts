/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Sessions Controller
Route.post('/sessions', 'SessionsController.store')
Route.delete('/sessions', 'SessionsController.destroy').middleware('auth')

// Users Controller
Route.post('/users', 'UsersController.store')
Route.get('/users/:username', 'UsersController.show').middleware('auth')
Route.put('/users', 'UsersController.update').middleware('auth')
Route.delete('/users/:username', 'UsersController.destroy').middleware('auth')

// CriminalCodes Controller
Route.post('/criminal', 'CriminalCodesController.store').middleware('auth')
Route.put('/criminal', 'CriminalCodesController.update').middleware('auth')
Route.delete('/criminal/:id', 'CriminalCodesController.destroy').middleware('auth')
Route.get('/criminal/:id', 'CriminalCodesController.show').middleware('auth')
Route.post('/criminal/search', 'CriminalCodesController.index').middleware('auth')

// Status
Route.post('/status', 'StatusesController.store').middleware('auth')
Route.put('/status', 'StatusesController.update').middleware('auth')
Route.delete('/status/:id', 'StatusesController.destroy').middleware('auth')
Route.get('/status/:id', 'StatusesController.show').middleware('auth')
