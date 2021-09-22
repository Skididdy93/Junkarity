const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, require: true},
})

// plugin for passport-local-mongoose
userSchema.plugin(passportLocalMongoose);

// export userschema
module.exports = mongoose.model('User', userSchema);
