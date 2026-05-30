"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060B1A] text-white">
    <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]" />
    <div className="absolute right-[-200px] top-[100px] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[140px]" />
    <div className="absolute bottom-[-250px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

      {/* NAVBAR */}
      <header className="px-8 pt-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-8 py-1 backdrop-blur-md">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Shinora Logo"
              width={52}
              height={52}
            />

            <h1
              className="text-2xl tracking-[0.25em] text-white"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              SHINORA
            </h1>
          </div>

          {/* MENU */}
          <div className="flex items-center gap-5 rounded-full bg-white/5 px-8 py-4 text-gray-300">

            <a
              href="#"
              className="rounded-full bg-white/10 px-5 py-2 text-white transition hover:text-purple-300"
            >
              Home
            </a>

<a
  href="#features"
  className="transition hover:text-purple-300"
>
  Features
</a>

<a
  href="/chat"
  className="transition hover:text-purple-300"
>
  Chat
</a>
          </div>

 {/* BUTTON */}
<a
  href="/chat"
  className="
  group
  relative
  overflow-hidden
  rounded-full
  bg-gradient-to-r
  from-blue-500
  to-purple-500
  px-8
  py-4
  font-semibold
  text-white
  shadow-lg
  shadow-purple-500/20
  transition-all
  duration-300
  hover:scale-105
  hover:shadow-[0_0_30px_rgba(124,92,255,0.5)]
  active:scale-95
  "
>

  <span className="relative z-10">
    Get Started
  </span>

  <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></div>

</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* BLUR GLOW */}
        <div className="absolute h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute left-[45%] top-[40%] h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

        {/* EFFECT BULAT BAWAH */}
        <div className="absolute bottom-[-300px] h-[700px] w-[1200px] rounded-full border border-purple-500/20 bg-purple-500/5 blur-3xl"></div>

        {/* TITLE */}
        <h1 className="max-w-5xl text-5xl md:text-7xlfont-black leading-tight">

          <span className="text-white">
            Your Futuristic
          </span>

          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {" "}AI
          </span>

          <br />

          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Companion
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-8 max-w-2xl text-lg text-gray-400">
          Shaping the future of artificial intelligence through elegant and immersive experiences.
        </p>

        {/* BUTTONS */}
        <div className="mt-12 flex gap-5">

<a
  href="/chat"
  className="
  group
  relative
  overflow-hidden
  rounded-full
  bg-gradient-to-r
  from-blue-500
  to-purple-500
  px-8
  py-4
  text-lg
  font-semibold
  text-white
  shadow-xl
  shadow-purple-500/30
  transition-all
  duration-300
  hover:scale-105
  hover:shadow-[0_0_40px_rgba(124,92,255,0.6)]
  active:scale-95
  "
>
  <span className="relative z-10">
    Get Started
  </span>

  <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></div>
</a>

<button
  onClick={() => {

    document
      .getElementById("features")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

  }}
  className="rounded-full border border-purple-500/30 bg-white/5 px-8 py-4 text-lg text-white backdrop-blur-md transition hover:bg-white/10"
>

  Learn More

</button>

        </div>
      </section>
      {/* FEATURES */}
<section
  id="features"
  className="mx-auto max-w-7xl px-8 py-24"
>
  {/* TITLE */}
  <div className="text-center">
    <h2 className="text-5xl font-bold text-white">
      Core Features
    </h2>

    <p className="mt-4 text-gray-400">
      Powerful AI tools designed for the future.
    </p>
  </div>

  {/* CARDS */}
  <div className="mt-16 grid gap-8 md:grid-cols-3">

    {/* CARD 1 */}
    <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/10">

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-2xl">
        ✦
      </div>

      <h3 className="text-2xl font-bold">
        AI Chat
      </h3>

      <p className="mt-4 text-gray-400">
        Intelligent futuristic assistant powered by advanced AI models.
      </p>

    </div>

    {/* CARD 2 */}
    <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/10">

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-2xl">
        ⚡
      </div>

      <h3 className="text-2xl font-bold">
        Fast Responses
      </h3>

      <p className="mt-4 text-gray-400">
        Experience lightning-fast AI interactions with smooth performance.
      </p>

    </div>

    {/* CARD 3 */}
    <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/10">

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-2xl">
        ◎
      </div>

      <h3 className="text-2xl font-bold">
        Anime Aesthetic
      </h3>

      <p className="mt-4 text-gray-400">
        Designed with futuristic anime-inspired visuals and UI elements.
      </p>

    </div>

  </div>

</section>
{/* AI PREVIEW SECTION */}

<section className="relative mx-auto max-w-7xl px-8 py-32">

  {/* TITLE */}
  <div className="text-center">

    <h2 className="text-5xl font-bold">
      Experience Shinora AI
    </h2>

    <p className="mt-5 text-gray-400">
      Futuristic AI interaction designed for the next generation.
    </p>

  </div>

  {/* PREVIEW PANEL */}
  <div className="relative mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

    {/* GLOW */}
    <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>

    <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl"></div>

    {/* TOP BAR */}
    <div className="flex items-center gap-3 border-b border-white/10 pb-6">

      <div className="h-3 w-3 rounded-full bg-red-400"></div>
      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
      <div className="h-3 w-3 rounded-full bg-green-400"></div>

      <div className="ml-4 text-sm text-gray-400">
        shinora-ai-interface
      </div>

    </div>

    {/* CHAT AREA */}
    <div className="mt-10 space-y-6">

      {/* USER */}
      <div className="flex justify-end">

        <div className="max-w-md rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4 text-white shadow-lg shadow-purple-500/20">
          Generate a futuristic anime city concept.
        </div>

      </div>

      {/* AI */}
      <div className="flex justify-start">

        <div className="max-w-2xl transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 bg-white/[0.04] px-6 py-5 text-gray-300 backdrop-blur-md">

          <div className="mb-3 flex items-center gap-3">

            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

            <span className="font-semibold text-white">
              Shinora AI
            </span>

          </div>

          <span className="animate-pulse">
            Creating futuristic neon-lit Tokyo environment with cinematic atmosphere, holographic billboards, glowing streets, and advanced cyberpunk aesthetics...
          </span>

          <div className="mt-4 flex gap-2">

            <div className="h-2 w-2 animate-bounce rounded-full bg-purple-400"></div>

            <div className="h-2 w-2 animate-bounce rounded-full bg-purple-400 [animation-delay:0.2s]"></div>

            <div className="h-2 w-2 animate-bounce rounded-full bg-purple-400 [animation-delay:0.4s]"></div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* FOOTER */}

<footer className="border-t border-white/10 px-8 py-10">

  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row">

    {/* BRAND */}
    <div>

      <h3
        className="text-2xl tracking-[0.2em] text-white"
        style={{
          fontFamily: "Orbitron"
        }}
      >
        SHINORA
      </h3>

      <p className="mt-3 text-sm text-gray-500">
        Futuristic AI experience for the next generation.
      </p>

    </div>

    {/* LINKS */}
    <div className="flex gap-8 text-gray-400">

      <a
        href="/"
        className="transition hover:text-purple-300"
      >
        Home
      </a>

      <a
        href="#features"
        className="transition hover:text-purple-300"
      >
        Features
      </a>

      <a
        href="/chat"
        className="transition hover:text-purple-300"
      >
        Chat
      </a>

    </div>

    {/* COPYRIGHT */}
    <p className="text-sm text-gray-500">
      © 2026 Shinora AI by Enikfa. All rights reserved.
    </p>

  </div>

</footer>
    </main>
  );
}