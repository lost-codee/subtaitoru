"use client";

import Link from "next/link";
import Image from "next/image";

import { ArrowRight, Flag } from "lucide-react";
import { useState } from "react";

import { VideoFrame } from "@/components/video-frame";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CursorArrowIcon } from "@radix-ui/react-icons";
import { Poppins } from "next/font/google";

interface SubtitleWord {
  japanese: string;
  english: string;
  reading?: string; // for kana
  explanation?: string;
}

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const [hoveredWord, setHoveredWord] = useState<SubtitleWord | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(
    "Next time"
  );

  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert("Thank you for subscribing!");
        setEmail("");
      } else {
        alert("An error occurred while subscribing.");
        console.error("Error subscribing:", response.status);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("An error occurred while subscribing.");
    }
  };

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const subtitles: SubtitleWord[] = [
    {
      japanese: "仲間",
      english: "fellow",
      reading: "Nakama",
      explanation: "Fellow",
    },
    {
      japanese: " の",
      english: "of",
      reading: "no",
      explanation: "of",
    },
    {
      japanese: "数",
      english: "Japanese language",
      reading: "Kazu",
      explanation: "the number",
    },
    {
      japanese: "と",
      english: "and",
      reading: "to",
      explanation: "and",
    },
    {
      japanese: "配置",
      english: "placement",
      reading: "haichi",
      explanation: "to place",
    },
    {
      japanese: "は",
      english: "particle は ",
      reading: "は",
      explanation: "is",
    },
  ];

  return (
    <div
      className={cn(
        "min-h-screen bg-purple-50 font-['Poppins',sans-serif] text-gray-800 px-4",
        poppins.className
      )}
    >
      <header className="container max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#4F46E5] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">S</span>
          </div>
          <span className="font-bold text-xl hidden md:inline-block">
            Subtaitoru
          </span>
        </div>
        <nav className="space-x-6">
          <Link href="#contact" className="text-sm hover:underline">
            Contact
          </Link>
          <Link href="/privacy-policy" className="text-sm hover:underline">
            Privacy Policy
          </Link>
          <a
            href="https://chromewebstore.google.com/detail/subtaitoru/hkfpajnoghiofabhiegfedkakdlngojp?authuser=0&hl=en"
            className="hidden md:inline-block bg-gray-800 text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer"
          >
            Get started
          </a>
        </nav>
      </header>

      <main className="mx-auto container">
        <section className="flex flex-col items-center justify-center text-center py-10 gap-10 md:pt-36">
          <h1 className="md:text-6xl text-5xl font-extrabold delay-100 duration-200 animate-in fade-in-0 slide-in-from-top-4 fill-mode-both leading-[1.3]">
            Enjoy{" "}
            <span className="relative z-0 mx-4 sm:mx-6 leading-none inline-block not-italic text-primary-foreground before:absolute before:inset-0 before:-z-[1] before:-rotate-1 before:-skew-x-6 before:-scale-x-[1.2] before:scale-y-[1.2] before:bg-[#4F46E5]  sm:before:scale-y-[1.4]">
              learning
            </span>{" "}
            while watching
          </h1>
          <p className="text-lg delay-200 duration-200 animate-in fade-in-0 slide-in-from-top-4 fill-mode-both md:text-2xl">
            Easily upload your favorite subtitles and
            <br /> start learning immediately.
          </p>
        </section>

        <div className="flex flex-col items-center gap-4">
          <div className="delay-300 duration-200 animate-in fade-in-0 slide-in-from-top-4 fill-mode-both">
            <a
              className="bg-[#4F46E5] hover:bg-[#3730A3] font-medium text-white py-4 px-7 rounded-lg  gap-3 flex items-center justify-center
              md:text-lg
              text-sm
              "
              href="https://chromewebstore.google.com/detail/subtaitoru/hkfpajnoghiofabhiegfedkakdlngojp?authuser=0&hl=en"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="21.17" x2="12" y1="8" y2="8"></line>
                <line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
                <line x1="10.88" x2="15.46" y1="21.94" y2="14"></line>
              </svg>
              Add to Chrome
            </a>
          </div>
          <div className="flex gap-2  text-neutral-950 delay-500 duration-200 animate-in fade-in-0 fill-mode-both">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3_32)">
                  <path
                    d="M14 3.16669H2.00002C1.26364 3.16669 0.666687 3.76364 0.666687 4.50002V12.5C0.666687 13.2364 1.26364 13.8334 2.00002 13.8334H14C14.7364 13.8334 15.3334 13.2364 15.3334 12.5V4.50002C15.3334 3.76364 14.7364 3.16669 14 3.16669Z"
                    stroke="#1F2937"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.666687 7.16669H15.3334"
                    stroke="#1F2937"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3_32">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Free to use
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3_21)">
                  <path
                    d="M14.6666 7.88668V8.50001C14.6658 9.93763 14.2003 11.3365 13.3395 12.4879C12.4788 13.6393 11.2688 14.4817 9.89022 14.8893C8.5116 15.2969 7.03815 15.2479 5.68963 14.7497C4.3411 14.2515 3.18975 13.3307 2.40729 12.1247C1.62482 10.9187 1.25317 9.49205 1.34776 8.05755C1.44235 6.62305 1.99812 5.25756 2.93217 4.16473C3.86621 3.07189 5.1285 2.31027 6.53077 1.99344C7.93304 1.67662 9.40016 1.82157 10.7133 2.40668"
                    stroke="#1F2937"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.6667 3.16669L8 9.84002L6 7.84002"
                    stroke="#1F2937"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3_21">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              No sign up
            </div>
          </div>
        </div>
      </main>

      <section className="container py-24 mx-auto px-4 delay-500 duration-200 animate-in fade-in-0 fill-mode-both">
        <VideoFrame src="/assets/nanami.png" alt="Anime scene placeholder">
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 p-4 rounded-lg">
            <div className="inline-block space-x-1">
              {subtitles.map((word, index) => (
                <span
                  key={index}
                  className={cn(
                    "text-lg sm:text-xl cursor-pointer transition-transform",
                    word.japanese === hoveredWord?.japanese
                      ? "text-purple-500"
                      : "text-white hover:text-red"
                  )}
                  onMouseEnter={() => setHoveredWord(word)}
                  onMouseLeave={() => setHoveredWord(null)}
                >
                  {word.japanese}
                </span>
              ))}
            </div>
          </div>
          {hoveredWord && (
            <div className="absolute w-[300px] bottom-40 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 p-4 rounded-lg delay-250 duration-200 animate-in fade-in-0 fill-mode-both">
              <div className="flex flex-col space-y-1 pb-4">
                <div className="flex justify-between items-center">
                  <span className="text-white text-sm">
                    {hoveredWord.reading}
                  </span>
                  <Flag className="w-6 h-6 text-white cursor-pointer" />
                </div>
                <span className="text-white font-medium text-2xl">
                  {hoveredWord.japanese}
                </span>
              </div>
              <p className="text-white">{hoveredWord.explanation}</p>
            </div>
          )}
        </VideoFrame>
      </section>

      <section className="bg-indigo-900 py-24 w-full">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h2 className="text-4xl font-bold text-white mb-4">
              Watch & Click
            </h2>
            <p className="text-indigo-200 text-lg mb-6 max-w-lg">
              Click any word to get an instant translation. The more you watch,
              the more you learn.
            </p>
          </div>
          <VideoFrame
            src="/assets/Brody-Perfect-Days.webp"
            alt="Anime scene placeholder"
            className="w-full lg:w-1/2 shadow-lg aspect-square md:aspect-video"
          >
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 p-4 rounded-lg">
              <div className="inline-block space-x-4">
                <span
                  className={
                    "text-white text-lg sm:text-xl transition-transform"
                  }
                >
                  <span className="text-purple-500">今度</span>て いつ
                </span>
              </div>
            </div>
            <div className="absolute bottom-20 left-[47%] transform -translate-x-1/2 ">
              <CursorArrowIcon className="w-8 h-8 text-white " />
            </div>
            <div className="absolute w-[300px] bottom-40 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 p-4 rounded-lg">
              <div className="flex flex-col space-y-1 pb-4">
                <div className="flex justify-between items-center">
                  <span className="text-white  md:text-sm">こんど</span>
                  <Flag className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-medium text-2xl">今度</span>
              </div>
              <p className="text-white text-sm md:text-lg ">next time</p>
            </div>
          </VideoFrame>
        </div>
      </section>

      <section className="bg-purple-50 py-24">
        <div className="container mx-auto flex px-4 flex-col-reverse lg:flex-row items-center justify-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 flex flex-col md:flex-row md:pr-16 ">
            <img
              src="/assets/Brody-Perfect-Days.webp"
              alt="Anime scene placeholder"
              className="w-full md:w-1/2 object-cover rounded-lg shadow-lg"
            />
            <div className="w-full md:w-1/2">
              <div className="bg-white px-6 py-12 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Quiz yourself</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                  <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="text-6xl font-bold text-center mb-4">今度</div>
                <p className="text-gray-600 text-center mb-4">
                  Choose the right meaning
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Now", "Next time", "See you later", "Good evening"].map(
                    (answer, index) => (
                      <Button
                        key={index}
                        onClick={() => handleAnswerClick(answer)}
                        className={`w-full ${
                          selectedAnswer === answer
                            ? answer === "Next time"
                              ? "bg-green-500 hover:bg-green-600"
                              : "bg-red-500 hover:bg-red-600"
                            : "bg-white hover:bg-gray-100"
                        } ${
                          selectedAnswer === answer
                            ? "text-white"
                            : "text-gray-800"
                        } border border-gray-300`}
                      >
                        {answer}
                      </Button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 text-left lg:pr-12 mb-10 lg:mb-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Review and learn
            </h2>
            <p className="text-gray-600 text-lg max-w-lg">
              Develop, review and track your language skills using our unique
              and immersive methods.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-purple-50 to-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">How to use ?</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Learn your favorite anime language in just three simple steps
          </p>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-purple-200 transform -translate-y-1/2 hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                {
                  title: "Upload Subtitle",
                  description:
                    "Open Subtaitaru and click 'Upload Subtitle' to select your .vtt file",
                  image: "/assets/upload-file.png",
                },
                {
                  title: "Configure Settings",
                  description:
                    "Adjust font size, color, and other settings to your preference",
                  image: "/assets/configure-settings.png",
                },
                {
                  title: "Watch and Learn",
                  description:
                    "Enjoy your video with interactive subtitles. Click words for translations!",
                  image: "/assets/watching.png",
                },
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 w-full max-w-sm transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="relative w-full h-48 mb-6">
                      <Image
                        src={step.image}
                        alt={step.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  <div className="w-12 h-12 bg-[#4F46E5] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  {index < 2 && (
                    <ArrowRight className="hidden md:block text-purple-600 w-8 h-8 absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center flex justify-center">
            <a
              className="bg-[#4F46E5] hover:bg-[#3730A3] font-medium text-white py-4 px-7 rounded-lg  gap-3 flex items-center justify-center
              md:text-lg
              text-sm
              "
              href="https://chromewebstore.google.com/detail/subtaitoru/hkfpajnoghiofabhiegfedkakdlngojp?authuser=0&hl=en"
              target="_blank"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-blue-50">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-4">Stay Updated</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Be the first to know about new features and anime additions. Join
            our community of language learners today!
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center mb-12"
            id="contact"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              className="w-64 mr-2 bg-white"
              required
            />
            <Button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Subscribe
            </Button>
          </form>
          <div className="text-center text-gray-600 mb-4">
            © 2024 subtaitaru—. All rights reserved.
          </div>
          <div className="flex justify-center space-x-4 text-sm">
            <a href="#" className="text-indigo-600 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-indigo-600 hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-indigo-600 hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
