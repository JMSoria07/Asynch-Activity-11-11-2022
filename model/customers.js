const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address_id: {
        type: String,
        required: true
    },
    order_id: {
        type: String,
        required: true
    }
})

const Customer = mongoose.model("customers", customerSchema, "customers")
module.exports = Customer