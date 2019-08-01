# React的Webpack配置

## Webpack

* [webpack 指南](https://webpack.docschina.org/guides/)
* [React的Webpack配置](https://www.jianshu.com/p/0e01ca947e50)

#### 使用版本3.10.0

`yarn add webpack@3.10.0 --dev`

#### 需要处理的文件里类型
```
HTML -> html-webpack-plugin
脚本 -> babel + babel-preset-react
样式 -> css-loader + sass-loader
图片/字体 -> url-loader + file-loader
```

#### webpack常用模块

```
html-webpack-plugin html单独打包成文件
extract-text-webpack-plugin 样式打包成单独文件
CommonsChunkPlugin 提出通用模块
```

#### webpack-dev-server

```
为webpack项目提供web服务
使用2.9.7
更改代码自动刷新,路径转发
yarn add webpack-dev-server@2.9.7 --dev
解决多版本共存问题
```
