"use client";

import React, { useCallback, useRef, useState } from "react";
import Container from "@/components/common/Container";
import { FaPlayCircle } from "react-icons/fa";
import AnimationFadeUpComponent from "@/components/animation/AnimationFadeUpComponent";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = useCallback(() => {
    if (videoRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying((prev) => !prev);
    }
  }, [isPlaying]);

  return (
    <AnimationFadeUpComponent>
      <Container>
        <section
          className={`relative w-full items-center bg-gray-100 overflow-hidden rounded-3xl`}
        >
          <video
            ref={videoRef}
            loop
            src="https://videos.pexels.com/video-files/18069166/18069166-uhd_2560_1440_24fps.mp4"
            className={`w-full h-full object-cover aspect-[7/3]`}
          ></video>

          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-[40px] md:w-[100px] rounded-full cursor-pointer ${
              isPlaying ? "text-white  opacity-40 " : "text-black  "
            }`}
            onClick={handlePlay}
          >
            <FaPlayCircle className="w-full h-full" width={40} height={40} />
          </div>
        </section>
      </Container>
    </AnimationFadeUpComponent>
  );
};

export default VideoSection;
