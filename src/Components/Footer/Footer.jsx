// src/Components/Footer/Footer.jsx
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../Components/Context/DataContext";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import MailOutline from "@mui/icons-material/MailOutline";
import logo from "../../assets/images/Logo.avif";

export default function Footer() {
  const { t } = useTranslation();
  const { locale } = useContext(DataContext);

  return (
    <>
      {" "}
      <Box
        component="footer"
        sx={{
          bgcolor: "#255946",
          color: "grey.100",
          pt: 6,
          direction: locale === "ar" ? "rtl" : "ltr",
        }}>
        {" "}
        <Container maxWidth="lg">
          {" "}
          <Grid container spacing={2} justifyContent="center">
            {" "}
            {/* About Section */}{" "}
            <Grid component="section" size={{ xs: 12, md: 4 }}>
              {" "}
              <Box
                component="div"
                display="flex"
                alignItems="center"
                mb={2}
                flexWrap="nowrap">
                {" "}
                <Box
                  component="img"
                  src={logo}
                  alt="Al-Fadal Poultry Logo"
                  sx={{ width: 80 }}
                  loading="lazy"
                />{" "}
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    fontWeight: 900,
                    ml: 1.5,
                    whiteSpace: "nowrap",
                    fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                    color: "common.white",
                  }}>
                  {" "}
                  {t("Al-Fadal\u00A0Poultry")}{" "}
                </Typography>{" "}
              </Box>{" "}
              <Typography
                variant="body2"
                mb={2}
                sx={{ fontFamily: locale === "en" ? "Roboto" : "Marhey" }}>
                {" "}
                {t(
                  "We’re a team of passionate individuals dedicated to making everyone's lives easier through innovative products. We create great products to solve any problem you may encounter in your work."
                )}{" "}
              </Typography>{" "}
              <nav aria-label={t("Social Media")}>
                {" "}
                <IconButton
                  component={Link}
                  to="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  sx={{ color: "common.white" }}>
                  {" "}
                  <FacebookIcon />{" "}
                </IconButton>{" "}
                <IconButton
                  component={Link}
                  to="https://x.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Twitter"
                  sx={{ color: "common.white" }}>
                  {" "}
                  <TwitterIcon />{" "}
                </IconButton>{" "}
                <IconButton
                  component={Link}
                  to="https://web.telegram.org/k/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Telegram"
                  sx={{ color: "common.white" }}>
                  {" "}
                  <TelegramIcon />{" "}
                </IconButton>{" "}
                <IconButton
                  component={Link}
                  to="https://www.whatsapp.com/?lang=ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on WhatsApp"
                  sx={{ color: "common.white" }}>
                  {" "}
                  <WhatsAppIcon />{" "}
                </IconButton>{" "}
              </nav>{" "}
            </Grid>{" "}
            {/* Quick Links */}{" "}
            <Grid
              component="nav"
              size={{ xs: 6, sm: 4, md: 2 }}
              aria-label={t("Our Links")}>
              {" "}
              <Typography
                variant="h6"
                color="#efb443"
                gutterBottom
                sx={{
                  fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                  fontWeight: 800,
                }}>
                {" "}
                {t("Our Links")}{" "}
              </Typography>{" "}
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "About Us", to: "/about-us" },
                { label: "Contact Us", to: "/contact-us" },
                { label: "History", to: "/history" },
                { label: "FAQ", to: "/faq" },
              ].map(({ label, to }) => (
                <Typography
                  component={Link}
                  to={to}
                  key={to}
                  variant="body2"
                  sx={{
                    my: 1,
                    display: "block",
                    color: "white",
                    textDecoration: "none",
                    pr: 0.5,
                  }}>
                  {" "}
                  {t(label)}{" "}
                </Typography>
              ))}{" "}
            </Grid>{" "}
            {/* Contact Details */}{" "}
            <Grid
              component="section"
              aria-labelledby="contact-heading"
              size={{ xs: 6, sm: 4, md: 2 }}>
              {" "}
              <Typography
                id="contact-heading"
                variant="h6"
                color="#efb443"
                gutterBottom
                sx={{
                  fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                  fontWeight: 800,
                }}>
                {" "}
                {t("Contact Us")}{" "}
              </Typography>{" "}
              <address>
                {" "}
                <Box display="flex" alignItems="center" mb={1}>
                  {" "}
                  <LocationOnIcon />{" "}
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: locale === "en" ? "Roboto" : "Marhey",
                      ml: 0.5,
                    }}>
                    {" "}
                    {t("Cairo")}{" "}
                  </Typography>{" "}
                </Box>{" "}
                <Box display="flex" alignItems="center" mb={1}>
                  {" "}
                  <LocationOnIcon />{" "}
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: locale === "en" ? "Roboto" : "Marhey",
                      ml: 0.5,
                    }}>
                    {" "}
                    {t("Giza, Helwan 123")}{" "}
                  </Typography>{" "}
                </Box>{" "}
                <Box display="flex" alignItems="center" mb={1}>
                  {" "}
                  <PhoneIcon />{" "}
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: locale === "en" ? "Roboto" : "Marhey",
                      ml: 0.5,
                    }}>
                    {" "}
                    01001212121{" "}
                  </Typography>{" "}
                </Box>{" "}
                <Box display="flex" alignItems="center">
                  {" "}
                  <EmailIcon />{" "}
                  <Typography
                    variant="body2"
                    noWrap
                    sx={{
                      fontFamily: locale === "en" ? "Roboto" : "Marhey",
                      ml: 0.5,
                    }}>
                    {" "}
                    Al-Fadal@gmail.com{" "}
                  </Typography>{" "}
                </Box>{" "}
              </address>{" "}
            </Grid>{" "}
            {/* Newsletter */}{" "}
            <Grid
              component="section"
              aria-labelledby="newsletter-heading"
              size={{ xs: 12, sm: 8, md: 4 }}>
              {" "}
              <Typography
                id="newsletter-heading"
                variant="h6"
                color="#efb443"
                gutterBottom
                sx={{
                  fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                  fontWeight: 800,
                }}>
                {" "}
                {t("Newsletter")}{" "}
              </Typography>{" "}
              <Typography
                variant="body2"
                mb={1}
                sx={{ fontFamily: locale === "ar" ? "Marhey" : "Roboto" }}>
                {" "}
                {t("Receive news straight to your inbox.")}{" "}
              </Typography>{" "}
              <Box component="form" noValidate autoComplete="on" display="flex">
                {" "}
                <TextField
                  id="newsletter-email"
                  name="email"
                  type="email"
                  label={t("Your email")}
                  size="small"
                  variant="outlined"
                  autoComplete="email"
                  InputLabelProps={{
                    sx: { color: "white", "&.Mui-focused": { color: "white" } },
                  }}
                  InputProps={{
                    sx: {
                      color: "white",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                    },
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{ opacity: 0, ".Mui-focused &": { opacity: 1 } }}>
                        {" "}
                        <MailOutline sx={{ color: "white" }} />{" "}
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    flex: 1,
                    "& .MuiOutlinedInput-root input": { caretColor: "white" },
                  }}
                />{" "}
                <Button
                  type="submit"
                  size="small"
                  variant="outlined"
                  disableElevation
                  sx={{
                    mx: 1,
                    fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                    color: "white",
                    borderColor: "white",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" },
                  }}>
                  {" "}
                  {t("Send")}{" "}
                </Button>{" "}
              </Box>{" "}
            </Grid>{" "}
          </Grid>{" "}
        </Container>{" "}
        <Box
          component="div"
          mt={6}
          py={2}
          textAlign="center"
          sx={{ bgcolor: "rgba(0, 0, 0, 0.14)" }}>
          {" "}
          <Typography
            variant="body2"
            color="grey.100"
            sx={{ fontFamily: locale === "en" ? "Roboto" : "El Messiri" }}>
            {" "}
            {t("© 2025 Al-Fadal Poultry. All rights reserved.")}{" "}
          </Typography>{" "}
        </Box>{" "}
      </Box>{" "}
    </>
  );
}
