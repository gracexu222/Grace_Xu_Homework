import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

export function ModelWithDisclosure() {
  const [opened, handlers] = useDisclosure(false, {
    onOpen: () => console.log("Opened"),
    onClose: () => console.log("Closed"),
  });

  const [content, setContent] = useState("");

  const closeWithClear = () => {
    setContent("");
    handlers.close();
  };
  return { opened, handlers, content, setContent, closeWithClear };
}
