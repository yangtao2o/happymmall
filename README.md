# react-happymmall
基于React + React-Router的企业级后台管理系统学习记录

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