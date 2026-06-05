"use client";

import { Lens } from "@/components/lens";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const DEMO_IMAGES = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=800&q=80",
];

export default function LensDemo() {
  const [currentImage, setCurrentImage] = useState(0);
  const [zoomFactor, setZoomFactor] = useState(1.5);
  const [lensSize, setLensSize] = useState(170);

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
          Lens Effect
        </h1>
        <p className="text-lg text-slate-400 text-center max-w-2xl">
          Interactive hover zoom with circular magnification lens
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
              <Lens zoomFactor={zoomFactor} lensSize={lensSize}>
                <img
                  src={DEMO_IMAGES[currentImage]}
                  alt="Lens demo"
                  className="w-full h-auto block"
                />
              </Lens>
            </motion.div>
            <p className="text-slate-400 text-center mt-4 text-sm">
              Hover over the image to activate the lens
            </p>
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

            {/* Zoom Factor */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Zoom Factor: {zoomFactor.toFixed(1)}x
              </label>
              <input
                type="range"
                min="1"
                max="3"
                step="0.1"
                value={zoomFactor}
                onChange={(e) => setZoomFactor(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Lens Size */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Lens Size: {lensSize}px
              </label>
              <input
                type="range"
                min="50"
                max="300"
                value={lensSize}
                onChange={(e) => setLensSize(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
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
              <span>Smooth hover activation with animations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Customizable zoom magnification level</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Adjustable lens radius for different effects</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Perfect for product showcases and details</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
}
