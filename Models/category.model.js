const mongoose = require('mongoose')

const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {type: String, required: true},
    updated_at: {type:Date, default: Date.now() },
    created_at: {type: Date, default: Date.now()}
});

// Virtual for category URL
categorySchema
.virtual('url')
.get(function () {
  return '/catalog/category/' + this._id;
});

//Export model
module.exports = mongoose.model('Category', categorySchema);