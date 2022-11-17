import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/Button/MyButton";
import { AuthContext, UserContextType } from "../App";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext) as UserContextType;

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Login"/>
        <MyInput type="password" placeholder="Password"/>
          <MyButton>Log In</MyButton>
      </form>
    </div>
  );
};

export default Login;
