"use client";
import { usePathname } from "next/navigation";
import { Orbitron } from "next/font/google";
import Image from "next/image";
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
export default function ImagePage() {

  const pathname = usePathname();
  const [theme, setTheme] = useState("purple");
  const [prompt, setPrompt] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [history, setHistory] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState("");
    const [favorites, setFavorites] =
  useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [style, setStyle] = useState("Anime");
    const suggestions = [
  "Cyberpunk city at night",
  "Anime girl with neon lights",
  "Futuristic robot warrior",
  "Fantasy castle in the sky",
  "Astronaut in deep space",
  "Luxury modern bedroom",
];

const styles = [
  "Anime",
  "Realistic",
  "Cyberpunk",
  "Fantasy",
  "Sci-Fi",
  "Pixar",
];

const generateImage = async () => {
  if (!prompt.trim()) return;
  setLoading(true);
  const randomSeed = Math.floor(Math.random() * 100000);
  const fullPrompt = `${prompt}, ${style} style`;
const url =
  `https://image.pollinations.ai/prompt/${encodeURIComponent(fullPrompt)}?width=1024&height=1024&seed=${randomSeed}`;
  setImageUrl(url);
  setHistory((prev) => [url, ...prev]);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
};

useEffect(() => {
const savedFavorites =
  localStorage.getItem(
    "shinora-favorites"
  );

if (savedFavorites) {

  setFavorites(
    JSON.parse(savedFavorites)
  );

}

  const savedTheme =
    localStorage.getItem("shinora-theme");

  if (savedTheme) {

    setTheme(savedTheme);

  }

  const savedHistory =
    localStorage.getItem(
      "shinora-image-history"
    );

  if (savedHistory) {

    setHistory(
      JSON.parse(savedHistory)
    );

  }

}, []);

useEffect(() => {

  localStorage.setItem(
    "shinora-image-history",
    JSON.stringify(history)
  );

}, [history]);

useEffect(() => {

  localStorage.setItem(
    "shinora-favorites",
    JSON.stringify(favorites)
  );

}, [favorites]);

const clearImageHistory = () => {

  setHistory([]);

  localStorage.removeItem(
    "shinora-image-history"
  );

};

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
      <a href="/image" className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
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
  alt="Shinora Logo"
  width={56}
  height={56}
  className="rounded-2xl"
/>

  <div>

<h1
  className={`${orbitron.className} bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-3xl font-black text-transparent`}>
  Shinora Image Generator
</h1>

    <p className="mt-1 text-sm text-gray-400">
      Create futuristic AI-generated artwork
    </p>

  </div>

</div>

      <div className="mx-auto max-w-3xl">
<div className="mb-6 flex flex-wrap gap-3">

  {suggestions.map((item, index) => (

    <button
      key={index}
      onClick={() => setPrompt(item)}
      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300 transition hover:bg-white/[0.08]"
    >

      {item}

    </button>

  ))}

</div>

<div className="mb-8 flex flex-wrap gap-3">

  {styles.map((item, index) => (

    <button
      key={index}
      onClick={() => setStyle(item)}
      className={`rounded-2xl px-4 py-2 text-sm transition ${
        style === item
          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
          : "border border-white/10 bg-white/[0.04] text-gray-300 hover:bg-white/[0.08]"
      }`}
    >

      {item}

    </button>

  ))}

</div>

        <div className="flex gap-4">

          <input
            type="text"
            placeholder="Describe your image..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 outline-none"
          />

            <button onClick={generateImage}className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 font-semibold">
            {loading ? "Generating..." : "Generate"}
            </button>

            </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">

   {loading ? (

  <div className="flex flex-col items-center justify-center py-24">

    <div className="h-20 w-20 animate-spin rounded-full border-4 border-purple-500 border-t-transparent" />

    <p className="mt-6 animate-pulse text-lg text-gray-400">

      AI is generating your artwork...

    </p>

  </div>

) : imageUrl ? (

<div>

  <img
    src={imageUrl}
    alt="Generated AI"
    className="mx-auto w-full max-w-3xl rounded-3xl object-cover"
  />
  <a
    href={imageUrl}
    download target="_blank"className="mx-auto mt-6 flex w-fit rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold">
    Download Image
  </a>
</div>

        ) : (

  <p className="text-gray-500">
    Your AI image will appear here
  </p>

)}

        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl">

<div className="mb-6 flex items-center justify-between">

  <h2 className="text-2xl font-bold">
    Recent Creations
  </h2>

  <button
    onClick={clearImageHistory}
    className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium transition hover:bg-white/[0.08]"
  >

    Clear History

  </button>

</div>

  <div className="grid grid-cols-2 gap-6 md:grid-cols-3">

  {history.map((item, index) => (

    <div
      key={index}
      className="group relative overflow-hidden rounded-3xl border border-white/10"
    >

      <img
        src={item}
        alt="AI History"
        onClick={() => setSelectedImage(item)}
        className="cursor-pointer object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
      />

      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition duration-500 group-hover:opacity-100">

        <p className="text-sm font-medium text-white">
          AI Generated Artwork
        </p>

      </div>

    </div>

  ))}

</div>

</div>

{favorites.length > 0 && (

  <div className="mx-auto mt-20 max-w-6xl">

    <div className="mb-6 flex items-center justify-between">

      <h2 className="text-2xl font-bold">
        Favorite Artworks
      </h2>

      <p className="text-sm text-gray-400">
        {favorites.length} saved artworks
      </p>

    </div>

    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">

      {favorites.map((item, index) => (

        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl border border-yellow-500/20"
        >

          <img
            src={item}
            alt="Favorite Artwork"
            onClick={() => setSelectedImage(item)}
            className="cursor-pointer object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
          />

          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition duration-500 group-hover:opacity-100">

            <p className="text-sm font-medium text-yellow-300">
              ★ Favorite Artwork
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

)}

{selectedImage && (

  <div
    onClick={() => setSelectedImage("")}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-10 backdrop-blur-xl"
  >

    <img
      src={selectedImage}
      alt="Fullscreen AI"
      className="max-h-full max-w-full rounded-3xl"
    />

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