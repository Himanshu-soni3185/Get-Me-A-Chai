"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"

export const initiate_payment = async (amount, name, data) => {

    await connectDB()

    const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET
    })

    // ✅ FIX: ensure clean number
    const cleanAmount = Number(amount)

    if (isNaN(cleanAmount)) {
        throw new Error("Invalid amount")
    }

    let options = {
        amount: cleanAmount * 100, // paise
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
        payment_capture: 1
    }

    let order = await instance.orders.create(options)

    if (!order || !order.id) {
        throw new Error("Razorpay order creation failed")
    }

    await Payment.create({
        name: name,
        oid: order.id,
        amount: cleanAmount,
        imagelink: data.img,
        teaname: data.treat,
        message: data.message,
        done: false
    })

    return order
}