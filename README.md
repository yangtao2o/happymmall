# react-happymmall
基于React + React-Router的企业级后台管理系统学习记录

## Yarn 

* [使用方法](https://yarn.bootcss.com/docs/usage/)

## Webpack

#### Document
* [webpack 指南](https://webpack.docschina.org/guides/)
* [React的Webpack配置](https://www.jianshu.com/p/0e01ca947e50)
* [React与webpack](https://typescript.bootcss.com/tutorials/react-&-webpack.html)

#### Details
* [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react#docsNav)
* [ExtractTextWebpackPlugin](https://webpack.docschina.org/plugins/extract-text-webpack-plugin/#%E7%94%A8%E6%B3%95)  --- webpack@4之后不支持css
* [MiniCssExtractPlugin](https://webpack.docschina.org/plugins/mini-css-extract-plugin/)

#### Questions

* `CleanWebpackPlugin is not a constructor`

原因：版本问题，中文文档还未更新

修改：
```javascript
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
plugins: [
  new CleanWebpackPlugin()  // clean-webpack-plugin only accepts an options object
],
```

* `Tapable.plugin is deprecated. Use new API on `.hooks` instead`

原因：`Since webpack v4 the extract-text-webpack-plugin should not be used for css. `

解决：`Use mini-css-extract-plugin instead.`