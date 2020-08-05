module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
  // presets: [
  //   [
  //     '@vue/cli-plugin-babel/preset',
  //     {
  //       polyfills: ['es.promise', 'es.array.find-index', 'es.array.includes', 'es.string.includes']
  //     }
  //   ]
  // ]
}
