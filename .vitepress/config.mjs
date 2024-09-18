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
        text: '项目',
        items: [
          { text: '反形式主义', link: '/anti-formalism/' },
          { text: 'English 42', link: '/en42' },
          { text: '食谱', link: '/recipes' }
        ]
      },
      'anti-formalism': [
        {
          text: '反形式主义',
          items: [
            { text: '目录', link: '/anti-formalism/' },
            { text: '手写模拟', link: '/anti-formalism/hand-write' },
            { text: '路由器校园网验证', link: '/anti-formalism/openwrt-ruijie' },
          ]
        }

      ],
      '/en42/': [
        {
          text: 'English 42',
          items: [
            { text: '目录', link: '/en42/' },
            { text: 'L0', link: '/en42/l0' },
          ]
        }
      ],
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
