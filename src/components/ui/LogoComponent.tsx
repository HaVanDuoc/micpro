import utils from "@/utils";
import Image from "next/image";
import React from "react";
import LOGO from "@/assets/icon/logo.svg";
import pathPage from "@/libs/path";
import Link from "next/link";
import cn from "@/utils/tailwind-utils";
import TitleComponent from "@/components/common/TitleComponent";

const LogoComponent = ({ className }: { className?: string }) => {
  return (
    <Link
      href={pathPage.home}
      className={cn(
        "W-9 flex flex-row items-center gap-3 cursor-pointer",
        className
      )}
    >
      <Image
        src={LOGO}
        alt={utils.generateRandomAriaLabel("Logo__")}
        width={LOGO.width}
        height={LOGO.height}
        className="w-auto h-full object-cover"
      />
      <TitleComponent heading="heading-5" title="MicPro" />
    </Link>
  );
};

export default LogoComponent;
