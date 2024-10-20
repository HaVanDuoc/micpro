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
import AVT from "@/assets/home/man-smiling-with-arms-crossed-removebg 2.png";
import MEMBER_1 from "@/assets/home/member (1).png";
import MEMBER_2 from "@/assets/home/member (2).png";
import MEMBER_3 from "@/assets/home/member (3).png";
import MEMBER_4 from "@/assets/home/member (4).png";
import MEMBER_5 from "@/assets/home/member (5).png";
import MEMBER_6 from "@/assets/home/member (6).png";
import BLOG_1 from "@/assets/home/blog (1).png";
import BLOG_2 from "@/assets/home/blog (2).png";
import BLOG_3 from "@/assets/home/blog (3).png";

export const ABOUT_US_DATA = {
  heading:
    "We'll take the time to understand your goals and then help you create a website that's exactly what you envisioned.",
  sub_heading:
    "We believe your project is only as good as the team that's working on it. When we work with you and your team, we know there are no shortcuts to success. Your research is done; now lets get down to business!",
};

export const BLOG_DATA = {
  title: "OUR Design BLOG",
  blogs: [
    {
      id: 1,
      name: "15 Important Usability Principles for User Interface Design",
      img: BLOG_1,
      type: "Design Blog",
      createdAt: "Jul 12, 2022",
    },
    {
      id: 2,
      name: "15 Important Usability Principles for User Interface Design",
      img: BLOG_2,
      type: "Design Blog",
      createdAt: "Jul 30, 2022",
    },
    {
      id: 3,
      name: "15 Important Usability Principles for User Interface Design",
      img: BLOG_3,
      type: "Design Blog",
      createdAt: "Jul 22, 2022",
    },
  ],
};

export const CreativeTeam_DATA = {
  title: "Our Creative Team",
  description:
    "Flowgiri is a creative and modern theme for startups, freelancers and creatives.",
  members: [
    { id: 1, name: "STEVE THOMAS", job: "WEB DEVELOPER", img: MEMBER_1 },
    { id: 2, name: "JANE DOE", job: "UI/UX DESIGNER", img: MEMBER_2 },
    { id: 3, name: "JOHN SMITH", job: "FRONTEND DEVELOPER", img: MEMBER_3 },
    { id: 4, name: "EMMA JOHNSON", job: "BACKEND DEVELOPER", img: MEMBER_4 },
    { id: 5, name: "OLIVER BROWN", job: "FULL STACK DEVELOPER", img: MEMBER_5 },
    { id: 6, name: "SOPHIA DAVIS", job: "PROJECT MANAGER", img: MEMBER_6 },
  ],
};

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

export const Expertise_DATA = {
  title: "Explore our core Expertise",
  sub_title:
    "We produce beautiful and engaging websites. Our team is mostly experienced in the design of stunning interfaces, e-commerce and marketing website development, ready to work with you on your project!",
  items: [
    {
      id: 1,
      title: "UI/UX Design",
      list: [
        {
          id: 1,
          value: "High-quality motion design",
        },
        {
          id: 2,
          value: "Thoughtful user experience design",
        },
        {
          id: 3,
          value: "Unique user interface design for websites and apps",
        },
        {
          id: 4,
          value: "Design concepts & strategies for MVPs",
        },
      ],
    },
    {
      id: 2,
      title: "Webflow Design",
      list: [
        {
          id: 1,
          value: "High-quality motion design",
        },
        {
          id: 2,
          value: "Thoughtful user experience design",
        },
        {
          id: 3,
          value: "Unique user interface design for websites and apps",
        },
        {
          id: 4,
          value: "Design concepts & strategies for MVPs",
        },
      ],
    },
    {
      id: 3,
      title: "Webflow Developer",
      list: [
        {
          id: 1,
          value:
            "Full-cycle development of powerful corporate websites and one-pagers",
        },
        {
          id: 2,
          value: "Webflow integrations with third-party services and apps",
        },
        {
          id: 3,
          value:
            "Migration of your designs or even ready website to Webflow CMS",
        },
      ],
    },
    {
      id: 4,
      title: "Shopify Developer",
      list: [
        {
          id: 1,
          value: "Cost-effective e-commerce development",
        },
        {
          id: 2,
          value: "Reinvention of your online store with a strong tech stack",
        },
      ],
    },
  ],
};

export const BUDGET_DATA = {
  title: "Find the plan that fits your budget",
  budgets: [
    {
      name: "Monthly",
      items: [
        {
          id: 1,
          class: "Pro",
          type: "Most popular",
          price: 35,
          providers: [
            {
              id: 1,
              value: "UI/UX Designer",
            },
            {
              id: 2,
              value: "Project Manager",
            },
            {
              id: 3,
              value: "Dedicated Developer",
            },
            {
              id: 4,
              value: "On time Support",
            },
            {
              id: 5,
              value: "QA technician",
            },
          ],
        },
        {
          id: 2,
          class: "Pro",
          type: "Free",
          price: 0,
          providers: [
            {
              id: 1,
              value: "UI/UX Designer",
            },
            {
              id: 2,
              value: "Dedicated Developer",
            },
            {
              id: 3,
              value: "QA technician",
            },
          ],
        },
      ],
    },
    {
      name: "Yearly",
      items: [
        {
          id: 1,
          class: "Pro",
          type: "Most popular",
          price: 199,
          providers: [
            {
              id: 1,
              value: "UI/UX Designer",
            },
            {
              id: 2,
              value: "Project Manager",
            },
            {
              id: 3,
              value: "Dedicated Developer",
            },
            {
              id: 4,
              value: "On time Support",
            },
            {
              id: 5,
              value: "QA technician",
            },
          ],
        },
        {
          id: 2,
          class: "Pro",
          type: "Free",
          price: 0,
          providers: [
            {
              id: 1,
              value: "UI/UX Designer",
            },
            {
              id: 2,
              value: "Dedicated Developer",
            },
            {
              id: 3,
              value: "QA technician",
            },
          ],
        },
      ],
    },
  ],
};

export const QUOTES_DATA = {
  name: "Quotes",
  items: [
    {
      id: 1,
      user: "Mitchell Marsh",
      job: "UI/UX Designer",
      avt: AVT.src,
      content:
        "Internal stakeholders were happy with the final product. The team was able to communicate their progress clearly and concisely. They took the initiative and executed the project without much supervision Internal stakeholders were happy with the final product. The team   able to communicate their progress clearly and concisely. They took the initiative and executed the project without much supervision",
    },
    {
      id: 2,
      user: "Mitchell Marsh",
      job: "UI/UX Designer",
      avt: AVT.src,
      content:
        "Internal stakeholders were happy with the final product. The team was able to communicate their progress clearly and concisely. They took the initiative and executed the project without much supervision Internal stakeholders were happy with the final product. The team   able to communicate their progress clearly and concisely. They took the initiative and executed the project without much supervision",
    },
    {
      id: 3,
      user: "Mitchell Marsh",
      job: "UI/UX Designer",
      avt: AVT.src,
      content:
        "Internal stakeholders were happy with the final product. The team was able to communicate their progress clearly and concisely. They took the initiative and executed the project without much supervision Internal stakeholders were happy with the final product. The team   able to communicate their progress clearly and concisely. They took the initiative and executed the project without much supervision",
    },
    {
      id: 4,
      user: "Mitchell Marsh",
      job: "UI/UX Designer",
      avt: AVT.src,
      content:
        "Internal stakeholders were happy with the final product. The team was able to communicate their progress clearly and concisely. They took the initiative and executed the project without much supervision Internal stakeholders were happy with the final product. The team   able to communicate their progress clearly and concisely. They took the initiative and executed the project without much supervision",
    },
    {
      id: 5,
      user: "Mitchell Marsh",
      job: "UI/UX Designer",
      avt: AVT.src,
      content:
        "Internal stakeholders were happy with the final product. The team was able to communicate their progress clearly and concisely. They took the initiative and executed the project without much supervision Internal stakeholders were happy with the final product. The team   able to communicate their progress clearly and concisely. They took the initiative and executed the project without much supervision",
    },
  ],
};
