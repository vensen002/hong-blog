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