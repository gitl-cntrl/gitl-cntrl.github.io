"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const vertexShader = `
  attribute vec3 position;
  attribute vec2 uv;
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;

  uniform float uTime;
  uniform float uWaveAmplitude;
  uniform float uWaveFrequency;
  uniform float uWaveSpeed;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  
  varying vec2 vUv;
  
  void main() {
    vec2 uv = vUv;
    
    // Create wave distortion
    float wave1 = sin(uv.x * uWaveFrequency + uTime * uWaveSpeed) * uWaveAmplitude;
    float wave2 = sin(uv.y * uWaveFrequency * 0.7 + uTime * uWaveSpeed * 0.8) * uWaveAmplitude;
    float wave3 = cos((uv.x + uv.y) * uWaveFrequency * 0.5 + uTime * uWaveSpeed * 1.2) * uWaveAmplitude;
    
    float distortion = wave1 + wave2 + wave3;
    uv.y += distortion;
    
    // Create color layers
    float pattern1 = sin(uv.x * 3.0 + uTime * 0.5) * 0.5 + 0.5;
    float pattern2 = sin(uv.y * 4.0 + uTime * 0.3) * 0.5 + 0.5;
    float pattern3 = sin((uv.x + uv.y) * 2.0 + uTime * 0.7) * 0.5 + 0.5;
    
    // Mix colors based on patterns
    vec3 color = mix(uColor1, uColor2, pattern1);
    color = mix(color, uColor3, pattern2);
    
    // Add brightness variation
    float brightness = 0.5 + 0.5 * sin(uTime + (uv.x + uv.y) * 5.0);
    color *= brightness;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

interface WaveShaderProps {
  width?: number;
  height?: number;
  className?: string;
}

export const WaveShader: React.FC<WaveShaderProps> = ({
  width = 800,
  height = 600,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const animationRef = useRef<number | null>(null);

  const [waveAmplitude, setWaveAmplitude] = useState(0.1);
  const [waveFrequency, setWaveFrequency] = useState(5);
  const [waveSpeed, setWaveSpeed] = useState(1);
  const [color1, setColor1] = useState("#ff006e");
  const [color2, setColor2] = useState("#00f5ff");
  const [color3, setColor3] = useState("#8338ec");

  const hexToVec3 = (hex: string): [number, number, number] => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      return [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255,
      ];
    }
    return [1, 1, 1];
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2");
    if (!gl) {
      console.error("WebGL2 not supported");
      return;
    }

    // Set canvas size
    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, width, height);

    // Compile shader
    const compileShader = (source: string, type: number): WebGLShader => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
      }
      return shader;
    };

    const vertShader = compileShader(vertexShader, gl.VERTEX_SHADER);
    const fragShader = compileShader(fragmentShader, gl.FRAGMENT_SHADER);

    // Create program
    const program = gl.createProgram()!;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
    }

    programRef.current = program;
    gl.useProgram(program);

    // Create quad geometry
    const positions = new Float32Array([
      -1, -1, 0, 1, -1, 0, -1, 1, 0, 1, 1, 0,
    ]);

    const uv = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);

    const indices = new Uint16Array([0, 1, 2, 1, 3, 2]);

    // Position buffer
    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const posAttrib = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posAttrib);
    gl.vertexAttribPointer(posAttrib, 3, gl.FLOAT, false, 0, 0);

    // UV buffer
    const uvBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, uv, gl.STATIC_DRAW);

    const uvAttrib = gl.getAttribLocation(program, "uv");
    gl.enableVertexAttribArray(uvAttrib);
    gl.vertexAttribPointer(uvAttrib, 2, gl.FLOAT, false, 0, 0);

    // Index buffer
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

    // Get uniform locations
    const timeUniform = gl.getUniformLocation(program, "uTime");
    const amplitudeUniform = gl.getUniformLocation(program, "uWaveAmplitude");
    const frequencyUniform = gl.getUniformLocation(program, "uWaveFrequency");
    const speedUniform = gl.getUniformLocation(program, "uWaveSpeed");
    const color1Uniform = gl.getUniformLocation(program, "uColor1");
    const color2Uniform = gl.getUniformLocation(program, "uColor2");
    const color3Uniform = gl.getUniformLocation(program, "uColor3");

    let startTime = Date.now();

    const render = () => {
      const elapsed = (Date.now() - startTime) / 1000;

      gl.uniform1f(timeUniform, elapsed);
      gl.uniform1f(amplitudeUniform, waveAmplitude);
      gl.uniform1f(frequencyUniform, waveFrequency);
      gl.uniform1f(speedUniform, waveSpeed);

      const [r1, g1, b1] = hexToVec3(color1);
      const [r2, g2, b2] = hexToVec3(color2);
      const [r3, g3, b3] = hexToVec3(color3);

      gl.uniform3f(color1Uniform, r1, g1, b1);
      gl.uniform3f(color2Uniform, r2, g2, b2);
      gl.uniform3f(color3Uniform, r3, g3, b3);

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [width, height, waveAmplitude, waveFrequency, waveSpeed, color1, color2, color3]);

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <motion.div
        className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden backdrop-blur"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <canvas
          ref={canvasRef}
          className="w-full block"
          style={{ aspectRatio: `${width}/${height}` }}
        />
      </motion.div>

      {/* Controls */}
      <motion.div
        className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-cyan-400">Wave Controls</h3>

        {/* Wave Amplitude */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Wave Amplitude: {waveAmplitude.toFixed(2)}
          </label>
          <input
            type="range"
            min="0"
            max="0.5"
            step="0.01"
            value={waveAmplitude}
            onChange={(e) => setWaveAmplitude(parseFloat(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Wave Frequency */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Wave Frequency: {waveFrequency.toFixed(1)}
          </label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.5"
            value={waveFrequency}
            onChange={(e) => setWaveFrequency(parseFloat(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Wave Speed */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Wave Speed: {waveSpeed.toFixed(2)}
          </label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={waveSpeed}
            onChange={(e) => setWaveSpeed(parseFloat(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Color Pickers */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Color 1
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="color"
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
                className="w-12 h-10 rounded cursor-pointer"
              />
              <span className="text-xs text-slate-400">{color1}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Color 2
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="color"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
                className="w-12 h-10 rounded cursor-pointer"
              />
              <span className="text-xs text-slate-400">{color2}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Color 3
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="color"
                value={color3}
                onChange={(e) => setColor3(e.target.value)}
                className="w-12 h-10 rounded cursor-pointer"
              />
              <span className="text-xs text-slate-400">{color3}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
