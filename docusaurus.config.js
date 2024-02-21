// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zoe Huang',
  tagline: 'F2E x Sweetholic x Backpacker',
  url: 'https://typeii8.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/gizmo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'typeii8', // Usually your GitHub org/user name.
  projectName: 'typeii8.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          showLastUpdateTime: true,
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          filename: 'sitemap.xml'
        },
        gtag: {
          trackingID: 'G-6GGVD984B6'
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      /** You can configure a default image that will be used for your meta tag, */
      metadata: [
        // TODO: 新增敘述, 新增 sitemap plugin
        // {name: 'description', content: ''},
        {name: 'keywords', content: 'f2e, blog, vue3, css, lwc, salesforce, uiux'},
        {name: 'author', content: 'Zoe Huang'},
      ],
      image: 'img/gizmo.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Hi Zoe, hello world. Logo',
          src: 'img/gizmo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Series of articles',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: '/about',
            label: 'About',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Articles',
            items: [
              {
                label: 'CSS',
                to: '/docs/category/css',
              },
              {
                label: 'Vue',
                to: '/docs/category/vue',
              },
              {
                label: 'LWC',
                to: '/docs/category/lwc',
              },
              // {
              //   label: 'Optimization',
              //   to: '/docs/category/optimization',
              // }
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/zoehuang',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/typeii8',
              },
              {
                label: '500px',
                href: 'https://500px.com/p/typeii8',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Contact',
                href: 'mailto:typeii8@gmail.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zoe Huang, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
