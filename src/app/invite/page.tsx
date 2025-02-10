"use client";
import { useState } from "react";

export default function Invite() {
  const eventDetails = {
    location: "Hana Sushi and Dave and Buster's (1 minute walking)",
    time: "6:00 PM, February 17th, 2025",
    party: "You & Me 💕",
  };

  const [copied, setCopied] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const copyLocation = () => {
    navigator.clipboard.writeText(eventDetails.location);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAccept = () => {
    setAccepted(true);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 to-pink-500 text-white px-4">
        <img
        src="/dance.gif"
        alt="dance"
        className="absolute w-28 h-auto drop-shadow-lg animate-bounce"
        style={{ left: "80%", top: "15%" }}
        />
        <img
        src="/doit.gif"
        alt="doit"
        className="absolute w-40 h-auto drop-shadow-lg"
        style={{ left: "40%", top: "75%" }}
        />
      <div className="relative p-8 text-pink-700 rounded-3xl shadow-2xl backdrop-blur-md border border-white/40 bg-white/80 max-w-md mx-auto">
        <h1 className="text-4xl font-bold drop-shadow-lg mb-4 animate-fade-in text-left">💌 You're Invited!</h1>

        <div className="text-lg space-y-4 text-left">
          <p>
            <strong>📍 Location:</strong>{" "}
            <span
              onClick={copyLocation}
              className="cursor-pointer hover:underline relative"
            >
              {eventDetails.location}
              {copied && (
                <span className="absolute -top-6 left-0 bg-black text-white text-xs px-2 py-1 rounded-md shadow-md">
                  Copied! 📍
                </span>
              )}
            </span>
          </p>
          <p><strong>⏰ Time:</strong> {eventDetails.time}</p>
          <p><strong>🎉 Party:</strong> {eventDetails.party}</p>
        </div>

        {/* Accept Button */}
        <div className="mt-6">
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition-all transform hover:scale-105 active:scale-95"
          >
            {accepted ? "Accepted 🎉" : "Accept Invitation"}
          </button>
        </div>
        {accepted && (
          <div className="mt-6">
            <img
              src="/pullup.jpg"
              alt="pullup"
              className="w-[300px] h-auto mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
}
