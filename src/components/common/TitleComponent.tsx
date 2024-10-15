import cn from "@/utils/tailwind-utils";
import React from "react";

type TitleComponentProps = {
  title: string;
  heading:
    | "heading-1"
    | "heading-2"
    | "heading-3"
    | "heading-4"
    | "heading-5"
    | "sub-heading-1"
    | "sub-heading-2"
    | "sub-heading-3";
  highlight?: number[]; // Mảng vị trí các từ cần áp dụng gradient
  colorHighlight?: "gradient" | "primary";
  className?: string;
};

const TitleComponent: React.FC<TitleComponentProps> = ({
  title,
  heading,
  highlight = [],
  colorHighlight = "gradient",
  className = "",
}) => {
  // Tách các từ trong tiêu đề
  const words = title.split(" ");
  const bgGradient = "bg-gradient-to-r from-[#F961D8] to-[#1663F9]";
  const bgPrimary = "bg-primary";

  return (
    <div className={cn("text-center", heading, className)}>
      {words.map((word, index) => {
        const isHighlighted = highlight.includes(index); // Kiểm tra xem chỉ số có trong mảng highlight không
        const bg = colorHighlight === "gradient" ? bgGradient : bgPrimary;
        
        return (
          <span
            key={index}
            className={cn(
              isHighlighted && `${bg} bg-clip-text text-transparent`
            )}
          >
            {word}{" "}
          </span>
        );
      })}
    </div>
  );
};

export default TitleComponent;
