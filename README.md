# sofa-print
React print component.

## 开发&调式


```bash
# 在http://localhost:8081端口打开示例页面

npm run dev

# 将打包之后的组件引入到 global node_modules 中

npm link
```

## 发布

```bash
npm run build

npm login

npm publish
```

## 安装

```bash
npm install sofa-print
```

## 使用

```js
import React, { Component } from 'react';
import { PrintPage, PageBreak } from 'sofa-print';
import 'sofa-print/dist/main.css';

class PrintOrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: [1, 2, 3, 4, 5],
      skuList: [1, 2, 3, 4],
    };
    this.handlePrint = this.handlePrint.bind(this);
  }
  handlePrint() {
    this.refs.printComponent.printMethod();
  }
  render() {
    const { orderList, skuList } = this.state;
    return (
      <div>
        <button onClick={this.handlePrint}>打印</button>
        <PrintPage ref="printComponent">
          <PageWrapper>
            {orderList.map((order) => (
              <div key={order}>
                <h2>order detail table</h2>
                <table>
                  <thead>
                    <tr>
                      <th>column 1</th>
                      <th>column 2</th>
                      <th>column 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skuList.map((sku) => (
                      <tr key={sku}>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <PageBreak />
              </div>
            ))}
          </PageWrapper>
        </Print>
      </div>
    );
  }
}

```

## API

1. PrintPage组件

    打印组件，包裹需要打印的元素的容器组件，配合printMethod()方法使用；

2. PageBreak组件

    分页组件，插入到需要分页的元素后，之后的内容会另起一页开始打印；

3. printMethod()方法

    PrintPage组件的打印方法，在自定义的打印按钮上调用该方法，可以触发打印操作；

