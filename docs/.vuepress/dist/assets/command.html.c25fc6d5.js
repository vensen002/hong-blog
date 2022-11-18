import{_ as a,o as e,c as n,a as s}from"./app.9f273a3c.js";const i="/images/linux/command/ls-l.png",l="/images/linux/command/grep.png",c="/images/linux/command/grep+管道符.png",d="/images/linux/command/which.png",o="/images/linux/command/echo.png",r={},t=s(`<h1 id="linux-常用命令" tabindex="-1"><a class="header-anchor" href="#linux-常用命令" aria-hidden="true">#</a> Linux 常用命令</h1><h2 id="命令基础格式" tabindex="-1"><a class="header-anchor" href="#命令基础格式" aria-hidden="true">#</a> 命令基础格式</h2><p><code>command [-options] [parameter]</code></p><ul><li><code>command</code>: 命令本身</li><li><code>-options</code>: [可选，非必填]命令的一些选项，可以通过选项控制命令的行为细节</li><li><code>parameter</code>: [可选，非必填]命令的参数，多数用于命令的指向目标等</li></ul><blockquote><p>[] 在语法中表示可选</p></blockquote><h2 id="常用处理目录" tabindex="-1"><a class="header-anchor" href="#常用处理目录" aria-hidden="true">#</a> 常用处理目录</h2><ul><li><code>ls</code>(list files): 列出目录及文件名</li><li><code>cd</code>(change directory): 切换目录</li><li><code>pwd</code>(print work directory): 显示目录及文件名</li><li><code>mkdir</code>(make directory): 创建一个新的目录</li><li><code>rmdir</code>(remove directory): 删除一个空的目录</li><li><code>cp</code>(copy file): 复制文件或目录</li><li><code>rm</code>(remove): 删除文件或目录</li><li><code>mv</code>(move file): 移动文件与目录，或修改文件与目录的名称</li></ul><h3 id="ls-列出目录" tabindex="-1"><a class="header-anchor" href="#ls-列出目录" aria-hidden="true">#</a> ls (列出目录)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token punctuation">[</span>-a <span class="token parameter variable">-d</span> <span class="token parameter variable">-l</span> -h<span class="token punctuation">]</span> <span class="token punctuation">[</span>Linux路径<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-a</code>: all, 列出全部文件，包括隐藏文件(以<code>.</code>开头的文件)</li><li><code>-d</code>: 仅列出目录本身，而不是列出目录内的文件数据</li><li><code>-l</code>: 以列表形式列出，包含文件的属性与权限等等数据 <img src="`+i+`" alt="ls -l"></li><li><code>-h</code>: 易于阅读的形式，列出文件大小，如 K、M、G; 必须搭配<code>-l</code>一起使用</li></ul><h3 id="cd-切换目录" tabindex="-1"><a class="header-anchor" href="#cd-切换目录" aria-hidden="true">#</a> cd (切换目录)</h3><p><code>cd</code>是Change Directory的缩写，这是用来变换工作目录的命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">[</span>相对路径或绝对路径<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>~</code>:   表示 home 目录</li><li><code>.</code>:   表示 当前 目录</li><li><code>..</code>: 表示 上一级 目录</li><li><strong>绝对路径</strong>: 以根目录为起点，路径描述以<code>/</code>开头</li><li><strong>相对路径</strong>: 以当前目录为起点，路径描述不由<code>/</code>开头</li></ul><h3 id="pwd-显示目前所在的目录" tabindex="-1"><a class="header-anchor" href="#pwd-显示目前所在的目录" aria-hidden="true">#</a> pwd (显示目前所在的目录)</h3><p>pwd 是 Print Working Directory 的缩写，也就是显示当前工作目录的命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">pwd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mkdir-创建新目录" tabindex="-1"><a class="header-anchor" href="#mkdir-创建新目录" aria-hidden="true">#</a> mkdir (创建新目录)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token punctuation">[</span>-mp<span class="token punctuation">]</span> 目录名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-m</code>：配置文件的权限喔！直接配置，不需要看默认权限 (umask) 的脸色～</li><li><code>-p</code>：帮助你直接将所需要的目录(包含上一级目录)递归创建起来！</li></ul><h3 id="rmdir-删除空的目录" tabindex="-1"><a class="header-anchor" href="#rmdir-删除空的目录" aria-hidden="true">#</a> rmdir (删除空的目录)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">rmdir</span> <span class="token punctuation">[</span>-p<span class="token punctuation">]</span> 目录名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-p</code>：从该目录起，一次删除多级空目录</li></ul><h3 id="cp-复制文件或目录" tabindex="-1"><a class="header-anchor" href="#cp-复制文件或目录" aria-hidden="true">#</a> cp (复制文件或目录)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> <span class="token punctuation">[</span>-a <span class="token parameter variable">-i</span> -r<span class="token punctuation">]</span> <span class="token builtin class-name">source</span> destination
<span class="token function">cp</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> source1 source2 source3 <span class="token punctuation">..</span>. diretory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-a</code>：相当於 -pdr 的意思，至於 pdr 请参考下列说明；(常用)</li><li><code>-d</code>：若来源档为链接档的属性(link file)，则复制链接档属性而非文件本身；</li><li><code>-i</code>：若目标档(destination)已经存在时，在覆盖时会先询问动作的进行(常用)</li><li><code>-p</code>：连同文件的属性一起复制过去，而非使用默认属性(备份常用)；</li><li><code>-r</code>：递归持续复制，用於目录的复制行为；(常用)</li></ul><h3 id="rm-移除文件或目录" tabindex="-1"><a class="header-anchor" href="#rm-移除文件或目录" aria-hidden="true">#</a> rm (移除文件或目录)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token punctuation">[</span>-fir<span class="token punctuation">]</span> 文件或目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-f</code>：就是 force 的意思，忽略不存在的文件，不会出现警告信息；</li><li><code>-i</code>：互动模式，在删除前会询问使用者是否动作</li><li><code>-r</code>：递归删除啊！最常用在目录的删除了！这是非常危险的选项！！！</li></ul><h3 id="mv-移动文件与目录-或修改名称" tabindex="-1"><a class="header-anchor" href="#mv-移动文件与目录-或修改名称" aria-hidden="true">#</a> mv (移动文件与目录，或修改名称)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mv</span> <span class="token punctuation">[</span>-fiu<span class="token punctuation">]</span> <span class="token builtin class-name">source</span> destination
<span class="token function">mv</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> source1 source2 source3 <span class="token punctuation">..</span>. diretory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-f</code>：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；</li><li><code>-i</code>：若目标文件 (destination) 已经存在时，就会询问是否覆盖！</li><li><code>-u</code>：若目标文件已经存在，且 source 比较新，才会更新 (update)</li></ul><h2 id="文件内容查看" tabindex="-1"><a class="header-anchor" href="#文件内容查看" aria-hidden="true">#</a> 文件内容查看</h2><p>Linux系统中使用以下命令来查看文件的内容：</p><ul><li><code>cat</code>：由第一行开始显示文件内容</li><li><code>tac</code>：从最后一行开始显示，可以看出 tac 是 cat 的倒着写！</li><li><code>nl</code>：显示的时候，顺道输出行号！</li><li><code>more</code>：一页一页的显示文件内容</li><li><code>less</code>：与 more 类似，但是比 more 更好的是，他可以往前翻页！</li><li><code>head</code>：只看头几行</li><li><code>tail</code>：只看尾巴几行</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 基本都用这种语法打开就可以打开文件
<span class="token builtin class-name">command</span> 文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="more" tabindex="-1"><a class="header-anchor" href="#more" aria-hidden="true">#</a> more</h3><p>一页一页翻动 在 more 这个程序的运行过程中，你有几个按键可以按的：</p><ul><li><strong>空白键 (space)</strong>：代表向下翻一页；</li><li><strong>Enter</strong>：代表向下翻『一行』；</li><li><strong>/字串</strong>：代表在这个显示的内容当中，向下搜寻『字串』这个关键字；</li><li><strong>:f</strong>：立刻显示出档名以及目前显示的行数；</li><li><strong>q</strong>：代表立刻离开 more ，不再显示该文件内容。</li><li><strong>b 或 [ctrl]-b</strong>：代表往回翻页，不过这动作只对文件有用，对管线无用。</li></ul><h3 id="head-与-tail" tabindex="-1"><a class="header-anchor" href="#head-与-tail" aria-hidden="true">#</a> head 与 tail</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 取出文件前面几行
<span class="token function">head</span> <span class="token punctuation">[</span>-n number<span class="token punctuation">]</span> 文件 
// 取出文件后面几行
<span class="token function">tail</span> <span class="token punctuation">[</span>-n number -f<span class="token punctuation">]</span> 文件 
// <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">5</span> 文件 <span class="token operator">&lt;=</span><span class="token operator">=</span> 展示文件的前5行内容
// <span class="token function">tail</span> <span class="token parameter variable">-5</span> 文件 <span class="token operator">&lt;=</span><span class="token operator">=</span> 展示文件的最后5行内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-n</code>：后面接数字，代表显示几行的意思</li><li><code>-f</code>：表示持续侦测后面所接的档名，要等到按下[ctrl]-c才会结束tail的侦测</li><li><code>head</code>和 <code>tail</code>不指定行数时，默认展示10行内容</li></ul><h2 id="其他常用命令" tabindex="-1"><a class="header-anchor" href="#其他常用命令" aria-hidden="true">#</a> 其他常用命令</h2><h3 id="touch-创建文件" tabindex="-1"><a class="header-anchor" href="#touch-创建文件" aria-hidden="true">#</a> touch (创建文件)</h3><p>touch 命令无选项，参数必填，表示要创建的文件路径<br> 相对、绝对、特殊路径符均可以使用，注意不能创建目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> Linux路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="grep-过滤内容" tabindex="-1"><a class="header-anchor" href="#grep-过滤内容" aria-hidden="true">#</a> grep (过滤内容)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token punctuation">[</span>-n<span class="token punctuation">]</span> 关键字 文件路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-n</code>：在结果中显示匹配的行的行号</li><li><strong>关键字</strong>：过滤的关键字，比较复杂的内容用<code>&quot;&quot;</code>包围起来</li><li><strong>文件路径</strong>：表示要过滤内容的文件路径 <img src="`+l+`" alt="grep-n"></li></ul><h3 id="wc-数量统计" tabindex="-1"><a class="header-anchor" href="#wc-数量统计" aria-hidden="true">#</a> wc (数量统计)</h3><p>可以通过<code>wc</code>命令统计文件的行数、单词数量等</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wc</span> <span class="token punctuation">[</span>-c <span class="token parameter variable">-m</span> <span class="token parameter variable">-l</span> -w<span class="token punctuation">]</span> 文件路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-c</code>：统计<strong>bytes</strong>数量</li><li><code>-m</code>：统计<strong>字符</strong>数量</li><li><code>-l</code>：统计<strong>行数</strong>数量</li><li><code>-w</code>：统计<strong>单词</strong>数量</li></ul><h3 id="管道符" tabindex="-1"><a class="header-anchor" href="#管道符" aria-hidden="true">#</a> | (管道符)</h3><p>将管道符左边命令的<strong>结果</strong>，作为右边命令的<strong>输入</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 与 <span class="token function">grep</span> 搭配使用
<span class="token function">ls</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">bash</span>
// 与 <span class="token function">wc</span> 搭配使用
<span class="token function">ls</span> <span class="token parameter variable">-l</span> /usr/bin <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+`" alt="grep + |"></p><blockquote><p>| 还可以重复嵌套使用</p></blockquote><h3 id="which-查找命令的程序文件" tabindex="-1"><a class="header-anchor" href="#which-查找命令的程序文件" aria-hidden="true">#</a> which (查找命令的程序文件)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">which</span> <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+d+`" alt="which"></p><h3 id="find-查找指定文件" tabindex="-1"><a class="header-anchor" href="#find-查找指定文件" aria-hidden="true">#</a> find (查找指定文件)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 按照文件名查找
<span class="token function">find</span> 起始路径 <span class="token parameter variable">-name</span> <span class="token string">&quot;文件名&quot;</span>
// 按文件大小查找
<span class="token function">find</span> 起始路径 <span class="token parameter variable">-size</span> +<span class="token operator">|</span>-n<span class="token punctuation">[</span>kMG<span class="token punctuation">]</span>
// <span class="token function">find</span> / <span class="token parameter variable">-size</span> +100M       <span class="token operator">&lt;=</span><span class="token operator">=</span> 从根目录查找大于100M的文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>+ -</code>：大于小于</li><li><code>n</code>：文件大小数字</li><li><code>kMG</code>：文件大小单位；k：kb，M：MB，G：GB</li></ul><h3 id="echo-与-反引号" tabindex="-1"><a class="header-anchor" href="#echo-与-反引号" aria-hidden="true">#</a> echo 与 反引号 \`</h3><p><code>echo</code>相当于Java中的<code>print</code>打印内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> hello linux
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">pwd</span><span class="token variable">\`</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>echo</code> 与<strong>反引号\`\`</strong> 结合使用,反引号内的内容表示命令执行,再把执行结果打印出来 <img src="`+o+`" alt="ehco"></li></ul><h3 id="重定向符号" tabindex="-1"><a class="header-anchor" href="#重定向符号" aria-hidden="true">#</a> &gt; &gt;&gt; (重定向符号)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token operator">&gt;</span> text.txt
<span class="token builtin class-name">command</span> <span class="token operator">&gt;&gt;</span> text.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>&gt;</code>：将左侧命令的结果，<strong>覆盖</strong>写入到符号右侧指定的文件中</li><li><code>&gt;&gt;</code>：将左侧命令的结果，<strong>追加</strong>写入到符号右侧指定的文件中</li></ul>`,71),p=[t];function u(h,m){return e(),n("div",null,p)}const v=a(r,[["render",u],["__file","command.html.vue"]]);export{v as default};