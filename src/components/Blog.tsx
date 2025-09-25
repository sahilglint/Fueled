"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Artificial Intelligence (AI)",
    heading: "Applying Artificial Intelligence, since before ChatGPT.",
    image:
      "https://fueled.com/wp-content/uploads/2025/07/Digital-Democracy-Emmy-Win-Header.webp",
  },
  {
    title: "Content Management Systems (CMS)",
    heading: "The market leader in enterprise WordPress delivery.",
    image: "https://fueled.com/wp-content/uploads/2025/06/wp-ai-2.webp",
  },
  {
    title: "Mobile Apps",
    heading: "Award winning, chart topping iOS and iPadOS apps.",
    image: "https://fueled.com/wp-content/uploads/2025/05/Webby-large.jpg",
  },
];

export default function Blog() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-950 to-white -translate-y-[100px] lg:-translate-y-[600px] text-white py-16 px-6 md:px-10">
      <div className="text-center mb-12">
        <p className="text-2xl text-purple-400">Blog</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Built on Mastery. Delivered with Precision.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="rounded-2xl overflow-hidden transition-colors duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="p-6 flex flex-col">
              <div className="relative rounded-3xl overflow-hidden cursor-pointer mb-6 w-full lg:h-[400px] h-[300px] group">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-700 to-black opacity-0 group-hover:opacity-30 transition-opacity duration-400 pointer-events-none"></div>
              </div>

              <p className="lg:text-xl text-lg text-white">{card.title}</p>
              <h3 className="text-lg md:text-3xl font-semibold text-gray-900 leading-snug">
                {card.heading}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative group flex items-center gap-3 border-2 border-black px-6 py-3 rounded-full text-white font-medium overflow-hidden"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200 via-black/30 to-purple-200 animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <span className="relative z-10 lg:text-2xl font-semibold cursor-pointer text-md text-black rounded-full px-6 py-3 flex items-center gap-3">
            Read Our Stories
            <motion.span
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.span>
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}
