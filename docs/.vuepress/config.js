module.exports = {
    evergreen: true,
    base: '/qa-docs/',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: '个人文档',
        description: ''
      }
    },
    themeConfig: {
      sidebarDepth: 1,
      locales: {
        '/': {
          label: '简体中文',
          selectText: '选择语言',
          lastUpdated: '上次编辑时间',
          sidebar: {
            '/': [
              {
                title: '零碎知识',
                children: [
                  '/others/vuepress.md',
                  '/others/git.md',
                  '/others/charles.md'
                ]
              },
              {
                title: '测试基础',
                children: [
                  '/base/test-definition.md',
                  '/base/test-classification.md',
                  '/base/test-plan.md',
                  '/base/test-case-design.md'
                ]
              }
            ]
          }
        }
      }
    }
  }
  