"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import { useState, useEffect } from "react";

import {
  MessageSquare,
  FileText,
  ImageIcon,
  Settings,
  CircleHelp,
  Mail
} from "lucide-react";

const orbitron = Orbitron({
  subsets: ["latin"],
});

export default function TextPage() {
  const pathname = usePathname();
  const [prompt, setPrompt] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState("purple");
  const [history, setHistory] = useState<string[]>([]);
  const templates = [
  "Blog Post",
  "Instagram Caption",
  "Professional Email",
  "Essay",
  "YouTube Script",
  "Code Generator",
  "Text Summary",
];

const generateText = async () => {

  if (!prompt.trim()) return;

  setLoading(true);

  try {

    const response = await fetch("/api/chat", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        message: prompt,
      }),

    });

    const data = await response.json();

    await typeText(data.reply);
    setHistory((prev) => [
  data.reply,
  ...prev,
]);
    setLoading(false);

  } catch (error) {

    setResult("Error generating text.");

    setLoading(false);

  }

};

const copyText = async () => {

  await navigator.clipboard.writeText(result);

  setCopied(true);

  setTimeout(() => {

    setCopied(false);

  }, 2000);

};

const typeText = async (text: string) => {

  let current = "";

  for (let i = 0; i < text.length; i++) {

    current += text[i];

    setResult(current);

const speed =
  localStorage.getItem("shinora-speed");

let typingSpeed = 10;

if (speed === "slow") {
  typingSpeed = 40;
}

if (speed === "normal") {
  typingSpeed = 20;
}

if (speed === "fast") {
  typingSpeed = 5;
}

await new Promise((resolve) =>
  setTimeout(resolve, typingSpeed)
);

  }

};

const clearHistory = () => {

  setHistory([]);

  localStorage.removeItem(
    "shinora-text-history"
  );

};

useEffect(() => {

  localStorage.setItem(
    "shinora-text-history",
    JSON.stringify(history)
  );

}, [history]);

useEffect(() => {

  const saved = localStorage.getItem(
    "shinora-text-history"
  );

  if (saved) {

    setHistory(JSON.parse(saved));

  }

}, []);

    useEffect(() => {

  const savedTheme =
    localStorage.getItem("shinora-theme");

  if (savedTheme) {

    setTheme(savedTheme);

  }

}, []);
return (
<>

<div
  className={`flex min-h-screen text-white ${
    theme === "purple"
      ? "bg-[#050816]"
      : theme === "blue"
      ? "bg-[#061224]"
      : "bg-[#030303]"
  }`}
>

      {/* LEFT SIDEBAR */}
      <aside className="flex w-[310px] flex-col border-r border-white/10 bg-[#111827] p-6">

        {/* LOGO */}
        <div className="mb-10 flex items-center gap-3">

          <Image
        src="/logo.png"
        alt="Shinora Logo"
        width={52}
        height={52}
        className="object-contain"
          />

          <div>

            <h1
              className="text-2xl tracking-[0.2em]"
              style={{
                fontFamily: "Orbitron"
              }}
            >
              SHINORA
            </h1>

            <p className="text-sm text-gray-500">
              Futuristic AI
            </p>

          </div>

        </div>

        {/* MENU */}
<div className="mt-6">

  {/* PRODUCTS */}
  <div>

    <p className="mb-2 px-2 text-xs tracking-wide text-gray-500">
      Products
    </p>

    <div className="space-y-1">

    {/* AI CHAT */}
<a href="/chat"className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
  pathname === "/chat"
    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
    : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
}`}>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-purple-400">
          <MessageSquare size={18} />
        </div>

        <span className="font-medium">
          AI Chat
        </span>

      </a>

      {/* TEXT GENERATOR */}
      <a
  href="/text" className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
  pathname === "/text"
    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
    : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
}`}>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-purple-400">
          <FileText size={18} />
        </div>

        <span>
          Text Generator
        </span>

      </a>

      {/* IMAGE GENERATOR */}
<a href="/image"className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
  pathname === "/image"
    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
    : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
}`}>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-purple-400">
          <ImageIcon size={18} />
        </div>

        <span>
          Image Generator
        </span>

      </a>

    </div>

  </div>

  {/* LINE */}
  <div className="my-5 border-t border-white/10"></div>

  {/* IMPORTANT LINKS */}
  <div>

    <p className="mb-2 px-2 text-xs tracking-wide text-gray-500">
      Important Links
    </p>

    <div className="space-y-1">

       {/* SETTINGS */}

<a
  href="/settings"
  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
    pathname === "/settings"
      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
      : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
  }`}
>

  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-purple-400">
    <Settings size={18} />
  </div>

  <span>
    Settings
  </span>

</a>

 {/* FAQ */}
<a
  href="/help"
  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 transition ${
    pathname === "/help"
      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
      : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
  }`}
>

  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-purple-400">
    <CircleHelp size={18} />
  </div>

  <span>
    Help & FAQ
  </span>

</a>

      {/* CONTACT */}
<a
  href="/contact"
  className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-gray-400 transition hover:bg-white/[0.05] hover:text-white"
>

  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-purple-400">
    <Mail size={18} />
  </div>

  <span>
    Contact
  </span>

</a>

    </div>

  </div>

</div>
{/* BOTTOM */}
        <div className="mt-auto rounded-3xl border border-white/10 bg-white/[0.03] p-4">

          <p className="text-sm text-gray-400">
            Shinora AI Dashboard
          </p>

          <button className="mt-3 w-full rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-3 font-semibold transition hover:scale-105">
            Upgrade Now

          </button>

        </div>

</aside>
  <main className="relative flex-1 overflow-hidden p-10">
    <button
  onClick={() => setSidebarOpen(true)}
  className="mb-6 rounded-xl border border-white/10 bg-white/[0.04] p-3 lg:hidden"
>

  ☰

</button>

    {/* BACKGROUND GLOW */}
<div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]" />
<div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="mb-10 flex items-center gap-4">

        <Image
          src="/logo.png"
          alt="Logo"
          width={56}
          height={56}
          className="rounded-2xl"
        />

        <div>

          <h1
            className={`${orbitron.className} bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-3xl font-black text-transparent`}
          >
            Shinora Text Generator
          </h1>

          <p className="text-sm text-gray-400">
            Generate AI-powered text instantly
          </p>

        </div>

      </div>

      <div className="mx-auto max-w-4xl">

    <div className="mb-6 flex flex-wrap gap-3">

  {templates.map((item, index) => (

    <button
      key={index}
      onClick={() => setPrompt(item)}
      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300 transition hover:bg-white/[0.08]"
    >

      {item}

    </button>

  ))}

</div>

       <textarea
  rows={1}
  placeholder="Describe what you want..."
  value={prompt}
  onChange={(e) => setPrompt(e.target.value)}
  onKeyDown={(e) => {

  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    generateText();
  }
}}
  onInput={(e) => {

    e.currentTarget.style.height = "auto";

    e.currentTarget.style.height =
      e.currentTarget.scrollHeight + "px";

  }}
  className="w-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 outline-none"
/>
<p className="mt-2 text-right text-sm text-gray-500">

  {prompt.length} characters

</p>

        <button
          onClick={generateText}
          className={`mt-6 rounded-2xl px-8 py-4 font-semibold transition ${
  loading
    ? "cursor-not-allowed bg-gray-700"
    : "bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105"
}`}
        >

          {loading ? (

  <div className="flex items-center gap-2">

    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>

    <span>
      Generating...
    </span>

  </div>

) : (

  "Generate Text"

)}

        </button>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">

<div className="space-y-4 transition-all duration-500">

  <p className="leading-relaxed text-gray-300">
    {result || "Generated text will appear here"}
  </p>

  {result && (

    <button
      onClick={copyText}
      className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold"
    >

      Copy Text

    </button>

  )}

</div>

        </div>

      </div>
 <div className="mt-10">

  <div className="mb-4 flex items-center justify-between">

    <h3 className="text-lg font-semibold text-white">
      Recent Generations
    </h3>

    <button
    disabled={loading}
      onClick={clearHistory}
      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300 transition hover:bg-white/[0.06]"
    >

      Clear

    </button>

  </div>

<div className="space-y-3">

  {history.length === 0 && (

    <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-6 text-center text-sm text-gray-500">

      No recent generations yet

    </div>

  )}

  {history.slice(0, 5).map((item, index) => (

    <div
      key={index}
      onClick={() => setResult(item)}
      className="cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-gray-300 transition hover:bg-white/[0.06]"
    >

      {item.slice(0, 120)}...

    </div>

  ))}

</div>

</div>
  {copied && (

  <div className="fixed bottom-6 right-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4 font-semibold shadow-2xl">

    Copied to clipboard!

  </div>

)}

    </main>
    </div>
{sidebarOpen && (

  <div
    onClick={() => setSidebarOpen(false)}
    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
  />

)}

</>
  );

}