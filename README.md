# 测试相关文档

## 安装

```bash
yarn
npm install
```

## 运行

```bash
# 开发环境
yarn docs:dev

# 生产环境
yarn docs:build
```

1. Vuepress 文档: https://vuepress.vuejs.org/zh/  项目名称不应该为docs，会冲突
2. 如何使用travis-ci自动化构建部署GitHub Pages 参考 https://hanyajun.com/devops/travis-ci/#%E7%99%BB%E5%BD%95-travis
3. deploy.sh 文件 使用 sh ./deploy.sh 来运行