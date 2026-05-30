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
  Moon,
  Zap,
  Trash2
} from "lucide-react";

const orbitron = Orbitron({
  subsets: ["latin"],
});


export default function SettingsPage() {
const clearAllHistory = () => {

  localStorage.removeItem(
    "shinora-text-history"
  );
  showToast("History cleared!");
};

  const pathname = usePathname();
const [theme, setTheme] = useState("purple");
const [toast, setToast] = useState("");
const [speed, setSpeed] = useState("normal");
const [sidebarOpen, setSidebarOpen] =
  useState(false);
const [user, setUser] = useState(null);
useEffect(() => {

  const savedUser =
    localStorage.getItem(
      "shinora-user"
    );

  if (savedUser) {

    setUser(
      JSON.parse(savedUser)
    );

  }

}, []);
const [username, setUsername] = useState(
  "Ikhsan Ali Rahman"
);

const [email, setEmail] = useState(
  "ikhsanalirahman05@email.com"
);
const showToast = (message: string) => {

  setToast(message);

  setTimeout(() => {

    setToast("");

  }, 2000);

};
const resetSettings = () => {

  localStorage.setItem(
    "shinora-theme",
    "purple"
  );

  localStorage.setItem(
    "shinora-speed",
    "normal"
  );

  setTheme("purple");

  setSpeed("normal");

  showToast("Settings reset!");

  window.location.reload();

};

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
      <aside
  className={`fixed top-0 left-0 z-[60] h-full w-[280px]
  flex flex-col border-r border-white/10 bg-[#111827] p-6
  transition-transform duration-300
  ${
    sidebarOpen
      ? "translate-x-0"
      : "-translate-x-full"
  }
  lg:translate-x-0 lg:static lg:w-[310px]`}
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

          <p className="mb-2 px-2 text-xs tracking-wide text-gray-500">
            Products
          </p>

          <div className="space-y-1">

            {/* AI CHAT */}
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

      {/* MAIN */}
      <main className="relative flex-1 overflow-hidden p-4 sm:p-6 lg:p-10">

<button
  onClick={() => setSidebarOpen(true)}
  className="mb-6 rounded-xl border border-white/10 bg-white/[0.04] p-3 lg:hidden"
>

  ☰

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
              Shinora Settings
            </h1>

            <p className="mt-2 text-gray-400">
              Customize your AI dashboard
            </p>

          </div>

        </div>

        {/* SETTINGS CARDS */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        
        {/* ACCOUNT */}
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

  <h2 className="mb-6 text-xl font-semibold">
    Account
  </h2>

{/* ACCOUNT CONTENT */}

{user ? (

  <>

    {/* CURRENT ACCOUNT */}
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">

      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-xl font-bold">

        {(user as any).username?.charAt(0)}

      </div>

      <div>

        <p className="font-medium text-white">
          {(user as any).username}
        </p>

        <p className="text-sm text-gray-400">
          {(user as any).email}
        </p>

      </div>

    </div>

    {/* LOGOUT */}
    <button
      onClick={() => {

        localStorage.removeItem(
          "shinora-user"
        );

        setUser(null);

        showToast("Logged out!");

      }}
      className="mt-6 w-full rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 px-6 py-4 font-semibold transition hover:scale-105"
    >

      Logout

    </button>

  </>

) : (

  <div className="space-y-4">

    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <p className="text-lg font-semibold text-white">
        Guest User
      </p>

      <p className="mt-2 text-sm text-gray-400">
        Login or register to unlock unlimited AI features.
      </p>

    </div>

    <div className="flex flex-col gap-3 sm:flex-row">

      <a
        href="/login"
        className="flex-1 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4 text-center font-semibold transition hover:scale-105"
      >

        Login

      </a>

      <a
        href="/register"
        className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-center font-semibold transition hover:bg-white/[0.06]"
      >

        Register

      </a>

    </div>

  </div>

)}
</div>

 {/* THEME */}
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

  <div className="mb-4 flex items-center gap-3">

    <Moon className="text-purple-400" />

    <h2 className="text-xl font-semibold">
      Dashboard Theme
    </h2>

  </div>

  <div className="mt-6 flex flex-wrap gap-3">

<button
onClick={() => {
  localStorage.setItem("shinora-theme", "purple");
  setTheme("purple");
  showToast("Theme updated!");
  window.location.reload();
}}
  className={`rounded-2xl px-4 py-2 font-medium transition-all duration-300 hover:scale-105 ${
    theme === "purple"
      ? "bg-purple-500 shadow-lg shadow-purple-500/40 ring-2 ring-purple-300"
      : "bg-white/[0.04] text-gray-300 hover:bg-white/[0.08]"
  }`}
>

  Purple

</button>

<button
  onClick={() => {
    localStorage.setItem("shinora-theme", "blue");
    setTheme("blue");

    window.location.reload();
  }}
  className={`rounded-2xl px-4 py-2 font-medium transition-all duration-300 hover:scale-105 ${
    theme === "blue"
      ? "bg-blue-500 shadow-lg shadow-blue-500/40 ring-2 ring-blue-300"
      : "bg-white/[0.04] text-gray-300 hover:bg-white/[0.08]"
  }`}
>

  Blue

</button>

 <button
  onClick={() => {
    localStorage.setItem("shinora-theme", "dark");
    setTheme("dark");

    window.location.reload();
  }}
  className={`rounded-2xl px-4 py-2 font-medium transition-all duration-300 hover:scale-105 ${
    theme === "dark"
      ? "bg-gray-800 shadow-lg shadow-gray-800/40 ring-2 ring-gray-500"
      : "bg-white/[0.04] text-gray-300 hover:bg-white/[0.08]"
  }`}
>

  Dark

</button>

  </div>

</div>

{/* AI SPEED */}
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

  <div className="mb-4 flex items-center gap-3">

    <Zap className="text-yellow-400" />

    <h2 className="text-xl font-semibold">
      AI Typing Speed
    </h2>

  </div>

 <div className="mt-6 flex flex-wrap gap-3">

  {/* SLOW */}
<button
  onClick={() => {
    localStorage.setItem("shinora-speed", "slow");

    setSpeed("slow");

    showToast("Typing speed updated!");

    window.location.reload();
  }}
  className={`rounded-2xl px-4 py-2 font-medium transition-all duration-300 hover:scale-105 ${
    speed === "slow"
      ? "bg-yellow-500 text-white shadow-lg shadow-yellow-500/40 ring-2 ring-yellow-300"
      : "bg-white/[0.04] text-gray-300 hover:bg-white/[0.08]"
  }`}
>

  Slow

</button>

  {/* NORMAL */}
 <button
  onClick={() => {
    localStorage.setItem("shinora-speed", "normal");

    setSpeed("normal");

    showToast("Typing speed updated!");

    window.location.reload();
  }}
  className={`rounded-2xl px-4 py-2 font-medium transition-all duration-300 hover:scale-105 ${
    speed === "normal"
      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/40 ring-2 ring-blue-300"
      : "bg-white/[0.04] text-gray-300 hover:bg-white/[0.08]"
  }`}
>

  Normal

</button>

  {/* FAST */}
 <button
  onClick={() => {
    localStorage.setItem("shinora-speed", "fast");

    setSpeed("fast");

    showToast("Typing speed updated!");

    window.location.reload();
  }}
  className={`rounded-2xl px-4 py-2 font-medium transition-all duration-300 hover:scale-105 ${
    speed === "fast"
      ? "bg-green-500 text-white shadow-lg shadow-green-500/40 ring-2 ring-green-300"
      : "bg-white/[0.04] text-gray-300 hover:bg-white/[0.08]"
  }`}
>

  Fast

</button>

</div>
</div>
          {/* CLEAR HISTORY */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

            <div className="mb-4 flex items-center gap-3">

              <Trash2 className="text-red-400" />

              <h2 className="text-xl font-semibold">
                Clear History
              </h2>

            </div>

            <button onClick={clearAllHistory}className="mt-4 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 px-6 py-3 font-semibold transition hover:scale-105">

              Delete All History

            </button>

          </div>

          {/* RESET SETTINGS */}
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

  <h2 className="mb-4 text-xl font-semibold">
    Reset Settings
  </h2>

  <p className="text-gray-400">
    Restore all dashboard settings to default.
  </p>

  <button
    onClick={resetSettings}
    className="mt-6 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105"
  >

    Reset to Default

  </button>

</div>

          {/* ABOUT */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

            <h2 className="mb-4 text-xl font-semibold">
              About Shinora
            </h2>

            <p className="text-gray-400">
              Shinora AI v1.0
            </p>

            <p className="mt-2 text-gray-500">
              Futuristic AI Dashboard built with Next.js & TailwindCSS
            </p>

          </div>

        </div>
{toast && (
  <div className="fixed bottom-6 left-1/2 z-50
w-[90%] max-w-sm -translate-x-1/2
rounded-2xl bg-gradient-to-r
from-blue-500 to-purple-500
px-6 py-4 text-center font-semibold
text-white shadow-2xl">
    {toast}
  </div>
)}
 </main>

{sidebarOpen && (

  <div
    onClick={() => setSidebarOpen(false)}
    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
  />

)}

    </div>

  );

}