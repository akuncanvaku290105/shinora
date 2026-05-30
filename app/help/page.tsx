"use client";

import Image from "next/image";
import { Orbitron } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import {
  Settings,
  MessageSquare,
  FileText,
  ImageIcon,
  CircleHelp,
  Mail,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const orbitron = Orbitron({
  subsets: ["latin"],
});

export default function HelpPage() {

  const pathname = usePathname();

  const [theme, setTheme] = useState("purple");

  const [openFAQ, setOpenFAQ] =
    useState<number | null>(null);

  useEffect(() => {

    const savedTheme =
      localStorage.getItem("shinora-theme");

    if (savedTheme) {

      setTheme(savedTheme);

    }

  }, []);

  const faqs = [
    {
      question: "How to use AI Chat?",
      answer:
        "Open AI Chat from the sidebar and start chatting with Shinora AI instantly.",
    },
    {
      question: "How to generate images?",
      answer:
        "Go to Image Generator, enter your prompt, then click Generate Image.",
    },
    {
      question: "How to switch themes?",
      answer:
        "Open Settings page and choose between Purple, Blue, or Dark themes.",
    },
    {
      question: "How to clear history?",
      answer:
        "Open Settings and click Delete All History.",
    },
    {
      question: "Is Shinora free?",
      answer:
        "Yes. Shinora is currently free to use.",
    },
    {
      question: "How to add accounts?",
      answer:
        "Go to Settings page and use the Add Account button.",
    },
  ];

  return (

    <div
      className={`flex min-h-screen text-white ${
        theme === "purple"
          ? "bg-[#050816]"
          : theme === "blue"
          ? "bg-[#061224]"
          : "bg-[#030303]"
      }`}
    >

      {/* SIDEBAR */}
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
                fontFamily: "Orbitron",
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

          <p className="mb-2 px-2 text-xs tracking-wide text-gray-500">
            Products
          </p>

          <div className="space-y-1">

            {/* CHAT */}
            <a
              href="/chat"
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 transition ${
                pathname === "/chat"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
              }`}
            >

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-purple-400">
                <MessageSquare size={18} />
              </div>

              <span>
                AI Chat
              </span>

            </a>

            {/* TEXT */}
            <a
              href="/text"
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 transition ${
                pathname === "/text"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
              }`}
            >

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-purple-400">
                <FileText size={18} />
              </div>

              <span>
                Text Generator
              </span>

            </a>

            {/* IMAGE */}
            <a
              href="/image"
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 transition ${
                pathname === "/image"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
              }`}
            >

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-purple-400">
                <ImageIcon size={18} />
              </div>

              <span>
                Image Generator
              </span>

            </a>

          </div>

          {/* LINE */}
          <div className="my-5 border-t border-white/10"></div>

          <p className="mb-2 px-2 text-xs tracking-wide text-gray-500">
            Important Links
          </p>

          <div className="space-y-1">

            {/* SETTINGS */}
            <a
              href="/settings"
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 transition ${
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
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 transition ${
                pathname === "/contact"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
              }`}
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

      </aside>

      {/* MAIN */}
      <main className="relative flex-1 overflow-hidden p-10">

        {/* BG */}
        <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]" />

        <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />

        {/* HEADER */}
        <div className="mb-12">

          <h1
            className={`${orbitron.className} bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-5xl font-black text-transparent`}
          >
            Help & FAQ
          </h1>

          <p className="mt-3 text-gray-400">
            Everything you need to know about Shinora AI
          </p>

        </div>

        {/* FAQ */}
        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:bg-white/[0.06]"
            >

              <button
                onClick={() =>
                  setOpenFAQ(
                    openFAQ === index
                      ? null
                      : index
                  )
                }
                className="flex w-full items-center justify-between text-left"
              >

                <h2 className="text-lg font-semibold">
                  {faq.question}
                </h2>

                {openFAQ === index ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}

              </button>

              {openFAQ === index && (

                <p className="mt-4 leading-relaxed text-gray-400">
                  {faq.answer}
                </p>

              )}

            </div>

          ))}

        </div>

      </main>

    </div>

  );

}