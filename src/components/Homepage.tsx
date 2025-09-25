'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ArticleGrid from './ArticleGrid';
import Expertise from './Expertise';
import Blog from './Blog';
import Theme from './Theme';
import Platforms from './Platforms';
import Footer from './Footer';

type Client = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function Homepage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoContainerHeight, setVideoContainerHeight] = useState('200vh');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const clients: Client[] = [
    { src: "https://fueled.com/wp-content/uploads/2025/04/TechCrunch.svg", alt: "TechCrunch", width: 111, height: 40 },
    { src: "https://fueled.com/wp-content/uploads/2025/04/tony-robbins.svg", alt: "Tony Robbins", width: 111, height: 40 },
    { src: "https://fueled.com/wp-content/uploads/2025/04/Verizon_e0954c.svg", alt: "Verizon", width: 111, height: 40 },
    { src: "https://fueled.com/wp-content/uploads/2025/04/Capitalone.svg", alt: "Capital One", width: 111, height: 40 },
    { src: "https://fueled.com/wp-content/uploads/2025/04/NewYorkTimes.svg", alt: "New York Times", width: 146, height: 40 },
    { src: "https://fueled.com/wp-content/uploads/2025/04/POLITICO.svg", alt: "Politico", width: 146, height: 40 },
    { src: "https://fueled.com/wp-content/uploads/2025/04/Sixflags.svg", alt: "Six Flags", width: 146, height: 40 },
    { src: "https://fueled.com/wp-content/uploads/2025/04/Uber.svg", alt: "Uber", width: 146, height: 40 },
    { src: "https://fueled.com/wp-content/uploads/2025/04/Whitehouse.svg", alt: "White House", width: 146, height: 40 },
    { src: "https://fueled.com/wp-content/uploads/2025/04/WorldEconomicForum.svg", alt: "World Economic Forum", width: 146, height: 40 },
    { src: "https://fueled.com/wp-content/uploads/2025/04/Google_9c2e3b.svg", alt: "Google", width: 146, height: 40 },
  ];

  const tags = ["AI", "Mobile", "Web", "Growth"];

  useEffect(() => {
    const handleResize = () => {
      setVideoContainerHeight(window.innerWidth >= 1024 ? '280vh' : '140vh');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => console.error('Autoplay failed:', err));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="relative w-full overflow-hidden" style={{ height: videoContainerHeight }}>
        <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-poster.jpg"
            preload="auto"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'cover',
            }}
          >
            <source src="/videos/hero-720.mp4" media="(max-width: 506px)" type="video/mp4" />
            <source src="/videos/hero-1080.mp4" media="(max-width: 760px)" type="video/mp4" />
            <source src="/videos/hero-1440.mp4" media="(max-width: 1012px)" type="video/mp4" />
            <source src="/videos/hero-2160.mp4" media="(max-width: 1518px)" type="video/mp4" />
            <source src="/videos/hero-3160.mp4" media="(max-width: 2222px)" type="video/mp4" />
            <source src="/videos/hero-original.mp4" type="video/mp4" />
          </video>

          <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black to-transparent opacity-70 z-10" />
          <div className="absolute top-1/4 left-0 w-full h-1/2 z-10" />
          <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent opacity-70 z-10" />
        </div>

        <section className="relative z-10 w-full h-screen mt-[-80px] lg:mt-0 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                className="text-purple-500 text-lg md:text-xl font-medium font-aeonik px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/30"
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-aeonik leading-tight mb-6 text-white drop-shadow-lg text-center"
          >
            Digital Done Right
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed text-center"
          >
            Sharp strategy. Precision execution. Experiences that drive impact.
          </motion.p>

          <div className="absolute bottom-[-40px] left-0 w-full overflow-hidden">
            <div
              className="flex whitespace-nowrap animate-marquee"
              style={{ animationDuration: '10s' }}
            >
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                  style={{ height: '40px' }}
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={client.width}
                    height={client.height}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
              {clients.map((client, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex-shrink-0 mx-12 grayscale opacity-80"
                  style={{ height: '40px' }}
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={client.width}
                    height={client.height}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 cursor-pointer bg-black text-white p-4 rounded-full shadow-lg transition z-50"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      <style jsx global>{`
        @font-face {
          font-family: 'Aeonik';
          src: url('/fonts/Aeonik-Regular.woff2') format('woff2');
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }

        .font-aeonik {
          font-family: 'Aeonik', sans-serif;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }

        video {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000;
        }

        ::-webkit-scrollbar {
          width: 15px;
        }
        ::-webkit-scrollbar-track {
          background: #171717;
        }
        ::-webkit-scrollbar-thumb {
          background: #6e5bff;
          border-radius: 8px;
        }

        video {
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          -webkit-transform: translate3d(0, 0, 0);
          -moz-transform: translate3d(0, 0, 0);
        }

        @media (max-width: 768px) {
          .relative.h-screen {
            height: 100vh !important;
          }
        }
      `}</style>

      <ArticleGrid />
      <Expertise />
      <Blog />
      <Platforms />
      <Theme />
      <Footer />
    </>
  );
}
