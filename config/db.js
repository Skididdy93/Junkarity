const mongoose = require('mongoose');

//Connect to MongoDB
const connectDB = async () => {
    try {
      let connectionString
      if (process.env.STAGE === 'production') {
        connectionString = process.env.ATLAS_CONNECTION
      } else {
        connectionString = `mongodb://${process.env.HOST_MACHINE || '127.0.0.1'}:${process.env.DB_PORT}/${process.env.DB_NAME}`
      }
      const conn = await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      })
      console.log('Rogati fuerimus')

    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
};

module.exports = connectDB;
