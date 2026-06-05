"use client";

import { AsciiArt } from "@/components/ascii-art";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const DEMO_IMAGES = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
];

const CHARSETS = [
  { name: "Standard", value: "standard" },
  { name: "Blocks", value: "blocks" },
  { name: "Binary", value: "binary" },
  { name: "Dots", value: "dots" },
  { name: "Dense", value: "dense" },
  { name: "Minimal", value: "minimal" },
];

const ANIMATIONS = [
  { name: "Fade", value: "fade" },
  { name: "Typewriter", value: "typewriter" },
  { name: "Matrix", value: "matrix" },
  { name: "None", value: "none" },
];

export default function AsciiArtDemo() {
  const [currentImage, setCurrentImage] = useState(0);
  const [charset, setCharset] = useState("standard");
  const [animation, setAnimation] = useState("fade");
  const [resolution, setResolution] = useState(60);
  const [color, setColor] = useState("#00ff00");

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Header */}
      <motion.div
        className="flex flex-col items-center justify-center pt-20 pb-10 px-4 border-b border-slate-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/"
          className="text-cyan-400 hover:text-cyan-300 mb-4 flex items-center gap-2"
        >
          ← Back to Home
        </Link>
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          ASCII Art Generator
        </h1>
        <p className="text-lg text-slate-400 text-center max-w-2xl">
          Convert images to ASCII art with customizable styles and animations
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-20 space-y-12">
        {/* Main Demo */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Display */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden backdrop-blur"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AsciiArt
                src={DEMO_IMAGES[currentImage]}
                resolution={resolution}
                charset={charset}
                color={color}
                animated
                animationStyle={animation}
                animationDuration={2}
                className="h-96 w-full"
              />
            </motion.div>
          </div>

          {/* Controls */}
          <motion.div
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur space-y-6 h-fit sticky top-20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-cyan-400">Controls</h3>

            {/* Image Selector */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Image
              </label>
              <select
                value={currentImage}
                onChange={(e) => setCurrentImage(parseInt(e.target.value))}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
              >
                {DEMO_IMAGES.map((_, i) => (
                  <option key={i} value={i}>
                    Image {i + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Charset */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Charset
              </label>
              <select
                value={charset}
                onChange={(e) => setCharset(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
              >
                {CHARSETS.map((cs) => (
                  <option key={cs.value} value={cs.value}>
                    {cs.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Animation */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Animation
              </label>
              <select
                value={animation}
                onChange={(e) => setAnimation(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
              >
                {ANIMATIONS.map((anim) => (
                  <option key={anim.value} value={anim.value}>
                    {anim.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Resolution */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Resolution: {resolution}
              </label>
              <input
                type="range"
                min="20"
                max="100"
                value={resolution}
                onChange={(e) => setResolution(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Color */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Color
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-12 h-10 rounded cursor-pointer"
                />
                <span className="text-sm text-slate-400 flex items-center">{color}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Info Section */}
        <motion.div
          className="bg-slate-800/30 border border-slate-700 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Multiple character sets for different styles</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Fade, typewriter, and matrix animations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Adjustable resolution for detail control</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Custom text colors and backgrounds</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
}
