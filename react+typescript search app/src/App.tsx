import React, { useState, useEffect } from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import "./styles/App.css";

export type UserContextType = {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
};

export type UserContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext<UserContextType | null>(null);

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <HashRouter>
        <Navbar />
        <AppRouter />
      </HashRouter>
    </AuthContext.Provider>
  );
}

export default App;
