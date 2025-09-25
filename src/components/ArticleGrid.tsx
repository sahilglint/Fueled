

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaMicrosoft } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

interface CardData {
  company: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  color?: string;
}

const cards: CardData[] = [
  {
    company: "Microsoft",
    image: "https://fueled.com/wp-content/uploads/2025/04/Microsoft_9d6815.jpg",
    title: "We Made a Community Mural with AI",
    description:
      "We used ChatGPT and DALL·E to turn human sentiment into a digital work of art with Microsoft Research.",
    tags: ["AI", "Backend", "Design", "Research", "Web"],
    link: "#",
    color: "rgba(59,130,246,0.7)",
  },
  {
    company: "Apple",
    image: "https://fueled.com/wp-content/uploads/2025/05/Google.jpg?w=1920",
    title: "Reimagining Retail Experience",
    description:
      "Apple redefined in-store customer interactions using AR and personalized AI assistants.",
    tags: ["AR", "UX", "Design", "Retail"],
    link: "#",
    color: "rgba(0,0,0,0.7)",
  },
  {
    company: "Google",
    image: "https://fueled.com/wp-content/uploads/2025/05/Apple.jpg",
    title: "AI-Powered Workspace Tools",
    description:
      "Google Workspace now leverages AI to automate workflow and increase team productivity.",
    tags: ["AI", "Cloud", "Productivity"],
    link: "#",
    color: "rgba(139,92,246,0.7)",
  },
  {
    company: "Amazon",
    image: "https://fueled.com/wp-content/uploads/2025/05/The-White-House.jpg",
    title: "Smart Logistics Revolution",
    description:
      "Amazon introduces autonomous delivery drones and predictive inventory systems.",
    tags: ["Logistics", "AI", "Automation", "Cloud"],
    link: "#",
    color: "rgba(255,165,0,0.7)",
  },
  {
    company: "Tesla",
    image: "https://fueled.com/wp-content/uploads/2025/05/New-York-Times.jpg?w=1920",
    title: "Autonomous Driving Innovations",
    description:
      "Tesla enhances its autopilot AI with real-time data from millions of vehicles.",
    tags: ["AI", "Automotive", "Autonomous"],
    link: "#",
    color: "rgba(0,0,0,0.6)",
  },
];

export default function ArticleGrid() {
  return (
    <motion.div
      className="w-full flex flex-col items-center gap-28 bg-black px-4 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {cards.map((card, idx) => (
        <Card key={idx} data={card} />
      ))}

      <div className="mt-20">
        <ExploreButton link="#" />
      </div>
    </motion.div>
  );
}

function Card({ data }: { data: CardData }) {
  const [hovered, setHovered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
className="relative w-full max-w-7xl rounded-3xl overflow-hidden shadow-2xl cursor-pointer -translate-y-0 lg:-translate-y-[650px] transition-transform duration-700"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.img
        src={data.image}
        alt={data.title}
        className="w-full h-[400px] sm:h-[550px] md:h-[700px] object-cover transition-transform duration-700 ease-out"
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {hovered && (
        <motion.div
          className="absolute inset-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            background: `linear-gradient(135deg, ${data.color}, rgba(0,0,0,0.7), rgba(139,92,246,0.7))`,
          }}
        />
      )}

      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 text-white z-20 space-y-3">
        <motion.div
          className="mb-2 flex items-center gap-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <FaMicrosoft className="text-2xl sm:text-3xl text-blue-500" />
          <span className="text-lg sm:text-xl font-semibold">{data.company}</span>
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-4xl font-bold max-w-2xl leading-snug"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {data.title}
        </motion.h2>

        <motion.p
          className="mt-3 text-sm sm:text-base max-w-2xl opacity-90 leading-relaxed"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {data.description}
        </motion.p>
          <motion.a
          href={data.link}
          className="mt-4 flex items-center gap-2 text-sm sm:text-base font-medium text-white cursor-pointer"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Read Case Study
          <motion.span
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex"
          >
            <FiArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </motion.span>
        </motion.a>

        <motion.div
          className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {data.tags.map((tag, i) => (
            <motion.span
              key={i}
              whileHover={{
                scale: 1.15,
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.7), rgba(0,0,0,0.7), rgba(139,92,246,0.7))",
                color: "#fff",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm cursor-pointer transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

function ExploreButton({ link }: { link: string }) {
  return (
    <motion.a
      href={link}
      className="relative  -translate-y-[100px] lg:-translate-y-[700px]  inline-flex items-center justify-center px-10 py-4 rounded-full text-white text-base font-medium overflow-hidden group"
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-black to-purple-600 p-[2px] animate-[spin_4s_linear_infinite]"></span>

      <span className="relative lg:text-xl md:text-lg text-md bg-black rounded-full px-10 py-4 flex items-center  gap-4">
        Explore Our Work
        <motion.span
          whileHover={{ x: 8 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex"
        >
          <FiArrowRight className="w-6 h-6" />
        </motion.span>
      </span>
    </motion.a>
  );
}
