import React from "react";

const frames = [
  "images/frame_0001.webp",
  "images/frame_0032.webp",
  "images/frame_0033.webp",
  "images/frame_0063.webp",
  "images/frame_0065.webp",
  "images/frame_0073.webp",
];

const Theme = () => {
  return (
    <div className="relative w-full translate-y-[100px] lg:-translate-y-[0px] min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-400 to-black"></div>

      {frames.map((src, i) => (
        <svg
          key={i}
          className="absolute bottom-0 left-0 w-[200%] h-[70%] animate-wave"
          style={{
            animationDuration: `${10 + i * 2}s`,
            opacity: 0.6,
          }}
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
      
        </svg>
      ))}

      <style jsx>{`
        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-wave {
          animation: wave 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Theme;
