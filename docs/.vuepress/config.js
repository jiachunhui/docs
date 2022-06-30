const { defaultTheme } = require('@vuepress/theme-default');
module.exports = {
  title: 'My Blog',
  description: 'This is a blog.',
  //base: '/docs/',
  theme: defaultTheme({
    subSidebar: 'auto',
    navbar: [
      { text: '首页', link: '/' },
      {
        text: '资料站',
        children: [
          { text: 'Furion', link: 'https://dotnetchina.gitee.io/furion/' },
          { text: 'Github', link: 'https://github.com/mqyqingfeng' },
          {
            text: '掘金',
            link: 'https://juejin.cn/user/712139234359182/posts',
          },
        ],
      },
    ],
    sidebar: [
      {
        text: '欢迎学习',
        link: '/',
        collapsible: false, // 不折叠
        children: [{ text: '学前必读', link: '/' }],
      },
      {
        text: 'LESS',
        link: '/htmlcss/less',
        collapsible: false, // 不折叠
        children: [
          { text: '学前必读', link: '/htmlcss/less' },
          '/htmlcss/less',
        ],
      },
    ],
  }),
};
