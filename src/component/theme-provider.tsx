import { createContext, useContext } from "react";
type theme = {
  colors:{
    primary:string,
    secondry:string,
  }
}
const defaultTheme:theme = {
       colors:{
        primary:"blue",
        secondry:"green",
       }
}
const themeContext = createContext<theme>(defaultTheme);
// export const ThemeProvider = ()