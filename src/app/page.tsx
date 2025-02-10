"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

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
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const updateOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };
    updateOrientation();
    window.addEventListener("resize", updateOrientation);
    return () => window.removeEventListener("resize", updateOrientation);
  }, []);

  const changeMessage = () => {
    setNoMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-br from-pink-300 to-pink-500">
      <div className="p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-white/40 bg-white/60 max-w-[90%] md:max-w-[600px]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 mb-6 drop-shadow-lg">
          Will you be my Valentine? 💝
        </h1>
        <div className={`flex ${isLandscape ? "flex-row space-x-4" : "flex-col space-y-4"} items-center`}>
          <Link
            href="/confirmation"
            className="px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-pink-400 to-rose-300 text-white text-lg font-bold rounded-full hover:scale-105 transition-all shadow-md hover:from-pink-500 hover:to-rose-400"
          >
            Yes! 💖
          </Link>
          <button
            onClick={changeMessage}
            className="px-5 py-2 sm:px-6 sm:py-3 bg-blue-300 text-white text-lg font-bold rounded-full transition-all shadow-md hover:bg-blue-400"
          >
            {messages[noMessageIndex]}
          </button>
        </div>
      </div>

      {/* Floating Images */}
      <img
        src="/capybara.gif"
        alt="Capybara"
        className="absolute w-16 sm:w-24 md:w-28 drop-shadow-lg animate-bounce"
        style={{ left: "75%", top: isLandscape ? "50%" : "70%" }}
      />

      <img
        src="/cat.gif"
        alt="Cat"
        className="absolute drop-shadow-lg w-14 sm:w-20 md:w-24"
        style={{ left: "10%", top: isLandscape ? "60%" : "20%" }}
      />

      <img
        src="/photo1.png"
        alt="Photo 1"
        className="absolute drop-shadow-lg w-[200px] sm:w-[300px] md:w-[400px]"
        style={{ left: "50%", top: "65%", transform: "translateX(-50%)" }}
      />

      <img
        src="/photo2.png"
        alt="Photo 2"
        className="absolute drop-shadow-lg w-[200px] sm:w-[300px] md:w-[400px]"
        style={{ left: "5%", top: isLandscape ? "25%" : "50%" }}
      />

      <img
        src="/capy.gif"
        alt="Capy"
        className="absolute drop-shadow-lg w-[200px] sm:w-[300px] md:w-[400px]"
        style={{ left: "65%", top: isLandscape ? "10%" : "25%" }}
      />

      <img
        src="/tulip.gif"
        alt="Tulip"
        className="absolute drop-shadow-lg w-16 sm:w-20 md:w-24"
        style={{ left: "50%", top: isLandscape ? "20%" : "30%", transform: "translateX(-50%)" }}
      />

      <img
        src="/kiss.gif"
        alt="Kiss"
        className="absolute drop-shadow-lg w-16 sm:w-20 md:w-24"
        style={{ left: "40%", top: isLandscape ? "22%" : "32%" }}
      />

      <img
        src="/heart.gif"
        alt="Heart"
        className="absolute drop-shadow-lg w-[100px] sm:w-[150px] md:w-[200px]"
        style={{ left: "40%", top: "5%" }}
      />
    </div>
  );
}
