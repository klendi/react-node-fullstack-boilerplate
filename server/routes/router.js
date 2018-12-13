import { signUp, signIn } from '../controllers/auth'
import passport from 'passport'
const passportService = require('../services/passport')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

export const initRouter = app => {
  app.post('/signup', signUp)

  //sign in must be with requireSignin, this makes sure password and email are correct
  //this makes use of passport local strategy
  app.post('/signin', requireSignin, signIn)

  //to make a route protected just add requireAuth as a second parameter (middleware)
  //this makes use of the jwt token, passport's jwt strategy
  app.get('/', requireAuth, (req, res) => {
    res.send({ message: 'you made it' })
  })
}
