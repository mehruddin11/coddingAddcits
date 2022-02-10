import React from 'react';
import { FaReact } from 'react-icons/fa'
// import { BiCodeCurly } from 'react-icons/bi';
import { BsCode } from 'react-icons/bs'
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home'
  },
  {
    id: 2,
    url: '/about',
    text: "about",

  },
  {
    id: 3,
    url: '/react',
    text: 'Web Devlopment'
  },
  // {
  //   id: 4,
  //   url: '/datastructure',
  //   text: 'Datastructure'

  // },
  {
    id: 5,
    url: '/codding',
    text: 'Hackerrank 30 day code'
  }
];
export const services = [
  {
    id: 1,
    icon: <FaReact />,
    title: 'Web-Development',
    link: "/react",
    text:
      'learn html css and Javascript  deep dive with react',
  },
  // {
  //   id: 2,
  //   icon: <BiCodeCurly />,
  //   title: 'DataStructure',
  //   link: "/datastructure",
  //   text:
  //     'Learn interview Based datastructure questions ',
  // },
  {
    id: 3,
    icon: < BsCode />,
    title: 'HACKERRANK 30 day of code ',
    link: "/coding",
    text:
      'Get all Question from day0 to day30',
  },
]
export const social = [
  {
    id: 1,
    icon: <FaGithub />,
    text: "github",
    link: 'https://github.com/mehruddin11'
  },
  {
    id: 2,
    icon: <FaFacebook />,
    text: "Facebook",
    link: 'https://www.facebook.com/'
  },
  {
    id: 3,
    icon: <FaInstagram />,
    text: "Instagram",
    link: 'https://www.instagram.com/p/CY3Fw3qvaRQ/'
  }
];


 