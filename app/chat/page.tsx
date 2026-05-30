"use client";
import { usePathname } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  FileText,
  ImageIcon,
  Settings,
  CircleHelp,
  Mail
} from "lucide-react";
export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const [theme, setTheme] = useState("purple");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
  {
    role: "ai",
    text: "Hello. I am Shinora AI. How can I help you today?"
  }
]);
const [chatHistory, setChatHistory] = useState<any[]>([]);

const [loading, setLoading] = useState(false);

const chatEndRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {

  chatEndRef.current?.scrollIntoView({
    behavior: "smooth"
  });

}, [messages]);

useEffect(() => {

  localStorage.setItem(
    "shinora-history",
    JSON.stringify(messages)
  );

}, [messages]);

useEffect(() => {

  const saved = localStorage.getItem(
    "shinora-history"
  );

  if (saved) {
    setMessages(JSON.parse(saved));
  }

}, []);

const typeMessage = async (text: string) => {

  let currentText = "";

  for (let i = 0; i < text.length; i++) {

    currentText += text[i];

    setMessages((prev) => {

      const updated = [...prev];

      updated[updated.length - 1] = {
        role: "ai",
        text: currentText,
      };

      return updated;

    });

    await new Promise((resolve) =>
      setTimeout(resolve, 15)
    );

  }

};

const sendMessage = async () => {

  if (!input.trim()) return;
  setLoading(true);
  const userText = input;

  setMessages((prev) => [
    ...prev,
    {
      role: "user",
      text: userText,
    }
  ]);

  

  setInput("");

  try {

    const response = await fetch("/api/chat", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        message: userText,
      }),

    });

    const data = await response.json();

  setMessages((prev) => [
  ...prev,
  {
    role: "ai",
    text: "",
  }
]);

await typeMessage(data.reply);

    setLoading(false);

  } catch (error) {

    setMessages((prev) => [
      ...prev,
      {
        role: "ai",
        text: "Error connecting to Shinora AI.",
      }
    ]);
    setLoading(false);

  }

};

const newChat = () => {

  const firstUserMessage = messages.find(
    (msg) => msg.role === "user"
  );

  if (firstUserMessage) {

    setChatHistory((prev) => [
      ...prev,
      {
        title: firstUserMessage.text,
        messages: messages,
      }
    ]);

  }

  setMessages([
    {
      role: "ai",
      text: "Hello. I am Shinora AI. How can I help you today?"
    }
  ]);

};

useEffect(() => {

  const savedTheme =
    localStorage.getItem("shinora-theme");

  if (savedTheme) {

    setTheme(savedTheme);

  }

}, []);

  return (

<>
    <main
  className={`flex h-screen overflow-hidden text-white ${
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

      {/* CENTER CHAT */}
      <section className="flex h-screen flex-1 flex-col overflow-hidden">

        {/* TOPBAR */}
        <div className="flex items-center justify-between border-b border-white/10 px-10 py-6">
        <button
  onClick={() => setSidebarOpen(true)}
  className="rounded-xl border border-white/10 bg-white/[0.04] p-3 lg:hidden"
>

  ☰

</button>

          <h2 className="text-2xl font-semibold">
            Shinora AI Chat
          </h2>

        </div>

 {/* CHAT AREA */}
<div className="relative flex-1 overflow-y-auto px-8 py-8">

  {/* GLOW */}
  <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[140px]"></div>

  <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]"></div>

  <div className="relative space-y-8">

    {messages.map((msg, index) => (

              <div
                key={index}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-3xl rounded-3xl px-6 py-5 ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl shadow-purple-500/20"
                      : "border border-white/10 bg-white/[0.04] text-gray-300 backdrop-blur-xl"
                  }`}
                >

                  {msg.role === "ai" && (

                    <div className="mb-4 flex items-center gap-3">

                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

                      <div>

                        <p className="font-semibold text-white">
                          Shinora AI
                        </p>

                        <p className="text-xs text-gray-500">
                          Online
                        </p>

                      </div>

                    </div>

                  )}

<div className="text-white leading-relaxed whitespace-pre-wrap">

  <ReactMarkdown>
    {msg.text}
  </ReactMarkdown>

</div>

                </div>

              </div>

            ))}
            {loading && (

  <div className="flex justify-start">

    <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-xl">

      <div className="flex gap-2">

        <span className="h-3 w-3 animate-bounce rounded-full bg-purple-400"></span>

        <span className="h-3 w-3 animate-bounce rounded-full bg-purple-400 [animation-delay:0.2s]"></span>

        <span className="h-3 w-3 animate-bounce rounded-full bg-purple-400 [animation-delay:0.4s]"></span>

      </div>

    </div>

  </div>

)}
            <div ref={chatEndRef}></div>

          </div>

        </div>

        {/* INPUT */}
<div className="border-t border-white/10 p-8">

  <div className="relative mx-auto flex max-w-5xl items-center gap-3 rounded-[36px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">

    <input
      type="text"
      placeholder="Ask Shinora anything..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          sendMessage();
        }
      }}
      className="flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-500"
    />

    <button
      onClick={sendMessage}
      className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 font-semibold transition hover:scale-105 active:scale-95"
    >

      Send

    </button>

  </div>

</div>

      </section>

{/* RIGHT PANEL */}
<aside className="w-[340px] border-l border-white/10 bg-[#111827] p-6">

  <button
    onClick={newChat}
    className="w-full rounded-2xl bg-white/[0.05] px-4 py-3 font-semibold transition hover:bg-white/[0.08]"
  >
    + New Chat
  </button>

  <div className="mt-6 space-y-3">

{chatHistory.map((chat, index) => (

  <div
    key={index}
    onClick={() => setMessages(chat.messages)}
    className="cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.06]"
  >

    <p className="truncate text-sm text-gray-300">
      {chat.title}
    </p>

  </div>

))}

  </div>

  {/* SEARCH */}
  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">

    <input
      type="text"
      placeholder="Search"
      className="w-full bg-transparent outline-none placeholder:text-gray-500"
    />

  </div>

</aside>

    </main>
{sidebarOpen && (

  <div
    onClick={() => setSidebarOpen(false)}
    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
  />

)}

</>
  );
}