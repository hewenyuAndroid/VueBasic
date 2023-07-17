module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // 这里需要将 es2015 改成 @babel/preset-env
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]

}

