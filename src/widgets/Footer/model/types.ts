
type FooterColumnItem = FooterLink | FooterContact

export interface FooterLink {
  type: 'link';
  label: string;
  icon?: string;
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

export interface FooterColumnProps {
  title?: string;
  items: FooterLink[];
  className?: string;
}

export interface SocialLink {
  label: string;
  to: string;
  icon: string;
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
    label: 'facebook',
    to: '/',
    icon: '--icon-fb1',
  },
  {
    label: 'instagram',
    to: '/',
    icon: '--icon-instagramm',
  },
  {
    label: 'twitter',
    to: '/',
    icon: '--icon-twitter'
  },
  {
    label: 'linkdin',
    to: '/',
    icon: '--icon-linkdin'
  },
  {
    label: 'utub',
    to: '/',
    icon: '--icon-utub'
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