import {
    ChatBubbleBottomCenterTextIcon,
    CursorArrowRaysIcon,
    ClockIcon,
    CodeBracketIcon,
    ChatBubbleLeftRightIcon,
    PhoneIcon,
  } from "@heroicons/react/24/outline";
  

import { NavbarProductData, NavbarcallsToActionData, NavbarBlogData } from "@/types/types";


  export const products: NavbarProductData[] = [
    {
      name: "Techunter GPT",
      description: "Try our latest AI chatbot for your doubt solving.",
      href: "https://gpt.techunterhub.com/",
      icon: ChatBubbleBottomCenterTextIcon,
    },
    // {
    //   name: "Image Generator",
    //   description: "Image Generator is our latest technology we built.",
    //   href: "#",
    //   icon: CursorArrowRaysIcon,
    // },
    {
      name: "Days Until",
      description: "Easily find out how many days remain until your next big occasion!",
      href: "https://events.techunterhub.com/",
      icon: ClockIcon,
    },
    // {
    //   name: "Github Profile Designer",
    //   description:
    //     "Connect with our Github Tool that will make your profile more attractive.",
    //   href: "#",
    //   icon: CodeBracketIcon,
    // },
  ];
  
  export const callsToAction: NavbarcallsToActionData[] = [
    { name: "Chat with chatbot", href: "#", icon: ChatBubbleLeftRightIcon },
    { name: "Contact Us", href: "contact", icon: PhoneIcon },
  ];
  
  export const blogs: NavbarBlogData[] = [
    {
      date: "Mar 5, 2023",
      title: "Boost your conversion rate",
      description:
        "Learn strategies to increase conversion rates and drive more sales.",
      link: "#",
    },
    {
      date: "Feb 25, 2023",
      title: "How to use search engine optimization to drive traffic",
      description:
        "A comprehensive guide to improving SEO for better traffic generation.",
      link: "#",
    },
    {
      date: "Feb 21, 2023",
      title: "Improve your customer experience",
      description:
        "Tips on enhancing customer satisfaction through modern techniques.",
      link: "#",
    },
  ];
  