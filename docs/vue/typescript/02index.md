# 基础数据类型

## 布尔值 Boolean
* 默认值: true/false
``` ts
// 布尔值类型
let flag: boolean;
flag = true;
// flag = 1; // error 不能将类型"number"分配给类型"boolean"
console.log(flag)
```

## 数字 number
* 双精度 64 位浮点值
* 支持十进制和十六进制字面量
* 同时也支持ECMAScript 2015中引入的二进制和八进制字面量
``` ts
// 数字类型 number
let decLiteral: number = 6; // 十进制字面量
let hexLiteral: number = 0xf00d; // 十六进制
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744; // 八进制
let num: number;
num = 20;
// num = "123456" // error 不能将类型"string"分配给类型"number"
console.log(num, decLiteral, hexLiteral, binaryLiteral, octalLiteral)
```

## 字符串 String
* 使用双引号（ "）或单引号（'）表示字符串。
* 反引号（**`**）来定义多行文本和内嵌表达式，并且以${ expr }这种形式嵌入表达式
``` ts 
// 字符串类型 string
let name: string = "bob";
console.log(name)
name = "smith";
console.log(name)
let beauty:string;
beauty = "李一桐";
let dream = `我的女神是${beauty},为了她，我想月入${money}k`;
console.log(dream); 
```
> 总结：数值，字符串和布尔值是我们开发中最常使用的基础数据类型，与js中的数值，字符串和布尔完全一致，
在ts中我们主要做类型校验使用

## 数组
* 声明变量的一组集合称之为数组
* TypeScript像JavaScript一样可以操作数组元素。 
* 数组声明方式
``` ts
export default { }

// 数组类型
// 数组声明方式
// 方式一 在元素类型后面接上 []，表示由此类型元素组成的一个数组：
let list: number[] = [1, 2, 3];
// list = [ 1, 2, 3, '4']; // error 不能将类型"string" 分配给类型"number"
console.log(list)

// 方式二 第二种方式是使用数组泛型，Array<元素类型>：
let arrList: Array<number> = [4, 5, 6];
// arrList = [4, 5, 6, 'a'] // error 不能将类型"string" 分配给类型"number"
console.log(arrList)

// 方式三 联合类型，即数组里可以存放规定的数据类型
let uniList: (string | number) [];
let uniList2: Array<string | number>;
uniList = [ 1, 2, 3, 'a', 'b', 'c', 'abc']
// uniList = [ 1, 2, 3, 'a', 'b', 'c', 'abc', false, true] // error 不能将类型"boolean"分配给类型"string | number"
console.log(uniList)

// 方式四 any类型 即任意类型
let anyList: any[];
let anyList2: Array<any>;
anyList = [ 1, 2, 3, 'a', 'abc', true, false]
console.log(anyList)

```

## 元组 Tuple
* TS中的元祖类型其实就是数组类型的扩展
* 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同。
* 对应位置的类型需要相同
``` ts
export default {} 

// 元组 tuple
// TS中的元祖类型其实就是数组类型的扩展
// 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同

// Declare a tuple type 声明一个元组
let x: [string, number];
// Initialize it 初始化
x = ['hello', 10]; // OK
// Initialize it incorrectly 初始化失败
// x = [10, 'hello']; // Error 不能将类型"number"分配给"string"
// 当访问一个已知索引的元素，会得到正确的类型：
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr' 类型'number'上不存在属性'substr'

// 表示定义了一个名称叫做 tup1 的元祖, 这个元祖中将来可以存储3个元素, 
// 第一个元素必须是字符串类型, 第二个元素必须是数字类型, 第三个元素必须是布尔类型
let tup1:[string, number, boolean]; 
tup1 = ['宋祖儿', 100, false];
// tup1 = ['宋祖儿', 100, true, 200]; // 超过指定的长度会报错
// tup1 = [100,"宋祖儿", true];
// tup1 = ['杨超越', 100, true];
console.log(tup1); 

/* 
  总结:
  定义: ['', '', ...]
  作用:元祖用于保存定长定数据类型的数据
*/
```

## 枚举 enum
* enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
``` ts
export default {}

// 枚举用于表示固定的几个取值
// 例如: 人的性别只能是男或者女

enum Gender{ 
  Male,
  Femal
}

// 定义了一个名称叫做val的变量, 这个变量中只能保存Male或者Femal
let val:Gender; 
val = Gender.Male;
val = Gender.Femal;
// val = 'nan'; // 报错
// val  = false;// 报错

// 注意点: TS中的枚举底层实现的本质其实就是数值类型, 所以赋值一个数值不会报错
val = 666; // 不会报错
console.log(Gender.Male); // 0
console.log(Gender.Femal);// 1

// 注意点: TS中的枚举类型的取值, 默认是从上至下从0开始递增的
//         虽然默认是从0开始递增的, 但是我们也可以手动的指定枚举的取值的值
// 注意点: 如果手动指定了前面枚举值的取值, 那么后面枚举值的取值会根据前面的值来递增
enum Gender2{ 
  Male=5,
  Femal
}
console.log(Gender2.Male); // 5
console.log(Gender2.Femal);// 6

// 注意点: 如果手动指定了后面枚举值的取值, 那么前面枚举值的取值不会受到影响
enum Gender3{ 
  Male,
  Femal=10
}
console.log(Gender3.Male); // 0
console.log(Gender3.Femal);// 10

// 注意点: 我们还可以同时修改多个枚举值的取值, 如果同时修改了多个, 那么修改的是什么最后就是什么
enum Gender4{ 
  Male=100,
  Femal=200
}
console.log(Gender4.Male); // 100
console.log(Gender4.Femal);// 200

// 我们可以通过枚举值拿到它对应的数字
console.log(Gender.Male); // 0
// 我们还可以通过它对应的数据拿到它的枚举值
console.log(Gender[0]); // Male
```
> * TS中的枚举底层实现的本质其实就是数值类型
> * 默认是从0开始递增的为元素编号，也可以手动的指定成员的数值
> * 如果手动指定了前面枚举值的取值, 那么后面枚举值的取值会根据前面的值来递增
> * 如果手动指定了后面枚举值的取值, 那么前面枚举值的取值不会受到影响
> * 可以同时修改多个枚举值，修改的值是什么就是什么
> * 我们可以通过枚举值拿到它对应的数字, 还可以通过它对应的数据拿到它的枚举值

## Any 与 Void
* **Any:** 表示任意类型, 当我们不清楚某个值的具体类型的时候我们就可以使用`any`
* **Void:** `void`与`any`相反，它表示没有任何类型。当一个函数没有返回值时，你通常会见到其返回值类型是 `void`
``` ts
export default {} 

// any类型
// any 表示任意类型，当我们不清楚某个值的具体类型的时候我们就可以使用any
// 在TS中任何数据类型的值都可以负责给any类型

// 使用场景一 
// 变量的值会动态改变时，比如来自用户的输入，any类型可以让这些变量跳过编译阶段的类型检查
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// 使用场景二
// 改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查
let notSure2: any = 4;
// notSure2.ifItExists(); //okay，ifItExists方法在运行时可能存在，但这里并不会检查
notSure2.toFixed(); // okay, toFixed exists (but the compiler doesn't check) toFixed方法存在，但是在编译时不会检查

// 使用场景三
// 定义存储各种类型数据的数组时
let list: any[] = [1, true, "free"];

list[1] = 100;

// void类型
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 
// 当一个函数没有返回值时，你通常会见到其返回值类型是 void
// 在TS中只有null和undefined可以赋值给void类型

function makeMoney(): void {
  console.log("I want to make much money and marry a wife!!!");
  // return "100K beauty" // 报错
}

makeMoney()

let value:void; 
// 定义了一个不可以保存任意类型数据的变量, 只能保存null和undefined
// value = 100; // 报错
// value = "杨紫";// 报错
// value = true;// 报错
// 注意点: null和undefined是所有类型的子类型, 所以我们可以将null和undefined赋值给任意类型
// 严格模式下会null报错
// value = null; // 不会报错  
value = undefined;// 不会报错
```

## Null 和 Undefined
* TypeScript里，`undefined`和`null`两者各自有自己的类型分别叫做`undefined`和`null`。
* 和 `void`相似，它们的本身的类型用处不是很大。
* 默认情况下`null`和`undefined`是所有类型的子类型。就是说你可以把 `null`和`undefined`赋值给任意类型的变量。
* 当 `strictNullChecks`(严格模式)开启时，`null`和`undefined`只能赋值给`void`和它们各自。
* 官方鼓励 `strictNullChecks` 打开使用
``` ts
export default {} 

// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 
// 和 void相似，它们的本身的类型用处不是很大
let u: undefined = undefined;
let n: null = null;

let money: number = 100;
// 非严格模式下，可以把null / undefined 赋值给 money ,即"strictNullChecks": false,  
money = null;
money = undefined;
```

## Never 和 Object
### Never
* never类型表示的是那些永不存在的值的类型
* never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
* 变量也可能是 never类型，当它们被永不为真的类型保护所约束时
> * `never`类型是任何类型的子类型，也可以赋值给任何类型；
> * 没有类型是`never`的子类型或可以赋值给`never`类型（除了`never`本身之外）。
> * 即使 `any`也不可以赋值给`never`。

### Object
* `object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型
* 使用`object`类型，就可以更好的表示像`Object.create`这样的API。
``` ts
export default {}

// Never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// error("你错了！");

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// fail();

// 返回never的函数必须存在无法达到的终点 死循环
function infiniteLoop(): never {
  while (true) {
  }
}

// Object类型
// 表示一个对象
// 定义了一个只能保存对象的变量

let goddess:object; 
// goddess = 1;
// goddess = "123";
// goddess = true;
goddess = {name:'白鹿', age:27};
console.log(goddess);

```

## 类型断言

* 什么是类型断言?
> 类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。<br/>
>通俗的说就是我相信我自己在定义什么类型
* 语法格式<br/>
`<类型>值`<br/>
`值 as 类型`
``` ts
/*
  1.什么是类型断言?

  类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。
  通俗的说就是我相信我自己在定义什么类型

  2.语法格式
    2.1 <类型>值
    2.2 值 as 类型
*/

let str = "世界上最遥远的距离就是,你是if而我是else, 似乎一直相伴但又永远相离";

// 方式一
// let len = (<string>str).length;
// console.log(len);


// 方式二
// let len = (str as string).length;
// console.log(len);



// function TypeAs(x: number | string){
//   console.log(x.length);
  
// }

// TypeAs("世界上最痴心的等待,是我当case你当switch,或许永远都选不上自己")


function TypeAs(x: number | string){
  let len = (x as string).length;
  // let len = (<string>x).length;
  console.log(len);
  
}
TypeAs("世界上最痴心的等待,是我当case而你当switch,或许永远都选不上自己")

```

## 变量声明与解构
### 变量声明
* 使用 `var` | `let` | `const` 关键字进行变量声明
* 一直以来我们都是通过`var`关键字定义JavaScript变量。
* `let`在很多方面与`var`是相似的，但是可以避免在JavaScript里解决一些常见问题。
* `const`是对`let`的一个增强，它能阻止对一个变量再次赋值。
``` ts
// 变量声明
// 使用 var | let | const 进行变量声明
var x = 10;
let y = 10; // let 功能与 var 相似，但是解决了跨作用域访问的问题，只能在它自己的作用域里可以访问
const c = 20;
// c = 100; // error const是常量声明，无法更改
```
### 解构

* 数组结构
``` ts
// 数组解构
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

let [one, ...rest] = [1, 2, 3, 4];
console.log(one); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
console.log(...rest); // outputs 2 3 4 

let [, tow, , four] = [1, 2, 3, 4];
console.log(tow); // 2
console.log(four); // 4
```
* 对象解构
``` ts
// 对象解构
// 这通过 o.a and o.b 创建了 a 和 b 。 注意，如果你不需要 c 你可以忽略它。
let o = {
  a: "foo",
  b: 12,
  c: "bar"
};
let { a, b } = o;
console.log(a , b); // foo 12
// 了解这一点就基本够用了

// 没有声明的赋值
// 注意，我们需要用括号将它括起来，因为Javascript通常会将以 { 起始的语句解析为一个块。
({ x, y } = { x: "baz", y: 101 }); // ts会报错，但js可以运行
console.log(x , y) // baz 101

// 在对象里使用...语法创建剩余变量
let { a: a1, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;
console.log(total) // 15

// 属性重命名
let { a: a2, b: b2 } = o;
// 相当于 let a2 = o.a; let b2 = o.b;
console.log( a2 , b2)

// 指定类型
let { a: a3, b: b3 } : { a: string, b: number } = o;

// 默认值
// 即使 b 为 undefined ， keepWholeObject 函数的变量 wholeObject 的属性 a 和 b 都会有值。
function keepWholeObject(wholeObject: { a: string, b?: number }) {
  let { a, b = 1001 } = wholeObject;
  console.log(a , b) 
};
let object = {
  a: '你好',
  // b: 100,
  c: '不好' 
}
keepWholeObject(object) // 你好 1001
```

## bight与symbol
* bight类型: 表示非常大的数
* symbol类型: 表示全局唯一引用
``` ts
export default {}

export default {}

// bight类型: 表示非常大的数
// symbol类型: 表示全局唯一引用
// ES2020可用

const Hundred1: bigint = BigInt(100)
const Hundred2: bigint = 100n
console.log(Hundred1) // 100n
console.log(Hundred2) // 100n

const firstName = Symbol("name")
const secondName = Symbol("name")
console.log(firstName) // Symbol(name)
console.log(secondName)// Symbol(name)
if (firstName === secondName) { // false
  console.log('ok')
}
```