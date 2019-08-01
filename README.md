# React 的 Webpack@3 配置

## Webpack

- [webpack 指南](https://webpack.docschina.org/guides/)
- [React 的 Webpack 配置](https://www.jianshu.com/p/0e01ca947e50)

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

#### Babel 处理脚本

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

然后跑一下，dist 下就会出现我们设置的 `styles.css` 文件，并且会自动添加至 `index.html`:

```html
<link href="style.css" rel="stylesheet" />
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
import "./style.css";
import "./app.scss";
```

接着，跑一下看看，刷~的一声，打开 dist 下的 `styles.css`，看看是不是我们引入的内容：

```css
body {
  color: red;
  font-size: 16px;
}
body h1 {
  color: blue;
}
```

测试通过，完美！

#### 处理图片资源

安装：[url-loader](https://webpack.js.org/loaders/url-loader/#root)

```bash
yarn add file-loader@1.1.6 url-loader@0.6.2 --dev
```

设置：

```javascript
{
  test: /\.(png|jpg|gif)$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 8192
      }
    }
  ]
}
```

同样的 src 下找张图片，测试下是否通过，在 `index.jsx` 里添加：

```javascript
import ImgSrc from "./react.png";

ReactDOM.render(
  <div>
    <h1>Hello, React.</h1>
    <img src={ImgSrc} alt="react" />
  </div>,
  document.getElementById("root")
);
```

然后跑一下，发现：如果图片大于 limit 的设置（8kb=8192/1024kb）就会出现在 dist 目录下，否则会以 base64 格式直接引入使用。

#### 处理 fonts 字体

先下载个[Font Awesome](http://www.fontawesome.com.cn/get-started/)试试水：

```bash
yarn add font-awesome
```

设置：

```javascript
{
  test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 8192
      }
    }
  ]
}
```

然后按照以下几个步骤来试水：

- 复制 `font-awesome/` 目录到你的项目中
- 只保留 fonts 文件 和 scss 文件里的内容，其他可以删除
- 最后去你的主文件：`app.scss` 添加它：

```scss
$fa-font-path: "./font-awesome/fonts";
@import "./font-awesome/scss/font-awesome.scss";
```

接着我们跑一下：`node_modules/.bin/webpack`，dist 下瞬间就会出现一堆文件，表示测试通过。

#### 公共模块

[CommonsChunkPlugin](https://webpack.docschina.org/plugins/commons-chunk-plugin/#%E9%85%8D%E7%BD%AE)插件，是一个可选的用于建立一个独立文件(又称作 chunk)的功能，这个文件包括多个入口 chunk 的公共模块。

先访问缓存中的公共代码，加快浏览器的访问速度。

设置：

```javascript
const webpack = require("webpack");
// ...
new webpack.optimize.CommonsChunkPlugin({
  name: 'commons', // 公共 chunk 的名称
  filename: 'js/base.js'  // 公共 chunk 的文件名
}),
```

#### 使用 webpack-dev-server

`webpack-dev-server` 为你提供了一个简单的 `web server`，并且具有 `live reloading`(实时重新加载) 功能。

安装：

```bash
yarn add webpack-dev-server@2.9.7 --dev
```

修改配置文件，告诉 `dev server`，从什么位置查找文件：

```javascript
devServer: {
  contentBase: './dist',
  port: 8082
}
```

接着去 `package.json`里添加一个可以直接运行 `dev server` 的 script：

```json
"scripts": {
  "start": "webpack-dev-server --open",
  "build": "webpack"
},
```

这样就不用每次都去访问 `node_modules/.bin/webpack` 了，直接启动：

```bash
# 启动 dev server
npm start
# 打包构建
npm run build
```

#### 清理 /dist 文件夹

需求：每次 `build` 的时候，发现 `/dist` 下的文件一直会堆砌，能不能每次构建的时候，只生成项目中真正在使用的文件？

方法：在每次构建前清理 `/dist` 文件夹，这样只会生成用到的文件。

使用 `clean-webpack-plugin` 插件来进行清理:

```bash
yarn add clean-webpack-plugin --dev
```

设置：

```javascript
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

new CleanWebpackPlugin();
```

#### 模块热替换 HMR

需求：在开发环境下，可不可以每次保存之后，不用刷新浏览器，就自动更新了呢？

方法：[模块热替换](https://webpack.docschina.org/guides/hot-module-replacement/)(`hot module replacement` 或 `HMR`)，只更新改动的文件。

设置：

```javascript
const webpack = require("webpack");

plugins: [
  new webpack.HotModuleReplacementPlugin()
],
devServer: {
  contentBase: './dist',
  hot: true,  // 开启
  port: 8082
}
```

这样，重启服务，然后修改 `index.jsx` 文件，就会发现自动更新了，妈妈再也不用担心我的 F5 了...

#### webpack.config.js

```javascript
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 8082
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new ExtractTextWebpackPlugin("styles.css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "js/base.js"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"]
          }
        }
      },
      {
        test: /\.(sc|c)ss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
};
```
