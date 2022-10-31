# TypeScript 介绍
参考[官方文档](https://www.tslang.cn/docs/home.html)
[行业大佬整理文档以及源码](https://gitee.com/jiuyueqi/class)

## 简介
* TS是由微软2012年开发的一款开源的编程语言
* TypeScript 是 Javascript 的超集，遵循最新的 ES6、ES5规范。TypeScript 扩展了 JavaScript的语法
* 在 js 的基础上，为js添加了**类型支持**

## 设计目标
* 遵循当前以及未来出现的ECMAScript规范
* 开发大型应用，可以编译成纯JavaScript，编译出来的JavaScript可以运行在浏览器上
* 成为跨平台的开发工具，TypeScript使用Apache作为开源协议，且能够再所有主流的操作系统上安装和执行

## TS优势
* 更早的发现错误
* 任何位置都有代码提示，增加开发效率
* 类型系统提升了代码的可维护性，重构更容易
* 使用最新的ECMAScript语法
* ts类型推断机制，降低成本

## TS劣势
* 短期投入到工作可能增加开发成本
* 和有些库的结合不是很完美
* 学习需要成本，需要理解接口、泛型、类型等知识
* 集成到自动构建流程中需要额外的工作量

## TS与JS的区别
| JavaScript                 | TypeScript                                             |
| -------------------------- | ------------------------------------------------------ |
| 动态语言                   | 具有静态语言的特点                                     |
| 编译性语言运行时报错       | 编译期间报错                                           |
| 弱类型语言，没有类型       | 强类型语言，类似java, C++等，定义时指明类型            |
| 不支持模块、接口、泛型     | 支持模块、接口、泛型                                   |
| 基本数据类型和引用数据类型 | 更多的基本数据类型和引用数据类型，如any, never, enum等 |
| 在浏览器中直接执行         | 编译为js后才能在浏览器进行执行                         |

## TS环境安装与初体验

### 安装与运行
``` sh
npm install -g typescript
或者
cnpm install -g typescript
或者
yarn global add typescript
```

``` js
tsc 文件名称.ts
tsc --watch
```

### js缺陷演示
``` js
/* 
  1.没有对类型进行检测
  2.没有对是否传参进行检测
*/
function test(msg) {
  console.log(msg.length);
}

test("邱淑贞") // 可以正常使用
test(666) // undefine
test() // error
console.log("往后余生,风雪是你, 平淡是你,敲每一行代码想的都是你。");
console.log("你是CSS,我是DIV,就算我的布局再好,没了你也就没了色彩。");
```

