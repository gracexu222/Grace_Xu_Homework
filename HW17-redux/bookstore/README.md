### 电子书阅读器（E-Book Reader）应用，支持以下功能：

需求分析
功能列表：

    > 用户可以选择一本书进行阅读。
    > 阅读进度可以记录和更新。
    > 用户可以添加书签到某页。
    > 用户可以切换不同的主题（比如白天模式、夜间模式）。
    > 用户可以在书籍列表中搜索书籍。
    > 核心问题：
    >
    > **全局状态：**多个组件需要共享用户的阅读状态（比如当前书籍、页码、书签等）。
    > **可扩展性：**未来可能增加更多功能，比如笔记、同步到云端等。
    > 1. 设计全局状态（State）
    > 状态结构：
    >
    >
    > {
    >   "currentBook": {
    >     "id": "123",
    >     "title": "如何学习 Redux",
    >     "author": "作者名字",
    >     "totalPages": 200,
    >     "currentPage": 42
    >   },
    >   "bookmarks": [42, 100], // 当前书籍的书签
    >   "theme": "light", // 主题（"light" 或 "dark"）
    >   "searchQuery": "", // 搜索框输入的内容
    >   "library": [
    >     {
    >       "id": "123",
    >       "title": "如何学习 Redux",
    >       "author": "作者名字",
    >       "totalPages": 200
    >     },
    >     {
    >       "id": "456",
    >       "title": "深入理解 React",
    >       "author": "另一位作者",
    >       "totalPages": 300
    >     }
    >   ] // 用户的书籍列表
    > }
    > 2. 定义 Redux Actions
    > 功能拆解及对应的 Action：
    > 选择书籍：
    >
    > 类型：SET_CURRENT_BOOK
    > 数据：{ id: "123", title: "如何学习 Redux", author: "作者名字", totalPages: 200 }
    > 更新当前页码：
    >
    > 类型：SET_CURRENT_PAGE
    > 数据：页码（如：42）。
    > 添加书签：
    >
    > 类型：ADD_BOOKMARK
    > 数据：页码（如：42）。
    > 切换主题：
    >
    > 类型：SET_THEME
    > 数据：主题（如："dark"）。
    > 更新搜索内容：
    >
    > 类型：SET_SEARCH_QUERY
    > 数据：搜索关键词（如："Redux"）。
    > 3. 定义 Reducer
    > 拆分 Reducer 的职责：
    > currentBook Reducer：
    >
    > 管理当前阅读的书籍信息及页码。
    > 处理 SET_CURRENT_BOOK 和 SET_CURRENT_PAGE。
    > bookmarks Reducer：
    >
    > 管理当前书籍的书签。
    > 处理 ADD_BOOKMARK。
    > theme Reducer：
    >
    > 管理应用的主题。
    > 处理 SET_THEME。
    > library Reducer：
    >
    > 管理书籍列表和搜索功能。
    > 处理 SET_SEARCH_QUERY。
    > 4. 设计 Store
    > 初始状态：
    > json
    > Copy code
    > {
    >   "currentBook": null, // 默认没有选中的书籍
    >   "bookmarks": [],
    >   "theme": "light",
    >   "searchQuery": "",
    >   "library": []
    > }
    > Store 配置：
    > 使用 combineReducers 将各个 Reducer 合并成一个主 Reducer。
    > 5. 组件与 Store 的交互
    > 功能组件：
    > 书籍列表组件（LibraryList）：
    >
    > 显示书籍列表。
    > 支持搜索书籍。
    > 用户点击某本书后，触发 SET_CURRENT_BOOK。
    > 阅读器组件（Reader）：
    >
    > 显示当前书籍的内容。
    > 支持跳转页面，触发 SET_CURRENT_PAGE。
    > 用户可以添加书签，触发 ADD_BOOKMARK。
    > 主题切换组件（ThemeToggle）：
    >
    > 用户切换主题时，触发 SET_THEME。
    > 搜索框组件（SearchBar）：
    >
    > 用户输入搜索内容时，触发 SET_SEARCH_QUERY。
    > 6. 数据流与交互流程
    > 用户操作示例：
    > 用户选择书籍：
    >
    > LibraryList 组件调用 dispatch({ type: "SET_CURRENT_BOOK", payload: selectedBook })。
    > 状态更新后，Reader 组件显示该书籍的内容。
    > 用户翻页：
    >
    > Reader 组件调用 dispatch({ type: "SET_CURRENT_PAGE", payload: newPage })。
    > 状态更新后，页面显示切换到 newPage。
    > 用户切换主题：
    >
    > ThemeToggle 组件调用 dispatch({ type: "SET_THEME", payload: newTheme })。
    > 状态更新后，整个应用的主题颜色切换。
    > 用户搜索书籍：
    >
    > SearchBar 组件调用 dispatch({ type: "SET_SEARCH_QUERY", payload: searchQuery })。

> LibraryList 根据 searchQuery 过滤书籍列表。 7. 扩展功能（可选）

    同步到云端：

    将用户的阅读进度和书签保存到服务器。
    Redux 可结合中间件（如 Redux Thunk）来处理异步请求。
    添加笔记：

    允许用户在特定页码上添加笔记，状态结构可增加一个 notes 属性。
    支持多用户：

    增加 user 状态，用于管理不同用户的阅读数据。
