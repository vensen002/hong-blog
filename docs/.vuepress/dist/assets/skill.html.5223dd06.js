import{_ as e,o as l,c as i,a as o}from"./app.9f273a3c.js";const c="/images/linux/skill/快捷搜索历史命令.png",a="/images/linux/skill/切换root.png",r={},d=o('<h1 id="linux-快捷小技巧" tabindex="-1"><a class="header-anchor" href="#linux-快捷小技巧" aria-hidden="true">#</a> Linux 快捷小技巧</h1><h2 id="强制停止" tabindex="-1"><a class="header-anchor" href="#强制停止" aria-hidden="true">#</a> 强制停止</h2><ul><li><code>ctrl + c</code>: 强制停止当前运行，或错误命令</li></ul><h2 id="退出或登出" tabindex="-1"><a class="header-anchor" href="#退出或登出" aria-hidden="true">#</a> 退出或登出</h2><ul><li><code>ctrl + d</code>: 退出账户登录或者退出某些特定程序的专属页面</li></ul><blockquote><p>用域 vi/vim 不能退出</p></blockquote><h2 id="历史命令" tabindex="-1"><a class="header-anchor" href="#历史命令" aria-hidden="true">#</a> 历史命令</h2><ul><li><code>history</code>: 查看历史输入命令</li><li><code>history | grep xx</code>: 根据<code>xx</code>来过滤历史命令</li><li><code>!命令前缀</code>:快速自动执行上一次匹配前缀的命令 <ul><li>只能用于最近5到6行的命令</li></ul></li><li><code>ctrl + r</code>: 输入内容去匹配历史命令<br><img src="'+c+'" alt="快捷搜索历史命令"><ul><li>回车键，直接执行命令</li><li>左右键，可以编辑命令</li></ul></li></ul><h2 id="光标移动快捷键" tabindex="-1"><a class="header-anchor" href="#光标移动快捷键" aria-hidden="true">#</a> 光标移动快捷键</h2><ul><li><code>ctrl + a</code>: 跳到命令开头</li><li><code>ctrl + e</code>: 跳到命令尾部</li><li><code>ctrl + 键盘方向左键</code>: 向左跳一个单词</li><li><code>ctrl + 键盘方向右键</code>: 向右跳一个单词</li></ul><h2 id="清屏" tabindex="-1"><a class="header-anchor" href="#清屏" aria-hidden="true">#</a> 清屏</h2><ul><li><code>ctrl + l</code>: 清空终端屏幕内容</li><li><code>clear</code>: 通过clear命令清屏</li></ul><h2 id="快速切换到root用户" tabindex="-1"><a class="header-anchor" href="#快速切换到root用户" aria-hidden="true">#</a> 快速切换到root用户</h2><ul><li><code>su root</code>: 输入root用户的密码就可以切换到root权限了 <img src="'+a+'" alt="快速切换root"></li></ul>',14),t=[d];function h(n,s){return l(),i("div",null,t)}const _=e(r,[["render",h],["__file","skill.html.vue"]]);export{_ as default};