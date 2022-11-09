import{_ as p,r as t,o as i,c as l,b as n,d as s,e as o,a}from"./app.4f298130.js";const c={},r=a('<h1 id="快速创建工程" tabindex="-1"><a class="header-anchor" href="#快速创建工程" aria-hidden="true">#</a> 快速创建工程</h1><p>这是我边学边写的项目,vuepress 可以快速的搭建一个笔记博客</p><h2 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h2><p>vue3 + vuepress2.x</p><h2 id="依赖环境" tabindex="-1"><a class="header-anchor" href="#依赖环境" aria-hidden="true">#</a> 依赖环境</h2>',5),d={href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},u=a(`<h2 id="创建工程" tabindex="-1"><a class="header-anchor" href="#创建工程" aria-hidden="true">#</a> 创建工程</h2><ul><li><strong>步骤1:</strong> 初始化项目</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 创建项目
<span class="token function">mkdir</span> 项目名 // 创建项目父文件夹
<span class="token builtin class-name">cd</span> 项目名 // 进入项目

// 初始化项目
<span class="token function">git</span> init
<span class="token function">npm</span> init

// 安装依赖
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress@next

// 添加scripts -<span class="token operator">&gt;</span> package.json 
<span class="token punctuation">{</span>
  <span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;docs:dev&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span>,
    <span class="token string">&quot;docs:build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

// 新建 .gitignore 文件,并输入以下内容<span class="token punctuation">;</span>不要用 <span class="token function">sh</span> 生成的编码不是utf-8,会乱码/无效
node_modules/
.temp
.cache

// 根目录创建 docs 文件夹
<span class="token function">mkdir</span> docs
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md //这里改为手动创建并输入,原因同上

// 运行第一次
<span class="token function">npm</span> run docs:dev 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>**步骤2:**完善项目结构</li></ul><blockquote><p>项目结构</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs                   &lt;--- 存放你的 .md 文件
│  ├─ .vuepress           &lt;--- 存放VuePress 相关的文件
│  │  ├─ config           &lt;--- 配置文件夹，单独存放导航栏和侧边栏
│  │  │  ├─ navbar.js     &lt;--- 导航栏配置
│  │  │  └─ sidebar.js    &lt;--- 侧边栏配置
│  │  ├─ dist             &lt;--- 不用创建，build时会自动创建
│  │  ├─ public           &lt;--- 公共资源文件夹
│  │  │  └─ images        &lt;--- 图片文件
│  │  ├─ client.js        &lt;--- 客户端配置
│  │  └─ config.js        &lt;--- 总局配置
│  └─ vue                 &lt;--- 存放 vue 相关的文章    --- 系自己创建
│  │  └─ vuepress         &lt;--- 存放 vuepress 相关文章 
│  │  │  └─ index.md      &lt;--- vuepress 的首页
│  │  └─ vueSidebar.js    &lt;--- vue 下全局侧边栏配置
│  └─ README.md           &lt;--- 项目首页，README.md / index.md
├─ .gitignore             &lt;--- git全局忽略配置
└─ package.json           &lt;--- 不介绍了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><ul><li>config.js</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span>

<span class="token keyword">import</span> navbar <span class="token keyword">from</span> <span class="token string">&#39;./config/navbar&#39;</span>
<span class="token keyword">import</span> sidebar <span class="token keyword">from</span> <span class="token string">&#39;./config/sidebar&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * base 部署站点的基础路径, type: string 默认值: &#39;/&#39;
   */</span>
  <span class="token comment">// base: &#39;/&#39;, </span>
  <span class="token doc-comment comment">/**
   * lang 站点语言 type: string  默认值: en-US
   */</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * title 站点标题 type: string 默认值: &#39;&#39;
   */</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;鸿博客&#39;</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * description 站点描述 type: string 默认值: &#39;&#39;
   */</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;鸿博客，我会为大家提供免费编程知识，逐渐丰富内容&#39;</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * head &lt;head&gt;标签里增加新的标签 type: HeadConfig[] 默认值: []
   */</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;/images/hero.png&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 主题配置</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 导航栏配置</span>
    navbar<span class="token punctuation">,</span>
    <span class="token comment">// 侧边栏配置</span>
    sidebar<span class="token punctuation">,</span>
    <span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>navbar.js</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;前端&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> 
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vue&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vuepress&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/vue/vuepress/index.md&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">activeMatch</span><span class="token operator">:</span> <span class="token string">&#39;^/vuepress/&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;工具箱&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;在线编辑&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;图片压缩&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://tinypng.com/&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;在线服务&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;阿里云&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://www.aliyun.com/&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;腾讯云&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://cloud.tencent.com/&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;博客指南&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;掘金&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://juejin.im/&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;CSDN&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://blog.csdn.net/&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>sidebar.js</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> vueSidebar <span class="token keyword">from</span> <span class="token string">&#39;../../vue/vueSidebar&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;/vue/&#39;</span><span class="token operator">:</span> vueSidebar<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>vueSidebar.js</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vuepress&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/vue/vuepress/index.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此项目结构已完成，可以做你自己想做的内容了</p>`,16);function v(k,m){const e=t("ExternalLinkIcon");return i(),l("div",null,[r,n("ul",null,[n("li",null,[s("安装 "),n("a",d,[s("Node.js v14.18.0+"),o(e)]),s(" 以上版本")])]),u])}const y=p(c,[["render",v],["__file","index.html.vue"]]);export{y as default};
