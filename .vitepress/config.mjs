import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "薯条港文档",
  description: "提供薯条港的项目文档与相关资料",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      "/": {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      '/recipes/': [
        {
          text: '食谱',
          items: [
            { text: '目录', link: '/recipes/' },
            { text: '奶茶', link: '/recipes/milk-tea' },
            { text: '柠檬茶', link: '/recipes/lemon-tea' }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://space.bilibili.com/1690617042' }
    ]
  }
})
