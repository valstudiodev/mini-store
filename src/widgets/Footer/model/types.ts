import { ComponentType } from "react";
import { House, LucideIcon } from "lucide-react";

type FooterColumnItem = FooterLink | FooterContact

export interface FooterLink {
  type: 'link';
  label: string;
  to: string;
}

export interface FooterContact {
  type: 'contact';
  label: string;
  value: string;
  href: string;
}

export interface FooterColumnData {
  title: string;
  items: FooterColumnItem[];
  className?: string;
}

export interface SocialLink {
  label: string;
  to: string;
  icon: ComponentType<{ size?: number }> | LucideIcon;
}

export interface FooterColumnProps {
  title?: string;
  items: FooterLink[];
  className?: string;
}

export interface FooterContactItem {
  label: string;
  value: string;
  href: string;
}

export interface FooterContactsProps {
  title: string;
  className?: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: 'home',
    to: '/',
    icon: House,
  },
  {
    label: 'home',
    to: '/',
    icon: House,
  },
  {
    label: 'home',
    to: '/',
    icon: House
  },
  {
    label: 'home',
    to: '/',
    icon: House
  },
  {
    label: 'home',
    to: '/',
    icon: House
  },
];

export const footerContacts: FooterContactItem[] = [
  {
    label: 'Do you have any queries or suggestions?',
    value: 'yourinfo@gmail.com',
    href: '/email',
  },
  {
    label: 'If you need support? Just give us a call.',
    value: '+55 111 222 333 44',
    href: '/support',
  }
]