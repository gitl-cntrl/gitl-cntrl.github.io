"use client";

import { AsciiArt } from "@/components/ascii-art";
import { motion } from "motion/react";

const DEMO_IMAGE =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Header */}
      <motion.div
        className="flex flex-col items-center justify-center pt-20 pb-10 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
          Aceternity ASCII Playground
        </h1>
        <p className="text-lg text-slate-400 text-center max-w-2xl">
          Transform images into stunning ASCII art with multiple animation styles
        </p>
      </motion.div>

      {/* Demo Grid */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fade Animation */}
          <motion.div
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Fade Animation</h2>
            <div className="bg-black rounded overflow-hidden">
              <AsciiArt
                src={DEMO_IMAGE}
                resolution={60}
                charset="standard"
                color="#00ff00"
                animated
                animationStyle="fade"
                animationDuration={2}
                className="h-64 w-full"
              />
            </div>
          </motion.div>

          {/* Typewriter Animation */}
          <motion.div
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Typewriter Animation</h2>
            <div className="bg-black rounded overflow-hidden">
              <AsciiArt
                src={DEMO_IMAGE}
                resolution={60}
                charset="blocks"
                color="#00ccff"
                animated
                animationStyle="typewriter"
                className="h-64 w-full"
              />
            </div>
          </motion.div>

          {/* Matrix Animation */}
          <motion.div
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Matrix Animation</h2>
            <div className="bg-black rounded overflow-hidden">
              <AsciiArt
                src={DEMO_IMAGE}
                resolution={60}
                charset="standard"
                animated
                animationStyle="matrix"
                className="h-64 w-full"
              />
            </div>
          </motion.div>

          {/* Colored ASCII */}
          <motion.div
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Colored ASCII Art</h2>
            <div className="bg-black rounded overflow-hidden">
              <AsciiArt
                src={DEMO_IMAGE}
                resolution={60}
                charset="dense"
                colored
                animated
                animationStyle="fade"
                animationDuration={1.5}
                className="h-64 w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <motion.div
        className="max-w-4xl mx-auto px-4 py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-400">✨ Multiple Charsets</h3>
            <p className="text-slate-300">
              Choose from standard, blocks, binary, dots, dense, arrows, stars, and more
            </p>
          </div>
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-400">🎬 Animation Styles</h3>
            <p className="text-slate-300">
              Fade, typewriter, matrix, and static rendering options
            </p>
          </div>
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-400">🎨 Color Support</h3>
            <p className="text-slate-300">
              Colored ASCII art using image colors or custom text colors
            </p>
          </div>
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-400">📱 Responsive</h3>
            <p className="text-slate-300">
              Works seamlessly on desktop and mobile devices with resize support
            </p>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="border-t border-slate-700 mt-20 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-400">
          <p>Built with Next.js, Tailwind CSS, and Aceternity UI</p>
        </div>
      </div>
    </main>
  );
}
