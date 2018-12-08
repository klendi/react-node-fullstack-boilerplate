import { signup, signin } from '../controllers/auth'
import passport from 'passport'
import passportService from '../services/passport'

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

export const attach = app => {
  app.post('/signup', signup)

  app.post('/signin', requireSignin, signin)

  app.get('/', requireAuth, (req, res) => {
    res.send({ message: 'you made it' })
  })
}
