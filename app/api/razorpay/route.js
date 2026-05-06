import { NextResponse } from "next/server";
import crypto from "crypto";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";

export const POST = async (req) => {
  await connectDB();

  let body = await req.formData();
  body = Object.fromEntries(body);

  // Find payment by Razorpay order_id
  const payment = await Payment.findOne({
    oid: body.razorpay_order_id,
  });

  if (!payment) {
    return NextResponse.json({
      success: false,
      message: "Order not found",
    });
  }

  // Verify signature
  const secret = process.env.RAZORPAY_KEY_SECRET;
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(body.razorpay_order_id + "|" + body.razorpay_payment_id)
    .digest("hex");

  const isValid = expectedSignature === body.razorpay_signature;

  if (!isValid) {
    return NextResponse.json({
      success: false,
      message: "Payment verification failed",
    });
  }

  // Update payment
  const updatedPayment = await Payment.findOneAndUpdate(
    { oid: body.razorpay_order_id },
    {
      done: true,
    },
    { new: true }
  );

  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${updatedPayment.name.replace(/\s+/g, "")}?paymentdone=true`,
    { status: 303 }
  );
};