// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual CNIEP',
  tagline: 'Cadastro Nacional de Inspeções nos Estabelecimentos Penais',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // URL pública e base de caminho para GitHub Pages
  url: 'https://leobarone.github.io',
  baseUrl: '/manual-cniep/',

  // Dados do repositório GitHub
  organizationName: 'leobarone',
  projectName: 'manual-cniep',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false, // remove o blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'CNIEP',
        logo: {
          alt: 'Logo CNIEP',
          src: 'img/logo-cnj.png', // substitua por seu logo
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Manual',
          },
          {
            href: 'https://github.com/leobarone/manual-cniep',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {
                label: 'Manual do Usuário',
                to: '/',
              },
            ],
          },
          {
            title: 'Contato',
            items: [
              {
                label: 'E-mail de suporte',
                href: 'mailto:dadosfj@cnj.jus.br',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Conselho Nacional de Justiça. Construído com Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
