export default {
  lang: "en-US",
  title: "Vue Headless UI",
  logo: "/logo.svg",
  base: "/vue-headless-ui-docs/",
  description: "Just playing around.",
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/web-ts/vue-headless-ui" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present WEB-TS",
    },
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is headless?", link: "/intro/what-is-headless" },
          { text: "Getting Started", link: "/intro/getting-started" },
        ],
      },
      {
        text: "Components",
        items: [
          {
            text: "Headless Accordion",
            link: "/components/headless-accordion",
          },
          { text: "Headless Dialog", link: "/intro/headless-dialog" },
        ],
      },
    ],
  },
};
