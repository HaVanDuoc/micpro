import cn from "@/utils/tailwind-utils";
import { Button } from "@nextui-org/react";
import React from "react";

interface Props {
  bg: "primary" | "white" | "transparent";
  variant:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  children: React.ReactNode;
}

const ButtonHeroComponent: React.FC<Props> = ({
  bg,
  variant,
  startContent,
  endContent,
  children,
}) => {
  const classBg =
    bg === "primary"
      ? `text-light bg-primary`
      : bg === "transparent"
      ? "text-dark bg-transparent"
      : "text-dark bg-light";
  return (
    <Button
      variant={variant}
      startContent={startContent}
      endContent={endContent}
      className={
        cn("py-6 px-10 rounded-full flex !sub-heading-2 shadow", bg && classBg)
      }
    >
      {children}
    </Button>
  );
};

export default ButtonHeroComponent;
