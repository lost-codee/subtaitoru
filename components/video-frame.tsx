"use client";

import Image from "next/image";

// icons
import { Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const VideoFrame = ({
  src,
  alt,
  totalTime,
  currentTime,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  src: string;
  alt: string;
  totalTime?: string;
  currentTime?: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg",
        className
      )}
      {...props}
    >
      <Image src={src} alt={alt} fill objectFit="cover" />

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-10">
        <div className="px-4 pb-4">
          {totalTime && currentTime && (
            <div className="flex items-center justify-between text-white mb-2">
              <span className="text-sm font-medium">{currentTime}</span>
              <span className="text-sm font-medium">{totalTime}</span>
            </div>
          )}
          <div className="h-1 bg-gray-600 rounded-full mb-4">
            <div
              className="h-1 bg-purple-600 rounded-full"
              style={{ width: "30%" }}
            ></div>
          </div>
          <div className="flex justify-between items-center text-white">
            <div className="space-x-4">
              <SkipBack className="text-white w-5 h-5 inline-block" />
              <Pause className="text-white w-5 h-5 inline-block" />
              <SkipForward className="text-white w-5 h-5 inline-block" />
              <Volume2 className="text-white w-5 h-5 inline-block" />
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};
