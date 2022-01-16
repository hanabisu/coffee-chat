
import React from "react";
import "./App.css";
import { AuthGuard } from "./auth/AuthGuard";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import NavRoute from "./NavRoute";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#795548',
    },
    secondary: {
      main: '#f50057',
    },
    info: {
      main: '#795548',
    },
  },
});

export const history = createBrowserHistory({});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AuthGuard>
        <NavRoute />
      </AuthGuard>
    </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;