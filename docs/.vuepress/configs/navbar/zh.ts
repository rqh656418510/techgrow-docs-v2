import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [{
  text: '首页',
  link: '/README.md'
},
{
  text: '公众号导流',
  children: [{
    text: '主流博客',
    link: '/wechat/common/README.md'
  },
  {
    text: 'Hexo 博客',
    link: '/wechat/hexo/README.md'
  },
  {
    text: 'VuePress 博客',
    link: '/wechat/vuepress/README.md'
  }]
},
{
  text: '开源插件',
  children: [{
    text: 'Hexo 导流插件',
    link: 'https://github.com/rqh656418510/hexo-readmore',
  },
  {
    text: 'VuePress 导流插件',
    link: 'https://github.com/rqh656418510/vuepress-plugin-readmore-popular',
  }]
},
{
  text: '了解更多',
  children: [{
    text: '在线演示',
    link: '/demo/README.md'
  },
  {
    text: '联系方式',
    link: '/contact/README.md'
  }]
}]