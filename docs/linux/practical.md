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
