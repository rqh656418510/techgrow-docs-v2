import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '指南',
    link: '/README.md'
  },
  {
    text: '公众号导流',
    children: ['/wechat/common/README.md', '/wechat/hexo/README.md', '/wechat/VuePress/README.md']
  },
  {
    text: '开源插件',
    children: [
      {
        text: 'Hexo 插件',
        link: 'https://github.com/rqh656418510/hexo-readmore',
      },
      {
        text: 'VuePress 插件',
        link: 'https://github.com/rqh656418510/vuepress-readmore',
      }
    ]
  },
  {
    text: '了解更多',
    children: ['/contact/README.md']
  }
]