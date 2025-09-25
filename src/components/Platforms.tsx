"use client";

import { motion } from "framer-motion";
import {
  SiWordpress,
  SiSanity,
  SiWoocommerce,
  SiShopify,
  SiPayloadcms,
  SiContentful,
  SiWebflow,
  SiVercel,
  SiEngadget,
  SiElastic,
  SiGoogleanalytics,
  SiParsedotly,
} from "react-icons/si";
import { FaAmazon } from "react-icons/fa6";
import { CiStopSign1 } from "react-icons/ci";
import { GiAmplitude } from "react-icons/gi";
import { BsMicrosoft } from "react-icons/bs";

type Platform = {
  name: string;
  icon: React.ReactNode;
  color: string; 
};

const platforms: Platform[] = [
  { name: "WordPress", icon: <SiWordpress />, color: "bg-blue-600" },
  { name: "Sanity", icon: <SiSanity />, color: "bg-red-500" },
  { name: "AWS", icon: <FaAmazon />, color: "bg-yellow-500" },
  { name: "WooCommerce", icon: <SiWoocommerce />, color: "bg-purple-500" },
  { name: "Shopify", icon: <SiShopify />, color: "bg-green-500" },
  { name: "PayloadCMS", icon: <SiPayloadcms />, color: "bg-gray-700" },
  { name: "Swell (Commerce)", icon: <CiStopSign1 />, color: "bg-pink-500" },
  { name: "Contentful", icon: <SiContentful />, color: "bg-cyan-500" },
  { name: "Webflow", icon: <SiWebflow />, color: "bg-blue-400" },
  { name: "Vercel", icon: <SiVercel />, color: "bg-black" },
  { name: "Amplitude", icon: <GiAmplitude />, color: "bg-indigo-500" },
  { name: "MoEngage", icon: <SiEngadget />, color: "bg-teal-500" },
  { name: "Elasticsearch", icon: <SiElastic />, color: "bg-yellow-600" },
  { name: "Microsoft Azure", icon: <BsMicrosoft />, color: "bg-blue-700" },
  { name: "Google Analytics", icon: <SiGoogleanalytics />, color: "bg-orange-500" },
  { name: "Parsely", icon: <SiParsedotly />, color: "bg-green-600" },
  { name: "Webflow", icon: <SiWebflow />, color: "bg-blue-400" },
];

export default function Platforms() {
  return (
    <section className="-translate-y-[100px] lg:-translate-y-[300px] px-6 max-w-6xl mx-auto text-center">
      <h4 className="text-purple-600 lg:text-2xl text-lg font-medium">Platforms</h4>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">
        Platforms and technology partnerships that elevate our clients.
      </h2>

      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-6">
          {platforms.slice(0, 5).map((platform, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-3 p-4 rounded-full shadow-xl bg-white transition-all cursor-pointer w-fit
                         hover:bg-gradient-to-br hover:from-purple-100 hover:via-blue-100 hover:to-black hover:text-black"
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full text-white ${platform.color}`}
              >
                <div className="text-xl">{platform.icon}</div>
              </div>
              <p className="text-sm font-medium whitespace-nowrap">{platform.name}</p>
            </motion.div>
          ))}
        </div>

        {[1, 2, 3].map((row) => (
          <div key={row} className="flex flex-wrap justify-center gap-6">
            {platforms.slice(5 + (row - 1) * 4, 5 + row * 4).map((platform, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.08 }}
                className="flex items-center gap-3 p-4 rounded-full shadow-xl bg-white transition-all cursor-pointer w-fit
                           hover:bg-gradient-to-br hover:from-purple-100 hover:via-blue-100 hover:to-black hover:text-black"
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full text-white ${platform.color}`}
                >
                  <div className="text-xl">{platform.icon}</div>
                </div>
                <p className="text-sm font-medium whitespace-nowrap">{platform.name}</p>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
