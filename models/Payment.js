import mongoose from "mongoose";

const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    oid: {
        type: String,
        required: true
    },
    imagelink: {
        type: String
    },
    teaname: {
        type: String,
    },
    message: {
        type: String,
    },
    amount: {
        type: Number,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true, // ✅ auto handles createdAt & updatedAt
    }
)

export default mongoose.models.Payment || model('Payment', PaymentSchema)