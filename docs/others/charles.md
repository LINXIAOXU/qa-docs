# Charles 抓包

## mscOS下载安装 Charles

1. Charles官网下载安装包，下载成功后根据提示安装即可。
[官方网站](https://www.charlesproxy.com/download/)

![安装Charles](../assets/charles/install-charles.png)

2. 激活Charles

Charles激活码:

Registered Name: https://zhile.io

License Key: 48891cf209c6d32bf4

激活步骤：
打开Charles，help->Registered to xclient - Multi-Site License，输入账号和key提交破解成功就可以使用了

## HTTP代理设置

1. 设置PC端代理端口号
在Proxy——>Proxying Settings——>点击add——>在弹出的对话框里面设置端口号：8888（也可更改，手机设置代理输入一致即可）,最后如图所示：

![设置PC端口号](../assets/charles/http-config.png)

## HTTPS代理配置

1. 配置SSL访问
在Proxy——>SSL Proxying Settings——>点击add——>在弹出的对话框里面设置主机host:*和端口号post:443——>勾选Enable SSL Proxying,最后如图所示：

![配置SSL访问](../assets/charles/ssl-config.png)

## iOS使用步骤

1. 打开charles后，要安装SSL证书：help——>SSL proxying——>Install Charles Root Certificate On a Mobile Device or Remote Browser，最后出现如图所示弹框：

![安装SSL证书](../assets/charles/install-ssl.png)

2. iOS端手机可根据第二步的弹窗更改手机端的设置：即点开wifi旁边的感叹号——>点击配置代理——>选择手动——>填入服务器号，即本机IP地址，端口号：8888（一般默认8888）——>点击存储——>再在safari浏览器网址栏输chls.pro/ssl——>点击安装，最后证书状态显示已验证如图所示：

<img src="../assets/charles/ssl-status.png" width="30%" />

3. 继续iOS手机端设置：通用——>关于本机——>证书信任设置——>选择信任刚刚下载的SSL证书，最后如图所示：

<img src="../assets/charles/ssl-trust.png" width="30%" />

## Android使用步骤

1. 打开charles后，要安装SSL证书：help——>SSL proxying——>Install Charles Root Certificate On a Mobile Device or Remote Browser，最后出现如图所示弹框：

![安装SSL证书](../assets/charles/install-ssl.png)

2. Android端手机可根据第二步的弹窗更改手机端的设置：即点开wifi旁边的感叹号——>点击配置代理——>选择手动——>填入服务器号，即本机IP地址，端口号：8888（一般默认8888）——>点击存储——>再在浏览器网址栏输chls.pro/ssl——>证书下载成功后，进入设置-更多设置-系统安全-从存储的设备安装页面，查看已下载的证书，选择证书安装，输入证书名称，证书命名可随意填写，确定后安装成功！如图所示：

<img src="../assets/charles/ssl-down.png" width="30%" />

3. 设置-WLAN，进入已连接WiFi手动设置（端口需与PC端设置端口号一致）
[注]不同安卓手机弹出设置代理入口不同，如果进入网络详情页无代理项，可在WLAN列表长按wifi名称弹出代理设置

<img src="../assets/charles/android-config.jpg" width="30%" />