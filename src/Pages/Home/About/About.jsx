import { useContext, useEffect, lazy, Suspense, memo } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../../Components/Context/DataContext";
import Header from "../../../Hooks/Header";
import imageJpg from "../../../assets/images/10.avif";
import image from "../../../assets/images/Frame.avif";
import { Link } from "react-router-dom";
const KeyboardTabIcon = lazy(() => import("@mui/icons-material/KeyboardTab"));
const KeyboardReturnIcon = lazy(() =>
  import("@mui/icons-material/KeyboardReturn")
);

const boxStyles = {
  my: 5,
  flexGrow: 1,
  m: 2,
  mx: 5,
};
const gridContainerStyles = {
  flexDirection: { xs: "column-reverse", lg: "row" },
  spacing: 4,
};
const leftGridStyles = {
  my: { xs: 2, md: 3 },
  textAlign: { xs: "center", md: "center", lg: "start" },
};
const smallHeadingStyles = {
  my: 1,
  fontSize: "30px",
  fontFamily: "Marhey",
  textTransform: "capitalize",
  color: "#49a760",
};
const leadStyles = (locale) => ({
  color: "#255946",
  fontSize: "38px",
  fontWeight: 800,
  my: 2,
  fontFamily: locale === "en" ? "Roboto" : "El Messiri",
});
const paragraphStyles = {
  fontSize: "18px",
  color: "#575757",
  lineHeight: 2,
};
const buttonStyles = (locale) => ({
  direction: locale === "en" ? "ltr" : "rtl",
  textTransform: "capitalize",
  my: 3,
  borderRadius: "5%",
  fontFamily: locale === "en" ? "Roboto" : "Marhey",
});

function About() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          py: 2,
          backgroundRepeat: "no-repeat",
        }}
        aria-labelledby="about-heading">
        <Header
          firstText={t("About US")}
          secondText={t("We offer healthy & natural poultry such as chickens")}
          thirdText={t("")}
        />
      </Box>
      <Box
        component="main"
        sx={{
          ...boxStyles,
          direction: locale === "en" ? "ltr" : "rtl",
        }}>
        <Grid container sx={gridContainerStyles}>
          <Grid size={{ xs: 12, lg: 7 }} sx={leftGridStyles}>
            <Typography component="p" sx={smallHeadingStyles}>
              {t("Providing premium poultry since 1983")}
            </Typography>

            <Typography component="h3" sx={leadStyles(locale)}>
              {t("We monitor agricultural products for customers & partners")}
            </Typography>

            <Typography component="p" sx={paragraphStyles}>
              {t(
                "Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Platea dictumst vestibulum rhoncus est pellentesque."
              )}
            </Typography>

            <Typography component="p" sx={{ ...paragraphStyles, pt: 3 }}>
              {t(
                "Curabitur gravida arcu ac tortor. Non consectetur a erat nam at. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus."
              )}
            </Typography>

            <Box>
              <Suspense fallback={<span style={{ width: 24, height: 24 }} />}>
                <Button
                  startIcon={
                    locale === "ar" ? <KeyboardTabIcon sx={{ ml: 2 }} /> : null
                  }
                  endIcon={
                    locale === "en" ? (
                      <KeyboardReturnIcon sx={{ mr: 2 }} />
                    ) : null
                  }
                  component={Link}
                  to="/about-us"
                  sx={buttonStyles(locale)}
                  variant="contained"
                  color="success"
                  size="large">
                  {t("About Us")}
                </Button>
              </Suspense>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <Box
              component="picture"
              sx={{
                width: "100%",
                aspectRatio: "3/2",
                borderRadius: "2%",
                display: "block",
                overflow: "hidden",
              }}>
              <Box
                crossOrigin="anonymous"
                component="img"
                src={imageJpg}
                alt={t("About us image")}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default memo(About);
