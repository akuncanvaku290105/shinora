"use client";

import { useState } from "react";
import Link from "next/link";
export default function RegisterPage() {

  const [username, setUsername] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleRegister = async () => {

    const response = await fetch(
      "/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      }
    );

    const data = await response.json();
    console.log(data);

    if (data.success) {

      setMessage(
        "Register Success 😄🔥"
      );

    } else {

      setMessage(
        "Register Failed 😵"
      );

    }

  };

  return (
<>
<Link
  href="/"
  className="absolute left-6 top-6 rounded-xl bg-white/10 px-4 py-2 text-white transition hover:bg-white/20"
>
  ← Kembali
</Link>
    <div className="flex min-h-screen items-center justify-center bg-[#060B1A] text-white">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

        <h1 className="mb-8 text-center text-4xl font-bold">
          Register
        </h1>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 outline-none"
          />

          <button
            onClick={handleRegister}
            className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4 font-semibold transition hover:scale-105"
          >

            Register

          </button>

          {message && (

            <p className="text-center text-sm text-gray-300">

              {message}

            </p>

          )}

        </div>

      </div>

    </div>
</>
  );

}