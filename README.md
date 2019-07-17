## 引入 Yep-React

现在从 yarn 或 npm 安装并引入 Yep-React。

```bash
$ yarn add @jdcfe/yep-react
```

修改 `src/components/Welcome/Welcome.tsx`，引入 Yep-React 的按钮组件。

```tsx
import * as React from "react";

import logo from "./logo.svg";
import "./Welcome.scss";
import {Button} from '@jdcfe/yep-react';

const Welcome: React.FunctionComponent<{ message: string }> = props => {
    return (
        <div className="welcome-container">
            <img src={logo}/>
            <Button type="primary">{props.message}</Button>
        </div>
    );
};

export default Welcome;

```

根目录修改 `postcss.config.js`文件

```bash
$ yarn add -D  postcss-pxtorem
```

```js
const autoprefixer = require('autoprefixer');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const pxtorem = require('postcss-pxtorem');
module.exports = {
  ident: 'postcss',
  plugins: [
    postcssFlexbugsFixes,
    autoprefixer({
      flexbox: 'no-2009',
    }),
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
    }),
  ],
};
```

修改 `src/pages/app.html`,在 head 中添加如下

```html
<script>
  function flexible() {
    var e = document.documentElement.clientWidth || document.body.clientWidth;
    750 < e && (e = 750);
    var t = (e / 7.5).toFixed(2);
    document.documentElement.style.fontSize = t + 'px';
  }
  window.addEventListener(
    'resize',
    function() {
      flexible();
    },
    !1
  ),
    flexible();
</script>
```

### 使用 babel-plugin-import 实现按需加载

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一个用于按需加载组件代码和样式的 babel 插件，现在我们尝试安装它并在项目 package.json 新增 babel 配置。

```bash
$ yarn add -D babel-plugin-import
```

```package.json
  "babel": {
    "plugins": [
      [
        "import",
        {
          "libraryName": "@jdcfe/yep-react",
          "style": true
        },
      ]
    ]
  }
```

## run 

### `npm start` or `yarn start`

Start development environment.

### `npm run build` or `yarn build`

Create a production bundle in the `build` folder.

构建出来的js已经是按需加载以后打包的代码