"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Orbitron } from "next/font/google";
import {
  MessageSquare,
  FileText,
  ImageIcon,
  Settings,
  CircleHelp,
  Mail,
  Menu,
  X
} from "lucide-react";
const orbitron = Orbitron({
  subsets: ["latin"],
});

export default function ContactPage() {
const pathname = usePathname();
const [theme, setTheme] = useState("purple");
const [mobileMenu, setMobileMenu] =
  useState(false);

useEffect(() => {

  const savedTheme =
    localStorage.getItem("shinora-theme");

  if (savedTheme) {

    setTheme(savedTheme);

  }

}, []);

  return (

<div
  className={`relative flex min-h-screen overflow-hidden text-white ${
    theme === "purple"
      ? "bg-[#050816]"
      : theme === "blue"
      ? "bg-[#061224]"
      : "bg-[#030303]"
  }`}
>

  {/* LEFT SIDEBAR */}
  <aside
  className={`fixed left-0 top-0 z-50 flex h-screen w-[280px]
  flex-col border-r border-white/10 bg-[#111827] p-6
  transition-transform duration-300 lg:relative lg:translate-x-0 ${
    mobileMenu
      ? "translate-x-0"
      : "-translate-x-full"
  }`}
>

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
{/* AI CHAT */}
<a
  href="/chat"
  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
    pathname === "/chat"
      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
      : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
  }`}
>

  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-purple-400">
    <MessageSquare size={18} />
  </div>

  <span className="font-medium">
    AI Chat
  </span>

</a>

      {/* TEXT GENERATOR */}
      <a
  href="/text"
  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
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

      {/* IMAGE GENERATOR */}
      <a
  href="/image"
  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
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
  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
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

<main className="relative flex-1 overflow-hidden p-4 pt-20 sm:p-6 lg:p-10">

<button
  onClick={() =>
    setMobileMenu(!mobileMenu)
  }
  className="fixed left-4 top-4 z-[60] rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl lg:hidden"
>
  {mobileMenu ? (
    <X size={22} />
  ) : (
    <Menu size={22} />
  )}
</button>

      {/* BACKGROUND */}
      <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />

      {/* HEADER */}
      <div className="mb-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">

        <Image
          src="/logo.png"
          alt="Logo"
          width={56}
          height={56}
          className="rounded-2xl"
        />

        <div>

          <h1
            className={`${orbitron.className} bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-2xl sm:text-4xl font-black text-transparent`}
          >
            Contact Shinora
          </h1>

          <p className="mt-2 text-gray-400">
            Connect with the developer
          </p>

        </div>

      </div>

      {/* CONTACT CARDS */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* EMAIL */}
        <a
          href="mailto:ikhsanalirahman05@email.com"
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-8 transition hover:scale-[1.02] hover:bg-white/[0.06]"
        >

          <p className="text-sm text-gray-400">
            Email
          </p>

          <h2 className="mt-3 text-lg break-all sm:text-2xl font-medium tracking-wide text-gray-100">
            ikhsanalirahman05@email.com
          </h2>

        </a>

        {/* INSTAGRAM */}
        <a
          href="https://instagram.com/ikhsan.ar_"
          target="_blank"
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-8 transition hover:scale-[1.02] hover:bg-white/[0.06]"
        >

          <p className="text-sm text-gray-400">
            Instagram
          </p>

          <h2 className="mt-3 text-lg break-all sm:text-2xl font-medium tracking-wide text-gray-100">
            @ikhsan.ar_
          </h2>

        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/6283837924951"
          target="_blank"
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-8 transition hover:scale-[1.02] hover:bg-white/[0.06]"
        >

          <p className="text-sm text-gray-400">
            WhatsApp
          </p>

          <h2 className="mt-3 text-lg break-all sm:text-2xl font-medium tracking-wide text-gray-100">
            +62 838-3792-4951
          </h2>

        </a>

        {/* LINKEDIN */}
        <a
          href="https://linkedin.com/in/Ikhsan Ali Rahman"
          target="_blank"
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-8 transition hover:scale-[1.02] hover:bg-white/[0.06]"
        >

          <p className="text-sm text-gray-400">
            LinkedIn
          </p>

          <h2 className="mt-3 text-lg break-all sm:text-2xl font-medium tracking-wide text-gray-100">
            Ikhsan Ali Rahman
          </h2>

        </a>

      </div>

{mobileMenu && (
  <div
    onClick={() =>
      setMobileMenu(false)
    }
    className="fixed inset-0 z-40 bg-black/60 lg:hidden"
  />
)}
   </main>

</div>

);

}