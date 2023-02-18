# TypeScript 面试题

[[toc]]
## TypeScript 的内置数据类型有哪些？
* boolean：true 或 false
* number：整数和浮点数
* bigint：特殊的数字类型，它提供了对任意长度整数的支持
* string：字符串，单引号或双引号包围
* void：无返回值
* null和undefined：所有类型的子类型
* symbol：表示独特的值，类似于数字或字符串。  

复合类型：
* array：表示元素类型为T的数组
* tuple：元组，表示已知元素数量和类型的数组
* enum：枚举
* any：任意类型
* unknown：与any类似，但是在更严格的类型检查下使用
* object：非原始类型的对象

## any和unknown有什么区别
* unknown 和 any 类似，只不过 unknown 类型更加严格，不像 any 那样不用做类型检查
* 反而 unknow n因为未知性质，不允许访问属性，不允许赋值给其他有明确类型的变量。

## 如何将 unknown 类型指定为一个更具体的类型
* 使用typeof进行类型判断
```ts
function unknownToString(value: unknown): string {
    if (typeof value === 'string') {
        return value;
    }
    return String(value);
}
```
* 使用类型断言

```ts
import * as parseLinkDestination from "markdown-it/lib/helpers/parse_link_destination";

let aaa: unknown = 'unknown';
let bbb: string = aaa as string;
let ccc: string = <string> aaa;
```
> 使用断言可以解决编译时报错问题，只不过运行时类型不对会报错

## TypeScript 中命名空间与模块区别
模块
* 任何包含顶级 import 或 export 的文件都可以当成一个模块
* 相反的，没有import 或 export 的声明的文件，那么它的内容就是全局可见的

命名空间
* 最明确的目的就是解决重名问题，不同的命名空间就是不同的作用域
* 使用 namespace 来声明命名空间

区别
* 命名空间是位于全局空间下的一个带有名字的JavaScript对象。但是它难识别组件之间的依赖关系
* 模块可以包含代码和声明。不同的是模块可以声明它的依赖
* 正常项目开发过程中不建议使用命名空间

## typescript 与 javascript 的区别
### typescript 是什么
* 