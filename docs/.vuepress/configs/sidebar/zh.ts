import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/wechat/common': [
    {
      text: '公众号导流',
      children: ['/wechat/common/README.md']
    }
  ],
  '/wechat/hexo': [
    {
      text: '公众号导流',
      children: ['/wechat/hexo/README.md']
    }
  ],
  '/wechat/vuepress': [
    {
      text: '公众号导流',
      children: ['/wechat/vuepress/README.md']
    }
  ],
  '/demo': [
    {
      text: '在线演示导流',
      children: ['/demo/README.md']
    }
  ]
}