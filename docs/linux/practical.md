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



