# react-happymmall
基于React + React-Router的企业级后台管理系统学习记录

## Yarn 

* [使用方法](https://yarn.bootcss.com/docs/usage/)

## Webpack

* [webpack 指南](https://webpack.docschina.org/guides/)
* [React的Webpack配置](https://www.jianshu.com/p/0e01ca947e50)
* [React与webpack](https://typescript.bootcss.com/tutorials/react-&-webpack.html)
* [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react#docsNav)


## 安装 webpack 遇到的坑

#### `CleanWebpackPlugin is not a constructor`

原因：版本问题，中文文档还未更新

修改：
```javascript
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
plugins: [
  new CleanWebpackPlugin()  // clean-webpack-plugin only accepts an options object
],
```