"use client";

import { AsciiArt } from "@/components/ascii-art";
import { Lens } from "@/components/lens";
import { WaveShader } from "@/components/wave-shader";
import { motion } from "framer-motion";
import Link from "next/link";

const DEMO_IMAGE = "/images/cyber_portrait.png";

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
          Aceternity Playground
        </h1>
        <p className="text-lg text-slate-400 text-center max-w-2xl">
          Explore cutting-edge UI components and interactive demos
        </p>
      </motion.div>

      {/* Components Grid */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">Featured Components</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* ASCII Art Demo Card */}
          <motion.div
            className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition-all group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/demos/ascii-art" className="block aspect-video bg-black overflow-hidden cursor-pointer">
              <AsciiArt
                src={DEMO_IMAGE}
                resolution={40}
                charset="standard"
                color="#00ff00"
                animated
                animationStyle="fade"
                animationDuration={1}
                className="w-full h-full"
              />
            </Link>
            <div className="p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">ASCII Art</h3>
              <p className="text-sm text-slate-400 mb-4">
                Transform images into stunning ASCII art with multiple animation styles
              </p>
              <Link
                href="/demos/ascii-art"
                className="inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                View Demo →
              </Link>
            </div>
          </motion.div>

          {/* Lens Component Card */}
          <motion.div
            className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition-all group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link href="/demos/lens" className="block aspect-video bg-black overflow-hidden cursor-pointer">
              <Lens zoomFactor={2} lensSize={200} isStatic position={{ x: 200, y: 150 }}>
                <img
                  src={DEMO_IMAGE}
                  alt="Lens demo"
                  className="w-full h-full object-cover"
                />
              </Lens>
            </Link>
            <div className="p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Lens Effect</h3>
              <p className="text-sm text-slate-400 mb-4">
                Interactive hover zoom with circular magnification lens
              </p>
              <Link
                href="/demos/lens"
                className="inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                View Demo →
              </Link>
            </div>
          </motion.div>

          {/* Wave Shader Card */}
          <motion.div
            className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition-all group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/demos/wave-shader" className="block aspect-video bg-black cursor-pointer">
              <WaveShader width={400} height={300} className="hidden" />
            </Link>
            <div className="p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Wave Shader</h3>
              <p className="text-sm text-slate-400 mb-4">
                GLSL-powered wave animations with real-time controls
              </p>
              <Link
                href="/demos/wave-shader"
                className="inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                View Demo →
              </Link>
            </div>
          </motion.div>

          {/* Image Classifier Card */}
          <motion.div
            className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition-all group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/demos/image-classifier" className="block aspect-video bg-black flex items-center justify-center cursor-pointer">
              <div className="text-center">
                <div className="text-5xl mb-2">🤖</div>
                <p className="text-slate-400">TensorFlow ML</p>
              </div>
            </Link>
            <div className="p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Image Classifier</h3>
              <p className="text-sm text-slate-400 mb-4">
                Real-time image classification using TensorFlow MobileNet
              </p>
              <Link
                href="/demos/image-classifier"
                className="inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                View Demo →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <motion.div
        className="max-w-4xl mx-auto px-4 py-20 border-t border-slate-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">Why Choose These Components?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-400">⚡ High Performance</h3>
            <p className="text-slate-300">
              Optimized rendering with WebGL shaders and efficient algorithms
            </p>
          </div>
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-400">🎨 Beautiful UI</h3>
            <p className="text-slate-300">
              Crafted with Tailwind CSS and Framer Motion for smooth animations
            </p>
          </div>
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-400">🔧 Customizable</h3>
            <p className="text-slate-300">
              Full control over colors, sizes, speeds, and all visual parameters
            </p>
          </div>
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-400">📱 Responsive</h3>
            <p className="text-slate-300">
              Works seamlessly across all devices and screen sizes
            </p>
          </div>
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-400">🚀 Easy Integration</h3>
            <p className="text-slate-300">
              Simple React components that work with any Next.js project
            </p>
          </div>
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-400">🤖 AI-Powered</h3>
            <p className="text-slate-300">
              Leverage TensorFlow for advanced machine learning capabilities
            </p>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="border-t border-slate-700 mt-20 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-400">
          <p>Built with Next.js, Tailwind CSS, TensorFlow.js, and WebGL</p>
        </div>
      </div>
    </main>
  );
}
