import mongoose from 'mongoose'

export default {
  init: () => {
    mongoose.connect(
      process.env.MONGO_URL,
      { useNewUrlParser: true },
      err => {
        if (err) {
          throw err
        }

        console.log('Sucessfully connected to the database')
      }
    )
  }
}
