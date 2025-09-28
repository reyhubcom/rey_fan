import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Staking',
      links: [
        {
          text: 'What is Staking?',
          href: getPermalink('/homes/staking'),
        },
        {
          text: 'Bitcoin Staking',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Stake ETH',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Custodians',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Protocols',
      links: [
        {
          text: 'Ethereum',
          href: getPermalink('/#features'),
        },
        {
          text: 'Solana',
          href: getPermalink('/services'),
        },
        {
          text: 'Eigenlayer',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Celestia',
          href: getPermalink('/about'),
        },
        {
          text: 'Polkadot',
          href: getPermalink('/contact'),
        },
        {
          text: 'Polygon',
          href: getPermalink('/terms'),
        },
        {
          text: 'View All Protocols',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Solutions',
      links: [
        {
          text: 'Asset Management',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Custodians & Wallets',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Exchanges & Markeplaces',
          href: getPermalink('/landing/click-through'),
        },
        
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
  ],
  actions: [{ text: 'APP STAKING', href: 'https://linktr.ee/reystaking', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Blockchains',
      links: [
        { text: 'Ethereum', href: '#' },
        { text: 'Solana', href: '#' },
        { text: 'Cosmos', href: '#' },
        { text: 'Binance', href: '#' },
        { text: 'BASE', href: '#' },
        { text: 'Avalanche', href: '#' },
        { text: 'Tron', href: '#' },
        { text: 'View All Chains', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://reyhub.com"> Rey</a> ·2025 Rey.Fan All Rights Reserved.
  `,
};
