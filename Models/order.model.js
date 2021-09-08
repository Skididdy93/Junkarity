const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    item: {type: Schema.Types.ObjectId, required: true, ref: 'Item'},
    shippingAddress:{
        address: {type:String, required: true},
        city: {type:String, required: true},
        state: {type:String, required: true},
        postalCode: {type:String, required: true},
        Country: {type:String, required: true},
    },
    paymentMethod: {type: String, required: true},
    paymentResult: {
        id: {type: String},
        status: {type: String},
        update_time: {type: String},
        email_address: {type: String},
    },
    taxPrice: {type: Number, required: true, default: 0.0},
    shippingPrice: {type: Number, required: true, default: 0.0},
    totalPrice: {type: Number, required: true, default: 0.0},
    isPaid: {type: Boolean, required: false},
    paidAt: {type: Date},
    isDelivered: {type: Boolean, required: false},
    deliveredAt: {type: Date},
}, {
  timestamps: true,
})

// Virtual for items URL
orderSchema
.virtual('url')
.get(function () {
  return '/catalog/order/' + this._id;
});
const item = mongoose.model('order', orderSchema);

//Export model
module.exports = mongoose.model('Order', orderSchema);