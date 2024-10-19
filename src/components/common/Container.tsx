"use client";

import cn from "@/utils/tailwind-utils";
import React from "react";
import { motion } from "framer-motion";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  marginY?: boolean;
  gap?: number;
  gapTitleContent?: boolean;
  title?: string;
  animationFadeUp?: boolean;
  delay?: number;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  marginY = false,
  gap = 5,
  gapTitleContent = false,
  animationFadeUp = false,
  delay = 0.1,
  ...props
}) => {
  const Wrapper = animationFadeUp ? motion.div : "div"; // Chọn motion.div nếu animationFadeUp là true

  return (
    <Wrapper
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: delay }}
      initial={{
        y: 100,
        opacity: 0,
      }}
      className="w-full"
    >
      <section
        className={cn(
          "container flex flex-col p-5",
          marginY && "my-10 sm:my-20",
          gap && `gap-${gap}`,
          gapTitleContent && `gap-14 sm:gap-20`,
          className
        )}
        {...props}
      >
        {children}
      </section>
    </Wrapper>
  );
};

export default Container;
