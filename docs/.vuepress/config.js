import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

import navbar from './config/navbar'
import sidebar from './config/sidebar'

export default defineUserConfig({
  /**
   * base 部署站点的基础路径, type: string 默认值: '/'
   */
  // base: '/', 
  /**
   * lang 站点语言 type: string  默认值: en-US
   */
  lang: 'zh-CN',
  /**
   * title 站点标题 type: string 默认值: ''
   */
  title: '鸿博客',
  /**
   * description 站点描述 type: string 默认值: ''
   */
  description: '鸿博客，我会为大家提供免费编程知识，逐渐丰富内容',
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
  }),

})