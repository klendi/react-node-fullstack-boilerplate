import mongoose from 'mongoose'

export default {
  init: () => {
    mongoose.connect(
      // 'mongodb://klendi:klendi11@ds046377.mlab.com:46377/fullstack-boilerplate',
      'mongodb://localhost:27017/fullstack-app',
      { useNewUrlParser: true },
      err => {
        if (err) {
          throw err
          return
        }

        console.log('sucessfully connected to the database')
      }
    )
  }
}
