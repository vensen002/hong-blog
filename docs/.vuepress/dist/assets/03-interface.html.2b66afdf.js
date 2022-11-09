import{_ as n,o as s,c as a,a as e}from"./app.4f298130.js";const t={},p=e(`<h1 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h1><ul><li>什么是接口？<br> 接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现， 然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法</li><li>语法格式: <code>interface interface_name {} </code></li></ul><h2 id="接口的基本使用" tabindex="-1"><a class="header-anchor" href="#接口的基本使用" aria-hidden="true">#</a> 接口的基本使用</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token comment">// 接口的基本使用</span>
<span class="token comment">// 注意：这里用 &#39;;&#39; 进行隔断，不是 &#39;,&#39; </span>
<span class="token keyword">interface</span> <span class="token class-name">IFullName</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> goddassName<span class="token operator">:</span> IFullName <span class="token operator">=</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> <span class="token string">&#39;邱&#39;</span><span class="token punctuation">,</span>
  lastName<span class="token operator">:</span> <span class="token string">&#39;淑贞&#39;</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>goddassName<span class="token punctuation">.</span>firstName<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>goddassName<span class="token punctuation">.</span>lastName<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">{</span>firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">}</span><span class="token operator">:</span> IFullName<span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(&#39;我的名字是 &#39; + firstName + lastName)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">我的名字是 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">sayName</span><span class="token punctuation">(</span>goddassName<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可选属性-与-readonly" tabindex="-1"><a class="header-anchor" href="#可选属性-与-readonly" aria-hidden="true">#</a> 可选属性 与 readonly</h2><ul><li>可选属性使用： ？</li><li>只读属性使用: readonly</li><li>readonly与const的区别: 做为变量使用的话用 const，若做为属性则使用readonly</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> 

<span class="token comment">// 可选属性 使用?来进行修饰</span>

<span class="token keyword">interface</span> <span class="token class-name">IFullName</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> goddassName<span class="token operator">:</span> IFullName <span class="token operator">=</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> <span class="token string">&#39;邱&#39;</span><span class="token punctuation">,</span>
  lastName<span class="token operator">:</span> <span class="token string">&#39;淑贞&#39;</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>goddassName<span class="token punctuation">.</span>firstName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>goddassName<span class="token punctuation">.</span>lastName<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// readonly 只读属性</span>

<span class="token keyword">interface</span> <span class="token class-name">IInfo</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> uname<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token keyword">readonly</span> uage<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> info<span class="token operator">:</span> IInfo <span class="token operator">=</span> <span class="token punctuation">{</span>
  uname<span class="token operator">:</span> <span class="token string">&#39;王伟&#39;</span><span class="token punctuation">,</span>
  uage<span class="token operator">:</span> <span class="token number">12</span>
<span class="token punctuation">}</span>
<span class="token comment">// info.uage = 18; //error</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>ReadonlyArray&lt;T&gt;</code>类型，它与<code>Array&lt;T&gt;</code>相似， 只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// ReadonlyArray&lt;T&gt; 只读的数组</span>
<span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> ro<span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> a<span class="token punctuation">;</span>
ro<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span> <span class="token comment">// error!</span>
ro<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// error!</span>
ro<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// error!</span>
a <span class="token operator">=</span> ro<span class="token punctuation">;</span> <span class="token comment">// error!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="索引签名" tabindex="-1"><a class="header-anchor" href="#索引签名" aria-hidden="true">#</a> 索引签名</h2><ul><li>定义: 索引签名用于描述那些&quot;通过索引得到&quot;的类型</li><li>格式: <code>[property: string]: any</code></li></ul><blockquote><p>解释:</p><ul><li><code>property</code>:  用于描述额外的属性名，这里可以自定义，编译器都会通过</li><li><code>: string</code>:  用于描述<code>property</code>的类型，<code>string</code>表示<code>property</code>的类型只能是<code>string</code></li><li><code>: any</code>:       用于描述<code>property</code>值的类型，<code>any</code>表示<code>property</code>的值可以是任何类型</li></ul></blockquote><ul><li>TypeScript支持两种索引签名：字符串和数字。[property: (string | number)]</li><li>同时使用两种类型的索引时，数字索引的返回值必须是字符串索引返回值类型的子类型。</li><li>当使用到对象时，对象的键 number类型 会转成 string类型；100 -&gt; &quot;100&quot;</li><li>当使用了索引，会对接口内其他的属性<code>property</code>进行规范</li></ul><h3 id="基本使用示例" tabindex="-1"><a class="header-anchor" href="#基本使用示例" aria-hidden="true">#</a> 基本使用示例</h3><p>初始数据</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 索引签名 初始数据</span>
<span class="token keyword">interface</span> <span class="token class-name">IFullName</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> <span class="token builtin">string</span>
  lastName<span class="token operator">:</span> <span class="token builtin">string</span> 
  age<span class="token operator">:</span> <span class="token builtin">number</span>
  singName<span class="token operator">:</span> <span class="token builtin">string</span> 
<span class="token punctuation">}</span>
<span class="token comment">// 注意点: 如果使用接口来限定了变量或者形参, 那么在给变量或者形参赋值的时候,多一个或者少一个都不行</span>
<span class="token comment">// 实际开发中往往会出现多或者少的情况，怎么解决？</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>少一个或者少多个属性</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 索引签名 初始数据 添加可选属性</span>
<span class="token keyword">interface</span> <span class="token class-name">IFullName</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> <span class="token builtin">string</span>
  lastName<span class="token operator">:</span> <span class="token builtin">string</span> 
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  singName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> 
<span class="token punctuation">}</span>
<span class="token comment">// 注意点: 如果使用接口来限定了变量或者形参, 那么在给变量或者形参赋值的时候,多一个或者少一个都不行</span>
<span class="token comment">// 实际开发中往往会出现多或者少的情况，怎么解决？</span>

<span class="token comment">// 少一个或者少多个属性</span>
<span class="token comment">// 解决方案: 可选属性</span>
<span class="token keyword">let</span> goddass1<span class="token operator">:</span> IFullName <span class="token operator">=</span> <span class="token punctuation">{</span> firstName<span class="token operator">:</span> <span class="token string">&#39;邱&#39;</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token string">&#39;淑贞&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> goddass2<span class="token operator">:</span> IFullName <span class="token operator">=</span> <span class="token punctuation">{</span> firstName<span class="token operator">:</span> <span class="token string">&#39;邱&#39;</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token string">&#39;淑贞&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">28</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多一个或者多多个属性</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 多一个或者多多个属性</span>
<span class="token comment">// 方案一：使用变量 不推荐使用</span>
<span class="token keyword">let</span> info <span class="token operator">=</span> <span class="token punctuation">{</span> firstName<span class="token operator">:</span> <span class="token string">&#39;邱&#39;</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token string">&#39;淑贞&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span> singName<span class="token operator">:</span> <span class="token string">&#39;赌王&#39;</span><span class="token punctuation">,</span> dance<span class="token operator">:</span> <span class="token string">&#39;兔子舞&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> goddass3<span class="token operator">:</span> IFullName <span class="token operator">=</span> info
<span class="token comment">// goddass3 ==&gt;{&quot;firstName&quot;:&quot;邱&quot;,&quot;lastName&quot;:&quot;淑贞&quot;,&quot;age&quot;:28,&quot;singName&quot;:&quot;赌王&quot;,&quot;dance&quot;:&quot;兔子舞&quot;}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;goddass3 ==&gt;&#39;</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>goddass3<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 方案二：使用类型断言</span>
<span class="token keyword">let</span> goddass4<span class="token operator">:</span> IFullName <span class="token operator">=</span> <span class="token operator">&lt;</span>IFullName<span class="token operator">&gt;</span> <span class="token punctuation">{</span> firstName<span class="token operator">:</span> <span class="token string">&#39;邱&#39;</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token string">&#39;淑贞&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span> singName<span class="token operator">:</span> <span class="token string">&#39;赌王&#39;</span><span class="token punctuation">,</span> dance<span class="token operator">:</span> <span class="token string">&#39;兔子舞&#39;</span> <span class="token punctuation">}</span>
<span class="token comment">// let goddass4: IFullName = { firstName: &#39;邱&#39;, lastName: &#39;淑贞&#39;, age: 28, singName: &#39;赌王&#39;, dance: &#39;兔子舞&#39; } as IFullName</span>
<span class="token comment">// goddass4 ==&gt;{&quot;firstName&quot;:&quot;邱&quot;,&quot;lastName&quot;:&quot;淑贞&quot;,&quot;age&quot;:28,&quot;singName&quot;:&quot;赌王&quot;,&quot;dance&quot;:&quot;兔子舞&quot;}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;goddass4 ==&gt;&#39;</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>goddass4<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 索引签名 解决</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 索引签名 初始数据 添加可选属性 增加索引签名</span>
<span class="token keyword">interface</span> <span class="token class-name">IFullName</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> <span class="token builtin">string</span>
  lastName<span class="token operator">:</span> <span class="token builtin">string</span> 
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  singName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> 
  <span class="token punctuation">[</span>property<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
<span class="token comment">// 注意点: 如果使用接口来限定了变量或者形参, 那么在给变量或者形参赋值的时候,多一个或者少一个都不行</span>

<span class="token comment">// 多一个或者多多个属性</span>
<span class="token comment">// 方案三：使用索引签名</span>
<span class="token keyword">let</span> goddass5<span class="token operator">:</span> IFullName <span class="token operator">=</span> <span class="token punctuation">{</span> firstName<span class="token operator">:</span> <span class="token string">&#39;邱&#39;</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token string">&#39;淑贞&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span> singName<span class="token operator">:</span> <span class="token string">&#39;赌王&#39;</span><span class="token punctuation">,</span> dance<span class="token operator">:</span> <span class="token string">&#39;兔子舞&#39;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 索引签名</span>
<span class="token keyword">interface</span> <span class="token class-name">StringArray</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myArray<span class="token operator">:</span> StringArray<span class="token punctuation">;</span>
myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fred&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> myStr<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> myArray<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// let arr: StringArray = [&#39;123&#39;, 123] // error 这里number类型不能赋给string类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="规责演示示例" tabindex="-1"><a class="header-anchor" href="#规责演示示例" aria-hidden="true">#</a> 规责演示示例</h3><p>同时使用两种类型的索引</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 同时使用两种类型的索引时，数字索引的返回值必须是字符串索引返回值类型的子类型。</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  breed<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!</span>
<span class="token keyword">interface</span> <span class="token class-name">NotOkay</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> Animal<span class="token punctuation">;</span> <span class="token comment">// error</span>
  <span class="token punctuation">[</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> Dog<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当使用了索引，会对接口内其他的属性property进行规范</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 当使用了索引，会对接口内其他的属性property进行规范</span>
<span class="token keyword">interface</span> <span class="token class-name">NumberDictionary</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>    <span class="token comment">// 可以，length是number类型</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>       <span class="token comment">// 错误，\`name\`的类型与索引类型返回值的类型不匹配</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,29),o=[p];function l(c,i){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","03-interface.html.vue"]]);export{u as default};
