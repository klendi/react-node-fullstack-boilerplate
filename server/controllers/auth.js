import User from '../models/user'
import jwt from 'jsonwebtoken'

const tokenForUser = user => {
  const ts = new Date().getTime()
  return jwt.sign({ sub: user.id, iat: ts }, process.env.SECRET)
}

export const signup = (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'You must provide a valid email and password' })
  }

  User.findOne({ email: email }, (err, existingUser) => {
    if (err) {
      return next(err)
    }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' })
    }

    const user = new User({ email, password })
    user.save(err => {
      if (err) {
        return next(err)
      }
      res.json({ token: tokenForUser(user) })
    })
  })
}

export const signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) })
}
