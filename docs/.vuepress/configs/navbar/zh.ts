import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [{
		text: '公众号引流教程',
		children: [{
				text: '主流博客',
				link: '/wechat/tutorial/common/'
			},
			{
				text: 'Hexo 博客',
				link: '/wechat/tutorial/hexo/'
			},
			{
				text: 'VuePress v1 博客',
				link: '/wechat/tutorial/vuepress/'
			},
			{
				text: 'VuePress v2 博客',
				link: '/wechat/tutorial/vuepress2/'
			}
		]
	},
	{
		text: '开源引流插件',
		children: [{
				text: 'Hexo 引流插件',
				link: 'https://github.com/rqh656418510/hexo-readmore',
			},
			{
				text: 'VuePress v1 引流插件',
				link: 'https://github.com/rqh656418510/vuepress-plugin-readmore-popular',
			},
			{
				text: 'VuePress v2 引流插件',
				link: 'https://github.com/rqh656418510/vuepress-plugin-readmore-popular-next',
			}
		]
	},
	{
		text: '开放引流 API',
		children: [{
				text: 'OpenAPI 接口',
				link: '/wechat/openapi/api/'
			},
			{
				text: 'Java 开源项目',
				link: '/wechat/openapi/java/'
			}
		]
	},
	{
		text: '在线引流演示',
		children: [{
				text: 'Hexo 博客',
				link: 'https://www.techgrow.cn/posts/52f22f9b.html'
			},
			{
				text: 'VuePress v1 博客',
				link: 'https://docs.techgrow.cn/v1/wechat/demo/'
			},
			{
				text: 'VuePress v2 博客',
				link: 'https://docs.techgrow.cn/v2/wechat/demo/'
			}
		]
	},
	{
		text: '获取帮助',
		children: [{
			text: '联系方式',
			link: '/contact/'
		}]
	},
	{
		text: '官方平台',
		link: 'https://open.techgrow.cn/'
	}
]