"use client";
import { useState } from "react";
import Link from "next/link";

export default function Reward() {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(true);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 to-pink-500">
      <div className="text-center">
        {!isOpened ? (
          <button
            onClick={handleClick}
            className="relative transition-transform transform hover:scale-110 active:scale-95"
          >
            <img
              src="/gift-box.png"
              alt="Mystery Gift"
              className="w-64 drop-shadow-xl hover:animate-pulse"
            />
            <p className="text-white font-bold text-2xl mt-4 drop-shadow-md">
              Tap to Open!
            </p>
          </button>
        ) : (
          <div className="relative p-6 rounded-2xl bg-white/60 shadow-xl backdrop-blur-md border border-white/40 max-w-md mx-auto">
            <h1 className="text-4xl font-extrabold text-pink-700 drop-shadow-lg mb-4">
              🎉 Surprise! 🎉
            </h1>
            <p className="text-lg text-gray-800 font-medium leading-relaxed">
              Congrats baby you just got a <span className="text-pink-600 font-semibold">free Spotify Premium</span> account! Contact me w/ voucher MYHANDSOMEMAN for more info
            </p>
            <p className="text-lg text-gray-800 font-medium mt-2">
              Plus, an <span className="text-pink-600 font-semibold">Amazon Gift Card</span> because you're awesome:D Not that I don't know what to buy
            </p>
            <p className="text-md font-mono bg-gray-100 text-gray-700 p-2 mt-4 rounded-md shadow-inner">
              🎟️ Claim Code: <span className="font-bold text-pink-700">AQDQ-ZSPAMN-4MLA7</span>
            </p>

            <Link
              href="/invite"
              className="inline-block mt-6 px-5 py-2 bg-pink-600 text-white font-semibold rounded-full shadow-md hover:bg-pink-700 transition"
            >
              Next →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
