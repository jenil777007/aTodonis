/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import User from '#models/user'

router.get('/', async () => 'It works!')

router.get('/posts', async () => 'getting posts')

router.get('/createUser', async () => {
  const user = await User.create({
    username: 'rlanz',
    email: 'romain@adonisjs.com',
  })
  return JSON.stringify(user)
})
