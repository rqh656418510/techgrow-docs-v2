import { navbar, sidebar } from './configs'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from'@vuepress/theme-default'
import { sitemapPlugin } from"vuepress-plugin-sitemap2";
import { copyCodePlugin } from'vuepress-plugin-copy-code2'
import { baiduSeoPlugin } from'vuepress-plugin-baidu-seo-next'
import { readmorePlugin } from'vuepress-plugin-readmore-popular-next'

module.exports = {

  // 基础配置
  base: '/v2/',
  head: [
    ['meta', { 'http-equiv': 'expires', content: '0' }],
    ['meta', { 'http-equiv': 'pragram', content: 'no-cache' }],
    ['meta', { 'http-equiv': 'cache-control', content: 'no-cache, no-store, must-revalidate' }],
    ['meta', { name: 'application-name', content: 'TechGrow 官方文档' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'TechGrow 官方文档' }],
    ['link', { rel: 'icon', href: 'favicon.ico' }]
  ],

  // 多语言配置
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'TechGrow 官方文档',
      description: '专注于自媒体引流的免费开放平台。'
    }
  },

  // 主题配置
  theme: defaultTheme({
    docsDir: 'docs',
    docsBranch: 'main',
    repo: 'rqh656418510/techgrow-docs-v2',
    navbar: navbar.zh,
    sidebar: sidebar.zh,
    tip: '提示',
    danger: '警告',
    warning: '注意',
    backToHome: '返回首页',
    toggleSidebar: '切换侧边栏',
    contributorsText: '贡献者',
    lastUpdatedText: '上次更新',
    toggleColorMode: '切换夜间模式',
    notFound: ['这是一个 404 页面'],
    openInNewWindow: '在新窗口打开',
    editLinkText: '在 GitHub 上编辑此页'
  }),
  
  // 插件配置
  plugins: [
    copyCodePlugin({
      duration: 1000,
      showInMobile: true
    }),
    searchPlugin({
      locales: {
        '/': {
          placeholder: '',
        }
      }
    }),
    sitemapPlugin({
      excludeUrls: ['/404.html'],
      hostname: 'https://docs.techgrow.cn',
    }),
    baiduSeoPlugin({
      ignoreLocal: true,
      hm: '43c937a5b15d4206e725c4d25d1168d2'
    }),
    readmorePlugin({
      // 已申请的博客 ID
      blogId: '68262-0332741148692-238',
      // 已申请的微信公众号名称
      name: '全栈技术驿站',
      // 已申请的微信公众号回复关键词
      keyword: 'VuePress2',
      // 已申请的微信公众号二维码链接
      qrcode: 'https://www.techgrow.cn/img/wx_mp_qr.png',
      // 文章内容的 JS 选择器，若使用的不是官方默认主题，则需要根据第三方的主题来设置
      selector: 'div.theme-default-content',
      // 自定义的 JS 资源链接，可用于 CDN 加速
      libUrl: 'https://qiniu.techgrow.cn/readmore/dist/readmore.js',
      // 自定义的 CSS 资源链接，可用于适配不同风格的博客
      cssUrl: 'https://docs.techgrow.cn/v2/css/vuepress2.css',
      // 文章排除添加引流工具的 URL 规则，支持使用路径、通配符、正则表达式的匹配规则
      excludes: { strExp: [], regExp: ['^(?!\/v2/wechat/demo).*'] },
      // 是否反转 URL 排除规则的配置，即只有符合排除规则的文章才会添加引流工具
      reverse: false,
      // 移动端的页面是否添加微信公众号引流工具
      allowMobile: true,
      // 文章内容的预览高度(例如 300)
      height: 'auto',
      // 文章解锁后凭证的有效天数
      expires: 365,
      // 定时校验凭证有效性的时间间隔（秒）
      interval: 30,
      // 每篇文章随机添加引流工具的概率，有效范围在 0.1 ~ 1 之间，1 则表示所有文章默认都自动添加引流工具
      random: 1,
    })
  ],

  // Markdown配置
  markdown: {
    code: {
      lineNumbers: false
    }
  }

}