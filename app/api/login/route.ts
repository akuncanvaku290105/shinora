import { NextResponse } from "next/server";
import supabase from "@/lib/supabase";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (error || !data) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }

    const validPassword = await bcrypt.compare(
      password,
      data.password
    );

    if (!validPassword) {
      return NextResponse.json({
        success: false,
        message: "Wrong password",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Login success",
      user: data,
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}