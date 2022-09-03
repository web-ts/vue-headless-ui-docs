export default {
  lang: "en-US",
  title: "Vue Headless UI",
  base: "/vue-headless-ui-docs/",
  description: "Just playing around.",
  themeConfig: {
    logo: "/logo.svg",
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
          { text: "Headless Dialog", link: "/components/headless-dialog" },
          { text: "Headless Tabs", link: "/components/headless-tabs" },
          {
            text: "Headless Input",
            link: "/components/headless-input",
            items: [
              { text: "Form", link: "/components/input/form" },
              {
                text: "Fields",
                link: "/components/components/input/fields",
              },
            ],
          },
        ],
      },
    ],
  },
};
