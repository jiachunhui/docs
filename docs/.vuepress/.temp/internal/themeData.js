export const themeData = JSON.parse("{\"subSidebar\":\"auto\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"资料站\",\"children\":[{\"text\":\"Furion\",\"link\":\"https://dotnetchina.gitee.io/furion/\"},{\"text\":\"Github\",\"link\":\"https://github.com/mqyqingfeng\"},{\"text\":\"掘金\",\"link\":\"https://juejin.cn/user/712139234359182/posts\"}]}],\"sidebar\":[{\"text\":\"欢迎学习\",\"link\":\"/\",\"collapsible\":false,\"children\":[{\"text\":\"学前必读\",\"link\":\"/\"}]},{\"text\":\"LESS\",\"link\":\"/htmlcss/less\",\"collapsible\":false,\"children\":[{\"text\":\"学前必读\",\"link\":\"/htmlcss/less\"},\"/htmlcss/less\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
