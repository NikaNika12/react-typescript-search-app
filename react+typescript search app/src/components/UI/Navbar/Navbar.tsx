import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../Button/MyButton";
import { AuthContext, UserContextType } from "../../../App";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext) as UserContextType;

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      <MyButton onClick={logout}>Log out</MyButton>
      <div className="navbar__links">
        <Link className="links" to="/about">
          About
        </Link>
        <Link className="links" to="/posts">
          Posts
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
