import utils from "@/utils";
import cn from "@/utils/tailwind-utils";
import Image from "next/image";
import React from "react";

interface IconComponentProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src: any;
  alt?: string;
  size?: number;
  className?: string;
}

const IconComponent: React.FC<IconComponentProps> = ({
  src,
  alt = utils.generateRandomAriaLabel("Icon__"),
  className,
  size = 24,
}) => {
  return (
    <div
      className={cn("flex justify-center items-center z-10", className)}
      style={{
        width: size ? `${size}px` : "w-full",
      }}
    >
      <Image src={src} alt={alt} className="w-full h-auto object-cover" />
    </div>
  );
};

export default IconComponent;
