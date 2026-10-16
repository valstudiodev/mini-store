import { routeMap } from "@/app/routes/routeMap";
import { FooterColumnData } from "../model/types";

export const footerColumns: FooterColumnData[] = [
  {
    title: 'footer.quickLinks',
    items: [
      {
        type: 'link',
        label: 'navigation.home',
        to: `${routeMap.home.path}`
      },
      {
        type: 'link',
        label: 'navigation.about',
        to: `${routeMap.about.path}`
      },
      {
        type: 'link',
        label: 'navigation.pages',
        to: `${routeMap.pages.path}`
      },
      {
        type: 'link',
        label: 'navigation.blog',
        to: `${routeMap.blog.path}`
      },
      {
        type: 'link',
        label: 'navigation.contacts',
        to: `${routeMap.contacts.path}`
      },
    ],
  },
  {
    title: 'footer.helpInfo',
    items: [
      {
        type: 'link',
        label: 'footer.trackOrder',
        to: '/faq'
      },
      {
        type: 'link',
        label: 'footer.returnsPolicies',
        to: '/shipping'
      },
      {
        type: 'link',
        label: 'footer.shippingDelivery',
        to: '/returns'
      },
      {
        type: 'link',
        label: 'footer.contactUs',
        to: `${routeMap.contacts.path}`
      },
      {
        type: 'link',
        label: 'footer.faqs',
        to: `/faq`
      },
    ],
  },
];

