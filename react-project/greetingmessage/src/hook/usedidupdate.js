import { useState, useEffect } from "react";

export function useDidUpdate() {
  const [inputName, getInputName] = useState("");
  const [greeting, getGreeting] = useState("");

  useEffect(() => {
    if (inputName) {
      const hours = new Date().getHours();
      let newGreeting = "";

      if (hours < 12) {
        newGreeting = `Good Morning:",${inputName}!`;
      } else if (hours > 12 && hours < 18) {
        newGreeting = `Good Afternoon:", ${inputName}!`;
      } else {
        newGreeting = `Good Evening:",${inputName}!`;
      }
      console.log("Greeting updated:", newGreeting);
      getGreeting(newGreeting);
    }
  }, [inputName]);
  return { inputName, getInputName, greeting };
}
