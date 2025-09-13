import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n";
import DataContextProvider from "./Components/Context/DataContext.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// MUI theme imports
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import ReactDOM from "react-dom/client";

// Fonts Packages
import "@fontsource/marhey/400.css";
import "@fontsource/marhey/700.css";
import "@fontsource/oleo-script/400.css";
import "@fontsource/caveat/400.css";
import "@fontsource/noto-nastaliq-urdu/400.css";
import "@fontsource/el-messiri/400.css";
import "@fontsource/fugaz-one/400.css";
import "@fontsource/rubik/400.css";
import "@fontsource/merienda/400.css";
import "@fontsource/orbitron/400.css";
import "@fontsource/archivo/400.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  direction: "ltr",
  typography: {
    fontFamily: [
      "Roboto",
      "Marhey",
      "Oleo Script",
      "Caveat",
      "Noto Nastaliq Urdu",
      "El Messiri",
      "Fugaz One",
      "Rubik",
      "Merienda",
      "Orbitron",
      "Archivo",
      "sans-serif",
    ].join(","),
  },
});

createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </DataContextProvider>
);
