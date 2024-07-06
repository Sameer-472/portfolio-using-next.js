import React from "react";
import IconSlider from "../generic/IconSlider";
import { techLogosArrayComplete } from "@/app/utils/iconExporter";
import Link from "next/link";
import { motion } from "framer-motion";
import BentoGrid from "./BentoGrid";

const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.23,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

const HeroSection = () => {
  return (
    <motion.section
      variants={contentContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      id="hero-section"
      className="relative w-full flex flex-col items-center justify-between py-10 lg:py-16"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-20 z-10">
        <div className="w-full md:w-1/2">
          <div className="w-full lg:w-10/12">
            <motion.div variants={contentVariants}>
              <Link
                href="#contact-section"
                className="inline-flex items-center gap-3 bg-base-300/20 px-3 py-2 rounded-lg cursor-pointer mb-5"
              >
                <span className="inline-block bg-purple-500 w-2 h-2 rounded-full shadow-2xl shadow-purple-500 animate-pulse" />
                <span className="text-purple-500 font-bold text-xs uppercase mr-3 mt-px">
                  Open to work
                </span>
              </Link>
            </motion.div>
            <motion.h1
              variants={contentVariants}
              className="font-display text-4xl lg:text-5xl leading-snug text-secondary font-extrabold mb-8"
            >
              {/* Hi&amp; */}
              I&apos; m Sameer a full-stack developer 
            </motion.h1>
            <motion.p
              variants={contentVariants}
              className="text-base leading-relaxed tracking-normal font-semibold mb-3"
            >
              I&apos;m a Front end & web3 developer completed my graduation in Information Technology & having expertise in various Front end technologies.
              <span className="text-secondary">React , Javascript</span>{" "}
              I also familiar with{" "}
              <span className="text-secondary">Ethereum , Solidity , Ether.js and Dapps</span>.
            </motion.p>
            <motion.p
              variants={contentVariants}
              className="text-base leading-relaxed tracking-normal font-semibold"
            >
              My interest in Blockchain allows me to craft innovative solutions that{" "}
              <span className="text-secondary">leverage Blockhain</span> to enhance{" "}
              <span className="text-secondary">Web app</span>{" "}
              <span className="text-secondary">functionality</span>.
            </motion.p>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center">
          <BentoGrid />
        </div>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 },
        }}
        className="w-full"
      >
        <IconSlider icons={techLogosArrayComplete} />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
