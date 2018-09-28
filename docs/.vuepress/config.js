module.exports = {
  title: 'js tricks',
  description: '常用的js方法，js_tricks',
  dest: './dist',
  base: '/js_tricks/',
  repo: 'https://qishaoxuan.github.io/js_tricks/',
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
    config: md => {
      md.use(require('markdown-it-include'), './')
    }
  },
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/QiShaoXuan/js_tricks' },
    ],
    sidebar: [
      '/youNeedToKnow/',
      '/dom/',
      '/bom/',
      '/array/',
      '/date/',
      '/number/',
      '/cookie/',
    ]
  }
}

