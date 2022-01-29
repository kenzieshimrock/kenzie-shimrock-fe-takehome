import React from "react";

import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Contact from "../Pages/Contact";
import Intro from "../Pages/Intro";
import Financial from "../Pages/Financial";
import Business from "../Pages/Business";
import Policies from "../Pages/Policies";

/// routes to be dynamically rendered
export const routes = [
  {
    key: "intro",
    path: "/",
    page: <Intro />,
  },
  {
    key: "contact",
    path: "/contact",
    page: <Contact />,
  },
  {
    key: "business",
    path: "/business",
    page: <Business />,
  },
  {
    key: "financial",
    path: "/financial",
    page: <Financial />,
  },

  {
    key: "policy",
    path: "/policies",
    page: <Policies />,
  },
  {
    key: "default",
    path: "*",
    page: <Intro />,
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={route.page}
            ></Route>
          ))}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

/// updated theming (to be implemented)
const theme = createTheme({
  palette: {
    primary: {
      main: "#FB2288",
    },
    secondary: {
      main: "#B8B8B8",
    },
    warning: {
      main: "#FFD457",
    },
    error: {
      main: "#FB2243",
    },
    neutral: {
      main: "#660DFF",
    },
    blackWhite: {
      main: "#1C1C1C",
      dark: "#fff",
    },
  },
});

export default App;
