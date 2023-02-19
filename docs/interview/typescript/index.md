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

## typescript的理解 与 javascript 的区别
### typescript 是什么
* TypeScript 是 JavaScript 的超集，支持ES6语法，扩展了 JavaScript的语法
* 支持面向对象编程的概念，如类、接口、继承、泛型等
* 在 js 的基础上，为 js 添加了类型支持
* 静态类型检查的语言，编译阶段就可以检查出数据类型错误
* typescript 最终会编译成纯 JavaScript 运行
* 为大型应用之开发而设计的语言

### typescript 的特性
* 类型批准和编译时类型检查
* 类型推断
* 类型擦除：编译过程中批注的内容和接口会在运行时以用工具擦除
* 接口：在 ts 中用接口来定义对象类型
* 枚举：用于取值别限定在一定范围内的场景
* 泛型编程：可以指定以后才明确的类型
* 命名空间
* 元组：一种明确数据类型和数量的数组

### ts 与 js 的区别
* typescript 是 JavaScript 的超级，扩展了 JavaScript的语法
* typescript 可以处理 JavaScript 代码，并只对其中 typescript 代码进行编译
* typescript 文件的后缀名 .ts，JavaScript 的是 .js
* typescript 文件最终会编译成 JavaScript 文件

## 使用 ts 实现一个判断入参是否是数组类型的方法
* 使用unknown 接收参数，Array.isArray()进行判断
```ts
function isArray(value: unknown): boolean {
    if (Array.isArray(value)) {
        return true;
    }
    return false;
}
```

## tsconfig.json 文件有什么用
* tsconfig.json 是 ts 编译器的配置文件，ts 可以根据它来对代码进行编译
* tsconfig.json 文件所在目录表示项目的根目录

```json5
// 常用配置
// 常用配置
{
  /*
      tsconfig.json是ts编译器的配置文件，ts可以根据它的信息来对待吗进行编译 可以再tsconfig中写注释
      include : 用来指定哪些文件需要被编译
      exclude : 用来指定哪些文件不需要被编译 ：默认node_module
      extends : 用来指定继承的配置文件
      files   : 用来指定被编译的文件列表，只有编译少量文件才使用
      compilerOptions : 编译器的选项是配置文件中非常重要也是非常复杂的配置选项
  */
  "include":[
    // ** : 任意目录 ， * : 任意文件
    "./src/**/*"
  ],
  "exclude": [
    "./src/hello/**/*"
  ],
  // "extends": "./configs/base",
  "files": [
    "1.ts",
    // "2.ts"
  ],
  "compilerOptions": {
    // 用来指定 ES 版本 ESNext : 最新版。 'ES3', 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ESNext'
    "target": "ES2020",
    // 指定要使用模块化的规范 : 'None', 'CommonJS', 'AMD', 'System', 'UMD', 'ES6'/'ES2015', 'ES2020' or 'ESNext'
    "module": "ESNext",
    // 用来指定项目中要使用的库 'ES5', 'ES6', 'ES2015', 'ES7', 'ES2016', 'ES2017', 'ES2018', 'ESNext', 'DOM', 'DOM.Iterable',
    //                          'WebWorker', 'ScriptHost', 'ES2015.Core', 'ES2015.Collection', 'ES2015.Generator', 'ES2015.Iterable', 
    //                          'ES2015.Promise', 'ES2015.Proxy', 'ES2015.Reflect', 'ES2015.Symbol', 'ES2015.Symbol.WellKnown', 
    //                          'ES2016.Array.Include', 'ES2017.object', 'ES2017.Intl', 'ES2017.SharedMemory', 'ES2017.String', 
    //                          'ES2017.TypedArrays', 'ES2018.Intl', 'ES2018.Promise', 'ES2018.RegExp', 'ESNext.AsyncIterable', 
    //                          'ESNext.Array', 'ESNext.Intl', 'ESNext.Symbol'
    // 运行在浏览器中不用设置，运行在node或其他中才需要设置
    // "lib":[]，
    // 用来指定编译后文件的存放位置
    "outDir":"./dist",
    // 将代码合并为一个文件,设置之后所有的全局作用域中的代码会合并到同一个文件中 但是只能在  'amd' and 'system' 中才能使用
    // "outFile": "./dist/app.js",
    // 是否对js文件进行编译，默认false
    "allowJs": false,
    // 是否检查js代码是否符合语法规范，默认false
    "checkJs": false,
    // 是否移除注释，默认false
    "removeComments":false,
    // 是否不生成编译后文件，默认false
    "noEmit": false,
    // 当有错误时是否生成文件，默认false
    "noEmitOnError": false,
    // 是否生成sourceMap，默认false  这个文件里保存的，是转换后代码的位置，和对应的转换前的位置。有了它，出错的时候，通过断点工具可以直接显示原始代码，而不是转换后的代码。
    "sourceMap":false,

    // 所有的严格检查的总开关，默认false
    "strict": false,
    // 编译后的文件是否开启严格模式，默认false
    "alwaysStrict": false,
    // 不允许隐式的any，默认false(允许)
    "noImplicitAny": false,
    // 不允许隐式的this，默认false(允许)
    "noImplicitThis": false,
    // 是否严格的检查空值，默认false 检查有可能为null的地方
    "strictNullChecks": true,
    // 是否严格检查bind、call和apply的参数列表，默认false  检查是否有多余参数
    "strictBindCallApply":false,
    // 是否严格检查函数的类型，
    "strictFunctionTypes":false,
    // 是否严格检查属性是否初始化，默认false
    "strictPropertyInitialization":false,

    // 是否检查switch语句包含正确的break，默认false
    "noFallthroughCasesInSwitch":false,
    // 检查函数没有隐式的返回值，默认false
    "noImplicitReturns":false,
    // 是否检查检查未使用的局部变量，默认false
    "noUnusedLocals":false,
    // 是否检查未使用的参数，默认false
    "noUnusedParameters":false,

    // 是否检查不可达代码报错，默认false   true，忽略不可达代码 false，不可达代码将引起错误
    "allowUnreachableCode":false
  }
}
```

## declare 关键字的作用
* declare关键字用于`环境声明`和您要定义可能在其他位置存在的`变量`的方法
* JavaScript库或框架没有TypeScript声明文件，想要在ts中没有错误提示的使用就要用declare 来声明

## TypeScript支持的访问修饰符有哪些
* 更 Java 的访问修饰符一样 public、projected、private
* public：类的所有成员及其子类和实例都可以访问
* projected：该类及其子类的所有成员都可以访问，但实例不可以
* private：只有该类的成员可以访问

## TypeScript中有哪些声明变量的方式
```ts{2,4,6,8}
// 声明类型和值
let value: string = 'value';
// 声明类型
let value: string ;
// 声明值
let value = 'value';
// 无值和类型声明
let value;
```
