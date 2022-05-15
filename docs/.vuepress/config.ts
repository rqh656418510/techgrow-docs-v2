import { navbar, sidebar } from './configs'
const { searchPlugin } = require('@vuepress/plugin-search')
const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {

  // 基础配置
  base: '/v2/',
  lang: 'zh-CN',
  title: 'TechGrow 开放平台',
  description: 'TechGrow 开放平台的官方中文文档',
  head: [
    ['meta', { name: 'application-name', content: 'TechGrow 开放平台' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'TechGrow 开放平台' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '30x30', href: `/images/icons/favicon-30x30.png` }]
  ],

  // 默认主题配置
  theme: defaultTheme({
    editLinks: true,
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
    toggleDarkMode: '切换夜间模式',
    notFound: ['这是一个 404 页面'],
    openInNewWindow: '在新窗口打开',
    editLinkText: '在 GitHub 上编辑此页'
  }),

  // 插件配置
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '',
        }
      }
    })
  ],
}