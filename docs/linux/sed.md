# sed命令

**SED是一项Linux指令，功能同awk类似，差别在于，sed简单，对列处理的功能要差一些，awk的功能复杂，对列处理的功能比较强大。**

sed叫做流编辑器，在shell脚本和Makefile中作为过滤一使用非常普遍，也就是把前一个程序的输出引入sed的输入，经过一系列编辑命令转换成为另一种格式输出。sed是一种在线编辑器，它一次处理一行内容，处理时，把当前处理的行存储在临时缓冲区中，称为"模式空间",接着用sed命令处理缓冲区中的内容，处理完成后，把缓冲区的内容送往屏幕。接着处理下一行，这样不断重复，直到文件末尾。文件内容并没有改变，除非你使用重定向存储输出。

## 基本用法

| 选项名 |       作用      |
|-------|----------------|
| -n    | 一般sed命令会把所有数据都输出到屏幕，如果加入-n选项的话，则只会把经过sed命令处理的行输出到屏幕。             |
| -e	| 允许对输入数据应用多条sed命令编辑。  |
| -f	| 从脚本文件中读取命令（sed操作可以事先写入脚本，然后通过-f读取并执行）|
| -i	| 用sed的修改结果直接修改读取数据的文件，而不是由屏幕输出。  |
| -l	| 指定行的长度            |
| -r	| 在脚本中使用扩展表达式     |

| 动作   |       作用      |
|-------|----------------|
| d     | 删除。              |
| a     | 追加，在当前行后添加一行或多行。              |
| c	    | 行替换，用c后面的字符串替换原数据行。  |
| i	    | 插入，在当前行前插入一行或多行。     |
| p	    | 打印，输出指定的行。  |
| s	    | 字符串替换，用一个字符串替换另外一个字符串。格式为'行范围s/旧字符串/新字符串/g'             |

## 删除d命令

```
sed 'd' sed.txt   	 		-----删除sed.txt文件的所有内容。
sed '2d' sed.txt   	 		-----删除sed.txt文件的第二行。
sed '2,$d' sed.txt	 		-----删除sed.txt文件的第二行到末尾所有行。
sed '$d' sed.txt	 		-----删除sed.txt文件的最后一行。
sed '/test/d ' sed.txt		-----删除sed.txt文件所有包含test的行。
sed '/[A-Za-z]/d ' sed.txt	-----删除sed.txt文件所有包含字母的行。
```

## 整行替换：c命令

```
sed '2c hello world' sed.txt    -----将第二行替换成hello world
```

## 字符串替换：s命令

```
sed 's/hello/hi/2' sed.txt                        -----此种写法表示只替换每行的第2个hello为hi
sed '2s/hello/hi/2' sed.txt                       -----此种写法表示只替换第二行的第2个hello为hi
sed '$s/hello/hi/2' sed.txt                       -----此种写法表示只替换最后一行的第2个hello为hi
sed 's/hello/hi/2g' sed.txt                       -----此种写法表示只替换每行的第2个以后的hello为hi（包括第2个）
sed -n 's/^hello/hi/p' sed.txt			          -----(-n)选项和p标志一起使用表示只打印那些发生替换的行。也就是说，如果某一行开头的hello被替换成hi，就打印它。
sed -n '2,4p' sed.txt                             -----打印输出sed.txt中的第2行和第4行

sed -n 's/hello/&-hi/gp' sed.txt
sed 's/^192.168.0.1/&-localhost/' sed.txt	
sed 's/^192.168.0.1/[&]/' sed.txt	
##  &符号表示追加一个串到找到的串后。所有以192.168.0.1开头的行都会被替换成它自已加 -localhost，变成192.168.0.1-localhost。第三句表示给IP地址添加中括号

sed -n 's/\(liu\)jialing/\1tao/p' sed.txt
sed -n 's/\(liu\)jia\(ling\)/\1tao\2ss/p' sed.txt
##  liu被标记为\1，所以liu会被保留下来（\1 == liu）
##  ling被标记为\2，所以ling也会被保留下来（\2 == ling）
##  所以最后的结果就是\1tao\2ss == "liu" + "tao" + "ling" + "ss"
此处切记：\1代表的是被第一个()包含的内容，\1代表的是被第一个()包含的内容，……
上面命令的意思就是：被括号包含的字符串会保留下来，然后跟其他的字符串比如tao和ss组成新的字符串liutaolingss

sed 's#hello#hi#g' sed.txt
##  不论什么字符，紧跟着s命令的都被认为是新的分隔符，所以，"#"在这里是分隔符，代替了默认的"/"分隔符。表示把所有hello替换成hi。
选定行的范围：逗号

sed -n '/today/,/hello/p' sed.txt
## 所有在模板today和hello所确定的范围内的行都被打印。都找第一个，也就是说，从第一个today到第一个hello

sed -n '5,/^hello/p' sed.txt
sed -n '/^hello/,8p' sed.txt
## 打印从第五行开始到第一个包含以hello开始的行之间的所有行。

sed '/today/,/hello/s/$/www/' sed.txt
## 对于模板today和hello之间的行，每行的末尾用字符串www替换。
sed '/today/,/hello/s/^/www/' sed.txt
## 对于模板today和hello之间的行，每行的开头用字符串www替换。

sed '/^[A-Za-z]/s/5/five/g' sed.txt
## 将以字母开头的行中的数字5替换成five
```

1. [https://www.jianshu.com/p/89163e927a2c](https://www.jianshu.com/p/89163e927a2c)