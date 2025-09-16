import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import DataContextProvider from "./Components/Context/DataContext.jsx";
import "wicg-inert";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Keep only critical fonts for initial render
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "@fontsource/el-messiri/400.css";

// Carousel styles can be imported where carousel is used to avoid shipping them site-wide
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// Lazy-load the app to reduce initial bundle size
const App = lazy(() => import("./App.jsx"));

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: ["El Messiri", "Roboto", "sans-serif"].join(","),
  },
});

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DataContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense
          fallback={
            <div aria-busy="true" aria-live="polite">
              Loading.....
            </div>
          }>
          <App />
        </Suspense>
      </ThemeProvider>
    </DataContextProvider>
  </React.StrictMode>
);
