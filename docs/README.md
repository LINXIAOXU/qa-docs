---
title: Blogging Like a Hacker
lang: en-US
home: true
#heroImage: /hero.png
heroText: 个人知识学习储备处
tagline: 学习成为合格的软件测试工程师
actionText: 查看文档 →
actionLink: /base/test-definition.md
features:
- title: 软件测试生命周期
  details: 从测试项目计划建立到BUG提交的整个测试过程，包括获取测试需求，编写测试计划，制定测试方案，开发与设计测试用例，执行测试，提交缺陷报告，测试分析与评审，提交测试总结，准备下一个版本的测试九个阶段。
- title: 软件生命周期
  details: 软件的产生直到报废或停止使用的生命周期。软件生命周期内有问题定义、可行性分析、总体描述、系统设计、编码、调试和测试、验收与运行、维护升级到废弃等阶段，也有将以上阶段的活动组合在内的迭代阶段，即迭代作为生命周期的阶段。
- title: 不同测试版本的测试侧重点
  details: 第一轮：只测试大致功能，不需要细测，列出主要bug；第二轮：验证第一轮bug，然后全面细测，列出所有能发现的bug；第三轮到第x轮：验证上一轮的bug；最后一轮：验证全部bug，并全面细测。
footer: LML | Copyright © 2019-present Evan You
---

# 测试自学路程

## 第一阶段  测试基础

:::tip 提示
测试基础是软件测试最最最重要的部分，只要你是做测试，不管是什么测试，测试的基础、理论知识都是必须学会的。
最好是能够理解，并能够用自己的话给复述出来。
参考链接: [https://zhuanlan.zhihu.com/p/32505591](https://zhuanlan.zhihu.com/p/32505591)
:::

1. 测试的定义、测试的分类、测试的方法、测试的生命周期。
2. 测试计划、测试方案、测试策略、测试用例的编写。
3. BUG的定义、BUG的分类、BUG的六要素、BUG的生命周期。
4. 测试和开发流程的关系、瀑布流、V字形、W字型（双V）、螺旋型、敏捷等等。
5. App测试的特性，Web测试特性。
6. PDCA、5W1H等分析管理的方法
7. 质量管理体系CMMI（了解）

## 第二阶段  工具学习

1. 简单的网络协议：TCP/UDP，HTTP/HTTPS
2. xmind思维脑图设计用例
3. Linux的基本操作和常用指令。
4. MySQL、ORACLE数据库的基本操作和常用sql语句。
5. adb命令(常用命令，如何抓取移动端日志分析)
6. Charles抓包工具的使用(如何抓包分析、如果修改接口字段内容，如何替换接口全部数据，如何控制低网速)。
7. jmeter、sopaUI、postman接口测试工具的使用，接口测试概念、接口测试的定位、如何做接口测试、cookies、session介绍、项目中如何开展接口测试、接口测试实战。
8. jmeter和loadrunner性能测试工具的使用。

## 第三阶段  代码学习

1. 语言：JAVA、Python、JavaScript、NodeJs
2. 各种单端测试框架：unittest(python)、pytest(python)、JUnit（java）
3. WEB自动化测试框架：selenium（适用于java\python\javascript）
4. APP自动化测试框架：appium（适用于java\python\javascript）
5. 中间件技术：CICS、WebLogic、Apache、Tomcat、Tuxedo、JBoss、WebSphere