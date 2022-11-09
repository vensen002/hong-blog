# Linux 常用命令

## 命令基础格式
`command [-options] [parameter]`
* `command`: 命令本身
* `-options`: [可选，非必填]命令的一些选项，可以通过选项控制命令的行为细节
* `parameter`: [可选，非必填]命令的参数，多数用于命令的指向目标等
> [] 在语法中表示可选


## 常用处理目录
* `ls`(list files): 列出目录及文件名
* `cd`(change directory): 切换目录
* `pwd`(print work directory): 显示目录及文件名
* `mkdir`(make directory): 创建一个新的目录
* `rmdir`(remove directory): 删除一个空的目录
* `cp`(copy file): 复制文件或目录
* `rm`(remove): 删除文件或目录
* `mv`(move file): 移动文件与目录，或修改文件与目录的名称

### ls (列出目录)
``` sh
ls [-a -d -l -h] [Linux路径]
```
* `-a`: all, 列出全部文件，包括隐藏文件(以`.`开头的文件)
* `-d`: 仅列出目录本身，而不是列出目录内的文件数据
* `-l`: 以列表形式列出，包含文件的属性与权限等等数据
![ls -l](/images/linux/command/ls-l.png)
* `-h`: 易于阅读的形式，列出文件大小，如 K、M、G; 必须搭配`-l`一起使用

### cd (切换目录)
`cd`是Change Directory的缩写，这是用来变换工作目录的命令。
``` sh
cd [相对路径或绝对路径]
```

* `~`: &nbsp;&nbsp;表示 home 目录
* `.`: &nbsp;&nbsp;表示 当前 目录
* `..`: 表示 上一级 目录
* **绝对路径**: 以根目录为起点，路径描述以`/`开头
* **相对路径**: 以当前目录为起点，路径描述不由`/`开头

### pwd (显示目前所在的目录)
pwd 是 Print Working Directory 的缩写，也就是显示当前工作目录的命令。
``` sh
pwd
```
### mkdir (创建新目录)
``` sh
mkdir [-mp] 目录名称
```
* `-m`：配置文件的权限喔！直接配置，不需要看默认权限 (umask) 的脸色～
* `-p`：帮助你直接将所需要的目录(包含上一级目录)递归创建起来！

### rmdir (删除空的目录)
``` sh
 rmdir [-p] 目录名称
```
* `-p`：从该目录起，一次删除多级空目录

### cp (复制文件或目录)
``` sh
cp [-a -i -r] source destination
cp [options] source1 source2 source3 ... diretory
```
* `-a`：相当於 -pdr 的意思，至於 pdr 请参考下列说明；(常用)
* `-d`：若来源档为链接档的属性(link file)，则复制链接档属性而非文件本身；
* `-i`：若目标档(destination)已经存在时，在覆盖时会先询问动作的进行(常用)
* `-p`：连同文件的属性一起复制过去，而非使用默认属性(备份常用)；
* `-r`：递归持续复制，用於目录的复制行为；(常用)

### rm (移除文件或目录)
```sh
rm [-fir] 文件或目录
```
* `-f`：就是 force 的意思，忽略不存在的文件，不会出现警告信息；
* `-i`：互动模式，在删除前会询问使用者是否动作
* `-r`：递归删除啊！最常用在目录的删除了！这是非常危险的选项！！！

### mv (移动文件与目录，或修改名称)
```sh
mv [-fiu] source destination
mv [options] source1 source2 source3 ... diretory
```
* `-f`：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；
* `-i`：若目标文件 (destination) 已经存在时，就会询问是否覆盖！
* `-u`：若目标文件已经存在，且 source 比较新，才会更新 (update)

## 文件内容查看
Linux系统中使用以下命令来查看文件的内容：
* `cat`：由第一行开始显示文件内容
* `tac`：从最后一行开始显示，可以看出 tac 是 cat 的倒着写！
* `nl`：显示的时候，顺道输出行号！
* `more`：一页一页的显示文件内容
* `less`：与 more 类似，但是比 more 更好的是，他可以往前翻页！
* `head`：只看头几行
* `tail`：只看尾巴几行
```sh
// 基本都用这种语法打开就可以打开文件
command 文件
```

### more
一页一页翻动
在 more 这个程序的运行过程中，你有几个按键可以按的：
* **空白键 (space)**：代表向下翻一页；
* **Enter**：代表向下翻『一行』；
* **/字串**：代表在这个显示的内容当中，向下搜寻『字串』这个关键字；
* **:f**：立刻显示出档名以及目前显示的行数；
* **q**：代表立刻离开 more ，不再显示该文件内容。
* **b 或 [ctrl]-b**：代表往回翻页，不过这动作只对文件有用，对管线无用。

### head 与 tail
```sh
// 取出文件前面几行
head [-n number] 文件 
// 取出文件后面几行
tail [-n number -f] 文件 
// head -n 5 文件 <== 展示文件的前5行内容
// tail -5 文件 <== 展示文件的最后5行内容
```
* `-n`：后面接数字，代表显示几行的意思
* `-f`：表示持续侦测后面所接的档名，要等到按下[ctrl]-c才会结束tail的侦测
* `head`和 `tail`不指定行数时，默认展示10行内容
## 其他常用命令

### touch (创建文件)
touch 命令无选项，参数必填，表示要创建的文件路径  
相对、绝对、特殊路径符均可以使用，注意不能创建目录
```sh
touch Linux路径
```

### grep (过滤内容)
``` sh
grep [-n] 关键字 文件路径
```
* `-n`：在结果中显示匹配的行的行号
* **关键字**：过滤的关键字，比较复杂的内容用`""`包围起来
* **文件路径**：表示要过滤内容的文件路径
![grep-n](\images\linux\command\grep.png)

### wc (数量统计)
可以通过`wc`命令统计文件的行数、单词数量等
```sh
wc [-c -m -l -w] 文件路径
```
* `-c`：统计**bytes**数量
* `-m`：统计**字符**数量
* `-l`：统计**行数**数量
* `-w`：统计**单词**数量

### | (管道符)
将管道符左边命令的**结果**，作为右边命令的**输入**
``` sh
// 与 grep 搭配使用
ls -a | grep bash
// 与 wc 搭配使用
ls -l /usr/bin | wc -l
```
![grep + |](\images\linux\command\grep+管道符.png)
> | 还可以重复嵌套使用

### which (查找命令的程序文件)
``` sh
which command
```
![which](\images\linux\command\which.png)

### find (查找指定文件)
```sh
// 按照文件名查找
find 起始路径 -name "文件名"
// 按文件大小查找
find 起始路径 -size +|-n[kMG]
// find / -size +100M       <== 从根目录查找大于100M的文件
```
* `+ -`：大于小于
* `n`：文件大小数字
* `kMG`：文件大小单位；k：kb，M：MB，G：GB

### echo 与 反引号 `
`echo`相当于Java中的`print`打印内容
```sh
echo hello linux
echo `pwd` 
```
* `echo` 与**反引号``** 结合使用,反引号内的内容表示命令执行,再把执行结果打印出来
![ehco](\images\linux\command\echo.png)

### > >> (重定向符号)
```sh
command > text.txt
command >> text.txt
```
* `>`：将左侧命令的结果，**覆盖**写入到符号右侧指定的文件中
* `>>`：将左侧命令的结果，**追加**写入到符号右侧指定的文件中


