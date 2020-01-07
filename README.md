# 基于 React + React-Router 后台管理系统 Demo

## Start

```shell
# 初始化
yarn install

# 启动
yarn start

# 打包
yarn build
```

## Content

`React16 + React-Router4 + Bootstrap + Sass + jQuery + Webpack + Babel + Yarn`

主要模块：

- 通用模块-通用组织结构、通用菜单、通用导航
- 用户模块-登录、退出、用户列表
- 商品模块-带筛选的商品列表，商品详情，添加/修改商品
- 品类模块-品类列表，添加品类，修改品类名称
- 订单模块-带筛选的订单列表，订单详情

项目主体结构：

```tree
├── app.jsx
├── app.scss
├── component
│   ├── layout
│   │   ├── index.jsx
│   │   └── theme.css
│   ├── page-title
│   │   └── index.jsx
│   ├── side-nav
│   │   └── index.jsx
│   └── top-nav
│       └── index.jsx
├── font-awesome
│   ├── fonts
│   └── scss
├── index.html
├── page
│   ├── about
│   ├── error
│   ├── home
│   ├── login
│   ├── order
│   ├── product
│   │   ├── category
│   │   ├── index
│   │   └── router.jsx
│   └── user
│       └── index.jsx
├── service
│   ├── order-service.jsx
│   ├── product-service.jsx
│   ├── statistic-service.jsx
│   └── user-service.jsx
└── util
    ├── file-uploader
    │   ├── index.jsx
    │   └── react-fileupload.jsx
    ├── mm.jsx
    ├── pagination
    │   └── index.jsx
    ├── rich-editor
    │   ├── index.jsx
    │   └── index.scss
    └── table-list
        └── index.jsx
```

## 配置 Webpack@3

> 切换分支至 `webpack@3-react` ，每一次 `Commits`，基本上对应着相应的文件配置，可以对照着瞅瞅。

克隆一份项目

```bash
git clone https://github.com/yangtao2o/happymmall.git
```

进入目录

```bash
cd happymmall
```

切换分支至 webpack@3-react

```bash
➜  happymmall git:(master) git checkout webpack@3-react
```

下载依赖包

```bash
➜  happymmall git:(webpack@3-react) yarn install
```

启动

```bash
➜  happymmall git:(webpack@3-react) npm start
```

详细练习过程见此处 [DOC](https://github.com/yangtao2o/happymmall/tree/webpack%403-react)。

## 其他

API：**[happymmallwiki](https://gitee.com/imooccode/happymmallwiki/wikis/Home)**

### 登录

- [Window.localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)

下面的代码片段访问了当前域名下的本地 Storage 对象，并通过 Storage.setItem() 增加了一个数据项目。

```js
localStorage.setItem("myCat", "Tom");
```

该语法用于读取 localStorage 项，如下:

```js
let cat = localStorage.getItem("myCat");
```

该语法用于移除 localStorage 项，如下:

```js
localStorage.removeItem("myCat");
```

该语法用于移除所有的 localStorage 项，如下:

```js
// 移除所有
localStorage.clear();
```

## Simditor 富文本编辑器

DOC：[Simditor](https://simditor.tower.im/docs/doc-usage.html)

注意：最新版本的 2.3.28，会报错`Simditor.connect() is not a function`，重新下载版本 2.3.21。
