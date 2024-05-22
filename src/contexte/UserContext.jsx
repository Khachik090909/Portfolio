import { createContext, useContext, useMemo, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export function UserContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(210);

  const memoizedUser = useMemo(() => {
    return { darkMode, setDarkMode };
  }, [darkMode]);

  return (
    <UserContext.Provider value={memoizedUser}>{children}</UserContext.Provider>
  );
}
