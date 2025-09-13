import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  lazy,
  Suspense,
  memo,
} from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DataContext } from "../Context/DataContext";
import logo from "../../assets/images/Logo.avif";
const MenuIcon = lazy(() => import("@mui/icons-material/Menu"));
const CottageIcon = lazy(() => import("@mui/icons-material/Cottage"));
const LanguageIcon = lazy(() => import("@mui/icons-material/Language"));
const LightModeIcon = lazy(() => import("@mui/icons-material/LightMode"));
const DarkModeIcon = lazy(() => import("@mui/icons-material/DarkMode"));
const MiscServicesIcon = lazy(() =>
  import("@mui/icons-material/MiscellaneousServices")
);
const ImportContactsIcon = lazy(() =>
  import("@mui/icons-material/ImportContacts")
);
const WorkHistoryIcon = lazy(() => import("@mui/icons-material/WorkHistory"));
const QuizIcon = lazy(() => import("@mui/icons-material/Quiz"));
const ContactPhoneIcon = lazy(() => import("@mui/icons-material/ContactPhone"));
const sx = {
  appBar: (locale) => ({
    backgroundColor: "#255946",
    direction: locale === "ar" ? "rtl" : "ltr",
  }),
  logoLarge: {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
  },
  logoSmall: {
    display: { xs: "flex", md: "none" },
    alignItems: "center",
    flexWrap: "nowrap",
  },
  navLinks: {
    flexGrow: 1,
    display: { xs: "none", xl: "flex" },
    justifyContent: "center",
  },
  featureGroup: {
    flexGrow: 0,
    display: { xs: "none", xl: "flex" },
    alignItems: "center",
    gap: 1,
  },
  mobileMenuBox: {
    display: { xs: "flex", xl: "none" },
    justifyContent: "flex-end",
    width: "100%",
  },
  linkButton: (locale) => ({
    my: 2,
    mx: 1,
    color: "white",
    textTransform: "capitalize",
    fontSize: "16px",
    fontFamily: locale === "ar" ? "Marhey" : "Roboto",
  }),
  drawerPaper: {
    width: 250,
    bgcolor: "#255946",
    color: "white",
  },
  drawerLogoBox: {
    display: "flex",
    alignItems: "center",
    p: 2,
  },
  drawerDivider: {
    borderColor: "rgba(255,255,255,0.3)",
  },
  drawerText: (locale) => ({
    fontFamily: locale === "ar" ? "Marhey" : "Roboto",
    fontSize: 18,
  }),
};

const NavBar = () => {
  const { theme, setTheme, locale, setLocale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  // Handlers
  const toggleDrawer = useCallback((val) => () => setOpen(val), []);

  const handleLanguage = useCallback(() => {
    const next = locale === "ar" ? "en" : "ar";
    setLocale(next);
    i18n.changeLanguage(next);
  }, [locale, setLocale, i18n]);

  const handleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, [setTheme]);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);

  // Page data memo
  const pages = useMemo(
    () => [
      { label: t("Home"), path: "/home", icon: <CottageIcon /> },
      { label: t("Services"), path: "/services", icon: <MiscServicesIcon /> },
      { label: t("About"), path: "/about-us", icon: <ImportContactsIcon /> },
      { label: t("History"), path: "/history", icon: <WorkHistoryIcon /> },
      { label: t("FAQ"), path: "/faq", icon: <QuizIcon /> },
      { label: t("Contacts"), path: "/contact-us", icon: <ContactPhoneIcon /> },
    ],
    [t]
  );

  // Drawer content memo
  const drawerList = useMemo(
    () => (
      <Box
        role="presentation"
        onClick={toggleDrawer(false)}
        sx={sx.drawerPaper}>
        <Box sx={sx.drawerLogoBox}>
          <Box
            component="img"
            src={logo}
            alt="logo"
            width="45px"
            loading="eager"
          />
          <Typography
            component="h1"
            to="/"
            variant="h6"
            sx={{
              ml: 1,
              fontFamily: locale === "ar" ? "Marhey" : "Fugaz One",
              fontSize: locale === "ar" ? 20 : 18,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}>
            {t("Al-Fadal Poultry")}
          </Typography>
        </Box>

        <Divider sx={sx.drawerDivider} />

        <List>
          {pages.map(({ label, path, icon }) => (
            <ListItem key={path} disablePadding>
              <ListItemButton component={Link} to={path}>
                <ListItemIcon sx={{ color: "white" }}>
                  <Suspense fallback={<span />}>{icon}</Suspense>
                </ListItemIcon>
                <ListItemText
                  primary={label}
                  disableTypography
                  sx={sx.drawerText(locale)}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2, ...sx.drawerDivider }} />

        <Box sx={{ px: 2 }}>
          <Button
            fullWidth
            variant="contained"
            color="success"
            onClick={handleLanguage}
            sx={{
              fontFamily: locale === "ar" ? "Roboto" : "Marhey",
              mb: 1,
            }}
            endIcon={
              <Suspense fallback={<span />}>
                <LanguageIcon />
              </Suspense>
            }>
            {locale === "ar" ? t("English") : t("اللغـة العربيـة")}
          </Button>

          <Button
            fullWidth
            variant="outlined"
            onClick={handleTheme}
            startIcon={
              <Suspense fallback={<span />}>
                {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </Suspense>
            }
            sx={{ color: "white", borderColor: "white" }}>
            {theme === "dark" ? t("Light Mode") : t("Dark Mode")}
          </Button>
        </Box>
      </Box>
    ),
    [toggleDrawer, locale, t, pages, handleLanguage, handleTheme, theme]
  );

  return (
    <AppBar
      position="fixed"
      sx={sx.appBar(locale)}
      component="nav"
      elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Box sx={sx.logoLarge}>
            <Box
              component="img"
              src={logo}
              alt="logo"
              width="60px"
              loading="eager"
            />
            <Typography
              component="h1"
              to="/"
              variant="h6"
              noWrap
              sx={{
                ml: 1,
                fontFamily: locale === "ar" ? "Marhey" : "Fugaz One",
                fontSize: locale === "ar" ? 26 : 25,
                fontWeight: 800,
                color: "inherit",
                textDecoration: "none",
              }}>
              {t("Al-Fadal Poultry")}
            </Typography>
          </Box>

          {/* Mobile Logo */}
          <Box sx={sx.logoSmall}>
            <Box
              component="img"
              src={logo}
              alt="logo"
              width="60px"
              loading="eager"
            />
            <Typography
              component={Link}
              to="/"
              variant="h6"
              noWrap
              sx={{
                ml: 1,
                whiteSpace: "nowrap",
                fontFamily: locale === "ar" ? "Marhey" : "Fugaz One",
                fontSize: { xs: 20, sm: 25 },
                fontWeight: 800,
                color: "inherit",
                textDecoration: "none",
              }}>
              {t("Al-Fadal Poultry")}
            </Typography>
          </Box>

          {/* Desktop Nav Links */}
          <Box sx={sx.navLinks}>
            {pages.map(({ label, path }) => (
              <Button
                key={path}
                component={Link}
                to={path}
                sx={sx.linkButton(locale)}>
                {label}
              </Button>
            ))}
          </Box>

          {/* Desktop Features */}
          <Box sx={sx.featureGroup}>
            <Button
              onClick={handleLanguage}
              sx={{
                fontFamily: locale === "ar" ? "Roboto" : "Marhey",
                color: "white",
              }}
              endIcon={
                <Suspense fallback={<span />}>
                  <LanguageIcon sx={{ mr: 1 }} />
                </Suspense>
              }>
              {locale === "ar" ? t("English") : t("اللغـة العربيـة")}
            </Button>

            <IconButton
              onClick={handleTheme}
              aria-label={
                theme === "dark" ? t("Switch to light") : t("Switch to dark")
              }
              sx={{ color: "white" }}
              size="large">
              <Suspense fallback={<span />}>
                {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </Suspense>
            </IconButton>
          </Box>

          {/* Mobile Menu */}
          <Box sx={sx.mobileMenuBox}>
            <IconButton
              onClick={toggleDrawer(true)}
              aria-label={t("Open menu")}
              size="large"
              color="inherit"
              edge="end">
              <Suspense fallback={<span />}>
                <MenuIcon />
              </Suspense>
            </IconButton>
            <Drawer
              open={open}
              onClose={toggleDrawer(false)}
              ModalProps={{ keepMounted: true }}
              PaperProps={{ sx: sx.drawerPaper }}>
              {drawerList}
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default memo(NavBar);
