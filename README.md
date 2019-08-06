# 基于React + React-Router的企业级后台管理系统学习记录

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

## Router

#### Nested Routing

```javascript
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AppTopics() {
  return (
    <Router>
      <div style={{border: "1px solid #ccc"}}>
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. state</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please selec a topic.</h3>}
      />
    </div>
  );
}

export default AppTopics;
```

#### NavLink
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import App from './App'
import Users from './users'
import Contact from './contact'
import Notfound from './notfound'
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
```