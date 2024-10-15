import cn from "@/utils/tailwind-utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

const ImageComponent = ({
  img,
  alt,
  width,
  className,
}: {
  img: StaticImageData;
  alt: string;
  width?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn("flex justify-center items-center", className)}
      style={{
        width,
      }}
    >
      <Image
        src={img.src}
        alt={alt}
        width={img.width ?? 0}
        height={img.height ?? 0}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default ImageComponent;
