
# webpack
* webpack 就是一个用于现代 JavaScript 应用程序的 **静态模块打包工具**。
* webpack 处理应用程序时，从一个或多个**入口点**构建一个[依赖图(dependency graph)](#依赖图)，将模块组合成一个或多个 bundles，均为静态资源，用于展示内容。

**核心概念：**
* [入口(entry)](#入口-entry)
* [输出(output)](#输出-output)
* [loader](#loader)
* [插件(plugin)](#插件-plugin)
* [模式(mode)](#模式-mode)
* [浏览器兼容(browser compatibility)](#浏览器兼容性-browser-compatibility)
* [环境(environment)](#环境-environment)

```js
module.exports = {
  entry: './src/index.js',                      // 打包入口文件
  output: './dist/main.js',                     // 打包输出
  mode: 'production',                           // 环境
  module: {
    rules: [                                    // Loader 配置
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [                                    // 插件配置
      new HtmlwebpackPlugin({
        template: './src/index.html'
      })
  ]
}
```

## 依赖图
* 当一个文件依赖另一个文件，那么它们之间就存在**依赖关系**
* 依赖图 就是多个 依赖关系 组成的关系图
* webpack 根据命令参数 或 配置模块处理，从入口开始递归处理，构建依赖关系图
* 该依赖图 包含应用程序所需要的模块，将这些模块打包为少量的 bundles——通常只有一个——可由浏览器加载。

## 入口(entry)
* 入口起点(entry point) 是用来作为构建 依赖图开始的地方。
* webpack 会找出哪些 模块和库 是入口起点（直接和间接）依赖的。
* 默认值：`./src/index.js`，可以配置 entry 属性，指定一个（或多个）不同的入口起点。  

**webpack.config.js**
```js
module.exports = {
  entry: './path/to/my/entry/file.js',
};
```

## 输出(output)
* 定输出所创建 bundles 的位置，以及如何命名
* 主要输出文件默认值是`./dist/main.js`，默认路径`./dist/`

**webpack.config.js**
```js
const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'my-webpack.bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
```

## loader
* webpack 只能理解 JavaScript 和 JSON 文件，是 webpack 自带的能力。
* loader 是让 webpack 能够处理其他类型文件，将它们转换为有效的 模块，以供应用使用和添加到以来图中。
* 在 webpack 的配置中，loader 有两个属性：
  * test: 识别出哪些文件会被转换。
  * use: 定义出在进行转换时，应该使用哪个 loader。

**webpack.config.js**
```js
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};
```
::: tip 解释
当 webpack 编译器 遇到「在 require()/import 语句中被解析为'.txt' 的路径」时，
打包之前，先 use(使用) raw-loader 转换一下。
:::

::: warning
* 在 webpack 配置中定义 rules 时，要定义在 module.rules 而不是 rules 中。
* 使用正则表达式匹配文件时，不要添加引号，否则就是匹配指定的文件
:::

## 插件(plugin)
* loader 用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。
* 包括：打包优化，资源管理，注入环境变量

**webpack.config.js**
```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
```

## 模式(mode)
* 通过选择 `development`, `production` 或 `none` 之中的一个，来设置 `mode` 参数
* 不同参数启用 webpack 内置在相应环境下的优化。其默认值为 `production`。

```js
module.exports = {
  mode: 'production',
};
```

## 浏览器兼容性(browser compatibility)
Webpack 支持所有符合 ES5 标准 的浏览器（不支持 IE8 及以下版本）。
webpack 的 `import()` 和 `require.ensure()` 需要 `Promise`。
如果你想要支持旧版本浏览器，在使用这些表达式之前，还需要 提前加载 `polyfill`。

## 环境(environment)
* Webpack 5 运行于 Node.js v10.13.0+ 的版本。