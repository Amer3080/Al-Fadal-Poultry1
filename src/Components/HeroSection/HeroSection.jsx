import { useContext, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import heroMeta from "../../assets/images/Hero.avif?width=396;792;1188&format=avif;webp&metadata";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../Components/Context/DataContext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { Link } from "react-router-dom";

const {
  images,
  srcSet: { avif, webp },
} = heroMeta;

const StyledHeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0,0,0,0.6)), url(${images[0].src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: "#fff",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "9vh",
  padding: "120px 0",

  [theme.breakpoints.up("sm")]: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6)), url(${images[1].src})`,
    padding: "80px 0",
  },

  [theme.breakpoints.up("md")]: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6)), url(${images[2].src})`,
    padding: "80px 0",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "60px 0",
  },
}));

function handleClick(event) {
  event.preventDefault();
}

function IconBreadcrumbs({ textLink, locale }) {
  const { t } = useTranslation();
  return (
    <div
      role="presentation"
      onClick={handleClick}
      style={{ direction: locale === "en" ? "ltr" : "rtl" }}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ fontSize: 20, color: "#fff", px: 8 }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover .hoverable": { color: "#255946" },
            }}>
            <HomeIcon
              className="hoverable"
              sx={{
                fontSize: { xs: 10, sm: 16, md: 30 },
                color: "#fff",
                mx: 1,
                transition: "color 0.3s",
              }}
            />
            <Typography
              className="hoverable"
              sx={{
                fontSize: { xs: 10, sm: 16, md: 30 },
                color: "#fff",
                fontWeight: 900,
                transition: "color 0.3s",
                fontFamily: locale === "en" ? "Robot" : "El Messiri",
              }}>
              {t("Home")}
            </Typography>
          </Box>
        </Link>
        <Typography
          sx={{
            fontSize: { xs: 10, sm: 16, md: 30 },
            fontWeight: 900,
            display: "flex",
            alignItems: "center",
            fontFamily: locale === "en" ? "Robot" : "El Messiri",
          }}>
          <GrainIcon sx={{ mx: 1 }} fontSize="inherit" />
          {t(textLink)}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}

export default function HeroSection({ HeadText }) {
  const { t, i18n } = useTranslation();
  const { locale } = useContext(DataContext);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  return (
    <Box sx={{ minHeight: "20rem" }}>
      <StyledHeroSection>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}>
          <Typography
            variant="h2"
            sx={{
              mt: 5,
              fontFamily: locale === "en" ? "Robot" : "El Messiri",
              fontSize: { xs: 35, md: 65 },
              fontWeight: 700,
            }}
            gutterBottom>
            {t(HeadText)}
          </Typography>

          <IconBreadcrumbs textLink={HeadText} locale={locale} />
        </Container>
      </StyledHeroSection>
    </Box>
  );
}
