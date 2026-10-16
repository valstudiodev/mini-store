
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



