# 基于 React + React-Router 的企业级后台管理系统学习记录

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

## Step

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
