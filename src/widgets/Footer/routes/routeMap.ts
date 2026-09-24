import { routeMap } from "@/app/routes/routeMap";
import { FooterColumnData } from "../model/types";

export const footerColumns: FooterColumnData[] = [
  {
    title: 'Quick links',
    items: [
      {
        type: 'link',
        label: 'Home',
        to: `${routeMap.home.path}`
      },
      {
        type: 'link',
        label: 'About us',
        to: `${routeMap.about.path}`
      },
      {
        type: 'link',
        label: 'Shop',
        to: `${routeMap.pages.path}`
      },
      {
        type: 'link',
        label: 'Blogs',
        to: `${routeMap.blog.path}`
      },
      {
        type: 'link',
        label: 'Contact',
        to: `${routeMap.contacts.path}`
      },
    ],
  },
  {
    title: 'Help & info',
    items: [
      {
        type: 'link',
        label: 'FATrack Your OrderQ',
        to: '/faq'
      },
      {
        type: 'link',
        label: 'Returns policies',
        to: '/shipping'
      },
      {
        type: 'link',
        label: 'Shipping + Delivery ',
        to: '/returns'
      },
      {
        type: 'link',
        label: 'Contact Us',
        to: `${routeMap.contacts.path}`
      },
      {
        type: 'link',
        label: 'Faqs',
        to: `/faq`
      },
    ],
  },
];