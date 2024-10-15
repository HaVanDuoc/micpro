import ImageComponent from "@/components/common/ImageComponent";

import Icon_1 from "@/assets/home/Icon.png";
import Icon_2 from "@/assets/home/Icon (1).png";
import Icon_3 from "@/assets/home/Icon (2).png";
import Icon_4 from "@/assets/home/Icon (3).png";
import SLACK from "@/assets/home/slack.svg";
import AMAZON from "@/assets/home/amazon.svg";
import WOO from "@/assets/home/woo.svg";
import ME from "@/assets/home/me.svg";
import SITEPOINT from "@/assets/home/sitepoint.svg";
import IMAGE_1 from "@/assets/home/Frame 490 1.png";
import IMAGE_2 from "@/assets/home/Frame 494 1.png";
import IMAGE_3 from "@/assets/home/Frame 495 1.png";
import IMAGE_4 from "@/assets/home/Frame 496 1.png";

export const HERO_DATA = {
  heading: "Build Your Dream Website with Our Skilled Development Team",
  sub_heading:
    "Are you looking for a way to close all marketing, technical and customer support tasks for your company in one place",
};

export const AGENCY_DATA = {
  top: [
    {
      id: 1,
      icon: <ImageComponent img={Icon_1} alt="img feature" width="88px" />,
      name: "Discover, Explore the Product",
    },
    {
      id: 2,
      icon: <ImageComponent img={Icon_2} alt="img feature" width="88px" />,
      name: "Product UX, Design & Development",
    },
    {
      id: 3,
      icon: <ImageComponent img={Icon_3} alt="img feature" width="88px" />,
      name: "Art Direction & Brand Strategy",
    },
    {
      id: 4,
      icon: <ImageComponent img={Icon_4} alt="img feature" width="88px" />,
      name: "Marketing Strategy & SEO Campaigns",
    },
  ],
  heading: "More than 80,000+ companies trust Micpro",
  brand: [
    {
      id: 1,
      name: "slack",
      brand: <ImageComponent img={SLACK} alt="slack" />,
    },
    {
      id: 2,
      name: "amazon",
      brand: <ImageComponent img={AMAZON} alt="amazon" />,
    },
    {
      id: 3,
      name: "woo commerce",
      brand: <ImageComponent img={WOO} alt="woo commerce" />,
    },
    {
      id: 4,
      name: "me undies",
      brand: <ImageComponent img={ME} alt="me undies" />,
    },
    {
      id: 5,
      name: "site point",
      brand: <ImageComponent img={SITEPOINT} alt="site point" />,
    },
  ],
};

export const TEAM_WORK_DATA = {
  title: "Our Team’s Work",
  team_works: [
    {
      id: 1,
      text: "Mobile app, Weather, Software",
      name: "Weather App UI Kit - WETHY",
      description:
        "Hello Designers! This is the video calling website landing page design concept. Video calling software is very popular nowadays.",
      img: IMAGE_1,
    },
    {
      id: 2,
      text: "Web Design, Video call, Software",
      name: "Video Calling Website - Jabber ",
      description:
        "WEATHY is a modern and clean mobile app project based on the weather app. The UI Kit gives you the necessary screens for creating stunning iOS screens and applying them to any weather app.",
      img: IMAGE_2,
    },
    {
      id: 3,
      text: "Web app, Software, Car Dashbord",
      name: "Car Dashboard UI Kit Design ",
      description:
        "Motiv. is a Free Car Dashboard UI Kit Design of 20+ Free pixel-perfect screens and 60+ Components easy to use in Figma. ",
      img: IMAGE_3,
    },
    {
      id: 4,
      text: "Web Design, Software",
      name: "Video Editing Website - Revise ",
      description:
        "Hello Peoples! This is the Video Editing Website landing page design concept. Video editing is an essential part of a tech user.",
      img: IMAGE_4,
    },
  ],
};
