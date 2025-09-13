import { Box, Typography } from "@mui/material";
import imageTwo from "../../../assets/images/Frame.avif";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../../Components/Context/DataContext";
function Vision() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  return (
    <>
      <Box
        sx={{
          mb: 4,
          position: "relative",
          backgroundImage: `url(${imageTwo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "30vh", // or any height you need
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          },
        }}>
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            my: 5,
            textAlign: "center",
          }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "#255946",
              fontSize: { xs: "50px", md: "40px" },
              fontWeight: 900,
              fontFamily: "Marhey",
              mb: 5,
            }}>
            {t("Our Vision")}
          </Typography>
          <Typography
            color="#255946"
            sx={{
              maxWidth: 1200,
              mx: "auto",
              lineHeight: 1.5,
              fontSize: "25px",
            }}>
            To be the global leader in innovative solutions, setting new
            standards for excellence and sustainability in our industry.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Vision;
