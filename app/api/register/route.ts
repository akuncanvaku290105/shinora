import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

import supabase from "@/lib/supabase";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const {
      username,
      email,
      password
    } = body;

    // cek email sudah ada atau belum
    const { data: existingUser } =
      await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single();

    if (existingUser) {

      return NextResponse.json({
        success: false,
        message: "Email already exists"
      });

    }

    // hash password
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // insert user
    const { error } =
      await supabase
        .from("users")
        .insert([
          {
            username,
            email,
            password: hashedPassword
          }
        ]);

    if (error) {

      return NextResponse.json({
        success: false,
        message: error.message
      });

    }

    return NextResponse.json({
      success: true,
      message: "Register success"
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Server error"
    });

  }

}