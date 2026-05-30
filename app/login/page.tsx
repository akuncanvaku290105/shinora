"use client";

import { useState } from "react";

export default function LoginPage() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleLogin = async () => {

    const response = await fetch(
      "http://localhost/backend/login.php",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {

      localStorage.setItem(
        "shinora-user",
        JSON.stringify(data.user)
      );

      setMessage(
        "Login Success 😄🔥"
      );

      window.location.href = "/chat";

    } else {

      setMessage(
        data.message
      );

    }

  };

  return (

    <div className="flex min-h-screen items-center justify-center bg-[#060B1A] text-white">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

        <h1 className="mb-8 text-center text-4xl font-bold">
          Login
        </h1>

        <div className="space-y-5">

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
            onClick={handleLogin}
            className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4 font-semibold transition hover:scale-105"
          >

            Login

          </button>

          {message && (

            <p className="text-center text-sm text-gray-300">

              {message}

            </p>

          )}

        </div>

      </div>

    </div>

  );

}