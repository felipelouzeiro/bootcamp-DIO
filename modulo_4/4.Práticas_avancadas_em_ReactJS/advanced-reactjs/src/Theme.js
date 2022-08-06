import { createContext } from "react";

export const themes = {
  primary: {
    background: '#fff',
    color: '#000'
  },
  secondary: {
    background: '#000',
    color: '#fff'
  }
}

export const ThemeContex = createContext(themes.secondary)