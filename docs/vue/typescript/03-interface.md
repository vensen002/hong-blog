# 接口

* 什么是接口？<br/>
接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，
然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法 
* 语法格式: `interface interface_name {} `
## 接口的基本使用
``` ts
export default { }

// 接口的基本使用
// 注意：这里用 ';' 进行隔断，不是 ',' 
interface IFullName {
  firstName: string;
  lastName: string;
}

let goddassName: IFullName = {
  firstName: '邱',
  lastName: '淑贞'
}

console.log(goddassName.firstName)
console.log(goddassName.lastName)

function sayName({firstName, lastName}: IFullName):void {
  // console.log('我的名字是 ' + firstName + lastName)
  console.log(`我的名字是 ${firstName}_${lastName}`  )
}

sayName(goddassName)
```

## 可选属性 与 readonly
* 可选属性使用： ？
* 只读属性使用: readonly
* readonly与const的区别: 做为变量使用的话用 const，若做为属性则使用readonly

``` ts
export default {} 

// 可选属性 使用?来进行修饰

interface IFullName {
  firstName: string;
  lastName: string;
  age?: number
}

let goddassName: IFullName = {
  firstName: '邱',
  lastName: '淑贞'
}
console.log(goddassName.firstName);
console.log(goddassName.lastName);

// readonly 只读属性

interface IInfo {
  readonly uname: string
  readonly uage: number
}

let info: IInfo = {
  uname: '王伟',
  uage: 12
}
// info.uage = 18; //error

```
> `ReadonlyArray<T>`类型，它与`Array<T>`相似，
> 只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改

``` ts
// ReadonlyArray<T> 只读的数组
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```
## 索引签名
* 定义: 索引签名用于描述那些"通过索引得到"的类型
* 格式: `[property: string]: any`
> 解释: 
> - `property`: &nbsp;用于描述额外的属性名，这里可以自定义，编译器都会通过
> - `: string`: &nbsp;用于描述`property`的类型，`string`表示`property`的类型只能是`string`
> - `: any`: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用于描述`property`值的类型，`any`表示`property`的值可以是任何类型

* TypeScript支持两种索引签名：字符串和数字。[property: (string | number)]
* 同时使用两种类型的索引时，数字索引的返回值必须是字符串索引返回值类型的子类型。
* 当使用到对象时，对象的键 number类型 会转成 string类型；100 -> "100"
* 当使用了索引，会对接口内其他的属性`property`进行规范
### 基本使用示例
初始数据
``` ts
export default {}

// 索引签名 初始数据
interface IFullName {
  firstName: string
  lastName: string 
  age: number
  singName: string 
}
// 注意点: 如果使用接口来限定了变量或者形参, 那么在给变量或者形参赋值的时候,多一个或者少一个都不行
// 实际开发中往往会出现多或者少的情况，怎么解决？
```

少一个或者少多个属性
``` ts
export default {}

// 索引签名 初始数据 添加可选属性
interface IFullName {
  firstName: string
  lastName: string 
  age?: number
  singName?: string 
}
// 注意点: 如果使用接口来限定了变量或者形参, 那么在给变量或者形参赋值的时候,多一个或者少一个都不行
// 实际开发中往往会出现多或者少的情况，怎么解决？

// 少一个或者少多个属性
// 解决方案: 可选属性
let goddass1: IFullName = { firstName: '邱', lastName: '淑贞' }
let goddass2: IFullName = { firstName: '邱', lastName: '淑贞', age: 28 }
```

多一个或者多多个属性
``` ts
// 多一个或者多多个属性
// 方案一：使用变量 不推荐使用
let info = { firstName: '邱', lastName: '淑贞', age: 28, singName: '赌王', dance: '兔子舞' }
let goddass3: IFullName = info
// goddass3 ==>{"firstName":"邱","lastName":"淑贞","age":28,"singName":"赌王","dance":"兔子舞"}
console.log('goddass3 ==>' + JSON.stringify(goddass3))

// 方案二：使用类型断言
let goddass4: IFullName = <IFullName> { firstName: '邱', lastName: '淑贞', age: 28, singName: '赌王', dance: '兔子舞' }
// let goddass4: IFullName = { firstName: '邱', lastName: '淑贞', age: 28, singName: '赌王', dance: '兔子舞' } as IFullName
// goddass4 ==>{"firstName":"邱","lastName":"淑贞","age":28,"singName":"赌王","dance":"兔子舞"}
console.log('goddass4 ==>' + JSON.stringify(goddass4))
```

使用 索引签名 解决
``` ts
// 索引签名 初始数据 添加可选属性 增加索引签名
interface IFullName {
  firstName: string
  lastName: string 
  age?: number
  singName?: string 
  [property: string]: any
}
// 注意点: 如果使用接口来限定了变量或者形参, 那么在给变量或者形参赋值的时候,多一个或者少一个都不行

// 多一个或者多多个属性
// 方案三：使用索引签名
let goddass5: IFullName = { firstName: '邱', lastName: '淑贞', age: 28, singName: '赌王', dance: '兔子舞' }
```
``` ts
// 索引签名
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// let arr: StringArray = ['123', 123] // error 这里number类型不能赋给string类型
```
### 规责演示示例
同时使用两种类型的索引
``` ts
// 同时使用两种类型的索引时，数字索引的返回值必须是字符串索引返回值类型的子类型。
class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
  [x: number]: Animal; // error
  [x: string]: Dog;
}
```
当使用了索引，会对接口内其他的属性property进行规范
``` ts
// 当使用了索引，会对接口内其他的属性property进行规范
interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}
```

## 

