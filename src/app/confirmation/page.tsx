"use client";
import { useState } from "react";
import Link from "next/link";

export default function Confirmation() {
  const [letterOpen, setLetterOpen] = useState(false);

  const openLetter = () => {
    setLetterOpen(true);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-pink-300 to-pink-500">
        <img
          src="/woohoo.gif"
          alt="capylove"
          className="absolute drop-shadow-lg"
          style={{
            width: "200px",
            height: "auto",
            left: "50%",
            top: "5%",
          }}
        />
        <img
          src="/capylove.gif"
          alt="capylove"
          className="absolute drop-shadow-lg"
          style={{
            width: "300px",
            height: "auto",
            left: "50%",
            top: "68%",
            transform: "translateX(-50%)",
          }}
        />
      <div className="p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-white/80 bg-white/60 relative">
        <h1 className="text-4xl font-bold text-pink-600 mb-6 drop-shadow-lg">
          Yippe, I knew you would say yes! 💖
        </h1>
        <div className="space-y-4">
          {!letterOpen ? (
            <button
              onClick={openLetter}
              className="px-6 py-3 bg-gradient-to-r from-pink-400 to-rose-300 text-white text-lg font-bold rounded-full shadow-md hover:scale-105 transition-all hover:from-pink-500 hover:to-rose-400"
            >
              Open Letter 💌
            </button>
          ) : (
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <p className="text-xl text-pink-600">
                Emily, you are so amazing (smart and pretty too, geez) and I'm so grateful to call
              </p>
              <p className="text-xl text-pink-600">
                you my Valentine 💕 You don't have to say sorry that you can't spend time with me
              </p>
              <p className="text-xl text-pink-600">
                on 14th because with me everyday is Valentine's Day with you :D Saying that,
              </p>
              <p className="text-xl text-pink-600">
                Valentine shall be a special event and I'm doing my best to make it special for you ❤️
              </p>
              <Link
              href="/reward"
              className="inline-block mt-6 px-5 py-2 bg-pink-600 text-white font-semibold rounded-full shadow-md hover:bg-pink-700 transition">
                Next →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
