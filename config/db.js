const mongoose = require('mongoose');

//Connect to MongoDB cluster
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.ATLAS_CONNECTION, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
        })
        console.log('Rogati fuerimus')

    }catch (error) {
        console.error(`Error: ${error.message}`),
        process.exit(1)
    }
};

module.exports = connectDB;
