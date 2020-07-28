# Python

## 基础学习

1. 编写Python程序的两种方式，交互式解释器执行和运行脚本文件。
2. Python是动态类型语言，只有运行时根据变量引用的对象才能知道这个对象的数据类型。
3. Python的内在数据类型包括int、float、complex、bool、str、list、tuple、set、dict等。
4. 隐式类型转换：表达式中混合int、float类型的值时，Python会自动将int类型的值转为float类型的值。
5. 显示类型转换：可以用内置函数str()、int()、float()将其他类型的值转为str、int、float类型。
6. break语句，在重复执行循环体时，如果满足某种条件，就可以用break语句跳出循环，即不再执行循环体。
7. continue语句，在执行循环体时，如果遇到continue语句，则会停止执行其后续语句，返回循环开头继续执行循环体。
8. 循环语句（for或while）都可以在后面跟一个else语句，当for语句遍历完整个可迭代对象（如遍历完整个list的元素），或者当while语句的条件表达式是false退出时，都会执行这个else语句。但是，如果是通过break跳出循环语句则不会执行这个else语句。
9. 空语句pass用于语法上需要语句而实际不需要做任何工作的地方，或者用作占位符，以等待后续补充代码。
10. 逻辑运算符是and、or、not

```tip
E记法
3.8E16或者3.8e16读作“3.8指数16”，等同于3.8x10的16次方
```

### 变量

```python
teacher = "Mr.Lin"
teacher = "Mr.Mei" # 在python中你可以将变量重新指派到新的地址上，不能改变原来的地址，赋值实际上是改变指向数据的地址
print(teacher)   # "Mr.Mei"
```

### list - 列表

```python
# list是一个数据元素的有序序列，定义列表时用一对左右方括号[]包围，元素之间用逗号隔开。list中的元素可以是不同的类型，是一个有序序列，有唯一下标。可以用下标运算符[]访问它的一个元素或一系列连续的元素。
my_list = [2, 3.14, 8, 'python', 9, 'hello']
print(type(my_list))  # <class 'list'>
print(my_list)        # [2, 3.14, 8, 'python', 9, 'hello']
print(my_list[0])     # 2
print(my_list[3])     # python

# 还可以通过向下标运算符[]传递起始位置和结束位置的两个下标，返货连续多个元素组成的子列表（不包括结束位置的元素）
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

### tuple - 元组

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

### set - 集合

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

### dict - 字典

```python
# dict是一个“键 - 值”对的无序集合。每个元素都以“键：值”的形式存储
d = {1:'value', 'key':2, 'hello':[4,7]}
print(type(d))     # <class 'dict'>
print(d)           # {1: 'value', 'key': 2, 'hello': [4, 7]}

print(d['hello'])  # [4,7]
```

### 类型转换

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

### ==和is运算符的比较

```python
a = 1000
b = 1000
print(a==b)    # true，==比较两个对象的值是否相等
print(a is b)  # false，is判断是两个对象是否为同一个
```

### 基本运算

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

### 自增和自减

```python
number = 7
number += 1
print(number) # 8

number = 7
number -= 1
print(number) # 6
```

### input() - 输入函数

```python
# 可以通过内置函数input()从键盘输入数据
name = input("请输入你的用户名：")
print(name)
```

### print() - 输出函数

```python
print(1, end=' ')   # 函数print()默认输出后换行，可以通过设置关键字参数end的值，改变其行为
print(2, end='')
print(3, end=' ')   # 1 23 
print("Hello world!", 2)  # Hello world! 2
```

### if - 条件语句

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

### while、for - 循环语句

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

#range()该对象包括了介于start和stop之间（但不包括stop）的一系列整数的可迭代对象：
range(start, stop, step)
start、start+step、start+step+step

# 可以将函数range()产生的可迭代对象传递给内置函数list()、tuple()等构造一个list对象或tuple对象
L = list(range(2, 8, 2))
print(L)                     # [2, 4, 6]
t = tuple(range(2, -8, -2))
print(t)                     # (2, 0, -2, -4, -6)
```

### 二分查找法

```python
def binarySearch(alist, value):
    L=0                          #区间左端点
    H=len(alist)-1               #区间右端点
    found=False
    while L<=H:                    #区间（L, H）存在
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

### 冒泡排序

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

## 函数