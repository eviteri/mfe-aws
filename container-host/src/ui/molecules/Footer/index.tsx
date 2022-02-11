import React, { FC } from 'react'
import FooterCL from 'syf-component-library/ui/patterns/Footer'

const footerLinks = [
  {
    text: 'Accessibility',
    url: 'https://www.mysynchrony.com/accessibility.html'
  },
  {
    text: 'Privacy',
    url: 'https://www.synchrony.com/privacy-policy.html?intcmp=home_footer_synchrony_int'
  },
  {
    text: 'Terms',
    url: 'https://www.mysynchrony.com/terms-of-use.html'
  },
  {
    text: 'Fraud Protection',
    url: 'https://www.synchrony.com/products-services/consumer-retail-credit-cards/fraud-protection.html'
  },
  {
    text: 'Synchrony.com',
    url: 'https://www.synchrony.com/'
  },
  {
    text: 'Mysynchrony.com',
    url: 'https://www.mysynchrony.com/'
  }
]

const Footer: FC = () => {
  const year = new Date().getFullYear()

  return <FooterCL body={`\u00A9 ${year} Synchrony`} linkList={footerLinks} />
}
export default Footer
