// 统一按钮样式，接受 onClick 和 children。

import React from "react";

const Button = ({ onClick, children, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
export default Button;
