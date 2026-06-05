"use client";

import { WaveShader } from "@/components/wave-shader";
import { motion } from "motion/react";
import Link from "next/link";

export default function WaveShaderDemo() {
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
          Wave Shader
        </h1>
        <p className="text-lg text-slate-400 text-center max-w-2xl">
          GLSL-powered animated wave patterns with real-time controls
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
          <WaveShader width={800} height={500} />
        </motion.div>

        {/* Info Section */}
        <motion.div
          className="bg-slate-800/30 border border-slate-700 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">About This Shader</h3>
          <div className="space-y-4 text-slate-300">
            <p>
              This interactive wave shader is powered by WebGL2 and GLSL fragment shaders.
              It demonstrates advanced GPU rendering techniques with:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Layered sine and cosine wave distortions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Real-time parameter adjustment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Color gradient mixing and blending</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Brightness variations for depth</span>
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
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Controls Explained</h3>
          <div className="space-y-4 text-slate-300">
            <div>
              <h4 className="font-bold text-blue-400 mb-2">Wave Amplitude</h4>
              <p>Controls the height/magnitude of the wave distortion. Higher values create more pronounced waves.</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-400 mb-2">Wave Frequency</h4>
              <p>Controls how tightly packed the waves are. Higher values create more waves per unit distance.</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-400 mb-2">Wave Speed</h4>
              <p>Controls how fast the waves animate. Higher values make the waves move faster.</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-400 mb-2">Color Pickers</h4>
              <p>Control the three color channels that mix together to create the final gradient effect.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
