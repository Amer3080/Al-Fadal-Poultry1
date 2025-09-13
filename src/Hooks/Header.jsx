import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useContext, useEffect } from "react";
import { DataContext } from "../Components/Context/DataContext";
function Header({ firstText, secondText, thirdText }) {
  const { t, i18n } = useTranslation();
  const { locale } = useContext(DataContext);
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        my: 1,
      }}>
      <Typography
        component="h3"
        variant="h5"
        sx={{
          fontFamily: "Marhey",
          fontSize: "3vw",
          color: "#286138",
        }}>
        {t(`${firstText}`)}
      </Typography>
      <Typography
        component="h4"
        variant="h2"
        sx={{
          textAlign: "center",
          color: "#255946",
          fontSize: "4vw",
          fontWeight: "900",
          fontFamily: locale === "en" ? "Roboto" : "El Messiri",
          py: 1,
        }}>
        {t(`${secondText}`)}
      </Typography>
      <Typography
        component="h5"
        sx={{
          color: "#575757",
          fontFamily: "Roboto",
          fontSize: "2vw",

          pb: { xs: 2, md: 4, lg: 4 },
        }}>
        {t(`${thirdText}`)}
      </Typography>
    </Box>
  );
}

export default Header;
