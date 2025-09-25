"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Artificial Intelligence (AI)",
    heading: "Applying Artificial Intelligence, since before ChatGPT.",
    text: "From workflow automation, to rapid prototyping, to previously unthinkable experiences, we’ve been delivering real world applications of AI since it was called Machine Learning.",
    link: "#",
    image: "https://fueled.com/wp-content/uploads/2025/05/Expertise-Ai.png",
  },
  {
    title: "Content Management Systems (CMS)",
    heading: "The market leader in enterprise WordPress delivery.",
    text: "The top WP VIP partner since 2011. Their inaugural Gold Partner of the Quarter. And the Year. When it comes to making with and for WordPress, our 10up WordPress Practice leads the way.",
    link: "#",
    image: "https://fueled.com/wp-content/uploads/2025/05/Expertise-WP.png",
  },
  {
    title: "Mobile Apps",
    heading: "Award winning, chart topping iOS and iPadOS apps.",
    text: "Mobile apps that push the envelope since the iPhone App Store burst onto the scene. We’ve notched App of the Year for clients and help them top the charts. Apple even asked us to make an app for them.",
    link: "#",
    image: "https://fueled.com/wp-content/uploads/2025/05/Expertise-Apps.png",
  },
];

export default function Expertise() {
  return (
    <section className="w-full bg-black -translate-y-[100px] lg:-translate-y-[600px] text-white py-16 px-6 md:px-10">
      <div className="text-center mb-12">
        <p className="text-lg text-purple-400">Expertise</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Built on Mastery. Delivered with Precision.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden bg-black transition-colors duration-300"
          >
            <div className="p-6 flex flex-col">
              <motion.img
                src={card.image}
                alt={card.title}
                className="rounded-xl cursor-pointer mb-6 w-full object-contain"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <p className="text-xl text-purple-500 mb-2">{card.title}</p>
              <h3 className="text-lg md:text-2xl font-semibold leading-snug">
                {card.heading}
              </h3>
              <p className="text-sm text-gray-300 flex-1">{card.text}</p>
              <a
                href={card.link}
                className="text-lg text-purple-400 hover:underline"
              >
                Read all about it
              </a>
            </div>
          </div>
        ))}
      </div>

       <div className="flex justify-center mt-12">
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative group flex items-center gap-3 border px-6 py-3 rounded-full text-white font-medium overflow-hidden"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-black to-purple-600 animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <span className="relative z-10 lg:text-xl cursor-pointer text-md rounded-full px-6 py-3 flex items-center gap-3">
          What We Can Do
          <motion.span
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <ArrowRight className="w-6 h-6s" />
          </motion.span>
        </span>
      </motion.button>
    </div>
    </section>
  );
}
