export default [
  {
    text: '前端',
    children: [
      { 
        text: 'Vue',
        children: [
          {
            text: 'TypeScript',
            link: '/vue/typescript/index.md',
            activeMatch: '^/typescript/'
          },
          {
            text: 'Vuepress',
            link: '/vue/vuepress/index.md',
            activeMatch: '^/vuepress/'
          }
        ]
      }
    ]
  },
  {
    text: '后端',
    children: [
      { 
        text: 'Java',
        children: [
          {
            text: 'Java 基础',
            link: '/java/base/index.md',
            activeMatch: '^/java/base'
          }
        ]
      }
    ]
  },
  {
    text: 'Linux',
    children: [{
      text: '目录结构',
      link: '/linux/sys-contents.md'
    },{
      text: '基础命令',
      link: '/linux/command.md'
    },{
      text: 'Linux 小技巧',
      link: '/linux/skill.md'
    }]
  },
  {
    text: '工具箱',
    children: [{
        text: 'Markdown 语法',
        link: 'https://www.runoob.com/markdown/md-tutorial.html'
      },{
        text: '在线编辑',
        children: [{
          text: '图片压缩',
          link: 'https://tinypng.com/'
        }]
      },
      {
        text: '在线服务',
        children: [{
            text: '阿里云',
            link: 'https://www.aliyun.com/'
          },
          {
            text: '腾讯云',
            link: 'https://cloud.tencent.com/'
          }
        ]
      },
      {
        text: '博客指南',
        children: [{
            text: '掘金',
            link: 'https://juejin.im/'
          },
          {
            text: 'CSDN',
            link: 'https://blog.csdn.net/'
          }
        ]
      }
    ]
  }
]


