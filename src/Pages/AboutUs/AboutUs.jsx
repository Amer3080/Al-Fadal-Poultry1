import { Box } from "@mui/material";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Mission from "./Mission/Mission";
import Vision from "./Vision/Vision";
import Values from "./Values/Values";
import Team from "./Team/Team";
import { useContext, useEffect } from "react";
import { DataContext } from "../../Components/Context/DataContext";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export default function AboutUs() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  return (
    <Box>
      <Helmet>
        <title>{t("About Us")}</title>
        <meta
          name="description"
          content="Natural Poultry products 100% from Al Fadal Establishment, committed to quality and food safety standards, reliable supply, and ISO certified."
        />
      </Helmet>
      <HeroSection HeadText={"About Us"} />
      <Mission />
      <Vision />
      <Values />
      <Team />
    </Box>
  );
}
