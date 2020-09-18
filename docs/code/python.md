# Python 基础

## 一. 基础学习

1. 编写Python程序的两种方式，交互式解释器执行和运行脚本文件。
2. Python是动态类型语言，只有运行时根据变量引用的对象才能知道这个对象的数据类型。
3. Python的内在数据类型包括int、float、complex、bool、str、list、tuple、set、dict等。
4. 隐式类型转换：表达式中混合int、float类型的值时，Python会自动将int类型的值转为float类型的值。
5. 显示类型转换：可以用内置函数str()、int()、float()将其他类型的值转为str、int、float类型。
6. break语句，在重复执行循环体时，如果满足某种条件，就可以用break语句跳出循环，即不再执行循环体。
7. continue语句，在执行循环体时，如果遇到continue语句，则会停止执行其后续语句，返回循环开头继续执行循环体。
8. 循环语句(for或while)都可以在后面跟一个else语句，当for语句遍历完整个可迭代对象(如遍历完整个list的元素)，或者当while语句的条件表达式是false退出时，都会执行这个else语句。但是，如果是通过break跳出循环语句则不会执行这个else语句。
9. 空语句pass用于语法上需要语句而实际不需要做任何工作的地方，或者用作占位符，以等待后续补充代码。
10. 逻辑运算符是and、or、not

```tip
E记法
3.8E16或者3.8e16读作“3.8指数16”，等同于3.8x10的16次方
```

### 1.1 变量

```python
teacher = "Mr.Lin"
teacher = "Mr.Mei" # 在python中你可以将变量重新指派到新的地址上，不能改变原来的地址，赋值实际上是改变指向数据的地址
print(teacher)   # "Mr.Mei"
```

### 1.2 list - 列表

```python
# list是一个数据元素的有序序列，定义列表时用一对左右方括号[]包围，元素之间用逗号隔开。list中的元素可以是不同的类型，是一个有序序列，有唯一下标。可以用下标运算符[]访问它的一个元素或一系列连续的元素。
my_list = [2, 3.14, 8, 'python', 9, 'hello']
print(type(my_list))  # <class 'list'>
print(my_list)        # [2, 3.14, 8, 'python', 9, 'hello']
print(my_list[0])     # 2
print(my_list[3])     # python

# 还可以通过向下标运算符[]传递起始位置和结束位置的两个下标，返货连续多个元素组成的子列表(不包括结束位置的元素)
my_list = [2, 3.14, 8, 'python', 9, 'hello']
print(my_list[1:4]) # [3.14, 8, 'python']
print(my_list[2:])  # [8, 'python', 9, 'hello']
print(my_list[:4])  # [2, 3.14, 8, 'python']
print(my_list[:])   # [2, 3.14, 8, 'python', 9, 'hello']

my_list = [2, 3.14, 8, 'python', 9, 'hello']
my_list[2] = '小白'
print(my_list)      # [2, 3.14, '小白', 'python', 9, 'hello']

my_list = [2, 3.14, 8, 'python', 9, 'hello']
my_list[2:5] = [10, 25]
print(my_list)      #  [2, 3.14, 10, 25, 'hello']

my_list = [2, 3.14, 8, 'python', 9, 'hello']
my_list[2:4] = []   # 相当于删除了[2:4]之间的元素，不包括下标为4的元素
print(my_list)      # [2, 3.14, 'hello']
```

### 1.3 tuple - 元组

```python
# tuple是一个有序序列，tuple是不可修改的，另外，定义tuple用的是圆括号，而不是方括号
t = ('python', [2, 5],37, 3.14, "http://a.hwdong.com")
print(type(t))     # <class 'tuple'>

print(t[2])        # 37
print(t[0:3])      # ('python', [2, 5], 37)
print(t[:4])       # ('python', [2, 5], 37, 3.14)

t[1] = 'hello'     # TypeError: 'tuple' object does not support item assignment

# 注意：只有一个元素时，最后必须加一个逗号，如(25, )表示一个tuple，而(25)表示一个整数
```

### 1.4 set - 集合

```python
# set是不包含重复元素的无序集合。用{}来包围，以逗号隔开的一组元素，因为集合无序，所以不能使用下标操作其中的元素
s = {2, 3, 'python'}
print(type(s))     # <class 'set'>
print(s)           # {'python', 2, 3}

# set中不能有重复的元素
s = {1, 2, 2, 3, 3, 3}
print(s)          # {1, 2, 3}

# 集合是根据其元素的哈希值存储元素的，因此list无法计算哈希值，不能作为集合的元素
s = {2, 3, [5, 8]}    # TypeError: unhashable type: 'list'
b = {1,3.14,'hello',{2,3}}   # TypeError: unhashable type: 'set'
```

### 1.5 dict - 字典

```python
# dict是一个“键 - 值”对的无序集合。每个元素都以“键：值”的形式存储
d = {1:'value', 'key':2, 'hello':[4,7]}
print(type(d))     # <class 'dict'>
print(d)           # {1: 'value', 'key': 2, 'hello': [4, 7]}

print(d['hello'])  # [4,7]
```

### 1.6 类型转换

```python
a = 24
b = float(a)   # 将整数转为浮点数
print(b)  # 24.0

a = 38.7
b = int(a)  # 将浮点数改为整数，去掉小数部分
print(int(a))  # 38

a = '76.6'
b = float(a)  # 将字符串转为浮点数
print(b)  # 76.6

print(str(30))    # 将int转为str类型
print(str(3.14))  # 将float转为str类型
print(str(3+6j))  # 将complex转为str类型

# type() - 知道变量的类型
a = '44.2'
b = 44.2
type(a) # <type 'str'>
type(b) # <type 'float'>
```

### 1.7 ==和is运算符的比较

```python
a = 1000
b = 1000
print(a==b)    # true，==比较两个对象的值是否相等
print(a is b)  # false，is判断是两个对象是否为同一个
```

### 1.8 基本运算

```python
print(2+"2")  # 报错
print("5"+"2")  # 52
print(5+2)   # 7

print("Mr.Lin"*3) # Mr.LinMr.LinMr.Lin
print(2*3)  # 6

print 3/2   # 在python2中结果为1，python3中结果为1.5
print 3.0/2 # 在python2中结果为1.5
print(3//2)    # 在python3中做整除操作，结果为1

print(2+3*2)  # 8，在python中运算顺序和数学一样

print(3**5)  # 243  指数

print(3%2)  # 1   取余
```

### 1.9 自增和自减

```python
number = 7
number += 1
print(number) # 8

number = 7
number -= 1
print(number) # 6
```

### 1.10 input() - 输入函数

```python
# 可以通过内置函数input()从键盘输入数据
name = input("请输入你的用户名：")
print(name)
```

### 1.11 print() - 输出函数

```python
print(1, end=' ')   # 函数print()默认输出后换行，可以通过设置关键字参数end的值，改变其行为
print(2, end='')
print(3, end=' ')   # 1 23 
print("Hello world!", 2)  # Hello world! 2
```

### 1.12 if - 条件语句

```python
score = int(input("请输入学生成绩："))
if score < 60:
	print("不及格")
elif score < 70:
	print("及格")
elif score < 80:
	print("中等")
elif score < 90:
	print("良好")
else:
	print("优秀")
```

### 1.13 while、for - 循环语句

```python
# while
total_score = 0
i = 0
score = float(input("请输入学生成绩："))
while score>=0:
	total_score += score
	i += 1
	score = float(input("请输入学生成绩："))
print("平均成绩为：", total_score/i)

# for用于遍历访问一个可迭代对象的每个元素
numbers = [23, 41, 19, 87, 67, 2, 32]
sum = 0
for val in numbers:
	sum += val
print("This sum is", sum)   # This sum is 271

# for可以使用内置函数range()产生1对整数之间的可迭代对象
for e in range(2, 8):
	print(e, end=" ")      # 2 3 4 5 6 7 

#range()该对象包括了介于start和stop之间(但不包括stop)的一系列整数的可迭代对象：
range(start, stop, step)
start、start+step、start+step+step

# 可以将函数range()产生的可迭代对象传递给内置函数list()、tuple()等构造一个list对象或tuple对象
L = list(range(2, 8, 2))
print(L)                     # [2, 4, 6]
t = tuple(range(2, -8, -2))
print(t)                     # (2, 0, -2, -4, -6)
```

### 1.14 二分查找法

```python
def binarySearch(alist, value):
    L=0                          #区间左端点
    H=len(alist)-1               #区间右端点
    found=False
    while L<=H:                    #区间(L, H)存在
      Middle=(L+H)//2           #Middle指向区间的中点
      if alist[Middle]==value: #等于Middle指向的元素，找到了
          return Middle
      else:
          if value < alist[Middle]:
              H=Middle-1         #在左区间查找
          else:
              L=Middle+1         #在右区间查找
    return -1

testlist=[5,7,12,25,34,37,43,46,58,80,82,105]
print(binarySearch(testlist, 25))   # 3
print(binarySearch(testlist, 13))   # -1
```

### 1.15 冒泡排序

```python
alist=[49,38,27,97,76,13,27,49]
debug=True

for i in range(len(alist)-1,0, -1):
      for j in range(i):
          if alist[j]>alist[j+1]:
              #temp=alist[j]
              #alist[j]=alist[j+1]
              #alist[j+1]=temp
              alist[j], alist[j+1]=alist[j+1], alist[j]  #交换两个元素
      if debug:
          print(alist)
print(alist)
```

## 二. 函数

### 2.1 定义函数和调用函数

```python
# 通过关键字def来定义函数，定义函数时，圆括号中的参数称为“形式参数”，而调用函数时传递的数据称为“实际参数”。
def min_max(arr):
    m = arr[0]
    M = arr[0]
    for e in arr:
        if e < m:
            m = e
        if e > m:
            M = e
    return m, M

ret = min_max([36, 2, 18, 3, 99])
print(ret)          # (2, 99)
print(ret[0])       # 2
print(ret[1])       # 99
```

### 2.2 全局变量和局部变量

● 函数内部可访问但不能直接修改全局变量，必须用关键字global声明才能修改全局变量。

● 局部变量和外部变量同名，在函数内部通过这个名字访问的都是局部变量，除非用global声明为全局变量。函数外部不能访问局部变量

```python
# 函数外部声明的变量，称为全局变量，这意味着全局变量在函数内部或外部都可以调用
x = "global"
def fun():
    print("x inside:", x)

fun()                            # x inside: global
print("x outside:", x)           # x outside: global

# 如果试图在一个函数里修改一个全局变量，下面例子中，“x=”就相当于定义了局部变量，因此，这个函数里的x就不是全局变量的x了，而等号右侧的“x*2”相当于试图使用这个还未定义的局部变量x，所以产生了下述的错误
x = "global"
def fun():
	x = x*2
    print(x)

fun()                # IndentationError: unindent does not match any outer indentation level

# 可以使用关键字global声明x是一个全局变量
x = "global"
def fun():
    global x
    x = x*2
    print(x)

fun()               # globalglobal

# 可以在一个函数内部定义一个变量，这个变量只属于该函数，外部无法使用这个变量，该变量称为局部变量
def fun():
    y = "local"

fun()
print(y)       # SyntaxError: invalid syntax Exited with error status 1

# 如果函数内部声明的局部变量和外部变量同名，则内部的局部变量会隐藏全局变量，即在函数内部使用这个名字访问的总是局部变量
x = 5
def fun():
    x = 10
    print("local x:", x)        

fun()                    # local x: 10
print("global x:", x)    # global x: 5
```

### 2.3 函数的参数

● 函数的形参可以有默认值，称为默认形参，形参名前有一个＊的称为可变形参，形参名前有两个＊＊的称为字典形参。可变形参必须在非默认形参的后面，默认形参必须在非默认形参和可变形参的后面，字典形参必须放在最后面。

● 函数定义中的形参是有顺序的，实参可以按照位置传递给形参，称为位置实参，也可以按照形参名=实参的方式将实参传递给形参，称为关键字实参。关键字实参可以任意顺序排列。

● 可以给可变形参传递多个实参，这些实参被打包成一个tuple对象传递给可变形参。函数可以像普通tuple对象一样访问可变形参中的实参。

● 可以采用键-值的方式将字典实参传递给字典形参。这些键-值实参被打包成一个字典对象传给字典形参。函数可以像普通字典对象一样访问字典形参中的每个键-值实参。

● 假如要传递给函数的实参放在一个tuple或list对象中，则可以通过在指向这个对象的变量名前加＊的解封实参列表方式传递给被调用函数，list或tuple中的这些实参将被解封传递给被调用函数的形参。假如要传给函数的实参放在一个dict对象中，则可以通过在指向这个对象的变量名前加＊＊的解封实参列表方式将字典实参传递给形参。

```python
# 函数的形参中有默认值，称为“默认形参”
def date(year, month='01', day='01'):
    print(year, month, day)

date(2020)                  # 2020 01 01
date(2020, '07')            # 2020 07 01
date(2020, '07', '29')      # 2020 07 29

# 默认形参后面不能再有非默认形参
def f(a, b=2, c):
    pass                    # SyntaxError: non-default argument follows default argument

# 默认形参的默认值始终指向的都是初始化的那个对象
def f(var, arr=[]):
    arr.append(var)
    return arr

print(f(1))                # [1]
print(f(2))                # [1, 2]

# 如果想每次调用函数时默认形参指向的是不同的对象，则可以采用下面的技巧
def f(var, arr=None):
    if arr==None:
        arr=[]
    arr.append(var)
    return arr

print(f(1))               # [1]
print(f(2))               # [2]

def f(var):
    arr=[]
    arr.append(var)
    return arr

print(f(1))               # [1]
print(f(2))               # [2]

# 位置实参和关键字实参
def hello(name, msg="Good morning!"):
    print("hello!", name+','+msg)

# 位置实参
hello("小白")                    # hello! 小白,Good morning!
hello("老张", "你好吗？")          # hello! 老张,你好吗？

# 关键字实参
hello(name="小白")                     # hello! 小白,Good morning!
hello(msg="你好吗？", name="小白")      # hello! 小白,你好吗？
hello(name="老张", msg="你好吗？")      # hello! 老张,你好吗？
hello("李平", msg="你好吗？")           # hello! 李平,你好吗？

# 任意形参(可变形参) - 如果不知道将来使用者调用这个函数时，传递的实际参数个数，则可以在定义函数时，在这个形参名前加一个星号*
def hello(*names):
	print("哈喽：")
	for name in names:   # 对比可变形参names元组tuple的每个元素name
		print(name)
	print()
	
hello("小白", "老张")               # 哈喽：(/n)小白(/n)老张
hello("小白", "老张", "老王")        # 哈喽：(/n)小白(/n)老张(/n)老王

# 注意：函数定义中的可变形参最多只能一个，默认形参必须在可变形参后面

# 字典形参 - 一个函数中最多只能包含一个字典形参，且必须在任意形参后
def f(x, *y, **z):
	print("x:", x)
	# 访问任意形参中的参数
	for e in y:
		print(e)
	print()
	# 访问字典形参中的参数
	for key in z:
		print(key,":",z[key])
		
f("hello", "li ping", 60.5, year="2018", month=7, day=25)
# x: hello
# li ping
# 60.5

# year : 2018
# month : 7
# day : 25

# 解封参数列表 - 将list和tuple变量名前用一个*作为实参传给被调用函数，Python解释器会自动从这个list或tuple对象中解析出每个实参并传递给被调用函数。
def add(a, b):
	return a+b

ab = [3, 5]
print(add(*ab))            # 8

def f(name, score=0.0):
	print("the name:", name)
	print("the score:", score)
	
d = {"name":"lipeng","score":60.5}
f(**d)  # **d将字典中的参数分离出来
# the name: lipeng
# the score: 60.5
```

### 2.4 递归函数

如果一个函数在其内部存在调用该函数自身的语句，就称为递归函数

```python
def fact(n):
    if n == 1:
        return 1             # 如果n等于1，就直接返回值1
    return n * fact(n - 1)    # 如果n大于1，就是n和fact(n-1)的乘积

print(fact(4))                # 24
```

### 2.5 函数对象和lambda表达式

函数也是对象，即function类型的对象，因此可以和其他对象如int、list对象一样使用。用一个变量引用一个函数；将函数作为另一个函数的参数；从一个函数里返回另外一个函数；将函数存储在各种数据结构中。

● 函数是function类型的对象，和其他对象一样，函数对象既可以作为函数参数、返回值，也可以存储在数据结构里。

● lambda函数是一个匿名函数，主要用于单行代码的函数，经常用作其他函数的参数。

● 以函数作为参数的一些有用的内置函数如map()、filter()。

```python
# 具备对象的三个属性，id、type和值
def square(x):
    return x*x

print(id(square))          # 139999503139312
print(type(square))        # <class 'function'>

# 可以将函数赋值给一个变量
fun = square
print(fun(3.5))            # 12.25

print(id(fun))             # 139999503139312
print(id(square))          # 139999503139312
print(fun is square)       # True

# 将函数放在一个容器中
def square(x):
    return x*x

def cube(x):
    """Cube of x."""
    return x*x*x

funcs = {
    'sq' : square,
    'cb' : cube,
}

x = 2
print(square(x))                    # 4
print(cube(x))                      # 8

for func in funcs:
    print(func, funcs[func](x), end=" ")     # sq 4 cb 8 

# 放在list对象中
fun_list = [square, cube]
for fun in fun_list:
    print(fun(x), end=" ")                   # 4 8

# 函数可以作为返回值
def Squ():
    return square

f = Squ()
print(f(6))                        # 36

# 函数可以嵌套
def Square(x):
    def f():
        return x*x

    y = f()                           # 调用函数f()
    return y+x

print(Square(5))                      # 30

# nonlocal声明的变量是其包围环境中的变量
def Square(x):
    def f():
        nonlocal x
        x = 2
        return x*x

    y = f()                           # 调用函数f()
    return y+x

print(Square(5))                      # 6

# 函数可以作为其他函数的参数
def SquList(L, fun):
    for e in L:
        print(fun(e), end = " ")

SquList([2,3,4,5], square)          # 4 9 16 25
```

lambda表达式(匿名函数)：Python中的函数一般都是用def定义并有一个函数名，而lambda表达式是一个不用关键字def定义的没有函数名的函数，它主要用于定义简单的单行函数。

```python
# 定义表达式
# lambda 参数 ： 语句
add = lambda x, y : x+y
print(add(3, 5))                 # 8

# 可迭代对象排序的内置函数sorted(), sorted(iterable, key=None, reverse=False)
alist = [-5, 3, 1, -7, 9]
print(sorted(alist))                      # [-7, -5, 1, 3, 9]
print(sorted(alist, reverse = True))      # [9, 3, 1, -5, -7]

# 想让上面的列表按照绝对值排序
print(sorted(alist, key=lambda x:abs(x)))    # [1, 3, -5, -7, 9]

# list.sort([key=..., reverse=...])
alist = [(2, 2), (3, 4), (4, 1), (1, 3)]
alist.sort(key = lambda e:e[1])
print(alist)                      # [(4, 1), (2, 2), (1, 3), (3, 4)]

# 内置函数map()
map(function, *iterable)    -->     [function(x) for x in iterable]

def square(x):
    return x*x

ret = map(square, [3, 4, 5, 6, 7])
print(tuple(ret))                      # (9, 16, 25, 36, 49)

ret = map(square,[3, 4, 5, 6, 7])
print(list(ret))                       # [9, 16, 25, 36, 49]

ret = map(lambda x, y : x*y, [1, 4, 3], [3, 5, 6, 7])   # 因为前者只有三个元素，因此只有三对对应元素执行lambda表达式
print(tuple(ret))                      # (3, 20, 18)

# 内置函数filter()
filter(function or None, iterable)

numbers = range(-5,5)
ret = filter(lambda x:x<0, numbers)

less_than_zero = tuple(ret)
print(less_than_zero)                # (-5, -4, -3, -2, -1)
```

### 2.6 模块和包

● 函数是可以重复调用的程序块。在程序中使用他人已经编写好的函数代码，或者使自己编写的函数能被其他程序使用的方法是：导入(import)该函数所在的模块(mudule)。

● 导入的模块只要说明模块名即可，不能有文件扩展名．py。程序代码中如果要使用模块中的对象，如函数，则需要用．运算符，即使用“模块名．函数名”访问具体的函数。

● 后缀是．py的Python程序文件称为模块。可以用关键字import导入一个模块(如xxx)到程序中，模块xxx中的名字如name，可以通过xxx.name访问。import xxx as yy用于在导入模块xxx时给模块xxx起一个别名yy，访问模块中的名字就要用这个别名作为前缀

● from ... import可以导入模块中的一个名字(如from xxx import name导入模块xxx的单个名字name)，也可以导入模块中的所有名字(如from xxximport *导入模块中的所有名字)

● 包就是一个包含__init__.py文件的文件夹。这个__init__.py可以是空的文件，也可以包含一些Python命令(如执行一些初始化)。包将所有模块文件组织成一个层次结构

● sys模块是Python解释器交互的接口，如向脚本程序传递命令行参数，添加工作路径等

● random随机数模块可以用于生成各种随机数，如从一个序列对象里随机选择元素，或者得到一个序列的随机排列等

● Python提供了一个专门用于绘图的工具包Matplotlib。

```python
# import 模块名
import math

print(math.pi)                        # 3.141592653589793
print(math.sin(1.57))                 # 0.9999996829318346
print(math.sin(math.pi/2))            # 1.0

# 重命名导入模块
import math as m

print(m.pi)                           # 3.141592653589793
# 只能用重命名的m.pi而不能用math.pi去访问math的pi

# 导入单独名字
from math import sqrt

print(sqrt(2))           # 1.4142135623730951

# 导入所有名字
from math import *

print(pi)                # 3.141592653589793
print(sin(1.57))         # 0.9999996829318346
print(sqrt(2))           # 1.4142135623730951

# random模块
import random

a=random.random()           # [0.0, 1.0)之间的随机浮点数(除1外)
b=random.uniform(100, 1)   # [1.0, 100.0)之间的浮点数，可能不包括100.0
c=random.randint(-10, 80)   # 随机整数
print(a, '\t', b, '\t', c)                # 0.559085992800573 	 73.5195511617527 	 25
r=random.choice(r'dfs＊d=! kh#^h@')  # 在字符串r'dfs＊d=! kh#^h@’中随机选择一个
print(r)                                  # f
p=["Python", "C", "小白", "a.hwdong.com"]
print(random.choice(p))      # 从列表x中任意选择1个数    Python
random.shuffle(p)            # 重排序：打乱列表x中元素的顺序
print(p)                                  # ['C', 'a.hwdong.com', '小白', 'Python']
alist=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a=random.sample(alist, 5)  # 从list中随机获取5个元素，返回1个list对象
print(a)                                  # [1, 3, 6, 4, 8]

# seeding种子
import random

def f():
    random.seed(1)   # 初始化随机数发生器
    for i in range(5):
        print('{:04.3f}'.format(random.random()), end=' ')
    print()

    for i in range(3):
        print(random.randint(-5, 5), end=' ')
    print()

f()             # 0.134 0.847 0.764 0.255 0.495        2 2 5     
f()             # # 0.134 0.847 0.764 0.255 0.495        2 2 5 
```

__all__总结：

● 如果没有为一个包定义__all__，则当使用import *时不会导入任何对象。

● 如果没有为一个模块定义__all__，则当使用import *时将导入模块中的所有对象，否则仅导入__all__中定义的对象。

## 三. 内置数据类型

● Python的数值类型有int、float、complex、bool。

● 通过在数值前面加前缀可表示不同进制的数值。内置函数bin()、oct()、hex()可分别用于得到二进制、八进制、十六进制数值对应的字符串。

● 不同类型的数值参与运算时，有时会自动进行隐式类型转换，有时则需要进行显式强制类型转换。内置函数int()、float()、complex()将其他类型的值，如字符串类型str的值强制显式类型转换为int、float、complex类型的值。内置函数str()可将其他类型的值转化为字符串类型。

● 浮点数只能用二进制近似表示。Python提供了用于分数计算的Fraction类型。

● math模块、cmath模块的函数可以进行各种数值计算。

### 3.1 数值

```python
# 可以用一个内置函数isinstance()判断一个对象是否为某种类型的对象
print(isinstance(2, int))                       # True
print(isinstance(2.0, int))                     # False
print(isinstance(2+3.9j, complex))              # True
print(isinstance(False, bool))                  # True

# Python可通过在数的前面加前缀0b或0B来表示二进制数，加前缀0o或0O来表示八进制数，加前缀0x或0X来表示十六进制数
print(0b0110100101)                             # 421
print(0O703516)                                 # 231246
print(0X7F3BA)                                  # 521146

# 可以用内置函数bin()、oct()、hex()分别得到一个数的二进制、八进制、十六进制对应的字符串
print(bin(412))                                 # 0b110011100
print(oct(412))                                 # 0o634
print(hex(412))                                 # 0x19c

# 浮点数的精度问题
print((2.3-2.2)==0.1)                           # False

# 由于计算机只能用二进制近似表示十进制小数，因此，它们是不相等的
print(2.3-2.2)                                  # 0.09999999999999964
print(0.1)                                      # 1

# 另外，由于float型数值的小数部分最多15位，对于一些关键的应用，如金融、科学计算等需要更高精度的场合，Python提供了更高精度的Decimal类
import decimal 
print(0.1)                                      # 0.1
print(decimal.Decimal(0.1))                     # 0.1000000000000000055511151231257827021181583404541015625

# Python还提供了用于分数计算的Fraction类
from fractions import Fraction as F
print(F(1,3))                                   # 1/3
print(1/F(5,6))                                 # 6/5
print(F(1,3)+F(3,4))                            # 13/12

# 可以用Python内置的函数做一些数值计算
print(abs(-3.4))                                # 3.4
print(min(3.4, 2.8))                            # 2.8
print(max(3.4, 2.8))                            # 3.4
print(pow(0.3, 4))                              # 0.0081
print(round(2.8))                               # 3
print(round(2.3))                               # 2
print(round(-2.3))                              # -2

# math模块提供对C语言标准库定义的数学函数的访问。该模块使用浮点值进行复杂的数学运算，包括对数和三角函数的运算。这些功能不能用于复数，如果需要支持复数，则需使用另一个数学模块——cmath模块中相同名称的函数。
# 特殊的常量
import math
print('   π: {:.30f}'.format(math.pi))          #    π: 3.141592653589793115997963468544
print('   e: {:.30f}'.format(math.e))           #    e: 2.718281828459045090795598298428

# 异常值：浮点计算可以产生两个异常值：inf和nan，也可能抛出一个OverflowError异常
import math
x = 10.0 ** 200                                 # 浮点数超过float类数值表示范围时，产生的结果是inf(无穷大)
y = x*x
print(y, '\t', math.isinf(x*x))                 # inf 	 True

import math
x = 10.0 ** 200                                 # 并不是所有溢出的值都用inf表示
x ** 2                                          # 会抛出异常：“OverflowError:(34, 'Result too large')”。数值计算的结果是inf还是抛出溢出异常OverflowError是由底层的C Python决定的

import math
x = (10.0 ** 200) * (10.0 ** 200)               # 如果除inf的结果是未定的，则结果是nan(未定的数值)。因为nan不能和其他值进行比较，所以检查nan只能使用函数isnan()
y = x/x
print(y, '\t', math.isnan(y))                   # nan 	 True

# 可以使用函数isfinite()来检查一个数值是常规数值还是特殊值inf或nan
import math
for f in [math.pi, math.e, math.inf, math.nan]:
    print('({:5.2f} {!s})'.format(f, math.isfinite(f)), end=',')    # ( 3.14 True),( 2.72 True),(  inf False),(  nan False),

# 比较两个浮点数是否相等实际上就是看它们差的绝对值是否足够小，Python的math模块提供了函数isclose()
# 格式：isclose(a, b, *, rel_tol=1e-09, abs_tol=0.0)默认形参rel_tol和abs_tol分别表示相对误差和绝对误差
# 用于相对误差比较abs(a-b)<=rel_tol * max(abs(a), abs(b))时：
import math
a = 1.00
b = 0.90
rel_tol=0.10
print(abs(a-b) <= rel_tol * max(abs(a), abs(b)), end=',')   
print(math.isclose(a, b, rel_tol=rel_tol))            # True,True
a = 0.10
b = 0.09
print(math.isclose(a, b, rel_tol=rel_tol), end=',')
print(abs(a-b) <= rel_tol * max(abs(a), abs(b)))      # False,False

import math
abs_tol = 1e-07
a = 1.00
b = 1.0000001
print(abs(a-b) <= abs_tol, end=',')
print(math.isclose(a, b, abs_tol=abs_tol))            # False,False
a = 1.00
b = 1.00000001
print(math.isclose(a, b, abs_tol=abs_tol), end=',')
print(abs(a-b) <= abs_tol)                           # True,True

# 浮点数转为整数
# 函数trunc()截断浮点数的小数部分，函数floor()将浮点数转换为比它小的最大整数，函数ceil()将浮点数转换为比它大的最小整数
import math
HENDINGS = ('i', 'int', 'trunk', 'floor', 'ceil')
print('{:^5} {:^5} {:^5} {:^5} {:^5}'.format(*HEANDNGS))
fmt = '{:5.1f} {:5.1f} {:5.1f} {:5.1f} {:5.1f}'
VSLUES = [-1.5, -1.8, 1.2]
for i in VALUES:
    print(fmt.format(i, int(i), math.trunc(i), math.floor(i), math.ceil(i)))
#  i    int  trunk floor ceil 
#  -1.5  -1.0  -1.0  -2.0  -1.0
#  -1.8  -1.0  -1.0  -2.0  -1.0
#   1.2   1.0   1.0   1.0   2.0

# 平方根、指数、对数
# 函数sqrt(x)用于专门计算一个数x的平方根
import math
print(math.sqrt(3))                              # 1.7320508075688772

# 幂函数pow(x, y)计算x的y次方，其功能类似x**y，但pow(x, y)可以保证按照浮点数运算，而x ** y只可以返回一个int或一个float
x=2.1
y=3.2
print(x**y)                                     # 10.74241047739471
print(math.pow(x,y))                            # 10.74241047739471
print(2**3)                                     # 8
print(math.pow(2,3))                            # 8.0
```

### 3.2 列表

```python
# 可以用Python的内置函数len()查询一个list中的元素个数
my_list = [2, [8, 4, 6], '小白', 3.14, 'python', ['a']]
print(len(my_list))                             # 6

# list是一个有序集合，每个元素都有一个确定的下标，下标从0开始，长度为n的列表的最后一个元素的下标是n-1
print(my_list)                                  # [2, [8, 4, 6], '小白', 3.14, 'python', ['a']]
print(my_list[0])                               # 2
print(my_list[2])                               # 小白
print(my_list[1][2])                            # 6
print(my_list[-1])                              # ['a']
print(my_list[-2])                              # python
# 最后一个元素
print(my_list[len(my_list)-1])                  # ['a']
# 第一个元素
print(my_list[-len(my_list)])                   # 2


# 还可以通过向下标运算符[]传递起始位置和结束位置的两个下标，返回连续多个元素组成的子列表(不包括结束位置的元素),这叫切片
my_list = [2, 3.14, 8, 'python', 9, 'hello']
print(my_list[1:4]) # [3.14, 8, 'python']
print(my_list[2:])  # [8, 'python', 9, 'hello']
print(my_list[:4])  # [2, 3.14, 8, 'python']
print(my_list[:])   # [2, 3.14, 8, 'python', 9, 'hello']

# 修改元素
my_list = [2, 3.14, 8, 'python', 9, 'hello']
my_list[2] = '小白'
print(my_list)      # [2, 3.14, '小白', 'python', 9, 'hello']

my_list = [2, 3.14, 8, 'python', 9, 'hello']
my_list[2:5] = [10, 25]
print(my_list)      #  [2, 3.14, 10, 25, 'hello']

# 删除元素
my_list = [2, 3.14, 8, 'python', 9, 'hello']
my_list[2:4] = []   # 相当于删除了[2:4]之间的元素，不包括下标为4的元素
print(my_list)      # [2, 3.14, 'hello']

# 用in可判断1个元素是否在1个list里
my_list=['p', 'r', 'o', 'b', 'l', 'e', 'm']
print('p' in my_list)                           # True
print('a' in my_list)                           # False
print('c' not in my_list)                       # True

# 用for迭代遍历1个list
for fruit in ['apple', 'banana', 'mango']:
    print("I like", fruit, end=" ")             # I like apple I like banana I like mango 

# 可以通过加法运算+拼接两个list，用整数和list的乘法运算*复制list内容
odd = [1, 3, 5]
print(odd + [9, 7, 5])                          # [1, 3, 5, 9, 7, 5]
print(['re']*3)                                 # ['re', 're', 're']

# 可以用Python的内置函数对list进行操作，如函数del()可删除list的中1个元素或1个范围里的元素
alist = ['p', 'r', 'o', 'b', 'l', 'e', 'm']
a = alist
del alist[2]
print(alist)                                    # ['p', 'r', 'b', 'l', 'e', 'm']
del alist[1:5]
print(alist)                                    # ['p', 'm']
del alist                                       # 删除整个alist,只是删除指向数组的指针
print(a)                                        # ['p', 'm']
print(alist)                                    # NameError: name 'alist' is not defined

# 对1个列表，当既要访问索引又要遍历元素时
alist = [3, 7, 'hello']
for i in range(len(alist)):
    print(i, alist[i], end=" ")                 # 0 3 1 7 2 hello 

# 更好的办法是使用枚举函数enumerate()
for i, value in enumerate(alist):
    print(i, value, end=" ")                    # 0 3 1 7 2 hello 

# 内置函数sorted()可以用来对一个list排序，但它不修改原来的list而是返回一个排好序的新的list
# sorted(iterable, key=None, reverse=False) 其中，iterable是可迭代对象，key是用来进行比较的函数，reverse表示是“逆序”(True)还是“正序”(False)
alist = [19, 2, 17, 12]
blist = sorted(alist)
print(blist)                                    # [2, 12, 17, 19]
blist = sorted(alist, reverse=True)
print(blist)                                    # [19, 17, 12, 2]
alist = [('b', 2), ('a', 1), ('c', 3), ('d', 4)]
blist = sorted(alist, key=lambda x:x[1])
print(blist)                                    # [('a', 1), ('b', 2), ('c', 3), ('d', 4)]

# 添加一个元素
odd = [1, 3, 5]
odd.append(7)
print(odd)                                      # [1, 3, 5, 7]

# 扩展原来的list
odd.extend([9, 11, 13])
print(odd)                                      # [1, 3, 5, 7, 9, 11, 13]

# list的insert()方法可以在中间某个位置插入一个元素
odd = [1, 9]
odd.insert(1, 3)
print(odd)                                      # [1, 3, 9]

odd.insert(1, [4, 5])
print(odd)                                      # [1, [4, 5], 3, 9]

# list的pop()方法可以删除指定下标的元素，如果没有指定下标，则删除最后一个元素
# list的clear()方法则清空整个list，但没有销毁它
alist = ['p', 'r', 'o', 'b', 'l', 'e', 'm']
alist.pop(2)
print(alist)                                    # ['p', 'r', 'b', 'l', 'e', 'm']
alist.pop()
print(alist)                                    # ['p', 'r', 'b', 'l', 'e']
alist.clear()
print(alist)                                    # []

# list的remove()方法可以删除特定的元素
alist = ['p', 'r', 'o', 'b', 'l', 'e', 'm']
alist.remove('p')
print(alist)                                    # ['r', 'o', 'b', 'l', 'e', 'm']
```

### 3.3 字符串

● 字符串是有序的字符序列，每个字符都对应唯一的下标，可以通过下标运算符[]进行索引或切片操作，也可以用for循环迭代访问其中的字符

● 字符串可以用单引号、双引号或三个引号表示，特殊字符需要用转义字符，如\r、\n、\t、\"、\\, Python中用raw字符串更简单

● 字符串支持in、+、*等运算符

● 字符串是不可变的对象，不可修改的对象

● 可以用内置函数或字符串str类型的方法对字符串进行操作。例如，str的format()方法可以对字符串进行各种格式化操作，产生一个新的字符串

```python
# 可以用+拼接两个字符串，可以用*重复一个字符串
print(3 * 'um' + 'ium')                         # umumumium

# 字符串文字量可以通过紧挨着写，达到拼接的效果
s = 'Py' 'thon'
print(s)                                        # Python

# 如果两个需要拼接的字符串文字量不在同一行，则需要在前面的字符串后面加上反斜杠字符\，或者在两个字符串外面用左右圆括号包围它们
text='如果两个需要拼接的字符串文字量不在同一行，则需要在前面的字符串后面加上反斜杠字符\，或者在两个字符串外面用左右圆括号'\
'包围它们'
print(text)
text=('如果两个需要拼接的字符串文字量不在同一行，则需要在前面的字符串后面加上反斜杠字符\，或者在两个字符串外面用左右圆括号'
'包围它们')
print(text)

# 可以将r或R放在字符串前面，表示它是一个原始字符串，其中的任何转义字符都将被忽略
print(r'hello\t\tworld\n')                      # hello\t\tworld\n
print('hello\t\tworld\n')                       # hello		world

# 切片，获取某段的字符串
word = 'Python'
print(word[0:2])                                # Py
print(word[2:5])                                # tho
print(word[:2])                                 # Py
print(word[2:])                                 # thon
print(word[:-2])                                # Pyth
print(word[-3:])                                # hon
print(word[:])                                  # Python

# 和list一样，可以用in判断一个字符是否在一个字符串对象中
s = 'hello'
print('h' in s)                                 # True
print('H' in s)                                 # False

# upper()将字符串中的字母转为大写字母,lower()将字符串中的字母转为小写字母
s = 'hello'
print(s.upper())                                # HELLO
s = 'HELLO'
print(s.lower())                                # hello

# lstrip()、rstrip()和strip()分别用于删除字符串中的左侧、右侧和左右两侧位置的空白字符
s = '   hello,  world   '
print('#', s.lstrip(), '#')                     # # hello,  world    #
print('#', s.rstrip(), '#')                     # #    hello,  world #
print('#', s.strip(), '#')                      # # hello,  world #

# split()通过指定分隔符对字符串进行分割，split(sep=None, max=-1)，sep是分隔符，默认为空格，max表示最大分割次数
s = 'hello world'
print(s.split())                                # ['hello', 'world']
s = 'hello,world'
print(s.split())                                # ['hello,world']
print(s.split(','))                             # ['hello', 'world']

# str.join(sequence)用这个字符串str连接序列sequence中的其他字符串
s = ["Monday", "Wednesday", "Friday"]
result = "-".join(s)
print(result)                                   # Monday-Wednesday-Friday

# replace(old, new[, max])将字符串中匹配old的子串替换为字符串new，如果指定max，则最多替换max次
string = 'hello world, hello world, hello world'
print(string.replace('wor', 'woo', 2))          # hello woold, hello woold, hello world

# format()方法针对一个包含占位符{}的字符串，将参数传给format()方法来取代占位符{}
name = "lihua"
where = "shanghai"
work_in = "{} 在 {} 工作！".format(name, where)
print(work_in)                                  # lihua 在 shanghai 工作！
```

### 3.4 元组

● 创建tuple字典对象可以用圆括号、内置函数tuple()。不能用解析式直接创建tuple对象，但可以将解析式作为tuple()的函数参数用于创建tuple对象

● 不同于list, tuple对象不可修改

● 对list的操作大部分也可以用于tuple。例如，下标运算符访问一个或多个元素；成员运算符in和not in；比较运算符；+和*运算符；for循环；内在函数max()、min()、sum(); tuple类的自身方法，如count()、index()等。

```python
# 可以用+拼接两个字符串，可以用*重复tuple对象
t = (1, 2, 3) + (5, 6, 7)
print(t)                                        # (1, 2, 3, 5, 6, 7)
t = (1, 2, 3) * 3
print(t)                                        # (1, 2, 3, 1, 2, 3, 1, 2, 3)

# 和str、list一样，运算符in和not in分别用于判断一个元素是否“在”或“不在”一个tuple对象里
t = (2, 3.14, 'hello', [5, 6])
print(3.14 in t)                                # True
print(3 not in t)                               # True

# 和str、list一样，可以用for…in遍历一个tuple对象
for name in ('Zhang', 'Wang'):
    print("Hello, ", name, end=" ")             # Hello,  Zhang Hello,  Wang

# 可以用内置函数(max()、min()、sum()等)对一个tuple对象进行操作
t = (23, 19, 2, 50, 11)
if 19 in t:
    print('19 is in tuple t')                                       # 19 is in tuple t
print('max, min and sum of tuple t is:', max(t), min(t), sum(t))    # max, min and sum of tuple t is: 50 2 105
for e in t:
    print(e, end=" ")                                               # 23 19 2 50 11 
print()
print(2*t)                                                          # (23, 19, 2, 50, 11, 23, 19, 2, 50, 11)
t2 = tuple(range(3, 10, 2))
print(t2)                                                           # (3, 5, 7, 9)
print(t+t2)                                                         # (23, 19, 2, 50, 11, 3, 5, 7, 9)
```

### 3.5 集合

集合(set)是无序的不重复元素容器类型。可以将一个set当作一个list，但需注意如下几个问题：

    ● set中的元素没有顺序，所以无法通过下标访问其中的元素，但可以检查一个值是否在这个集合里

    ● set中不允许出现重复的元素。因此，可以利用set对list或tuple中的元素去重(去除重复元素)

    ● 可以对set执行数学上的并、交、差、对称差等运算

● set(集合)是无序的不重复元素的容器类型。集合中的元素没有顺序之分，下标运算符不能作用于set对象

● 作为容器对象，可用in和not in分别检查元素是否在集合里。可用for循环遍历其中的元素

● 对set对象可执行数学上的并、交、差、对称差等运算。可用比较运算符(<、>、==等)比较两个set对象的关系

● 可用内置函数或set的方法对set对象进行操作。例如，函数sum()求和，add()和remove()方法分别可添加、删除元素等。update()可以添加1个或多个对象

```python
# 如果要创建一个空的set对象，要用内置函数set()
es = set()
print(type(es))                                                     # set

# 像list、tuple、str等容器一样，可以用for循环遍历set对象的所有元素
s = {2, 3.14, 'hello'}
for e in s:
    print(e, end=" ")                                               # hello 2 3.14 

# 和list、tuple一样，可以用内置函数，如len()、max()、min()、sum()等对set对象进行操作
s = {8, 2, 11, 7}
print(s)                                                            # {8, 2, 11, 7}
print(len(s))                                                       # 4
print(min(s))                                                       # 2
print(max(s))                                                       # 11
print(sum(s))                                                       # 28
print(id(s))                                                        # 140070297998720

# 用add()方法添加对象，用remove()方法删除一个对象
s = {'python', 'hello', 'world', '小白'}   
print(s)                                                            # {'hello', '小白', 'python', 'world'}
print(id(s))                                                        # 140181317334400

s.add(3.14)
print(s)                                                            # {3.14, 'python', 'hello', '小白', 'world'}
print(id(s))                                                        # 140181317334400

s.remove('hello')
print(s)                                                            # {3.14, 'python', '小白', 'world'}

# 用remove()方法删除一个不存在的值会报错，用discard()方法删除一个不存在的值时，不会抛出异常
# 可以用update()方法一次添加多个值。update()方法的参数是一个可迭代对象，如list、tuple、str等类型对象
s = {1, 2, 3}
s.update('hello')
print(s)                                                            # {1, 2, 3, 'h', 'l', 'o', 'e'}
s.update([23, 17])
print(s)                                                            # {1, 2, 3, 'h', 'l', 'o', 'e', 17, 23}

# 如果要删除一个set对象的所有元素，则可以用clear()方法
s = {1, 2, 3}
s.clear()
print(s)                                                            # set()
```

### 3.6 字典

● 创建dict对象有四种方法：花括号{}、内置函数dict()、fromkeys()方法、字典解析式

● 对于一个dict对象，下标运算符[]或update()方法可以通过键(key)查询、修改、删除、添加元素

● 用方法keys()、values()、 items()可以分别获得一个dict对象的所有键、所有值、所有元素。可以迭代访问其中的键(keys)、值(values)或键值对(key-values)

● 可以通过内置函数或dict的方法操作一个dict对象

● 可以用in检测某个键是否在dict对象里，但不能检测某个值是否在dict对象中

```python
# 创建空的dict对象
d = {}
d1 = dict()

# 用{}创建有初始值的dict对象
d1 = {'李平':78.5, '张伟':80, '赵四':90}
d2 = {'李平':78.5, 1:[2, 4, 3]}                                     # key既可以是字符串，也可以是整数

# 用函数dict()创建有初始值的dict对象
d3 = dict({'李平':78.5, 1:[2, 4, 3]})
d4 = dict(LiPing=78.5, 张伟=[2, 3, 4])

d5 = {x:x**3 for x in range(5)}
print(d)                                                            # {}
print(d1)                                                           # {'李平': 78.5, '张伟': 80, '赵四': 90}
print(d2)                                                           # {'李平': 78.5, 1: [2, 4, 3]}
print(d3)                                                           # {'李平': 78.5, 1: [2, 4, 3]}
print(d4)                                                           # {'LiPing': 78.5, '张伟': [2, 3, 4]}
print(d5)                                                           # {0: 0, 1: 1, 2: 8, 3: 27, 4: 64}

# fromkeys()方法也可以用于创建dict对象
keys = ('python', 1)
d = dict.fromkeys(keys)
print(d)                                                            # {'python': None, 1: None}
d2 = dict.fromkeys(keys, 'hello')
print(d2)                                                           # {'python': 'hello', 1: 'hello'}

# 获取键的值的方法是用下标运算符[]，将键传入，以得到该键对应的值
d = {'李平':78.5, '张伟':80, '赵四':90}
print(d['李平'])                                                     # 78.5

# 为了避免抛出错误，还可以用get()方法代替下标运算符[]得到一个键对应的值，如果没有这个键，就返回该函数第2个参数设置的默认值
d = {'李平':78.5, 1:[2, 4, 3]} 
print(d.get('李平'))                                                 # 78.5
print(d.get(2))                                                     # None

# 可以通过下标插入或更新一个键值
d = {'李平':78.5, 1:[2, 4, 3]}
d['李平'] = ('男', 23)
print(d)                                                            # {'李平': ('男', 23), 1: [2, 4, 3]}
d['赵薇'] = ('女', 18)
print(d)                                                            # {'李平': ('男', 23), 1: [2, 4, 3], '赵薇': ('女', 18)}

# update()方法也可以插入或更新一个或多个键-值
d = {'李平':78.5, 1:[2, 4, 3]}
d.update({'李平': ('男', 23), 'pytho':2})
print(d)                                                            # {'李平': ('男', 23), 1: [2, 4, 3], 'pytho': 2}

# 可以用del()或pop()方法删除一个键对应的键-值对，其中pop()方法会返回被删除的键对应的值,可以用clear()方法删除一个dict中所有的键-值对
d = {'李平': ('男', 23), 1: [2, 4, 3], 'pytho': 2}
del d['李平']
print(d)                                                            # {1: [2, 4, 3], 'pytho': 2}
d.pop(1)
print(d)                                                            # {'pytho': 2}
d.clear()
print(d)                                                            # {}

# 集合dict的keys()、values()、items()方法可分别返回一个dict对象的所有键、所有值、所有键值对构成的可迭代对象
d = {'a':1, 'b':2, 'c':3}
print(d.keys())                                                     # dict_keys(['a', 'b', 'c'])
print(d.values())                                                   # dict_values([1, 2, 3])
print(d.items())                                                    # dict_items([('a', 1), ('b', 2), ('c', 3)])

# 用for…in循环可遍历一个dict对象的每个键，或遍历keys()、values()或items()方法返回的包含键、值或键值的可迭代对象
d = {'a':1, 'b':2, 'c':3}
for key in d:
    print(key, end=',')                                             # a,b,c,
print()
for key in d.keys():
    print(key, end=',')                                             # a,b,c,
print()
for value in d.values():
    print(value, end=',')                                           # 1,2,3,
print()
for key,value in d.items():
    print(key, value, sep='-', end=',')                             # a-1,b-2,c-3,

# 内置函数len()可查询dict对象的元素个数，内置函数str()可将一个dict对象转化为一个字符串表示
d = {'李平': ('男', 23), 1: [2, 4, 3], 'pytho': 2}
print(len(d))                                                       # 3
print(str(d))                                                       # {'李平': ('男', 23), 1: [2, 4, 3], 'pytho': 2}
```

## 四. 面向对象编程

### 4.1 什么是面向对象编程

● 面向对象编程就是用类刻画同类对象的共同特性，通过类的实例来表示具体的对象，并通过向对象发送消息，即调用类的方法来请求对象进行数据处理或计算

● 过程式编程将问题分解为一些过程或函数，通过向函数传递数据执行数据处理或计算

● Python既支持过程式编程，也支持面向对象式编程，两种编程方式可以混合使用

● 用关键字class定义一个类，类的属性有数据属性和方法属性。习惯上将数据属性称为成员变量，将方法属性称为方法，一个类的实例也称为对象，可以通过一个对象和成员访问运算符．访问这个对象的属性

### 4.2 类和对象

● 关键字class用于定义一个类。一个类具有实例属性和类属性，每个对象都有自己的独立的实例属性。不同对象可具有不同的实例属性，而类属性是所有对象共享的

● 通常，用构造函数__init__()定义和初始化一个对象的实例属性。在创建一个类的对象(实例)时，类的构造函数会自动被调用。其中，第一个参数self指向(引用)这个创建的对象

● 类的实例方法的第一个参数必须是self，用于指向调用这个方法的那个对象

● 在实例方法中，可以通过类名或type(self)访问类属性

● del运算符用来删除一个变量指向的对象的引用计数，也可以用来删除对象的属性。当对象本身的引用计数为0时，Python的垃圾回收机制会自动回收这个对象占用的内存资源

● 运算符重载：通过对一个类定义运算符方法，使这个运算符可以用于这种类的对象

```python
# Python用关键字class定义一个类
class Employee:
    pass
# Python创建一个类的实例(对象)是通过一个叫作构造函数的__init__()方法完成的，并且其第一个参数必须是叫作self的参数，这个参数指向(引用)要创建的对象
class Employee:
    def __init__(self):
        print("Employee构造函数用于创建一个对象")
e = Employee()                                                       # Employee构造函数用于创建一个对象

# 类的构造函数__init__()方法除self参数外，还可以传递其他参数，通常传递用于初始化实例属性的参数
class Employee():
    def __init__(self, Name, Salary):
        self.name = Name
        self.salary = Salary
e = Employee('Li ping', 5000)
print(e.name, '\t', e.salary)                                       # Li ping 	 5000

# 除构造函数外，还可以给类添加更多的方法(成员函数)
class Employee():
    def __init__(self, Name, Salary):
        self.name = Name
        self.salary = Salary
    def printInfo(self):
        print(self.name, ",", self.salary)

e = Employee('Li ping', 5000)
e.printInfo()                                                       # Li peng , 5000
e2 = Employee('Wang yan', 600)
e2.printInfo()                                                      # Wang yan , 600

# 定义一些查询和修改数据属性的方法,注：所有实例方法的第一个参数都必须是self，即引用调用这个实例方法的那个对象
class Employee():
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
    def printInfo(self):
        print(self.name, ",", self.salary)
    def set_name(self, name):
        self.name = name
    def get_name(self):
        return self.name
    def set_salary(self, salary):
        self.salary = salary
    def get_salary(self):
        return self.salary
e = Employee('Li ping', 5000)
e.printInfo()                                                       # Li ping , 5000
e.set_name('Wang Wei')
e.set_salary(5500)
print(e.get_name(), '\t', e.get_salary())                           # Wang Wei 	 5500
e.printInfo()                                                       # Wang Wei , 5500

# 注：和其他编程语言(如C++)不同，在同一个类中不能定义多个同名但形参不同的成员函数，即不能定义重载成员函数

# 除实例属性外，还可以给一个类定义类属性，类属性是指类的所有对象都共享的属性，是定义在类的方法外面的属性
class Employee:
    count = 0
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
        Employee.count +=1
    def printInfo(self):
        print('Employee总数：', self.count)
e = Employee('Li ping', 5000)
e2 = Employee('Wang yan', 600)
print(e.count)                                              # 2
print(e2.count)                                             # 2
print(Employee.count)                                       # 2
print()
e.printInfo()                                               # Employee总数： 2
e2.printInfo()                                              # Employee总数： 2

# 类属性是不属于一个具体的类实例(对象)的，通常，可以通过类名.类属性来查询或修改类属性，也可通过实例名.类属性(包括self.类属性)来查询实例属性，但不能通过实例名.类属性(包括self.类属性)的方式来修改类属性，否则就是创建了实例属性，而不是访问类属性
class C:
    count=0
    def __init__(self):
        C.count += 1
    def inc(self):
        self.count += 1
c1 = C()
c2 = C()
print(c1.count, c2.count, C.count)                          # 2 2 2
c1.inc()                                                    
print(c1.count, c2.count, C.count)                          # 3 2 2
print(c1.__dict__)                                          # {'count': 3}
print(c2.__dict__)                                          # {}
# inc()方法中的“self.count+=1”等价于“self.count=self.count+1”，赋值语句的左边self.count相当于为这个实例创建该类的一个新的实例属性count，而右边的self.count仅仅是查询，通过这个实例调用inc()方法时，右边的self.count就是这个实例已经创建好的实例属性count，而不是类属性count

# del运算符可以用于删除一个对象的实例属性或类属性
class Employee:
    count = 0
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
        Employee.count +=1
    def printInfo(self):
        print('Employee总数：', self.count)
e = Employee('Li ping', 5000)
e2 = Employee('Wang yan', 600)
del e.name
print(e.__dict__)                                        # {'salary': 5000}
print(e2.__dict__)                                       # {'name': 'Wang yan', 'salary': 600}

# Python可以通过给类的属性名前添加两个下画线__来禁止外界访问这些属性，加了这两个下画线后属性就成为了私有属性
class Employee:
    def __init__(self, name, salary):
        self.__name = name
        self.__salary = salary
    def printInfo(self):
        print(self.__name, ",", self.__salary)
e = Employee('Li ping', 5000)
e2 = Employee('Wang yan', 600)
e.printInfo()                                           # Li ping , 5000
e2.printInfo()                                          # Wang yan , 600
e.__salary = 7000
e.printInfo()                                           # Li ping , 5000
print(e.__salary)                                       # 7000
# 最后一句的“print(e.__salary)”的输出信息为什么又显示7000呢？这是因为，Python可以随时给一个实例绑定实例变量。实际上，e除私有变量外，又多了一个变量__salary，原来的私有变量实际上被Python修改成了_Employee__salary，即在这些名字前加上了一个带下画线的类名。因此，在Python中，实际上是无法真正做到访问控制的，实际上外界仍然是可以访问私有属性的。

# 例如，外界不能直接访问__salary，但还有可以通过修改的名字e._Employee__salary去访问并修改它
e._Employee__salary = 3100
e.printInfo()                                           # Li ping , 3100
print(e._Employee__salary)                              # 3100
```

### 4.3 派生类

● 可以从一个已有的类定义一个派生类。派生类也称为“子类”，而其依赖的类称为“父类”“基类”或“超类”。派生类(对象)继承了基类(对象)的属性，同时派生类也可以定义自己特有的属性或覆盖基类的同名属性。派生类的方法可以用super()方法调用其基类的方法

● 派生类可以直接继承多个基类，即从多个基类定义一个派生类，这种定义派生类的方式称为“多重继承”或“多继承”

● 对一个派生类，可以通过属性解析“深度优先，自左向右”的顺序查找其属性

```python
# Python允许在一个已经存在的类的基础上定义一个新的类，新的类会继承已有类的属性，但也会添加自己特有的一些属性，这个新的类就称为“派生类”或“子类”，而原有的类称为“基类”“父类”或“超类”

# 从一个基类(Base)定义一个新的派生类(Derived)的格式如下：
class Derived(Base):
    pass

# 只要在定义类Manager的类名后的圆括号里写入类Employee的类名，类Manager就会自动继承类Employee已有的属性
class Employee():
    '这是一个描述公司普通雇员的类'
    def __init__(self, Name, Salary):
        self.__name = Name
        self.__salary = Salary
    def printInfo(self):
        print(self.__name, ",", self.__salary)
    def get_name(self):
        return self.__name
    def set_name(self, name):
        self.__name = name
class Manager(Employee):
    pass
m = Manager('Li ping', 5000)
m2 = Manager('Wang yan', 600)
m.printInfo()                                       # Li ping , 5000
m2.printInfo()                                      # Wang yan , 600

# 内置函数isinstance()可以检查一个对象是否是某个类的实例(对象)
print(isinstance(m, Manager))                       # True
print(isinstance(m, Employee))                      # True

# 下例给类Manager添加不同于类Employee的特有的数据属性，level(经理级别)和employees(管理的雇员列表)
class Manager(Employee):
    def __init__(self, name, salary, level, employees):
        Employee.__init__(self, name, salary)
        self.__level = level
        self.__employees = employees
    def printInfo(self):
        Employee.printInfo(self)
        print("经理级别：", self.__level)
        print("管理的员工有：")
        for e in self.__employees:
            print(e.get_name())
    def get_level(self):
        return self.__level
e = Employee('Li ping', 5000)
e2 = Employee('Wang yan', 600)
employees = []
employees.append(e)
employees.append(e2)
m = Manager('赵四', 7000, 2, employees)
m.printInfo()
print()
print(m.get_name(), "的级别：", m.get_level())

# 在派生类中可以通过super()方法来调用父类的方法,使用super()方法可避免写基类名
class Manager(Employee):
    def __init__(self, name, salary, level, employees):
        super().__init__(self, name, salary)
        self.__level = level
        self.__employees = employees
    def printInfo(self):
        super().printInfo(self)
        print("经理级别：", self.__level)
        print("管理的员工有：")
        for e in self.__employees:
            print(e.get_name())
    def get_level(self):
        return self.__level

# 子类通过定义和父类同名的属性可以覆盖父类的数据属性和方法
class Base:
    cvar = 'hello'
    bcvar = 3
    def f(self):
        var = 2
        print(Base.cvar, var)
    def g(self):
        print('函数g')
class Derived(Base):
    cvar = 'derived'
    def f(self):
        var = 3.14
        print(Base.cvar, Derived.cvar, var)
d = Derived()
print(d.bcvar)                                              # 3
print(d.cvar)                                               # derived
d.g()                                                       # 函数g
d.f()                                                       # hello derived 3.14

# 一个类可以继承多个类的特性，即可以定义一个从多个类派生出来的派生类
class Base1:
    cvar1 = 'base1'
    def f(self):
        var1 = 1
        print(Base1.cvar1, var1)
    def g(self):
        print('函数g')
class Base2:
    cvar2 = 'base2'
    def f(self):
        var2 = 2
        print(Base2.cvar2, var2)
class MultiDerived(Base1, Base2):
    var = [1, 2, 3]
m = MultiDerived()
m.g()                                                       # 函数g
m.f()                                                       # base1 1
# 虽然派生类继承了类Base1和类Base2的同样签名的f()方法，但是在调用m.f()时只调用了类Base1的f()方法。这是因为，在调用f()方法时，Python解释器首先在该类自身的方法里寻找这个方法，如未找到，就到其上层基类去寻找，在上层基类中又遵循从左到右的顺序查找。这种深度优先、从左到右寻找一个对象的属性的过程称为“属性解析”。这种寻找类的属性遵循的解析次序称为“方法解析次序”(Method Resolution Order, MRO)
```

### 4.4 绑定属性

● 可以给一个类或类的对象动态绑定属性。动态绑定方法属性需要使用types模块的

● 对象的__dict__属性是一个包含了该对象其他所有属性的字典对象

● __slots__限制一个类能够添加的属性，可节省内存、提高访问速度。

## 五. 输入/输出

### 5.1 标准的输入/输出


● 介绍标准输入函数input()和输出函数print()。可通过C语言风格的%格式串或生成一个格式化新字符串控制print()的输出格式

● 介绍字符串str的格式化方式：一种方式是利用str的format()方法；另一种方式是利用字符串的各种切割、连接等方法。介绍pprint模块的pprint()格式化打印函数、pformat()格式化函数和PrettyPrinter类

```python
# Python内置的标准输出函数print()可以接收多个输出值，这些值之间以逗号隔开，函数print()请输出的值以空格隔开，并且在输出这些值后还会换到新的一行
print(2, 3.14, 'hello', [5, 8, 6])                                          # 2 3.14 hello [5, 8, 6]

# 可以通过给函数print()传递关键字参数sep，以改变输出时输出项之间的分割字符串
print(2, 3.14, 'hello', [5,8.6], sep='-/')                                  # 2-/3.14-/hello-/[5, 8.6]

# 函数print()默认在输出的最后输出一个换行符“\n”，即换到新的一行

# 若要改变函数print()的默认换行操作，则可以给函数print()的关键字参数end传递一个相应的值
for i in range(3):
    print(i, end="+-")                                                      # 0+-1+-2+-

# 格式化输出: %s表示格式串后的输出项name以字符串形式输出，而%.2f表示输出的浮点数用四舍五入保留小数点后两位。格式转换符和输出项是逐一对应的
# 常见的格式转换符有：%d：整数； %f：浮点数； %s：字符串；%p：数据的内存地址(十六进制)
name = 'Wang'
score = 56.345
print("学生 %s的分数是 %.2f" % (name, score))                                # 学生 Wang的分数是 56.34
print("该学生的学号是 %d . " % 3)                                            # 该学生的学号是 3 . 

# 可以使用前面介绍过的str的format()方法对一个字符串格式化。通过{ }和：来代替传统的%方式
name = 'Wang'
score = 56.345
print("学生 {}的分数是 {:.2f}".format(name, score))                         # 学生 Wang的分数是 56.34
print("该学生的学号是 {} . ".format(3))                                     # 该学生的学号是 3 .

# 可以用str.rjust()、str.ljust()、str.center()控制字符串输出的宽度和字符串的对齐方式(靠右、靠左、中间)
s = 'hi'
t = 'the'
print(s.rjust(5), t.rjust(10))                                              #    hi        the
print(s.ljust(5), t.ljust(10))                                              # hi    the       
print(s.center(5), t.center(10))                                            #   hi     the    
s.rjust(5)

# 标准输入内置函数input()
name = input("请输入姓名：")
```

### 5.2 文件读/写

● 内置函数open()用于打开或创建文件，该函数返回一个文件对象。文件访问模式是由几个字符，如’r' 'w' 'a' 'b' '+’组合表示的。文件分为二进制和文本文件

● 通过文件对象的read()方法、write()方法等可以读/写文件内容，通过tell()方法、seek()方法可以查询或改变当前位置

● 文件使用完，要用close()方法关闭。也可以采用with ... as打开文件，以保证文件总能自动被关闭。

```python
# 内置函数open()用于打开一个文件。该函数接收一个文件名(文件路径)作为参数，返回一个文件对象(也称句柄)，然后就可以通过这个文件句柄读或修改(写)该文件的内容
# fileObject = open(file_name[, access_mode, buffering])第一个参数file_name是要打开的文件名(文件路径)，后面是可选参数，参数access_mode(访问模式)用一些字符表示使用文件的方式。例如，字符r表示该文件只能读(不能被修改)；字符w表示只能修改(写)这个文件，如果存在同名的文件，则会被擦除；字符a表示以“追加”方式向文件的末尾写入数据；字符r+表示该文件既可以读也可以写。如果没有提供access_mode参数，则该参数默认值是r。可选参数buffering表示读/写文件时的缓冲区的大小，如果被设为0，就不会有缓冲区。如果取负值，则缓冲区大小为系统默认。当设置缓冲区后，读取的文件块的内容首先放入缓冲区，然后才转变为程序的数据。

# fileObject.write(str)向文件对象fileObject代表的文件中写入一个字符串str，并返回写入的字符个数
f = open('text.txt', 'w')
count = f.write('Hello, world! ')
print('写入的字符个数：', count)                                    # 写入的字符个数：13         
f.close()

# 对于已经存在的文件可以用只读模式('r')打开这个文件，然后可以用read()方法读取文件的全部内容
f = open('text.txt', 'r')
f.read()                                                         # 'Hello, world! '
# 每次读/写完文件，就要及时调用函数close()关闭它，否则容易造成数据丢失或其他程序无法读/写的错误

# 可以使用with...as打开文件，以保证文件的函数close()被自动调用，从而可以防止因忘记调用函数close()而引起的问题
with open('text.txt', 'w') as f:
    f.write('教小白精通编程')
with open('text.txt', 'r') as f:
    print(f.read())                                              # '教小白精通编程'

# 在文件中已有内容的基础上添加新的内容，调用函数open()时以“追加模式”，即’a’打开文件
with open('text.txt', 'a') as f:
    f.write('新的内容')
with open('text.txt', 'r') as f:
    print(f.read())                                              # '教小白精通编程新内容'

# 该方法返回读取的字符串(或字节序列)，如果遇到了文件结尾，则返回一个空串
with open('text.txt', 'r') as f:
    while True:
        chunk = f.read(4)
        if not chunk:
            break
        print(chunk, end=" ")                                   # 教小白精 通编程新 内容

# fileObject.readline([size])：从文件对象fileObject表示的文件中读取一行，即从文件对象的当前位置一直读取内容直到遇到换行符\n，或者如果提供了参数size，则最多读取size个字符
with open('text.txt', 'a') as f:
    f.write("Hello, world! ")
    f.write("\n你好")
    f.write("\nhello")
with open('text.txt', 'r') as f:
    while True:
        line = f.readline()
        if not line:
            break
        print(line.strip, end=" ")  

# fileObject.readlines([sizehint])：读取文件直到结束符EOF，并返回一个列表。如果提供了参数sizehint，那么读取的所有行的字节数不超过sizehint
with open('text.txt', 'r') as f:
    for line in f.readlines():
        print(line.strip()) # 把末尾的'\n'删除

# fileObject.writelines(iterable)：将一个iterable对象表示的一系列字符串写入文件对象fileObject代表的文件中
f = open(r'test.txt', 'w')
f.writelines(['hello world', '教小白精通编程'])
f.close
f = open(r'test.txt')
f.read()
```

## 六. 错误和异常

● 程序的错误分为语法错误和运行时错误，而运行时错误又分为异常错误和逻辑错误

● 可以用try...except程序块对不同的异常错误进行异常处理。异常没有发生时，会执行else子句，而无论异常是否发生或是否处理异常，都会执行finally子句

● 程序员可以自己定义异常类型，也可由程序员自己抛出各种异常

● 自定义清理语句，如with语句，可以确保在任何情况下资源都能得到释放

● 调试程序的方法主要有打印(print())、断言(assert)、日志记录(logging)、用调试工具(pdb模块)等设置断点或单步调试。

### 6.1 错误

● 编写程序时不可避免地会产生各种错误，错误主要有两种，语法错误(syntaxerrors)和运行时错误(run-time error)

● 运行时错误是程序运行过程中出现的错误，又分为异常错误和逻辑错误。语法错误和异常错误都会使程序停止执行，而逻辑错误不会使程序停止执行，但运行结果和预期结果不一致

● 所有内置的错误或异常类都是从一个最基本的异常类BaseException派生出来的

● 有时，程序既没有语法错误，也没有抛出运行时异常错误，即程序能正常执行，但是运行的结果和预期的结果不一致，这种运行时错误称为“逻辑错误”

### 6.2 异常处理

将可能引起异常的代码放在try子句(程序块)中，如果try子句完成后没有异常发生，就会忽略except程序块(也称except子句)继续执行后续代码。如果try子句中代码执行时出现了错误而抛出异常时，except程序块(子句)会处理出现的异常(错误)。一旦异常被except子句处理完，程序就会从“try…except”语句后面的语句继续执行下去。

```python
# except子句对异常的具体处理，既可能是向用户报告某种发生的错误，也可能是终止程序的执行，还可能继续将异常交给其上一级调用函数处理，甚至也可能什么也不做。
try:
    x = int(input('Enter x: '))
    y = int(input('Enter y: '))
    print(x/y)
    print('x/y结果正常')
except:
    print('出现了异常！')
print('hello world!')                                       # Enter x: 3 Enter y: 0 出现了异常！ hello world!

# 在except关键字后面说明具体的异常类型，以捕获这个特定异常类型的异常对象，可以用as关键字给这个类型的异常对象起一个名字
try:
    x = int(input('Enter x: '))
    y = int(input('Enter y: '))
    print(x/y)
    print('x/y结果正常')
except ZeroDivisionError as e:
    print('x/y出现了除0的错误！', e)
except ValueError as e:
    print('类型错误ValueError', e)
print('hello world!')  

# 如果想处理那些未知类型的异常，则可以在捕获特殊的异常的后面再捕获更一般的异常，由于Exception是大部分异常的父类，通常情况下也可用Exception代替BaseException
try:
    x = int(input('Enter x: '))
    y = int(input('Enter y: '))
    print(x/y)
    print('x/y结果正常')
except ZeroDivisionError as e:
    print('x/y出现了除0的错误！', e)
except ValueError as e:
    print('类型错误ValueError', e)
except BaseException as e:
    print('BaseException异常处理！', e)
print('hello world!')  

# 可以在最后的except子句的后面添加一个else子句，当没有异常发生时，会自动执行else子句。但如果发生了异常，则不会执行这个else子句
try:
    x = int(input('Enter x: '))
    y = int(input('Enter y: '))
    print(x/y)
    print('x/y结果正常')
except ZeroDivisionError as e:
    print('x/y出现了除0的错误！', e)
except ValueError as e:
    print('类型错误ValueError', e)
except BaseException as e:
    print('BaseException异常处理！', e)
else:
    print('没有任何异常！')
print('hello world!')  

# 和else子句不同，try异常处理语句后面的finally子句无论有没有出现异常都会被执行
try:
    x = 1/1
    print(x)
finally:
    print('无论是否出现异常，是否处理异常，总是会执行这一句')

# Python解释器在运行时可以自动抛出异常，程序员也可以在任何代码处用raise抛出异常
try:
    score = float(input('请输入分数：'))
    if score < 0:
        raise ValueError('出现了值异常错误！')
except ValueError as e:
    print(e)
```

### 6.3 调试程序

调试一个程序通常有下面几种方法:

● 用函数print()等在代码的不同位置输出一些数据，查看这些输出值是否和预期值一致

● 在代码中不同位置插入断言语句，检查某个条件是否满足

● 使用日志logging功能，类似print()的调试方法，只不过日志是将调试信息输出到文件中，以方便程序员通过日志文件分析程序的错误原因

● 用调试工具通过设置断点或单步执行检查相应变量值，找出引起错误的原因

## 七. 高级语法特性

### 7.1 容器、可迭代对象、迭代器、生成器

生成器函数与包含return的函数执行机制区别如下:

● 包含return的函数当遇到return语句时，会停止函数执行并返回，函数的每次执行都是独立的，且是从头开始执行的，不会保存上一次执行的状态和位置

● 包含yield的生成器函数用于产生一系列值，每次执行时当遇到yield语句时会停止执行并返回yield语句的结果，但内部会保留上一次执行的状态，下一次执行时将从上一次的yield之后的代码继续执行，直到再次遇到yield时返回

```python
# 生成器函数是指包含yield关键字的函数，其格式是：
def gen(n):
    for i in range(n):
        yield i
# 函数gen()就是一个生成器函数，其中以关键字yield开头的语句会产生一个返回值。通过传递相应的参数给这个生成器函数，可以创建一个生成器对象
g = gen(5)
print(g)                                                    # <generator object gen at 0x7f6086eab900>
print(typeg())                                              # <class 'generator'>
``` 

### 7.2 @property

● getters()和setters()是面向对象为了达到数据封装效果的常用方法，可以用这些方法作为接口去访问私有数据属性

● 函数property()是一个装饰器函数，通过装饰器函数property()包裹了相应的数据属性getters()和setters()方法，从而使其可以直接通过成员访问运算符．去访问这些属性

● @property比直接调用函数property()更加方便。对于某个数据属性的getter()方法，在前面添加@property，就可以直接查询类对象的这个方法对应的数据属性，而对于某个数据属性的setter()方法，在前面添加@xxx.setter，就可以直接修改类对象的这个方法对应的数据属性。

```python
class Employee:
    def __init__(self, name, salary=0):
        self.__name = name
        self.__salary = salary

    def printInfo(self):
        print(self.__name, ",", self.__salary)
    
    @property
    def name(self):
        return self.__name
    
    @name.setter
    def name(self, name):
        self.__name = name

    @property
    def salary(self):
        return self.__salary
    
    @salary.setter
    def salary(self, salary):
        if(salary<0):
            self.__salary = 0
        else:
            self.__salary = salary
e = Employee('Wang', 1000)
e.salary = 8000
e.printInfo()                                           # Wang , 8000
e.salary = -200
e.name = 'Li Ping'
e.printInfo()                                           # Li Ping , 0
```

### 7.3 类的静态方法和类方法

● 类的方法有实例方法、静态方法和类方法。实例方法的第一个参数必须是self，用于指向调用这个方法的类的实例。而类方法用@classmethod装饰器来创建，其第一个参数必须是cls，用于指向调用这个方法的类本身。静态方法用@staticmethod装饰器来创建，和普通的外部函数一样，没有任何隐式参数

● 类的静态方法通常处理和类相关的数据，而类的类方法通常处理类本身的数据

● 实例方法只能通过类的实例来调用，而类的静态方法和类方法既可以通过类名也可以通过类的实例来调用

```python
# 类的静态方法用装饰器@staticmethod开头，没有任何和类或类的实例有关的隐式参数(如self)
# 类的静态方法既可以通过类名访问，也可以通过类的实例去访问
class C:
    @staticmethod
    def static_f(arg1, arg2, ...):
        ...

# 类的类方法用装饰器@classmethod开头，其第一个参数是表示类本身的隐式参数cls
class C:
    @classmethod
    def class_f(cls, arg1, arg2, ...):
        ...
```