# 实用操作

## systemctl 命令
Linux 系统很多软件（内置或第三方）均支持使用`systemctl`命令控制：**启动**、**停止**、**开机自启**。  
能够被`systemctl`管理的软件，一般称之为：服务
**语法**
```sh
//        启动    关闭    状态    开启开机自启 关闭开机自启
systemctl start | stop | status | enable | disable 服务名
```
系统内置的服务：
* NetworkManager，主网络服务
* network，副网络服务
* firewalld，防火墙服务
* sshd,ssh服务

## ln (创建软链接)
在系统中创建软链接，可以将文件、文件夹链接到其他位置。  
类似Windows系统中的**快捷方式**
**语法**
```sh
ln -s 参数1 参数2
```
* `-s`：创建软链接
* 参数1：被链接的文件或文件夹
* 参数2：要链接去的目的地
![ln 软连接](\images\linux\practical\ln.png)

## date (查看系统时间)
**语法**
```sh
date [-d] [+格式化字符串]
```
* `-d`：按照给定的字符串显示日期，一般用于日期计算
    - year 年
    - month 月
    - day 天
    - hour 小时
    - minute 分
    - second 秒
    ![date-d](\images\linux\practical\date-d.png)
* 格式化字符串：通过特定的字符串标记，来控制现实的日期格式
    - `%Y`：年
    - `%y`：年份后两位（00~99）
    - `%m`：月份（01~12）
    - `%d`：日（01~31）
    - `%H`：小时（00~23）
    - `%M`：分钟（00~59）
    - `%S`：秒（00~59）
    - `%s`：自 1970-01-01 00:00:00 UTC 到现在的秒数
![date](\images\linux\practical\date.png)

**修改时区**
root权限下
``` sh
rm -f /etc/localtime
sudo ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

**ntp 程序**
通过`ntp`程序自动校准系统时间
``` sh
// 安装
yum -y install ntp
// 启动并设置开机自启
systemctl start ntpd
systemctl enable ntpd
```
``` sh
// 也可以手动校准时间 需要root权限
ntpdate -u ntp.aliyun.com
```

## IP 地址和主机名
IP地址是联网计算机的网络地址，用于在网络中进行定位  
格式: `a.b.c.d`，其中abcd是0~255的数字
``` sh
// 通过下面命令，查看IP地址相关信息
ifconfig
```
* 如果 `ifconfig` 无法使用，那么需要安装 `net-tools` 包  
**特殊IP地址**
* `127.0.0.1`：代指本机
* `0.0.0.0`：
    - 可以用于指代本机
    - 可以在端口绑定中用来确定绑定关系
    - 在一些IP地址限制中，表示所有IP，如放行规则设置为`0.0.0.0`，表示允许任意IP访问
**主机名**
主机名就是主机的名称，用于标识一个计算机
* `hostname`：查看主机名
* `hostnamectl set-hostname 主机名`：修改主机名（需要<span style="color: red">**root**</span>权限）  

**域名解析**  
可以通过主机名找到对应计算机的IP地址，这就是主机名映射（域名解析）  
先通过系统本地的记录去查找，如果找不到就联网去公开DNS服务器去查找
``` text
访问                检查本地hosts
www.baidu.com   --> Windows / Linux                       有
                    下是否有baidu.com的IP地址记录 --> 判断 --> 打开网站
                                                      | 无       ^
                                                      V          | 有
                                            联网询问公开DSN
                                            服务器是否有记录 --> 判断
                                                                 | 无
                                                                 v
                                                             网站不存在
                                                                404
```
1. 先查看自己本机的记录（私人地址本）
    - `Windows`：C:\Windows\System32\drivers\etc\hosts
    - `Linux`：/etc/hosts
2. 再去联网DNS服务器（144.144.144.144 8.8.8.8 等公开的DNS服务器）

## ping wget curl
**ping**检查指定的网络服务器是否是可联通状态
```sh
ping [-c num] ip或主机名
```
* `-c`：检查次数，不使用将无限次持续检查

**wget**非交互式的文件下载器，可以在命令行内下载网络文件
``` sh
wget [-b] url
```
* `-b`：后台下载，会将日志写入到当前工作目录的`wget-log`文件
* `url`：下载链接

**curl**发送**http**网络请求，可用于：下载文件、获取信息等
``` sh
curl [-O] url
```
* `-O`：大写O，用于下载文件，当`url`是下载链接时，可以使用此选项保存文件

## 端口
### 端口定义
端口：是设备与外界通讯交流的出入口；可以分为**物理端口**和**虚拟端口**两类  
**物理端口**：又可称之为接口，是可见的端口。如USB接口等。  
**虚拟端口**：是计算机内部的端口，不可见的，是用来操作系统和外部进行交互使用的。

### 端口划分
Linux 系统可以支持 65535 个端口，被分为3类进行使用：
* **公认端口**：1~1023，通常用于一些系统内置或知名程序的预留使用，非特殊需要，不要占用。比如SSH服务的22端口。
* **注册端口**：1024~49151，通常可以随意使用，用于松散的绑定一些程序/服务
* **动态端口**：49152~65535，通常不会固定绑定程序，而是当程序对外进行网络连接时，用于临时使用。

### 查看端口
* 使用`nmap`命令查看端口
``` sh
// 没有该命令的话，可以安装
yum -y install nmap
// 使用
nmap ip或主机名
```
![nmap](\images\linux\practical\nmap.png)


* 使用`netstat`命令，查看**指定端口**的占用情况
``` sh
// 无法使用，就安装net-tools工具
yum -y install net-tools
// 语法
netstat -anp | grep 端口号
```
![netstat](\images\linux\practical\netstat.png)

## 进程管理
### 什么是进程
* 是指一个程序在操作系统内运行后，就被操作系统注册为系统内的一个进程
* 并且拥有独立的进程ID编号

### 查看进程
* 通过`ps`命令查看**Linux**系统中的进程信息 
```sh
ps  [-e -f]
```
* `-e`：显示出全部进程
* `-f`：以完全格式化的形式展示信息（全部信息）
* 使用 `ps -ef`就可以列出全部进程的全部信息
![ps-ef](\images\linux\practical\ps-ef.png)
    - `UID`：进程所属的用户ID
    - `PID`：进程ID
    - `PPID`：进程的父进程ID
    - `C`：此进程的CPU占用率（百分比）
    - `STIME`：进程的启动时间
    - `TTY`：启动此进程的终端序号，如显示？，表示非终端启动
    - `TIME`：进程占用CPU的时间
    - `CMD`：进程对应的名称或启动路径或启动命令  

### 关闭进程
通过`kill`命令关闭进程
``` sh
kill [-9] 进程ID
```
* `-9`：表示强制关闭进程
* 不使用选项`-9`会向进程发送信号要求其关闭，但是否关闭需要看进程的自身处理机制

## 主机状态
* 可以通过`top`命令查看CPU、内存使用情况，类似Windows的任务管理器
* 默认<span style="color:red">每5秒刷新</span>一次，语法：直接输入`top`即可，按`q`或`ctrl+c`退出

### top命令内容详解
* **第一行**：![top1](\images\linux\practical\top1.png)  
top：命令名称， 01:04:45：当前系统时间，up 9 days：系统运行时间，2 users：2个用户登录，load：1、5、15分钟的负载
* **第二行**：![top2](\images\linux\practical\top2.png)
Task：116个进程，1 running：1个进程在运行，115 sleeping：115个进程在睡眠，0 stopped：0个停止，0 zombie：0个僵尸进程
* **第三行**：![top3](\images\linux\practical\top3.png)
%Cpu(s)：CPU使用率，**us：用户CPU使用率**，**sy：系统CPU使用率**，  
ni：高优先级进程占用CPU时间百分比，id：空闲CPU率，wa：IO等待CPU占用率，hi：CPU硬件中断率，si：CPU软件中断率，st：强制等待占用CPU率
* **第四、五行**：![top45](\images\linux\practical\top45.png)
MiB Mem：物理内存，total：总量，**free：空闲**，**used：使用**，buff/cache：buff和cache占用  
MiB Swap：虚拟内存（交换空间）  
* **其他**
    ![top6](\images\linux\practical\top6.png)  
    * **PID：进程id**
    * USER：进程所属用户
    * PR：进程优先级
    * NI：负值表示高优先级，正表示低优先级
    * VIRT：进程使用虚拟内存
    * **RES：进程使用物理内存**
    * SHR：进程使用共享内存
    * S：进程状态（S：休眠，R：运行，Z：僵尸，N：负数优先级，I：空闲状态）
    * **%CPU：进程占用CPU率**
    * **%MEM：进程占用内存率**
    * TIME+：进程使用CPU时间总计，单位10毫秒
    * COMMAND：进程的命令或名称或程序文件路径

### top选项
```sh
//  选项  功能
    -p    只显示某个进程的信息
    -d    设置刷新时间，默认5s
    -c    显示产生进程的完整指令，默认进程名
    -n    指定刷新次数
    -b    以非交互非全屏模式运行；以批次的方式执行top，一般配合-n指定输出几次统计信息，将输出重定向到指定文件；比如：top -bn 3 > /tmp/top.tmp
    -i    不显示任何闲置(idle)或无用(zombie)的进程
    -u    查找特定用户启动的进程
```

## 
