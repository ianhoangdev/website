"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const messages = [
    "No (╥﹏╥)",
    "Hmmm... no?",
    "Touch me again and you'll see!!",
    "Click this and you're gay",
    "Nice try! (≧◡≦)",
    "You can't escape my love 💞",
  ];

  const [noMessageIndex, setNoMessageIndex] = useState(0);

  const changeMessage = () => {
    setNoMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-br from-pink-300 to-pink-500 bg-cover bg-center">
      <div className="p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-white/40 bg-white/60">
        <h1 className="text-4xl font-bold text-pink-600 mb-6 drop-shadow-lg">
          Will you be my Valentine? 💝
        </h1>
        <div className="flex space-x-6 relative">
          <Link
            href="/confirmation"
            className="px-6 py-3 bg-gradient-to-r from-pink-400 to-rose-300 text-white text-lg font-bold rounded-full hover:scale-105 transition-all shadow-md hover:from-pink-500 hover:to-rose-400"
          >
            Yes! 💖
          </Link>
          <button
            onClick={changeMessage}
            className="px-6 py-3 bg-blue-300 text-white text-lg font-bold rounded-full transition-all shadow-md hover:bg-blue-400"
          >
            {messages[noMessageIndex]}
          </button>
        </div>
      </div>

      {/* Floating Capybara */}
      <img
        src="/capybara.gif"
        alt="Capybara"
        className="absolute w-28 h-28 drop-shadow-lg animate-bounce"
        style={{ left: "80%", top: "75%" }}
      />

      {/* Other images */}
      <img
        src="/cat.gif"
        alt="Cat"
        className="absolute drop-shadow-lg w-24 h-auto"
        style={{ left: "10%", top: "20%" }}
      />

      <img
        src="/photo1.png"
        alt="Photo 1"
        className="absolute drop-shadow-lg w-[400px] h-auto"
        style={{ left: "50%", top: "65%", transform: "translateX(-50%)" }}
      />

      <img
        src="/photo2.png"
        alt="Photo 2"
        className="absolute drop-shadow-lg w-[400px] h-auto"
        style={{ left: "0%", top: "50%" }}
      />

      <img
        src="/capy.gif"
        alt="Capy"
        className="absolute drop-shadow-lg w-[400px] h-auto"
        style={{ left: "70%", top: "20%" }}
      />

      <img
        src="/tulip.gif"
        alt="Tulip"
        className="absolute drop-shadow-lg w-24 h-auto"
        style={{ left: "50%", top: "30%", transform: "translateX(-50%)" }}
      />

      <img
        src="/kiss.gif"
        alt="Kiss"
        className="absolute drop-shadow-lg w-24 h-auto"
        style={{ left: "40%", top: "32%" }}
      />

      <img
        src="/heart.gif"
        alt="Heart"
        className="absolute drop-shadow-lg w-[200px] h-auto"
        style={{ left: "40%", top: "0%" }}
      />
    </div>
  );
}