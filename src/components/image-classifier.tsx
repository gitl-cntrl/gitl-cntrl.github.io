"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";

interface Prediction {
  className: string;
  probability: number;
}

export const ImageClassifier: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [model, setModel] = useState<mobilenet.MobileNet | null>(null);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [processingTime, setProcessingTime] = useState(0);

  // Load the MobileNet model on component mount
  useEffect(() => {
    const loadModel = async () => {
      try {
        setIsModelLoading(true);
        const loadedModel = await mobilenet.load();
        setModel(loadedModel);
        setError(null);
      } catch (err) {
        setError("Failed to load model. Please refresh the page.");
        console.error(err);
      } finally {
        setIsModelLoading(false);
      }
    };

    loadModel();

    return () => {
      // Cleanup
      if (model) {
        model.dispose();
      }
    };
  }, []);

  const classifyImage = async (imageElement: HTMLImageElement) => {
    if (!model) {
      setError("Model not loaded yet. Please wait...");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setPredictions([]);

      const startTime = performance.now();

      // Get predictions from MobileNet
      const predictions = await model.classify(imageElement, 5);

      const endTime = performance.now();
      setProcessingTime(Math.round(endTime - startTime));

      // Convert predictions to our format
      const formattedPredictions: Prediction[] = predictions.map((pred) => ({
        className: pred.className,
        probability: pred.probability,
      }));

      setPredictions(formattedPredictions);
    } catch (err) {
      setError("Error classifying image. Please try another image.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid image file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (imageRef.current) {
        imageRef.current.src = result;
        imageRef.current.onload = () => {
          setImageLoaded(true);
          setPredictions([]);
          classifyImage(imageRef.current!);
        };
      }
    };
    reader.onerror = () => {
      setError("Error reading file. Please try again.");
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      fileInputRef.current!.files = files;
      const event = {
        target: { files },
      } as React.ChangeEvent<HTMLInputElement>;
      handleFileUpload(event);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-2">Image Classifier</h2>
        <p className="text-slate-400">
          Upload an image to identify objects using TensorFlow.js MobileNet
        </p>
      </motion.div>

      {/* Model Loading Status */}
      {isModelLoading && (
        <motion.div
          className="bg-blue-900/30 border border-blue-700 rounded-lg p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-300">Loading TensorFlow model...</span>
          </div>
        </motion.div>
      )}

      {/* Upload Area */}
      <motion.div
        className="bg-slate-800/50 border-2 border-dashed border-slate-700 rounded-lg p-8 cursor-pointer hover:border-cyan-500 transition-colors"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={triggerFileInput}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        whileHover={{ borderColor: "#06b6d4" }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
          disabled={isModelLoading}
        />
        <div className="text-center">
          <div className="text-4xl mb-3">📸</div>
          <p className="text-lg font-medium text-slate-300 mb-2">
            Click to upload or drag and drop
          </p>
          <p className="text-sm text-slate-500">
            Supported formats: PNG, JPG, GIF, WebP
          </p>
        </div>
      </motion.div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            className="bg-red-900/30 border border-red-700 rounded-lg p-4 text-red-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            ⚠️ {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Preview and Results */}
      <AnimatePresence>
        {imageLoaded && (
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {/* Image Preview */}
            <motion.div
              className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                ref={imageRef}
                alt="Uploaded"
                className="w-full h-auto block"
              />
            </motion.div>

            {/* Results */}
            <motion.div
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {loading && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-slate-300">Analyzing image...</span>
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-8 bg-slate-700/50 rounded animate-pulse" />
                    ))}
                  </div>
                </div>
              )}

              {!loading && predictions.length > 0 && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-cyan-400">
                      Classifications
                    </h3>
                    <span className="text-xs text-slate-500">
                      {processingTime}ms
                    </span>
                  </div>

                  <div className="space-y-3">
                    {predictions.map((pred, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="flex items-between justify-between mb-1">
                          <span className="text-sm font-medium text-slate-300">
                            {pred.className}
                          </span>
                          <span className="text-sm font-bold text-cyan-400">
                            {(pred.probability * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${pred.probability * 100}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <button
                    onClick={triggerFileInput}
                    className="w-full mt-6 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Upload Another Image
                  </button>
                </motion.div>
              )}

              {!loading && predictions.length === 0 && imageLoaded && (
                <div className="text-center text-slate-400">
                  Processing...
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Section */}
      <motion.div
        className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 space-y-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h4 className="font-bold text-slate-300 flex items-center gap-2">
          ℹ️ About This Classifier
        </h4>
        <ul className="space-y-2 text-sm text-slate-400">
          <li>
            • Uses <span className="text-cyan-400">MobileNet v2</span> - A lightweight neural network
          </li>
          <li>
            • Can identify <span className="text-cyan-400">1000+ object categories</span>
          </li>
          <li>
            • Runs <span className="text-cyan-400">entirely in your browser</span> - No server uploads
          </li>
          <li>
            • Processing happens <span className="text-cyan-400">in real-time</span> with instant results
          </li>
        </ul>
      </motion.div>
    </div>
  );
};
