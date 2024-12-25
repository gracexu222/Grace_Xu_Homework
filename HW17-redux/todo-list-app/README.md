## Steps to Create Application

### Step 1: Create React Application named todo-list-app and navigate to it using this command.

> npx create-react-app todo-list-app
> cd todo-list-app

## Step 2: Install required packages and dependencies.

> npm install react-redux redux

## Step 3: Check package.json file for updated and installed dependencies, it will look like the below file.

    >  "dependencies": {
    >     "react": "^18.2.0",
    >     "react-dom": "^18.2.0",
    >     "react-redux": "^9.1.1",
    >     "redux": "^5.0.1",
    >   },

## Step 4: Run the application, start your application by navigating to todo-list-app and use the below command.

> npm start

## 为什么 Redux 看起来更复杂

> 全局状态管理：
>
> Redux 的主要作用是管理 全局状态。
> React 自带的状态管理（useState 和 useReducer）非常适合管理局部状态（即只在某个组件中使用的状态）。
> 但当多个组件需要共享状态（比如多个组件都需要知道用户是否登录），使用 React 自带的状态就会显得麻烦（可能需要多层传递 props）。
> 样板代码（Boilerplate）：
>
> Redux 需要定义 action、reducer 和 store，这让代码变得冗长。
> 对于像待办事项（To-Do List）这样的小应用来说，Redux 的复杂性可能会显得多余。

### 为什么使用 Redux（或类似的全局状态管理工具）

    1. 状态可预测性：
    Redux 强制数据流向单一（Unidirectional Data Flow），所有状态的改变都通过 Reducer 和 Action 实现。
    这种机制让状态变化变得可预测，调试起来也更方便。
    2. 全局状态共享：
    当应用中有多个组件需要访问和更新同一个状态时，Redux 的全局状态就非常有用。

**举例：**用户登录状态 (isLoggedIn) 需要导航栏、用户信息页面和设置页面都能访问和同步。 3. 复杂状态关系：
当状态变得嵌套较深，或者多个状态有复杂依赖关系时，Redux 提供了清晰的规则来更新状态。 4. 强大的开发工具：
Redux DevTools 是一款调试工具，可以让你查看每个 Action 和对应的状态变化，还支持“时光回溯”（Time Travel），这在调试和学习中非常有用。 5. 异步操作的结构化处理：
Redux 支持中间件（如 Redux Thunk 或 Redux Saga）来处理复杂的异步操作，比如 API 请求和数据持久化。
什么时候只用 React 状态就够了
以下情况不需要 Redux：

小型应用：

如果你的应用很小，比如只包含几个组件，或者状态变化比较简单，useState 或 useReducer 就完全够用了。
有限的共享状态：

如果只有少数组件需要共享状态，React 自带的 Context API 就可以满足需求。
短时状态：

一些临时状态（例如表单输入值），通常只需要局部组件来处理，没必要用 Redux。
Redux 适合的场景
如果你的待办事项应用中有以下情况，就可以考虑 Redux：

复杂功能：
比如，你的待办事项需要支持多种过滤器（已完成、未完成等），或者需要展示统计信息。
数据持久化：
比如，你的待办事项需要与后台 API 交互，存储在数据库中。
多个组件需要访问同一状态：
如果待办事项列表的状态需要导航栏、统计组件和任务详情页共享，那么 Redux 是一个很好的选择。

1. React 与 Redux 的比较
1. 特性 React 状态（useState/useReducer） Redux
1. 代码复杂度 简单 较高
1. 全局状态共享 手动实现（可能需要传递 props） 简单（使用中央存储 Store）
1. 调试工具 基础（React DevTools） 高级（Redux DevTools）
1. 异步状态处理 手动处理（通过 useEffect 等） 使用中间件结构化管理（如 Thunk）
1. 扩展性和可维护性 随着应用增大变得困难 为大型应用设计，扩展性更强
   总结
   **简单项目（如待办事项列表）：**使用 React 的 useState 或 useReducer 更加直接高效。
   **复杂项目（跨组件状态共享、异步操作较多）：**Redux 提供更强大的功能，特别是在中大型项目中，它可以帮助你更好地管理状态。
   如果你对 Redux 还是感到复杂，也可以考虑其他替代方案，比如：

**React Context API：**适合小型应用的全局状态管理。
**Recoil 或 Zustand：**轻量级的状态管理工具，适合中小型项目。
**Redux Toolkit：**官方推荐的新工具，大幅减少 Redux 的样板代码，降低了复杂度。
