import { NextResponse } from "next/server";
import connectDB from "@/db/connectDb";
import Payment from "@/models/Payment";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectDB();

    const rawSupporters = await Payment.find({ done: true })
      .sort({ createdAt: -1 })
      .lean();

    const supporters = rawSupporters.map((s) => ({
      _id: s._id.toString(),
      name: s.name || "",
      imagelink: s.imagelink || "",
      teaname: s.teaname || "",
      message: s.message || "",
      amount: s.amount || 0,
      done: s.done,
      createdAt: s.createdAt?.toISOString() || "",
      updatedAt: s.updatedAt?.toISOString() || "",
    }));

    return NextResponse.json(supporters);
  } catch (error) {
    console.error("Error fetching payments:", error);
    return NextResponse.json(
      { error: "Failed to fetch supporters" },
      { status: 500 }
    );
  }
}
