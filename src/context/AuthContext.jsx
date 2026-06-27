import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState(() => {
    return localStorage.getItem("tkn");
  });

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // LOGIN
  const login = (data) => {
    const safeUser = {
      name: data.user?.name,
      role: data.user?.role,
    };

    setToken(data.token);
    setUser(safeUser);

    localStorage.setItem("tkn", data.token);
    localStorage.setItem("user", JSON.stringify(safeUser));
  };

  // LOGOUT
  const logout = () => {
    setToken(null);
    setUser(null);

    localStorage.removeItem("tkn");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}