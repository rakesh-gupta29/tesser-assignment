import { createContext, type ReactNode } from "react";
import "./globals.css";
import "./reset.css";

interface ProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<null>(null);

export const ThemeProvider = ({ children }: ProviderProps) => {
  return <ThemeContext.Provider value={null}>{children}</ThemeContext.Provider>;
};
