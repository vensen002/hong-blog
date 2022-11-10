# yum 命令
`yum` 是 CentOS 的包管理器。  
`yum`：RPM包软件管理器，用于自动化安装配置Linux软件，并可以自动解决依赖问题。
**语法**
``` sh
yum [-y] [install | remove | search] 软件名称
```
* `-y`：自动确认，无需手动确认安装或卸载过程
* 使用`yum`命令需要**root**权限，联网

**常用命令**
1. `yum ckeck-update`：列出所有可更新的软件清单
2. `yum update`：更新所有软件
3. `yum install <package_name>`：仅安装指定的软件
4. `yum update <package_name>`：仅更新指定的软件
5. `yum list`：列出所有可安装的软件清单
6. `yum remove <package_name>`：删除软件包
7. `yum search <keyword>`：查找软件包
8. 清除缓存：
    - `yum clean packages`：清除缓存目录下的软件包
    - `yum clean headers`：清除缓存目录下的 headers
    - `yum clean oldheaders`：清除缓存目录下旧的 headers
    - `yum clean, yum clean all (= yum clean packages; yum clean oldheaders)`：:清除缓存目录下的软件包及旧的 headers