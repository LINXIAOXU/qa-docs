# Monkey文档

## 一. Monkey基础知识

### 1.1 Monkey概况

Monkey是Google提供的一个命令行工具，可运行在模拟器或实际设备中。它向系统发送伪随机的用户事件，模拟用户的按键输入、触摸屏输入、手势输入等，从而对正在运行的应用程序进行压力测试，目的是看设备多长时间会出现异常，并观察系统的**稳定性和容错性能**。[官网](https://developer.android.google.cn/studio/test/monkey?hl=zh_cn)

Monkey程序是Android系统自带的，其启动脚本是位于Android系统的/system/bin目录的Monkey文件，其jar包是位于Android系统的/system/framework目录的Monkey.jar文件。用户主要是通过adb 命令来启动Monkey的。同时，Monkey还会对测试系统进行监测，当出现以下三种情况时会进行特殊处理：
* 如限定了Monkey运行在特定包上，当监测到试图转到其他包的操作，将对其进行阻止。
* 如应用程序崩溃或接收到任何失控异常，Monkey将记录对应的错误日志，并根据命令行参数判断是停止运行还是继续运行。
* 如果应用程序发生了程序无响应（application not responding）的错误，Monkey将记录对应的错误日志，并根据命令行参数判断是停止运行还是继续运行。

### 1.2 Monkey参数

Monkey启动命令行脚本为：

```shell
monkey [options] <count>
```

其中，options表示Monkey执行的可配置参数，是可选项（如果不指定options,Monkey将以无反馈模式启动，并把事件任意发送到安装在目标环境中的全部包）;count表示Monkey执行的事件数，为必选项。

option可分为五类：

* __基本配置类参数__

<font style="color:red">--help</font>  打印一个简单的使用指南

<font style="color:red">-v</font>   用于指定反馈信息级别，也就是日志的详细程度，分Level0、Level1、Level2；-v 默认值，仅提供启动提示，操作结果等少量信息 ，也就是Level0，比如adb shell monkey -p  xxx.xxx.xxx -v 1 ；-v -v 提供比较详细信息，比如启动的每个activity信息 ，也就是Level21，比如adb shell monkey -p xxx.xxx.xxx -v -v 1 ；-v -v -v 提供最详细的信息 ，比如adb shell monkey -p xxx.xxx.xxx -v -v -v 1

* __事件类型和频率参数__

<font style="color:red">-s < seed ></font>  伪随机数生成器的种子值，如果我们两次monkey测试事件使用相同的种子值，会产生相同的事件序列；如果不指定种子值，系统会产生一个随机值。种子值对我们复现bug很重要。使用如下adb shell monkey -p xxx.xxx.xxx -s 11111 10；这也是伪随机事件的原因，因为这些事件可以通过种子值进行复现

<font style="color:red">--throttle < 毫秒 ></font>  设置每个事件结束后延迟多少时间再继续下一个事件，降低cpu压力；如果不设置，事件与事件之间将不会延迟，事件将会尽快生成；一般设置300ms，因为人最快300ms左右一个动作，比如 adb shell monkey -p xxx.xxx.xxx -v -v -v  --throttle 300 10

<font style="color:red">--pct-touch < percent ></font>  设置触摸事件的百分比，即手指对屏幕进行点击抬起(down-up)的动作；不做设置情况下系统将随机分配各种事件的百分比。比如adb shell monkey -p xxx.xxxx.xxx --pct-touch 50 -v -v 100 ，这就表示100次事件里有50%事件是触摸事件

<font style="color:red">--pct-motion < percent ></font>  设置移动事件百分比，这种事件类型是由屏幕上某处的一个down事件-一系列伪随机的移动事件-一个up事件，即点击屏幕，然后直线运动，最后抬起这种运动

<font style="color:red">--pct-trackball < percent ></font>  设设置轨迹球事件百分比，这种事件类型是一个或者多个随机移动，包含点击事件，这里可以是曲线运动，不过现在手机很多不支持，这个参数不常用

<font style="color:red">--pct-nav < percent ></font>  设置基本的导航按键事件百分比，比如输入设备上的上下左右四个方向键

<font style="color:red">--pct-majornav < percent ></font>  设置主导航事件的百分比，（这些导航事件通常会引起你的UI中的动作，如在5路垫中心按钮，返回键或菜单键）。

<font style="color:red">--pct-syskeys < percent ></font>  设置系统物理按键事件百分比，比如home键，音量键，返回键，拨打电话键，挂电话键等

<font style="color:red">--pct-appswitch < percent ></font>  设置monkey使用startActivity进行activity跳转事件的百分比，保证界面的覆盖情况

<font style="color:red">--pct-anyevent < percent ></font>   设置其它事件百分比，这是一个包罗万象的所有其他类型的事件，如按键，设备上的其他不常用的按键，等等

* __约束限制类参数__

<font style="color:red">-p < 允许包名称 ></font>   用于约束限制，用此参数指定一个包，指定包后Monkey将被允许启动指定应用；如果不指定包，  Monkey将被允许随机启动设备中的应用（主Activity有android.intent.category.LAUNCHER 或android.intent.category.MONKEY类别 ）。比如 adb shell monkey -p xxx.xxx.xxx 1  ; xxx.xxx.xxx 表示应用包名，1 表示monkey模拟用户随机事件参数，最低1，这样就能把应用启动起来

<font style="color:red">-c < 主类别 ></font>   指定Activity的category类别，如果不指定，默认是CATEGORY_LAUNCHER 或者 Intent.CATEGORY_MONKEY；不太常用的一个参数

* __调试类参数__

<font style="color:red">--dbg-no-events</font>   指定后，Monkey 将初始启动到测试 Activity，但不会生成任何其他事件。 为了获得最佳结果，请结合使用 -v、一个或多个软件包约束条件以及非零限制，以使 Monkey 运行 30 秒或更长时间。这提供了一个环境，您可以在其中监控应用调用的软件包转换操作

<font style="color:red">--hprof</font>   如果设置此选项，则会在 Monkey 事件序列之前和之后立即生成分析报告。这将在 data/misc 下生成大型（约为 5Mb）文件，因此请谨慎使用。如需了解如何分析性能分析报告，请参阅分析应用性能

<font style="color:red">--ignore-crashes</font>   通常，当应用崩溃或遇到任何类型的未处理异常时，Monkey 将会停止。如果指定此选项，Monkey 会继续向系统发送事件，直到计数完成为止

<font style="color:red">--ignore-timeouts</font>   通常，当应用遇到任何类型的超时错误（例如“应用无响应”对话框）时，Monkey 将会停止。如果指定此选项，Monkey 会继续向系统发送事件，直到计数完成为止

<font style="color:red">--ignore-security-exceptions</font>   通常，当应用遇到任何类型的权限错误（例如，如果它尝试启动需要特定权限的 Activity）时，Monkey 将会停止。如果指定此选项，Monkey 会继续向系统发送事件，直到计数完成为止

<font style="color:red">--kill-process-after-error</font>   通常，当 Monkey 因出错而停止运行时，出现故障的应用将保持运行状态。设置此选项后，它将会指示系统停止发生错误的进程。 注意，在正常（成功）完成情况下，已启动的进程不会停止，并且设备仅会处于最终事件之后的最后状态

<font style="color:red">--monitor-native-crashes</font>   监视并报告 Android 系统原生代码中发生的崩溃。如果设置了 --kill-process-after-error，系统将会停止

<font style="color:red">--wait-DBG</font>   指阻止 Monkey 执行，直到为其连接了调试程序

* __官方隐藏类参数__

<font style="color:red">--pkg-blacklist-file < 黑名单文件 ></font>   限制 Monkey 不测试于指定黑名单文档中记录的包。若没有使用这个参数，Monkey 会测试系统内所有的包。若使用了该参数，可通过在黑名单文档内记录所有不要测试的包名称，来限制 Monkey 的执行范围。黑名单文档中每一行只能放一个包名

<font style="color:red">--pkg-whitelist-file < 白名单文件 ></font>   限制 Monkey 只测试于指定白名单文档中记录的包。若没有使用这个参数，Monkey 会测试系统内所有的包。若使用了该参数，可通过在白名单文档内记录所有要测试的包名称，来限制 Monkey 的执行范围。白名单文档中每一行只能放一个包名

<font style="color:red">-f < 脚本文件 ></font>   加载monkey脚本文件进行测试，比如 adb shell monkey -f sdcard/monkey.txt -v -v 500

### 1.3 Monkey事件

Monkey所执行的随机事件流中包含11大事件，分别是触摸事件、手势事件、二指缩放事件、轨迹事件、屏幕旋转事件、基本导航事件、主要导航事件、系统按键事件、启动Activity事件、键盘事件、其他类型事件。

**1.3.1 触摸事件**

触摸事件是指在屏幕某处按下并抬起的操作，可通过--pct-touch参数来配置其事件百分比。

**1.3.2 手势事件**

手势事件是指在屏幕某处的按下、随机移动、抬起的操作，即直线滑动操作。可通过--pct-motion参数来配置其事件百分比。

**1.3.3 二指缩放事件**

二指缩放事件是指在屏幕上的两处同时按下，并同时移动，最后同时抬起的操作，即智能机上的放大缩小手势操作。可通过--pct-pinchzoom参数来配置其事件百分比。

**1.3.4 轨迹事件**

轨迹事件是由一个或多个随机的移动组成的，有时会伴随着点击。可通过--pct- trackball参数来配置其事件百分比。

**1.3.5 屏幕旋转事件**

它其实是模拟的Android手机的横屏和竖屏切换。可通过--pct- rotation参数来配置其事件百分比。

**1.3.6 基本导航事件**

基本导航事件是指点击方向输入设备的上、下、左、右按键的操作，现在手机上很少有上、下、左、右按键，这种事件一般用得比较少。可通过--pct- nav参数来配置其事件百分比。

**1.3.7 主要导航事件**

主要导航事件是指点击“主要导航”按键的操作，这些按键通常会导致UI界面中的动作，如5-way键盘的中间键、回退按键、菜单按键。可通过--pct-majornav参数来配置其事件百分比。

**1.3.8 系统按键事件**

系统按键事件是指点击系统保留使用的按键的操作，如点击Home键、返回键、音量调节键等。可通过--pct-syskeys参数来配置其事件百分比。

**1.3.9 启动Activity事件**

启动Activity事件是指在手机上启动一个Activity的操作。在随机的时间间隔中，Monkey将执行一个startActivity()方法，作为最大限度上覆盖被测包中全部Activity的一种方法。可通过--pct-appswitch参数来配置其事件百分比。

**1.3.10 键盘事件**

键盘事件主要是一些与键盘相关的操作。比如点击输入框、键盘弹起、点击输入框以外区域、键盘收回等。可通过--pct-flip参数来配置其事件百分比。

**1.3.11 其他类型事件**

其他类型事件包括了除前面提到的10种事件外其他所有的事件，如按键、其他不常用的设备上的按钮等。可通过--pct-anyevent参数来配置其事件百分比。因为现在手机很少带字母按键或数字按键，所以这个事件一般使用得比较少。

### 1.4 Monkey环境搭建

Monkey是由adb命令来启动的，故只要配置好adb环境即可。

（1）下载并安装Android SDK和JDK。

（2）将Android SDK目录下的platform-tools和tools目录配置到系统环境变量Path中。

（3）打开cmd命令行窗口，输入“adb”，能显示adb帮助信息，则Monkey环境配置成功。

### 1.5 Monkey启动

Monkey启动方式很简单：先连接被测手机到PC上，然后打开CMD命令行窗口输入对应的adb命令行即可。

```shell
# 通过命令行启动Monkey有两种方式：
# 直接PC启动
adb shell monkey [options] <count>
 
# Shell端启动
adb shell
monkey [options] <count>
# 这两者的区别是，通过PC端启动，Monkey运行日志可以保存在PC上；通过Shell端启动，Monkey运行日志可以保存在手机里.
```

[注意]：Monkey启动后会不断地向被测对象发送随机事件流，直到事件执行完毕或者发送异常时才停止。在Monkey运行过程中，即便断开与PC的连接，Monkey依然可以在手机上继续运行。

停止Monkey的方法是：直接杀掉手机上的Monkey进程。

```shell
adb shell ps | grep monkey  # 获取到com.android.commands.monkey的进程ID
adb shell kill [pid]        # 通过kill命令杀死对应的Monkey进程
```

## 二. Monkey测试方法

### 2.1 Monkey测试实例

**2.1.1 常规的稳定性测试**

```shell
# 测试希望通过Monkey来模拟用户长时间的随机操作，检查被测应用是否会出现异常（应用崩溃或者无响应）。
adb shell monkey -p com.zhangyun.bravo --pct-touch 40 --pct-motion 25 --pct-appswitch 10 --pct-rotation 5 -s 12358 --throttle 400 --ignore-crashes --ignore-timeouts -v 500000

# 1) 使用-p参数来制定测试应用的包名(Package)
# 2) 使用--pct-xxx参数限制Monkey执行的事件类型和占比
# 触摸事件和手势事件是用户最常见的操作，所以通过--pct-touch和--pct-motion将这两个事件的占比调整到40%与25%；目标应用包含了多个Activity，为了能覆盖大部分的Activity，所以通过--pct-appswitch将Activity切换的事件占比调整到10%；被测应用之前在测试中出现过不少横竖屏之间切换的问题，这个场景也必须关注，因此通过--pct-rotation把横竖屏切换事件调整到10%
# 3) 使用-s参数来指定命令执行的seed值
# 4) 使用--throttle参数来控制Monkey每个操作之间的时间间隔
# 指定操作之间的时间间隔，一方面是希望能更接近用户的操作场景，正常用户操作都会有一定的时间间隔；另一方面也是不希望因为过于频繁的操作而导致系统崩溃，尤其是在比较低端的手机上执行测试时。因此通过--throttle设置Monkey每个操作固定延迟0.4秒。
# 5) 使用--ignore-crash和--ignore-timeouts参数使Monkey遇到意外时能继续执行
# 6) 使用-v指定log的详细级别，500000表示执行500000次伪随机事情
```

__技巧:__

查找应用包名的方法有很多，这里简单列举几个常用的方法：

(1) 通过pm命令查看

```shell
adb shell
pm list package
```

(2) 通过查看APK源码下的AndroidManifest.xml文件

(3) 通过aapt命令查看

(4) 通过adb logcat抓取当前Android机运行的App的包名。

**2.1.2 自定义脚本的稳定性测试**

Monkey支持执行用户自定义脚本的测试，用户只需要按照Monkey脚本的规范编写好脚本，存放到手机上，启动Monkey通过-f scriptfile参数调用脚本即可。

```shell
# 代码清单 Monkey自定义脚本的编写模板
# 头文件，控制Monkey发送消息的参数，固定写即可
# 脚本类型，一般不用更改
type = raw events
# 脚本执行次数，但是由于Monkey命令本身可以指定执行次数，所以这里的设置是不生效的
count = 10
# 命令执行速率，速率也可使通过Monkey命令设置，这里的设置是不生效的
speed = 1.0
# 以下为Monkey命令
start data>>
LaunchActivity(pag_name, cl_name)
DispatchPress(KEYCODE_HOME)
```

<font style="color:red">脚本命令：</font>

1. LaunchActivity(pkg_name, cl_name)： 启动应用，第一个参数是包名，第二个是启动的activity名
2. DispatchPointer(downtime,eventTime,action,x,y,xpressure,size,metastate,xPrecision,yPrecision,device,edgeFlags) ：向指定位置发送单个手势，相当于我们把手指按在某个点上；这个方法参数有12个，但是我们主要关注owntime,eventTime,action,x,y这么几个参数，x，y表示按下的坐标，可以通过上一篇文章UI Automator获取，这在你想测试点击某个具体view是很有用的
3. DispatchPress(keycode)： 向系统发送一个固定的按键事件；例如home键，back键；参数是按键值 ，按键值可查看keycode
4. UserWait：让脚本的执行暂停一段时间，做一个等待操作
5. RotateScreen(rotationDegree, persist)： 翻转屏幕，第一个参数是旋转角度，第二个是旋转后是否停在当前位置
6. Tap(x, y) ：单击事件，点击屏幕，参数是点击坐标
7. Drag(xStart, yStart, xEnd, yEnd) ：在屏幕上滑动，坐标是从哪一点滑到哪一点
8. LongPress()： 长按2s
9. ProfileWait()： 等待5s
10. PressAndHold(x, y, pressDuration) ：模拟长按 
11. PinchZoom(x1Start, y1Start, x1End, y1End, x2Start, y2Start, x2End, y2End, stepCount)： 模拟缩放
12. DispatchString(input)： 输入字符串
13. RunCmd(cmd) ：执行shell命令，比如截图 screencap -p /data/local/tmp/tmp.png
14. DispatchFlip(true/false) ：打开或者关闭软键盘
15. UserWait(sleepTime) ：睡眠指定时间
16. DeviceWakeUp() ：唤醒屏幕

__技巧:__

Monkey脚本只能通过坐标的方式来定位点击和移动事件的屏幕位置，这里就需要提前获取坐标信息。获取坐标信息的方法很多，最简单的方法就是打开手机中的开发人员选项，打开“显示指针位置”。随后，在屏幕上的每次操作，在导航栏上都会显示坐标信息。

```shell
# 这里要测试的是应用宝App，测试的操作是打开应用宝，点击输入框，输入“yyb”，点击搜索。搜索完成后，点击返回键返回应用宝首页。

# 首先，将在本地编写的测试脚本命名为monkey.script，脚本如下所示
# 启动测试
type = user
count = 49
speed = 1.0
# 启动应用宝
LaunchActivity(com.tencent.android.qqdownloader, com.temcent.assistant.activity.SplashActivity)
UserWaid(2000)
# 点击搜索框
Tap(463, 150, 1000)
UserWait(2000)
# 输入字母“yyb”
DispatchString(yyb)
UserWait(2000)
# 点击搜索
Tap(960, 150, 1000)
UserWait(2000)
# 点击返回键返回首页
DispatchPress(KEYCODE_BACK)

# 其次，将文件push到手机或模拟器的sdcard中
adb push monkey.script /sdcard/

# 最后，执行脚本
adb shell monkey -f /sdcard/monkey.script -v 1
```

__技巧:__

查找应用Activity名称的方法有很多，这里简单列举几个常用的方法：

(1) 通过包名查看Activity名称

```shell
adb shell dumpsys package [包名]
```

(2) 使用aapt

**2.1.3 结合辅助命令，获取更多信息**

测试除了想知道执行过程是否有异常，还需要能获取执行过程中的一些详细信息或性能数据，比如想知道Monkey执行过程中是否存在内存泄漏，需要获取内存信息。下面列举了几种Monkey测试中常用的辅助命令，使用方法也非常简单，只要在执行Monkey的同时，另起一个CMD命令行窗口输入对应命令执行即可。

```shell
# 1. 获取logcat日志信息：
adb shell logcat -v time>log.txt
# 2. 获取内存信息：
adb shell dumpsys meminfo <进程名>
# 3. 获取CPU消耗信息：
adb shell top -n 1 | find <进程名>
# 4. 获取电量信息：
adb shell dumpsys battery
# 5. 获取GPU信息：
adb shell dumpsys gfxinfo <进程名>
# 6. 获取流量信息：
adb shell cat /proc/uid_stat/<被测应用的uid>/tcp_rcv
```

__技巧：__

如何获取被测应用的UID

步骤1：查看被测应用的进程ID（PID）

```shell
adb shell ps | grep <被测应用包名>
```

步骤2：查看被测应用的用户ID（UID）

```shell
adb shell cat /proc/<进程id>/status
```

**2.1.4 Monkey测试策略制定思路**

前面介绍了几种常见的Monkey测试方法，但在实际项目中，选择哪种Monkey测试策略，则需要根据实际项目的情况来做判断。主要是看测试目的及被测应用自身的特点。假如我们想测试浏览器的双指缩放功能是否有异常，那就需要选择--pct-pinchzoom参数，调大双指缩放事件的占比进行Monkey测试；假如我们想验证ROM的横竖屏切换功能是否正常，那就需要选择--pct-rotation参数，调大横竖屏切换事件的占比进行Monkey测试；假如我们想验证重复某种特定操作时，应用是否会存在异常，那可以选择-f参数，自定义Monkey脚本进行验证；假如我们想验证长时间操作时应用是否会存在内存泄漏，那就需要结合-hprof参数和dumpsysmeminfo <进程名>进行Monkey测试。

总之，Monkey测试策略是需要依据测试目的和被测程序的特点来制定的。

### 2.2 Monkey日志分析

**2.2.1 Monkey日志保存方法**

```shell
# 1. 保存再PC中，代码如下：
abd shell monkey [option] <count> > d:\monkey.txt
# 2. 保存在手机中，代码如下
adb shell 
monkey [option] <count> > /mnt/sdcard/monkey.txt
# 3. 标注流与错误流分开保存，代码如下：
adb shell
monkey [option] <count> 1> /sdcard/monkey.txt 2>/sdcard/error.txt
```

**2.2.2 Monkey日志内容解析**

Monkey运行时输出的日志一般包含四类信息，分别是测试命令信息、伪随机事件流信息、异常信息、Monkey执行结果信息。要统计Monkey日志中错误出现的次数也非常简单，只要搜索关键字“ANR”和“CRASH”出现的次数即可。