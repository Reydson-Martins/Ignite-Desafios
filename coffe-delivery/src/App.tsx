import { ThemeProvider } from "styled-components"
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./Routes"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <BrowserRouter>
      <Router />      
      </BrowserRouter>
      

    </ThemeProvider>

  )
}
