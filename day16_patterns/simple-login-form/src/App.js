import React, { useRef, useState } from "react";

const LoginForm = () => {
  const usernameRef = useRef(null);

  React.useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);
  const count = 0;

  const [timeoutCount, setTimeoutCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

  const getCountTimeout = () => {
    setTimeout(() => {
      setTimeoutCount(countRef.current);
    }, 5000);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    console.log("Username:", username);
    console.log("password:", password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label>Username</label>
          <input
            id="username"
            name="username"
            ref={usernameRef}
            type="text"
            placeholder="Enter your username"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginForm;
