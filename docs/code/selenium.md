# Selenium WebDriver 框架

## 一. Selenium定义

Selenium测试直接运行在浏览器中，就像真正的用户在操作一样。支持的浏览器包括IE（7, 8, 9, 10, 11），Mozilla Firefox，Safari，Google Chrome，Opera等。这个工具的主要功能包括：测试与浏览器的兼容性——测试你的应用程序看是否能够很好得工作在不同浏览器和操作系统之上。测试系统功能——创建回归测试检验软件功能和用户需求。支持自动录制动作和自动生成 .Net、Java、Perl等不同语言的测试脚本。

Selenium WebDriver是一个被打了包的模块，该模块内部封装了一套可以操作网页元素的方法。

__使用Xpath来实现对网页元素的精准定位__

## 二. Selenium工具组

### 1. Selenium IDE：一个火狐插件

点击这个插件就进入录制界面，能够记录用户的操作，并且将其导出为可重复使用的测试脚本，并且支持多种语言

优点：

无需编程技能即可快速上手

缺点：

1. 分散的脚本不可重用且难以维护，一旦UI发生变化测试就很受影响。
2. 系统在测试之前必须可用。不适用于ATDD
3. 仅支持firefox，不支持其他浏览器，无法做浏览器兼容性测试

应用：主要用来创建快速的bug重现脚本，以帮助用户进行自动化辅助的探索性测试

### 2. selenium RC（Selenium 1）已被废弃

运行原理：在浏览器中注入javaScript（selenium core）来执行测试

优点：

支持的浏览器多，几乎支持所有的浏览器

缺点 ：

1. 需要开始selenium server服务。
2. 为了防止恶意的javaScript，所有浏览器都加强了对javaScript的安全策略，所以有些场景selenium 1没法支持。（浏览器由于安全问题不允许不同域之间的JS调用，而selenium1中的工作方式就是在宿主页面注入JS并且通过调用JS来执行测试操作的）
3. 编程方式更偏向于面向过程，可能会导致项目中一大堆重复的方法

### 3. selenium 2（webdriver）

运行原理：通过原生浏览器支持或者是浏览器扩展直接控制浏览器。(原生浏览器是指火狐、IE、谷歌（Chrome）、Safari、Opera等这一类拥有完整独立内核的浏览器)

优点：

1. 提供了一套友好的API，使得自动化测试代码的可读性和可维护性大大提高
2. 相对selenium1来说，selenium2的运行速度快些。
3. 可以驱动本地浏览器，从而确保测试的行为能够尽可能地接近于用户行为
4. 能够绕过js限制
5. 支持Android(AndroidDriver)和iPhone(iPhoneDriver)的移动应用测试。
6. 还可以做无界面的前端自动化测试，HtmlDriver

缺点：

支持的浏览器少，firefox(FriefoxDriver)，ie(InternetExploerDriver)，opera(OperaDriver)，chrome（ChromeDriver）

### 4. Selenium Grid

能够让测试用例在不同环境不同时间并行测试，从而提高测试效率。支持selenium 1和selenium2。Selenium Grid一般用于分布式测试和集群测试，需要在多台机器同时执行测试时，可以选择使用该工具。

## 三. Xpath之相对路径定位法

### 1. 相对路径加id属性进行元素定位

如果一个节点含有id属性，那么毫无疑问就应该选择id属性来进行定位，因为id的属性值具有唯一性，可以唯一标识该网页元素。

```
基本格式：//任意节点[@id="属性值"]   任意节点可以用*表示任意节点，如表达式：//*[@id="login_home"]  

表达式：//a[@id="login_home"]      其中‘//’表示当前HTML文档中的任意节点, ‘//a’表示在当前HTML文档中找到的多有a节点，a表示是在当前HTML文档中找到所有的a节点  
//a[@id="login_home"]表示在当前HTML文档中找到一个id属性为“login_home”的a节点
```

### 2. 相对路径加非id属性进行元素定位

```
基本格式：//任意节点[@非id的任意属性="属性值"]    如表达式：//input[@name="login_home"]
```

### 3. 相对路径加contains()函数进行元素定位

如果一个节点既没有id属性，其他属性也不具备唯一性，但该元素包含有元素信息，且该信息具有唯一性，那么此时可以用相对路径加contains(text(),'')来进行定位。

```
基本格式：//包含有文本信息的节点[contains(text(),'文本信息')] 

如表达式：//a[contains(text(),'新闻活动')]  该表达式表示：在当前HTML文档中找到一个包含文本信息“新闻活动”的a节点
```

### 4. 相对路径加非id属性加contains()函数进行元素定位

```
基本格式：//包含有文本信息的节点[@非id的任意属性="属性值"][contains(text(),'文本信息')]

如表达式：//a[@href='https://www.epubit.com'][contains(text(),'异步社区’)]    该表达式含义是，在当前HTML文档中找到一个属性为href其属性值等于“https://www.epubit.com”的节点，并要求此节点包含有文本信息“异步社区”。
如果a节点中的href属性值和该节点包含的文本信息联合起来具有唯一性，那么就很容易找到该节点，自然也就找到了该节点所对应的页面元素。
```

5. 通过浏览器自带工具自动生成路径表达式

更多关于XPath的信息可参考：https://www.w3school.com.cn/xpath/index.asp

## 四. Selenium WebDriver之初步应用

### 1. 安装Selenium WebDriver

因为Selenium WebDriver是一个第三方模块并不是Python的标准模块，因此用Python自带的pip来安装，可以执行`pip install selenium `，安装成功后还需要检查是否安装成功，可以执行`pip show selenium`，如果要卸载Selenium WebDriver，可以执行`pip uniustall selenium`

### 2. 在mac中配置Chrome浏览器的驱动程序

当调用Selenium WebDriver模块中的方法去操作浏览器和网页元素定位时，需要加载浏览器的驱动程序，因此要配置对应浏览器的驱动程序。

#### 2.1 下载对应版本的chromedriver

[chromedriver下载地址](http://npm.taobao.org/mirrors/chromedriver/)

注意 ：chromedriver的版本要与你使用的chrome版本对应

#### 2.2 将Chromedriver放到/usr/bin/路径

mac系统在10.11版本之后就不能修改usr、bin等系统文件夹的内容了。要开启权限需要进入保护模式：

1、重启，重启过程中按option键

2、在一个磁盘页面弹出来之后，按command+R

3、会出现一个苹果图标并加载很久，不要害怕，这不是在重装系统

4、在保护模式界面从左上角打开终端，输入`csrutil disable`

5、重启，command+C复制Chromedriver，在finder中通过‘前往-->前往文件夹-->输入/usr/’进入usr隐藏文件夹，然后进入bin，command+V，再输入一次用户密码，就可以把Chromedriver复制到/usr/bin/了（之所以这么麻烦是因为在终端用cp指令复制还是显示没有权限）

### 3. Selenium WebDriver之初步应用

#### 3.1 导入Selenium WebDriver模块

新建一个test.py文件，并导入Selenium WebDriver模块，具体实例代码如下

```python
01 from selenium import webdriver  // 导入Selenium WebDriver模块
02 import time   // 导入time模块
03 browser = webdriver.Chrome()    // 新建对象并启动浏览器
04 browser.maximize_window()       // 调用maximize_window()方法让窗口最大化
05 browser.get("http://account.ryjiaoyu.com/log-in")  // 调用get()方法打开一个网页
06 time.sleep(3)

07 browser.find_element_by_xpath("//*[@id='Email']").clear()   // 通过clear()方法来清理文本，避免浏览器如果记住了之前的用户名，再输入用户名会干扰运行结果
08 browser.find_element_by_xpath("//*[@id='Email']").send_keys("linmlyt@qq.com")  // 调用send_keys()方法来输入文本内容
09 browser.find_element_by_xpath("//*[@id='Password']").clear()
10 browser.find_element_by_xpath("//*[@id='Password']").send_keys("123456")
11 browser.find_element_by_xpath("//*[@id='loginForm']/form/div[5]/div/input").click()  // 通过click()方法进行单击操作

12 browser.quit()   // 通过quit()方法关闭浏览器
```

下面是使用for循环连续登陆10次，range(1,11)表示生成1~10的数字，不包括11

```python
01 for i in range(1,11):
02   from selenium import webdriver
03   import time
04   browser = webdriver.Chrome()
05   browser.maximize_window()
06   browser.get("http://account.ryjiaoyu.com/log-in")
07   time.sleep(3)

08   browser.find_element_by_xpath("//*[@id='Email']").clear()
09   browser.find_element_by_xpath("//*[@id='Email']").send_keys("linmlyt@qq.com")
10   browser.find_element_by_xpath("//*[@id='Password']").clear()
11   browser.find_element_by_xpath("//*[@id='Password']").send_keys("123456")
12   browser.find_element_by_xpath("//*[@id='loginForm']/form/div[5]/div/input").click()

13   browser.quit()   // 通过quit()方法关闭浏览器  
```

参考文献：

1. 零基础快速入行入职：软件测试工程师 江楚
2. https://www.w3school.com.cn/xpath/index.asp