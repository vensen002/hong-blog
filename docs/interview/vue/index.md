# Vue 面试题
[[toc]]

## 对 Vue 的理解
* Vue 是一款用于构建用户界面的 JavaScript 框架。
* 基于 HTML、CSS 和 JavaScript，并提供了一套声明式、组件化的编程模型，高效地开发用户界面。
* Vue 的两个核心功能：声明式渲染 和 响应性
  * 声明式渲染：基于标准 HTML 扩展了一套模板语法，使得我们可以声明式地描述最终输出的HTML 和 JavaScript 状态之间的关系。
  * 响应式： Vue 会自动跟踪 Javascript 状态并在其发生变化时响应式的更新 DOM。
* Vue 也是一套渐进式 MVVM框架（Model-View-ViewModel）模型-视图-视图模型层。
  * Model：模型层，负责处理业务逻辑（增删改查）以及和服务端进行进行交互。
  * View：试图层，负责将数据模型转化为UI展示出来，即HTML页面。
  * ViewModel：视图模型层，是用来连接Model和View，是它们之间的桥梁。
* 单文件组件(`.vue` 文件，Single-File Components)
  * 将一个组件的逻辑 (JavaScript)、模板 (HTML) 和样式 (CSS)封装在同一个文件里。

### 为什么将 Vue 成为渐进式框架
* 它是一个可以与你共同成长、适应你不同需求的框架。
* 只做你需要的，不强制要求你接受它全部特性。


## Vue中双向绑定的理解
* 单向绑定：就是把 Model 绑定到 View，当 JavaScript 更新 Model 时，View自动更新。
* 双向绑定：在单向绑定基础上，View 更新时，反向使 Model 也同时更新。

双向绑定讲的就是 MVVM 模型框架（Model-View-ViewModel）模型-视图-视图模型层。
* Model：模型层，负责处理业务逻辑（增删改查）以及和服务端进行进行交互。
* View：试图层，负责将数据模型转化为UI展示出来，即HTML页面。
* ViewModel：视图模型层，是用来连接Model和View，是它们之间的桥梁。

### 理解 ViewModel
* 它时连接 Model 和 View 之间的桥梁，也同时说明了 Model 和 View 之间没有联系
* 当 Model 更新后，通过 ViewModel 来更新 View
* 当 View 更新后，通过 ViewModel 来更新 Model
* ViewModel 主要有两个组成部分 监听器（Observer） 和 解析器（Compiler）
  * 监听器：对所有数据进行监听
  * 解释器：对每个元素节点的指令进行扫描解析，根据指令模板替换数据，以及绑定相应的更新函数

## Vue生命周期的理解

### 生命周期是什么
* 生命周期（live Cycle）通俗理解为"从摇篮到坟墓"
* Vue中实例从创建到销毁的过程就是生命周期，即指从创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程

### 生命周期有哪些
Vue生命周期总共可以分为8个阶段：创建前后, 载入前后,更新前后,销毁前销毁后，以及一些特殊场景的生命周期

| 生命周期          | 描述                    | Vue3              |
|---------------|-----------------------|-------------------|
| beforeCreate  | 组件实例被创建前              |                   |
| created       | 组件实例创建后               |                   |
| beforeMount   | 组件挂载之前                | onBeforeMount()   |
| mounted       | 组件挂载到实例上之后            | onMounted()       |
| beforeUpdate  | 组件数据发生变化，更新之前         | onBeforeUpdate()  |
| updated       | 组件数据更新之后              | onUpdated()       |
| beforeDestroy | 组件实例销毁之前              | onBeforeUnmount() |
| destroyed     | 组件实例销毁之后              | onUnmounted()     |
| activated     | keep-alive 缓存的组件激活时   | onActivated()     |
| deactivated   | keep-alive 缓存的组件停用时调用 | onDeactivated()   |
| errorCaptured | 捕获一个来自子孙组件的错误时调用      | onErrorCaptured() |

### 数据请求在created和mouted的区别
* created 是在组件实例一创建完成就调用，DOM 节点还未生成
* mounted 是DOM 节点渲染完毕之后再调用
* created 比 mounted 触发时机更早
* mounted 的时候调用可能会导致页面闪动（DOM 已经生成）
* 所以 数据请求放在 created 中更好

## v-show 和 v-if 有什么区别
相同点：
* v-show 和 v-if 的效果是相同，都能控制元素在页面上是否显示
* 用法上也是相同的，条件为 true 时显示，条件为 false 隐藏

区别：
* 控制手段不同、编译过程不同、编译条件不同
* 控制手段：
  * v-show 是为该元素添加 `display: none;`, DOM 元素还存在
  * v-if 是将 DOM 元素整个 添加 或者 删除
* 编译过程：
  * v-show 只是简单的基于 CSS 样式切换
  * v-if 有一个 局部编译/卸载 的过程，切换过程中会销毁和重建内部的事件监听 和 子组件
* 编译条件
  * v-show 切换时并不会触发组件的生命周期
  * v-if 切换时会触发组件的生命周期
    * `true -> false` : 会触发组件的 `beforeDestory`、`destored`方法
    * `false -> true` : 会触发组件的 `beforeCreate`、`created`、`beforeMount`、`mounted`方法
* 性能消耗：v-if有更高的切换消耗；v-show有更高的初始渲染消耗；

使用场景：
* 如果是频繁的切换显示使用 v-show，否则使用 v-if

## v-if和v-for不建议一起用
* v-for 基于数字渲染一个列表，`item in items` items 数组，item 数组中一个元素
* 使用v-for 时，建议使用 key 并保证每个 key 都独一无二，并于 diff 算法进行优化
* v-for优先级比v-if高，所以同时使用的话，每次渲染都会先循环再进行条件判断，极大地浪费性能
* 解决方案：使用 compute 和 template
  * 条件在循环外部，使用template 嵌套内容，并在 template 进行判断，内部进行循环
  * 条件在循环内部，使用compute 计算属性滤掉不需要显示的数据

## 为什么Vue中的data属性是一个函数而不是一个对象
* 根实例对象 data 可以是对象也可以是函数，不会产生数据污染。
* 组件实例对象 data 必须是函数，目的是为了防止多个组件实例对象之间共用一个打他，产生数据污染。
* 采用函数的形式，initData 时会将其作为工厂函数，都会返回一个全新的 data 对象

## 




