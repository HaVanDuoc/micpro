import FOOD_1 from "@/assets/restaurant/food (1).png";
import FOOD_2 from "@/assets/restaurant/food (2).png";
import FOOD_3 from "@/assets/restaurant/food (3).png";
import ORDER_1 from "@/assets/restaurant/order (4).png";
import ORDER_2 from "@/assets/restaurant/order (3).png";
import ORDER_3 from "@/assets/restaurant/order (2).png";
import ORDER_4 from "@/assets/restaurant/order (1).png";
import BLOG_FOOD_1 from "@/assets/restaurant/blog_food (1).png";
import BLOG_FOOD_2 from "@/assets/restaurant/blog_food (2).png";
import BLOG_FOOD_3 from "@/assets/restaurant/blog_food (3).png";
import CLIENT_1 from "@/assets/restaurant/client (1).png";
import CLIENT_2 from "@/assets/restaurant/client (2).png";

export const CLIENT_SAY_DATA = {
  title: "What Our Clients Say",
  sub: "Here, We make almost every genre of applications. Your name it and we build it.",
  items: [
    {
      id: 1,
      name: "Yaron Shifman",
      job: "CEO, Swathly Ltd",
      avt: CLIENT_1,
      say: "I’m very pleased with their work. When I need help with any aspect of development, I’m able to call on them to take care of it. They’re professional and complete tasks in a timely manner.",
      rating: 5,
    },
    {
      id: 2,
      name: "Elmo Weber",
      job: "Founder, Fair Friend ",
      avt: CLIENT_2,
      say: "Scopic has never let me down. I’m pleased with our partnership and they consistently develop reliable applications. They estimate a range of hours for each project and they manage it efficiently.",
      rating: 5,
    },
    {
      id: 3,
      name: "Yaron Shifman",
      job: "CEO, Swathly Ltd",
      avt: CLIENT_1,
      say: "I’m very pleased with their work. When I need help with any aspect of development, I’m able to call on them to take care of it. They’re professional and complete tasks in a timely manner.",
      rating: 5,
    },
    {
      id: 4,
      name: "Elmo Weber",
      job: "Founder, Fair Friend ",
      avt: CLIENT_2,
      say: "Scopic has never let me down. I’m pleased with our partnership and they consistently develop reliable applications. They estimate a range of hours for each project and they manage it efficiently.",
      rating: 5,
    },
  ],
};

export const BLOG_FOOD_DATA = {
  title: "Our Food Blog",
  sub: "Eat the food you dream about at affordable prices. No need to come to us just call is.",
  button: {
    name: "Learn More",
    href: "#",
  },
  items: [
    {
      id: 1,
      name: "How to make a rice bowl?",
      des: "Lorem ipsum dolor sit amet, consectetur so adipiscing elit, sed do eiusmod tempor the incididunt ut labore",
      img: BLOG_FOOD_1,
    },
    {
      id: 2,
      name: "Get the pizza of the week.",
      des: "Lorem ipsum dolor sit amet, consectetur so adipiscing elit, sed do eiusmod tempor the incididunt ut labore",
      img: BLOG_FOOD_2,
    },
    {
      id: 3,
      name: "Make your burger like this.",
      des: "Lorem ipsum dolor sit amet, consectetur so adipiscing elit, sed do eiusmod tempor the incididunt ut labore",
      img: BLOG_FOOD_3,
    },
  ],
};

export const OFFER_DATA = {
  title: "Get The Best Offer",
  sub_title:
    " Eat the food you dream about at affordable prices. No need to come to us just call is.",
  leftContent: {
    img: ORDER_1,
    text_1: "Lunch Time",
    percent: 30,
    text_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  rightContent: [
    {
      id: 1,
      name: "Spicy Club",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu.",
      img: ORDER_2,
      price: 42,
    },
    {
      id: 2,
      name: "Spicy Salad",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu.",
      img: ORDER_3,
      price: 42,
    },
    {
      id: 3,
      name: "Chicken Grill",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu.",
      img: ORDER_4,
      price: 42,
    },
  ],
};

export const STATS_DATA = [
  { id: 1, label: "Trusted Retails", value: "+20k" },
  { id: 2, label: "Customers", value: "+50k" },
  { id: 3, label: "Review", value: "+400k" },
];

export const Features_DATA = {
  title: "Our Special Features",
  sub_title:
    "This lesson provides a basic framework for conducting a recipe demonstration",
  items: [
    {
      id: 1,
      name: "Exquisite Recipe",
      img: FOOD_1,
      des: "Phasollus risus turpis sit arnot magna non.",
    },
    {
      id: 2,
      name: "Crispy Baked",
      img: FOOD_2,
      des: "Phasollus risus turpis sit arnot magna non.",
    },
    {
      id: 3,
      name: "Pasta Recipe",
      img: FOOD_3,
      des: "Phasollus risus turpis sit arnot magna non.",
    },
  ],
};

export const HERO_RESTAURANT_DATA = {
  heading: "The Best way to grow your Business",
  sub_heading:
    "Imagine you don’t need a diet beacuse we provide healthy and delicious toad for you! We are providing the best food delivery services.",
};
