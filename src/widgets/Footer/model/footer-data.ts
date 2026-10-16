import { FooterContactItem, SocialLink } from "./types";

interface FooterBootomIcon {
  icon: string;
  to: string;
  label: string;
}

interface FooterBottomColumn {
  title: string;
  icons: FooterBootomIcon[]
}

export const footerBottomData: FooterBottomColumn[] = [
  {
    title: 'footer.shipping',
    icons: [
      {
        icon: '--icon-label-dhl',
        to: '/',
        label: 'DHL company'
      },
      {
        icon: '--icon-arcticons-brand',
        to: '/',
        label: 'arcticons company'
      },
    ]
  },
  {
    title: 'footer.paymentOptions',
    icons: [
      {
        icon: '--icon-visa',
        to: '/',
        label: ''
      },
      {
        icon: '--icon-master-card',
        to: '/',
        label: 'master card'
      },
      {
        icon: '--icon-pay-pal',
        to: '/',
        label: 'pay-pal'
      },
    ]
  }
]

export const footerContacts: FooterContactItem[] = [
  {
    label: 'footer.contactQueries',
    value: 'yourinfo@gmail.com',
    href: '/email',
  },
  {
    label: 'footer.contactSupport',
    value: '+55 111 222 333 44',
    href: '/support',
  }
]


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