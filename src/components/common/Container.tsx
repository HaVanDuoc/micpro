import cn from "@/utils/tailwind-utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  marginY?: boolean;
  gap?: number;
  gapTitleContent?: boolean;
  title?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  marginY = false,
  gap = 5,
  gapTitleContent = false,
  ...props
}) => {
  return (
    <section
      {...props}
      className={cn(
        "container flex flex-col p-5",
        marginY && "my-10 sm:my-20",
        gap && `gap-${gap}`,
        gapTitleContent && `gap-14 sm:gap-20`,
        className
      )}
    >
      {children}
    </section>
  );
};

export default Container;
