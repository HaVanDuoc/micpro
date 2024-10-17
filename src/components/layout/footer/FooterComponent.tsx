import Container from "@/components/common/Container";
import LinkComponent from "@/components/common/LinkComponent";
import LogoComponent from "@/components/ui/LogoComponent";
import { Divider } from "@nextui-org/react";
import React from "react";
import {
  FaArrowRight,
  FaDribbble,
  FaFacebookF,
  FaStar,
  FaTwitter,
} from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";

const FOOTER_DATA = [
  {
    id: 1,
    name: "Product",
    items: [
      { id: 1, name: "Careere", link: "#" },
      { id: 2, name: "About Us", link: "#" },
      { id: 3, name: "Insights", link: "#" },
      { id: 4, name: "PCI Compliance", link: "#" },
      { id: 5, name: "Integratlons", link: "#" },
      { id: 6, name: "Pricing", link: "#" },
    ],
  },
  {
    id: 2,
    name: "For Developers",
    items: [
      { id: 1, name: "Docs", link: "#" },
      { id: 2, name: "Knowledge Base", link: "#" },
      { id: 3, name: "System Status", link: "#" },
      { id: 4, name: "Tutorials", link: "#" },
      { id: 5, name: "Security", link: "#" },
    ],
  },
  {
    id: 3,
    name: "Resources",
    items: [
      { id: 1, name: "About", link: "#" },
      { id: 2, name: "Leadership", link: "#" },
      { id: 3, name: "Press/News", link: "#" },
      { id: 4, name: "Careers/Team", link: "#" },
      { id: 5, name: "Contact Us", link: "#" },
    ],
  },
];

const FooterComponent = () => {
  return (
    <footer className="mt-20">
      <Container>
        <div className="flex flex-wrap gap-10 my-10 sm:my-20">
          <div className="lg:flex-1 lg:w-auto w-full">
            <LogoComponent />
          </div>

          {FOOTER_DATA.map((item) => (
            <div
              key={item.id}
              className="flex-1 sm:w-auto w-full min-w-[200px]"
            >
              <h3 className="sub-heading-2 mb-8">{item.name}</h3>

              <div className="flex flex-col gap-3">
                {item.items.map((link) => (
                  <LinkComponent
                    href={link.link}
                    key={link.id}
                    className="text-[#81879D]"
                  >
                    {link.name}
                  </LinkComponent>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-8">
            <h3 className="sub-heading-2">Subscribe</h3>

            <form className="flex flex-row items-center justify-center h-12 rounded-md overflow-hidden border border-gray-300">
              <input
                placeholder="Email address"
                className="h-full border-none outline-none px-5"
              />
              <button className="h-full px-5 text-light bg-[#7751F7]">
                <FaArrowRight />
              </button>
            </form>

            <div>
              <p className="sub-heading-3">8/10</p>
              <p className="sub-heading-3">Overall rating</p>
              <div className="flex flex-row gap-1 items-center mt-3">
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar key={index} className="text-[#FFAD0F] w-4 h-4" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Divider />

      <Container>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <div className="lg:order-3 flex items-center gap-3 min-w-max">
            <div className="border border-gray-300 p-3 bg-white text-primary rounded-full">
              <FaFacebookF />
            </div>
            <div className="border border-gray-300 p-3 bg-white text-red-500 rounded-full">
              <IoLogoGoogleplus />
            </div>
            <div className="border border-gray-300 p-3 bg-white text-primary-300 rounded-full">
              <FaTwitter />
            </div>
            <div className="border border-gray-300 p-3 bg-white text-red-400 rounded-full">
              <FaDribbble />
            </div>
          </div>

          <div className="lg:order-1 flex flex-row gap-10 min-w-max">
            <LinkComponent href="#" className="text-[#81879D]">
              Platform
            </LinkComponent>
            <LinkComponent href="#" className="text-[#81879D]">
            Products
            </LinkComponent>
            <LinkComponent href="#" className="text-[#81879D]">
            Resources
            </LinkComponent>
          </div>

          <div className="lg:order-2 text-[#81879D] flex-1 text-center min-w-max">
            © 2021 Besnik.com I All Rights Reserved
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterComponent;
