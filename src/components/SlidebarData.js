import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Products",
    path: "/products",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  
//   {
//     title: "GALLERY",
//     path: "/login",
//     icon: <FaIcons.FaCartPlus />,
//     cName: "nav-text"
//   },
  // {
  //   title: "User Details",
  //   path: "/userdetails",
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: "nav-text"
  // },
  {

    title: "Admin Section",
    path: "/adminsection",

    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  
  {
    title: "About Us",
    path: "/about",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text"
  }
  // {
  //   title: "Add product",
  //   path: "/add_products",
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: "nav-text"
  // }

  
];
