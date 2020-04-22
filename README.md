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

## 安装 rocketact-plugin-yep-react

```bash
$ yarn add -D rocketact-plugin-yep-react
```


## run 

### `npm start` or `yarn start`

Start development environment.

### `npm run build` or `yarn build`

Create a production bundle in the `build` folder.

构建出来的js已经是按需加载以后打包的代码
并且px已经转为rem
