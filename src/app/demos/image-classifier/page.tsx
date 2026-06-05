"use client";

import { ImageClassifier } from "@/components/image-classifier";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ImageClassifierDemo() {
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
          Image Classifier
        </h1>
        <p className="text-lg text-slate-400 text-center max-w-2xl">
          Real-time object identification using TensorFlow.js
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 py-20 space-y-12">
        {/* Main Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ImageClassifier />
        </motion.div>

        {/* Info Section */}
        <motion.div
          className="bg-slate-800/30 border border-slate-700 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">How It Works</h3>
          <div className="space-y-4 text-slate-300">
            <p>
              This classifier uses <span className="text-cyan-400">MobileNet v2</span>, a lightweight
              neural network trained on the ImageNet dataset. It can identify over 1,000 different
              object categories in real-time, entirely within your browser.
            </p>
            <h4 className="font-bold text-blue-400 mt-6 mb-3">Key Features:</h4>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Upload or drag-and-drop images</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Instant predictions with confidence scores</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Top 5 predictions displayed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Processing time metrics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Privacy-focused (no server uploads)</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Technical Section */}
        <motion.div
          className="bg-slate-800/30 border border-slate-700 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Privacy & Performance</h3>
          <div className="space-y-3 text-slate-300">
            <p className="flex items-start gap-3">
              <span className="text-green-400 font-bold">🔒</span>
              <span>All processing happens locally in your browser - no data is sent to servers</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-green-400 font-bold">⚡</span>
              <span>Leverages GPU acceleration for fast real-time inference</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-green-400 font-bold">📦</span>
              <span>Lightweight model (~13MB) for quick loading</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-green-400 font-bold">🎯</span>
              <span>Trained on diverse ImageNet dataset with broad object recognition</span>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
