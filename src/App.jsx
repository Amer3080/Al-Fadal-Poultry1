import React, { Suspense, lazy, useContext, useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "animate.css/animate.min.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { DataContext } from "./Components/Context/DataContext";

import MasterLayout from "./Components/MasterLayout/MasterLayout";
import NotFound from "./Components/NotFound/NotFound";
import CircularIndeterminate from "./Components/CircularIndeterminate/CircularIndeterminate.jsx";

// Lazy-loaded pages (route-level)
const Home = lazy(() => import("./Pages/Home/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./Pages/ContactUs/ContactUs"));
const Faq = lazy(() => import("./Pages/Faq/Faq"));
const Services = lazy(() => import("./Pages/Services/Services"));
const History = lazy(() => import("./Pages/History/History"));

// Create router once (avoid recreating on every render)
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "faq", element: <Faq /> },
      { path: "history", element: <History /> },
      { path: "services", element: <Services /> },
    ],
  },
]);

function App() {
  const { theme } = useContext(DataContext);

  const muiTheme = useMemo(
    () =>
      createTheme({
        direction: "rtl",
        palette: { mode: theme },
      }),
    [theme]
  );

  return (
    <HelmetProvider>
      <Helmet htmlAttributes={{ lang: "ar", dir: "rtl" }}>
        <meta
          name="description"
          content="Natural Poultry products 100% from Al Fadal Establishment, committed to quality and food safety standards, reliable supply, and ISO certified."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Al-Fadal Poultry" />
        <meta
          property="og:description"
          content="Natural Poultry products 100% from Al Fadal Establishment, committed to quality and food safety standards"
        />
        {/* Use a public URL (placed in /public) for og:image to avoid bundling large assets into JS */}
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Helmet>

      <ThemeProvider theme={muiTheme}>
        <CssBaseline />

        <Suspense
          fallback={
            <div
              aria-busy="true"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100%",
              }}>
              <CircularIndeterminate />
            </div>
          }>
          <RouterProvider router={routes} />
        </Suspense>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
