
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
    title: 'We ship with:',
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
    title: 'Payment options:',
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