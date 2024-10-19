import utils from "@/utils";
import cn from "@/utils/tailwind-utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  img: StaticImageData;
  alt: string;
  width?: string;
  className?: string;
}

const ImageComponent: React.FC<Props> = ({ img, alt, width, className }) => {
  return (
    <div
      className={cn("flex justify-center items-center", className)}
      style={{
        width,
      }}
    >
      <Image
        src={img.src}
        alt={utils.generateRandomAriaLabel(`${alt}__`)}
        width={img.width ?? 0}
        height={img.height ?? 0}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default ImageComponent;
