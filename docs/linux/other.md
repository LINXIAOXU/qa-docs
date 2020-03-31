# Linux命令行

## linux shell 和linux 命令的区别？

shell翻译成壳的意思，它是包裹在linux内核外层的，一个可通过一系列的linux命令对操作系统发出相关指令的人机界面。

shell可以通过其条件语句和循环语句等，把一系列linux命令结合在一起，形成一个相当于面向过程的程序，shell script，来实现一些较为复杂的功能。

总括，`shell是linux命令集的概称，是属于命令行的人机界面`。Shell 是一个用C语言编写的程序，它是用户使用Linux的桥梁。`Shell既是一种命令语言，又是一种程序设计语言`。Shell 是指一种应用程序，这个应用程序提供了一个界面，用户通过这个界面访问操作系统内核的服务。Ken Thompson的sh是第一种Unix Shell，Windows Explorer是一个典型的图形界面Shell。Shell 和Shell Script不是一回事，通常我们说的都是Shell Script。

Shell 编程跟java、php编程一样，只要有一个能编写代码的文本编辑器和一个能解释执行的脚本解释器就可以了。

Linux的Shell种类众多，常见的有：

Bourne Shell（/usr/bin/sh或/bin/sh）

Bourne Again Shell（/bin/bash
）
C Shell（/usr/bin/csh）

K Shell（/usr/bin/ksh
）
Shell for Root（/sbin/sh）

......

shell是一个命令解释器，处于内核和用户之间，负责把用户的指令传递给内核并且把执行结果回显给用户，同时，shell也可以作为一门强大的编程语言。

在Windows平台上，shell=cmd.exe（Command shell）用windows上的命令可以写一个批处理文件，点击执行，如 test.bat。

## Shell三剑客grep,sed，awk

**grep 查找 , sed 编辑, awk 根据内容分析并处理**

### 介绍 

awk：AWK一次处理是一行, 而一次中处理的最小单位是一个区域

sed: (关键字: 编辑) 以行为单位的文本编辑工具

grep: (关键字: 截取) 文本搜集工具, 结合正则表达式非常强大


#### sed

sed 是一种在线编辑器，它一次处理一行内容 。处理时，把当前处理的行存储在临时缓冲区中，称为“模式空间”（pattern space），接着用sed命令处理缓冲区中的内容，处理完成后，把缓冲区的内容送往屏幕。接着处理下一行，这样不断重复，直到文件末尾。文件内容并没有 改变，除非你使用重定向存储输出。

#### awk

相较于sed 常常作用于一整个行的处理，awk 则比较倾向于一行当中分成数个『字段』来处理。 因此，awk 相当的适合处理小型的数据数据处理

#### grep



参考文献：
1. [https://www.cnblogs.com/peteremperor/p/6111807.html](https://www.cnblogs.com/peteremperor/p/6111807.html)

2. [https://blog.csdn.net/qichangjian/article/details/87856688](https://blog.csdn.net/qichangjian/article/details/87856688)