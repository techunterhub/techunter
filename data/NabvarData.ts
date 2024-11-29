import {
    ChatBubbleBottomCenterTextIcon,
    ClockIcon,
    ChatBubbleLeftRightIcon,
    PhoneIcon,
    CodeBracketIcon
  } from "@heroicons/react/24/outline";
  

import { NavbarProductData, NavbarcallsToActionData } from "@/types/types";


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
     {
       name: "Url Shortener",
       description:
         "Try our url shortener to short your long url to short url in just a step.",
       href: "/url-shortener",
       icon: CodeBracketIcon,
     },
  ];
  
  export const callsToAction: NavbarcallsToActionData[] = [
    { name: "Chat with chatbot", href: "#", icon: ChatBubbleLeftRightIcon },
    { name: "Contact Us", href: "contact", icon: PhoneIcon },
  ];
  