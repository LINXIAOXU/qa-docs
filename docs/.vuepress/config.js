module.exports = {
    evergreen: true,
    base: '/dacs/',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: '测试文档',
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
                title: '测试点',
                children: [
                  '/tests/read.md'
                ]
              }
            ]
          }
        }
      }
    }
  }
  