import { sideBarOpen } from "./UseSidebarOpen";
export default function App() {
  const { opened, handler, content, setContent, closeToClear } = sideBarOpen();

  return (
    <div>
      <h1>Sidebar Open</h1>
      <div>
        <button onClick={closeToClear}>Click on me</button>
      </div>
    </div>
  );
}
