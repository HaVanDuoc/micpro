"use client";

import LinkComponent from "@/components/common/LinkComponent";
import TitleComponent from "@/components/common/TitleComponent";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface NavLink {
  id: number;
  name: string;
  href: string;
  items?: Array<{
    id: number;
    name: string;
    href: string;
  }>;
}

interface DropdownNavbarComponentProps {
  data: NavLink;
}

const DropdownNavbarComponent: React.FC<DropdownNavbarComponentProps> = ({
  data,
}) => {
  const { name, href, items } = data;
  const router = useRouter();
  const { locale } = useParams();

  return items && items?.length > 0 ? (
    <Dropdown
      showArrow
      classNames={{
        content:
          "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
      }}
    >
      <DropdownTrigger>
        <div
          className="flex items-center cursor-pointer"
        >
          <TitleComponent title={name} heading="sub-heading-2" />
          <IoIosArrowDown className="ml-2" />
        </div>
      </DropdownTrigger>

      <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
        <DropdownSection>
          {items.map((link) => (
            <DropdownItem
              key={link.id}
              shortcut="⌘N"
              className="capitalize"
              onClick={() => router.push(`/${locale}/${link.href}`)}
            >
              {link.name}
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  ) : (
    <LinkComponent href={href} className="sub-heading-2">{name}</LinkComponent>
  );
};

export default DropdownNavbarComponent;
