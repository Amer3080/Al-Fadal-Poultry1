import React, { Suspense, lazy, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "animate.css/animate.min.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { DataContext } from "./Components/Context/DataContext";

import MasterLayout from "./Components/MasterLayout/MasterLayout";
import NotFound from "./Components/NotFound/NotFound";

import CircularIndeterminate from "./Components/CircularIndeterminate/CircularIndeterminate.jsx";
import image from "./assets/images/Logo.avif";

// Lazy-loaded pages
const Home = lazy(() => import("./Pages/Home/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./Pages/ContactUs/ContactUs"));
const Faq = lazy(() => import("./Pages/Faq/Faq"));
const Services = lazy(() => import("./Pages/Services/Services"));
const History = lazy(() => import("./Pages/History/History"));

function App() {
  const { theme } = useContext(DataContext);

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

  const muiTheme = createTheme({
    palette: { mode: theme },
  });

  return (
    <HelmetProvider>
      <Helmet htmlAttributes={{ lang: "en", dir: "ltr" }}>
        <meta
          name="description"
          content="Natural Poultry products 100% from Al Fadal Establishment, committed to quality and food safety standards, reliable supply, and ISO certified."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:url" content="http://www.alfadalpoultry.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Al-Fadal Poultry" />
        <meta
          property="og:description"
          content="Natural Poultry products 100% from Al Fadal Establishment, committed to quality and food safety standards"
        />
        <meta property="og:image" content={image} />
        {/* Open Graph / Twitter */}
        <meta name="twitter:card" content="Al-Fadal Poultry" />
        {/* Preconnect to font origins */}
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
        {/* The font */}
        <link
          rel="preload"
          href="/node_modules/slick-carousel/slick/fonts/slick.woff"
          as="font"
          type="font/woff"
          crossorigin
        />

        {/* Preload core Roboto stylesheet */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          onload="this.rel='stylesheet'"
        />

        {/* Preload key hero image */}
        <link
          rel="icon"
          type="image/png"
          href="src/assets/images/Logo.png"
          as="image"
          crossOrigin="anonymous"
        />
        {/* Preconnect / Prefetch for faster asset loading */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </Helmet>

      <ThemeProvider theme={muiTheme}>
        <CssBaseline />

        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
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
