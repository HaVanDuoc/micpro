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
