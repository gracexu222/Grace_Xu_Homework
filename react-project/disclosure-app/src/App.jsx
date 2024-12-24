// 题目：

// 使用 useDisclosure 来实现一个简单的 React 项目。该项目包含一个按钮，用于打开模态框（Modal）。模态框中有关闭按钮，点击后模态框关闭。同时，打印模态框的打开和关闭状态到控制台。要求：

// 使用 @mantine/hooks 的 useDisclosure 钩子。
// 实现模态框的打开、关闭功能。
// 打开和关闭模态框时分别打印 Opened 和 Closed 到控制台。
// 使用 React 的 useState 来管理模态框内容，用户可以输入文字，关闭模态框时清空输入框内容

import { ModelWithDisclosure } from "./ModalWithDisclosure";
export default function App() {
  const { opened, handlers, content, setContent, closeWithClear } =
    ModelWithDisclosure();
  return (
    <div>
      <h1>Open Modal with Disclosure</h1>
      <p>Modal is{opened ? "Open" : "Close"}</p>
      <button onClick={handlers.open}>Open Modal</button>
      <button onClick={handlers.close}>Close Modal</button>
      <button onClick={handlers.toggle}>Toggle Modal</button>

      {opened && (
        <div>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={closeWithClear}>Close Modal</button>
        </div>
      )}
    </div>
  );
}
