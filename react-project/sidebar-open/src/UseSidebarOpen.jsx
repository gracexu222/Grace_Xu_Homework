import { useDisclosure } from "@mantine/hooks";
import react from "@vitejs/plugin-react-swc";
import { useState } from "react";

export function sideBarOpen() {
  const [opened, handler] = useDisclosure(false, {
    onOpen: () => console.log("Sidebar opened"),
    onClose: () => console.log("Sidebar closed"),
  });
  const [content, setContent] = useState("");
  const closeToClear = () => {
    setContent("");
    handler.close();
  };

  return { opened, handler, content, setContent, closeToClear };
}
