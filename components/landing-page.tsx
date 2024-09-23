"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface SubtitleWord {
  japanese: string;
  english: string;
}

export default function EnhancedAnimeLandingPage() {
  const [email, setEmail] = useState("");
  const [hoveredWord, setHoveredWord] = useState<SubtitleWord | null>(null);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for signing up with: ${email}`);
    setEmail("");
  };

  const subtitles: SubtitleWord[] = [
    { japanese: "私は", english: "I" },
    { japanese: "日本語を", english: "Japanese language" },
    { japanese: "勉強しています", english: "am studying" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-indigo-600">
              Subtaitoru
            </h1>
            <div className="space-x-6 text-sm sm:text-base">
              <a
                href="#features"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#demo"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Demo
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Contact
              </a>

              <a
                href="/privacy-policy"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main
        className="container mx-auto px-4 py-8 sm:px-6 lg:px-8"
        id="features"
      >
        <section className="flex flex-col lg:flex-row items-center mb-16 space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-indigo-800 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Elevate Your Learning Experience
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl mb-6 text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Easily upload your favorite Japanese subtitles and start learning
              immediately.
            </motion.p>
            <motion.button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
            </motion.button>
          </div>
          <div className="lg:w-1/2 relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-haxDut8far4y15GfyCtUSLKExyVJkK.png"
              alt="Anime scene with two characters in close-up"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute bottom-4 left-0 right-0 bg-black bg-opacity-50 p-4 rounded-b-lg">
              <div className="flex justify-center space-x-4">
                {subtitles.map((word, index) => (
                  <motion.span
                    key={index}
                    className="text-white text-lg sm:text-xl cursor-pointer transition-transform"
                    onMouseEnter={() => setHoveredWord(word)}
                    onMouseLeave={() => setHoveredWord(null)}
                    whileHover={{ scale: 1.1 }}
                  >
                    {word.japanese}
                  </motion.span>
                ))}
              </div>
              {hoveredWord && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white text-gray-800 px-4 py-2 rounded shadow-lg text-sm"
                >
                  {hoveredWord.english}
                </motion.div>
              )}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-indigo-800">
            Key Features
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Interactive Subtitles"
              description="Hover over words for instant translations and explanations."
              icon="🔍"
            />
            <FeatureCard
              title="Customizable Display"
              description="Adjust font size, color, and position to your liking."
              icon="🎨"
            />
            <FeatureCard
              title="Vocabulary Builder"
              description="Save words and phrases to review later."
              icon="📚"
            />
          </div>
        </section>

        <section id="demo" className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-indigo-800">
            See It in Action
          </h3>
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-xl">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="800"
                height="400"
                src="https://www.youtube.com/embed/qhCXTXbF7F0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center text-gray-600 text-lg mt-4">
              Watch our demo to see how 字幕マスター enhances your anime viewing
              experience.
            </p>
          </div>
        </section>

        <section id="contact" className="text-center mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-indigo-800">
            Stay Updated
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            Be the first to know about new features and anime additions.
          </p>
          <form
            onSubmit={handleEmailSubmit}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <motion.button
              type="submit"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="text-sm sm:text-base">
            &copy; 2023 字幕マスター. All rights reserved.
          </p>
          <div className="mt-4 space-x-6 text-sm sm:text-base">
            <a
              href="/privacy"
              className="hover:text-indigo-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-indigo-600 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="hover:text-indigo-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2 text-indigo-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
