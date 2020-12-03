# 自动化测试框架基本原理

## 一. 动作执行

一种最常见的脚本录制方法，其主要思想是记录控件的坐标位置和发生的事件，通过回放脚本完成测试事件流；另一种方法就是通过工具获得测试界面的控件布局，找到目标空间的ID、名字、描述或者位置信息。测试框架可以通过这些信息得到控件对象，并对控件对象执行一系列事件操作。

## 二. 结果判断

1. 截图对比
2. 控件对比
3. 日志分析

## 三. 报告展示

报告展示一般是指给出整个测试的结果信息汇总并进行简单的分析，测试结束后直接输出预警和初步的数据报告，以邮件或者其他形式直接周知项目参与人员。

## App自动化测试工具对比

### iOS

1. Uiautomation/XCUITest: 白盒, UI测试, JS（官方）
2. FastMonkey: 性能(仿Monkey), 张钊

### Android

1. Uiautomator/Uiautomtor2: UI测试, Java（官方）
2. Monkey: app性能/稳定性测试, 随机操作（官方）
3. MonkeyRunner: UI测试, Jpython, 只能通过坐标定位（官方）
4. Robotium: 白盒, UI测试, Java, 支持Webview/Toast/menu/Dialog等, 无法跨进程（官方）
5. Espresso: 官方推荐扩展测试包, 白盒,ui, 一般开发自测使用（官方）
6. CTS: 兼容性测试, Java（官方）
7. Python-Uiautomotor2: UI测试, 使用简单, 支持无线连接设备及使用weditor查看元素定位
8. Adb-For-Test/adb-For-Robotium: 个人, 基于adb命令的封装

### 多平台支持

1. Calabash: iOS/Andriod/混合app, Ruby, BDD模式, Api丰富
2. Appium: iOS/Andriod/混合app/H5, Java/Python/Ruby/JS..
3. Macaco: 阿里基于Appium进行的精简封装的一套框架, 支持Electron应用, 包含app-inspector和ui-recorder, 统一了iOS/Android操作的Api, 目前坑比较多, 环境搭建较麻烦
4. Airtest(ATS): 网易推出的一款基于截图对比的App自动化测试工具, 可用于App游戏UI测试, 支持iOS/Android

### 云平台

1. Sauce Labs: Appium官方推荐, 应用最广的云测平台, 收费
2. Testin/腾讯云测等: 国内云平台, 收费
3. OpenSTF: 开源手机集群管理平台, 免费