---

---
# 快速创建工程

这是我边学边写的项目,vuepress 可以快速的搭建一个笔记博客

## 开发环境

vue3 + vuepress2.x

## 依赖环境
* 安装 [Node.js v14.18.0+](https://nodejs.org/zh-cn/) 以上版本

## 创建工程

* **步骤1:** 初始化项目
``` sh
// 创建项目
mkdir 项目名 // 创建项目父文件夹
cd 项目名 // 进入项目

// 初始化项目
git init
npm init

// 安装依赖
npm install -D vuepress@next

// 添加scripts -> package.json 
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}

// 新建 .gitignore 文件,并输入以下内容;不要用 sh 生成的编码不是utf-8,会乱码/无效
node_modules/
.temp
.cache

// 根目录创建 docs 文件夹
mkdir docs
echo '# Hello VuePress' > docs/README.md //这里改为手动创建并输入,原因同上

// 运行第一次
npm run docs:dev 
```
* **步骤2:**完善项目结构
> 项目结构
``` text
├─ docs                   <--- 存放你的 .md 文件
│  ├─ .vuepress           <--- 存放VuePress 相关的文件
│  │  ├─ config           <--- 配置文件夹，单独存放导航栏和侧边栏
│  │  │  ├─ navbar.js     <--- 导航栏配置
│  │  │  └─ sidebar.js    <--- 侧边栏配置
│  │  ├─ dist             <--- 不用创建，build时会自动创建
│  │  ├─ public           <--- 公共资源文件夹
│  │  │  └─ images        <--- 图片文件
│  │  ├─ client.js        <--- 客户端配置
│  │  └─ config.js        <--- 总局配置
│  └─ README.md           <--- 项目首页，README.md / index.md
├─ .gitignore             <--- git全局忽略配置
└─ package.json           <--- 不介绍了
```

## 配置文件


