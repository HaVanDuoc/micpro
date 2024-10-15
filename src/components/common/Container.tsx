import cn from "@/utils/tailwind-utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  marginY?: boolean;
  gap?: number;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  marginY = false,
  gap = 5,
  ...props
}) => {
  return (
    <section
      {...props}
      className={cn(
        "container flex flex-col p-5",
        marginY && "my-10 sm:my-20",
        gap && `gap-${gap}`,
        className
      )}
    >
      {children}
    </section>
  );
};

export default Container;
