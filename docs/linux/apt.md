# apt 命令
`apt` 是 `Ubuntu`的包管理器。  
`apt` 命令执行需要超级管理员权限(root)。
**语法**
``` sh
apt [-y] [install | remove | search] 软件名称
```
* `-y`：自动确认，无需手动确认安装或卸载过程
* 使用`yum`命令需要**root**权限，联网

**常用命令**
* `apt update`：列出所有可更新的软件清单
* `apt upgrade`：升级软件包
* `apt list --upgradeable`：列出可更新的软件包及版本信息
* `apt full-upgrade`：升级前删除旧的软件包
* `apt install <package_name>`：安装指定的软件包
* `apt install <package_1> <package_2> <package_3>`：安装多个软件包
* `apt update <package_name>`：更新指定的软件包
* `apt show <package_name>`：显示软件包具体信息，版本号，大小，依赖关系
* `apt remove <package_name>`：删除软件包
* `apt autoremove`：清理不再使用的依赖和库文件
* `apt purge <package_name>`：移除软件包及配置文件
* `apt search <keyword>`：查找软件包
* `apt list --installed`：列出所有已安装的包
* `apt list --all-versions`：列出所有已安装的包的版本信息