import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/': [
    {
      text: '公众号引流',
      children: ['/wechat/common/', '/wechat/hexo/', '/wechat/vuepress/', '/wechat/vuepress2/']
    }
  ],
  '/wechat/common': [
    {
      text: '公众号引流',
      children: ['/wechat/common/', '/wechat/hexo/', '/wechat/vuepress/', '/wechat/vuepress2/']
    }
  ],
  '/wechat/hexo': [
    {
      text: '公众号引流',
      children: ['/wechat/common/', '/wechat/hexo/', '/wechat/vuepress/', '/wechat/vuepress2/']
    }
  ],
  '/wechat/vuepress': [
    {
      text: '公众号引流',
      children: ['/wechat/common/', '/wechat/hexo/', '/wechat/vuepress/', '/wechat/vuepress2/']
    }
  ],
  '/demo': [
    {
      text: '在线演示',
      children: ['']
    }
  ],
  '/contact': [
    {
      text: '联系方式',
      children: []
    }
  ]
}