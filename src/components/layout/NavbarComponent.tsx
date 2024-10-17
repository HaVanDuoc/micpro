'use client'

import Container from "@/components/common/Container";
import LinkComponent from "@/components/common/LinkComponent";
import { NAVBAR_DATA } from "@/data/constants";
import React, { useEffect, useRef, useState } from "react";
import ButtonIconComponent from "@/components/common/ButtonIconComponent";
import cn from "@/utils/tailwind-utils";
import CLOSE from "@/assets/icon/close.svg";
import OPEN from "@/assets/icon/menu.svg";
import LogoComponent from "@/components/ui/LogoComponent";
import TitleComponent from "@/components/common/TitleComponent";
import DropdownNavbarComponent from "../ui/navbar/DropdownNavbarComponent";
import ButtonNavbarComponent from "@/components/ui/navbar/ButtonNavbarComponent";

interface NavbarProps {
  hiddenMenu?: "xl" | "lg" | "md" | "sm";
  page: keyof typeof NAVBAR_DATA;
}

const NavbarComponent: React.FC<NavbarProps> = ({
  hiddenMenu = "md",
  page,
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navbar = NAVBAR_DATA[page];
  const { navigate, buttons } = navbar;

  const classHiddenMenu =
    hiddenMenu === "xl"
      ? "xl:hidden"
      : hiddenMenu === "lg"
      ? "lg:hidden"
      : hiddenMenu === "md"
      ? "md:hidden"
      : "sm:hidden";

  const classHiddenLinks =
    hiddenMenu === "xl"
      ? "hidden xl:flex"
      : hiddenMenu === "lg"
      ? "hidden lg:flex"
      : hiddenMenu === "md"
      ? "hidden md:flex"
      : "hidden sm:flex";

  const toggle = () => setOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    // Kiểm tra nếu click xảy ra bên ngoài NavbarMobile
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setOpen(false); // Đóng menu
    }
  };

  useEffect(() => {
    // Thêm sự kiện click
    document.addEventListener("mousedown", handleClickOutside);

    // Gỡ bỏ sự kiện khi component bị hủy
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex w-full">
      <Container className="flex flex-row items-center">
        <LogoComponent className="mr-auto" />

        <ButtonIconComponent
          icon={OPEN}
          onClick={toggle}
          size={30}
          className={classHiddenMenu}
        />

        <div
          className={cn(
            "flex items-center flex-wrap gap-10",
            classHiddenLinks && classHiddenLinks
          )}
        >
          {navigate.map((nav) => (
            <div key={nav.id}>
              <DropdownNavbarComponent data={nav} />
            </div>
          ))}
        </div>

        <div className="ml-auto hidden lg:flex">
          {buttons.map((btn) => (
            <ButtonNavbarComponent name={btn.name} key={btn.id} />
          ))}
        </div>
      </Container>

      {/* Sidebar Menu */}
      <aside
        ref={containerRef}
        className={cn(
          "p-5 absolute top-0 left-0 bg-white w-full h-screen max-w-screen-xs animation z-[99] overflow-y-auto",
          open ? "translate-x-0 shadow-2xl" : "translate-x-[-100%]"
        )}
      >
        <div className="flex mb-5">
          <LogoComponent />
          <ButtonIconComponent
            icon={CLOSE}
            className="ml-auto"
            onClick={toggle}
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
          {navigate.map((nav) => (
            <div key={nav.id}>
              <LinkComponent href={nav.href}>
                <TitleComponent title={nav.name} heading="sub-heading-2" />
              </LinkComponent>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col justify-center w-full">
          {buttons.map((btn) => (
            <ButtonNavbarComponent name={btn.name} key={btn.id} />
          ))}
        </div>
      </aside>
    </nav>
  );
};

export default NavbarComponent;
