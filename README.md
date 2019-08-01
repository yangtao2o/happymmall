# React 的 Webpack 配置

## Webpack

- [webpack 指南](https://webpack.docschina.org/guides/)
- [React 的 Webpack 配置](https://www.jianshu.com/p/0e01ca947e50)

#### 使用版本 3.10.0

`yarn add webpack@3.10.0 --dev`

#### 需要处理的文件里类型

```
HTML -> html-webpack-plugin
脚本 -> babel + babel-preset-react
样式 -> css-loader + sass-loader
图片/字体 -> url-loader + file-loader
```

#### webpack 常用模块

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

## 安装

#### 配置 Webpack

准备环境：

```bash
➜  happymmall git:(webpack@3-react) ✗ node -v
v11.13.0
➜  happymmall git:(webpack@3-react) ✗ npm -v
6.10.1
➜  happymmall git:(webpack@3-react) ✗ git --version
git version 2.17.2 (Apple Git-113)
➜  happymmall git:(webpack@3-react) ✗ yarn -v
1.17.3
```

安装 webpack

```bash
yarn init
yarn add webpack@3.10.0 --dev
```

根目录新建 `webpack.config.js`,并新建 `src/index.js`

```javascript
// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  }
};

// index.js
console.log("Hello, world");
```

运行：`node_modules/.bin/webpack`:

```bash
➜  happymmall git:(webpack@3-react) ✗ node_modules/.bin/webpack
Hash: 62e68b9cc366c7b50ac6
Version: webpack 3.10.0
Time: 34ms
 Asset    Size  Chunks             Chunk Names
app.js  2.5 kB       0  [emitted]  main
   [0] ./src/index.js 28 bytes {0} [built]
```

打开 `dist/app.js`，搜索 `Hello`:

```javascript
/***/ (function(module, exports) {

console.log('Hello, world');

/***/ })
/******/ ]);
```

一个简单的文件就此打包成功，开心吧...

#### 配置 HMTL 模板

文档：[HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/#root) 简化了 HTML 文件的创建，以便为你的 webpack 包提供服务。这对于在文件名中包含每次会随着编译而发生变化哈希的 webpack bundle 尤其有用。

安装 html-webpack-plugin

```bash
yarn add html-webpack-plugin@2.30.1 --dev
```

新建：`src/index.html`, 并初始化一个 html 内容，然后配置：

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
```

接着跑一下：`node_modules/.bin/webpack`，不出意外的话，dist 下会出现一个 index.html，打开查看就会发现，不仅有我们自己指定的内容，还把`app.js`也自动引入了，这波操作够可以。

#### 脚本处理 Babel

文档：[babel-loader](https://www.webpackjs.com/loaders/babel-loader/)

安装 babel

```bash
yarn add babel-loader@7.1.2 babel-core@6.26.0 babel-preset-env@1.6.1 --dev
```

设置 config 文件：

```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/, // 忽略此文件
      use: {
        loader: "babel-loader",
        options: {
          presets: ["env"]
        }
      }
    }
  ];
}
```

然后修改 `src/index.js`:

```javascript
class People {
  constructor(name) {
    this.name = "people";
  }
}

class Man extends People {
  constructor(name) {
    super(name);
    this.age = 27;
  }
}
```

运行：`node_modules/.bin/webpack`，然后再去`dist/app.js`，就会发现已经转译成功：

```javascript
var People = function People(name) {
  _classCallCheck(this, People);
  this.name = "people";
};

var Man = (function(_People) {
  _inherits(Man, _People);
  function Man(name) {
    _classCallCheck(this, Man);

    var _this = _possibleConstructorReturn(
      this,
      (Man.__proto__ || Object.getPrototypeOf(Man)).call(this, name)
    );

    _this.age = 27;
    return _this;
  }
  return Man;
})(People);
```

#### 配置 React

安装：

```bash
yarn add babel-preset-react@6.24.1 --dev
yarn add react@16.2.0 react-dom@16.2.0
```

设置：

```javascript
module: {
  rules: [
    {
      test: /\.jsx$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["env", "react"]
        }
      }
    }
  ];
}

// 这时候的入口文件也需要更改下测试
entry: './src/index.jsx',
```

然后修改 `src/index.js` 为 `src/index.jsx`:

```javascript
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello, React.</h1>, document.getElementById("root"));
```

运行：`node_modules/.bin/webpack`，然后再去`dist/app.js`，查找如下：

```javascript
// ...
_reactDom2.default.render(
  _react2.default.createElement("h1", null, "Hello, React."),
  document.getElementById("root")
);

// ...
```

那么，表示解析 .jsx 成功。

#### 解析 CSS

安装：

```bash
yarn add style-loader@0.19.1 css-loader@0.28.8 --dev
```

设置：

```javascript
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}
```

在 index.jsx 里添加：`import './style.css';`，在`style.css`添加一些：

```css
body {
  color: red;
  font-size: 16px;
}
```

接着跑一下：`node_modules/.bin/webpack`，再接着去 dist 下的 app.js 找找：

```javascript
// module
exports.push([module.i, "body {\n  color: red;\n  font-size: 16px;\n}", ""]);
```

嗯，已经被解析并添加到 app.js 文件中。但是，我们有时候需要大量的 css 文件，并需要 js 解析，那就需要个插件单独处理：[ExtractTextWebpackPlugin](https://webpack.js.org/plugins/extract-text-webpack-plugin/#root):

```bash
yarn add extract-text-webpack-plugin@3.0.2 --dev
```

设置：

```javascript
plugins: [
  new HtmlWebpackPlugin({
    template: "./src/index.html"
  }),
  // Add
  new ExtractTextWebpackPlugin("styles.css"),
],
module: {
  rules: [
    // Add
    {
      test: /\.css$/,
      use: ExtractTextWebpackPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    }
  ]
}
```
然后跑一下，dist下就会出现我们设置的 `styles.css` 文件，并且会自动添加至 `index.html`:
```html
<link href="style.css" rel="stylesheet">
```

#### 解析 scss

安装: sass-loader node-sass
```bash
yarn add sass-loader@6.0.6 node-sass@4.7.2 --dev
```

设置：
```javascript
{
  test: /\.scss$/,
  use: ExtractTextWebpackPlugin.extract({
    fallback: "style-loader",
    use: ["css-loader", "sass-loader"]
  })
}
```

这时候，我们去 src 下新建一个 `app.scss`:
```css
body {
  h1 {
    color: blue;
  }
}
```

并且在 `index.jsx` 中引入：
```javascript
import './style.css';
import './app.scss';
```

接着，跑一下看看，刷~的一声，打开dist下的 `styles.css`，看看是不是我们引入的内容：
```css
body {
  color: red;
  font-size: 16px; }
body h1 {
  color: blue; }
```