import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

import navbar from './config/navbar'
import sidebar from './config/sidebar'

export default defineUserConfig({
  // base: '/',  // 基础路径, type: string 默认值: '/'
  lang: 'zh-CN', // lang 站点语言 type: string  默认值: en-US
  title: '鸿笔记', // title 站点标题 type: string 默认值: ''
  description: '鸿笔记，我会为大家提供免费编程知识，逐渐丰富内容', // description 站点描述 type: string 默认值: ''
  /**
   * head <head>标签里增加新的标签 type: HeadConfig[] 默认值: []
   */
  head: [
    ['link', { rel: 'icon', href: '/images/hero.png' }]
  ],
  // 主题配置
  theme: defaultTheme({
    // 导航栏配置
    navbar,
    // 侧边栏配置
    sidebar,
    sidebarDepth: 2,

    lastUpdatedText: '更新',
    contributorsText: '贡献',
    backToHome: '返回首页',

  }),
  // 指定页面文件的 Patterns 。
  pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules'],
  // host: 'localhost', //指定开发服务器的主机名。
  // port: 8080, // 指定开发服务器的端口号。
  // open: false, // 开发服务器启动后打开浏览器。
})