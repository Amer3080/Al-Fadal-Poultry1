import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export let DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [locale, setLocale] = useState("ar");
  const [theme, setTheme] = useState("light");
  return (
    <DataContext.Provider value={{ theme, setTheme, locale, setLocale }}>
      {children}
    </DataContext.Provider>
  );
}
