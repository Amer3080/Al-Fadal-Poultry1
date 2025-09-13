import { Box, Typography } from "@mui/material";
import image from "../../../assets/images/Frame.avif";
import { useTranslation } from "react-i18next";

export default function ActionBanner({ heading }) {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      aria-labelledby="action-banner-heading"
      sx={{
        py: 4,
        textAlign: "center",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "common.white",
      }}>
      <Typography
        id="action-banner-heading"
        component="h2"
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#147242",
          fontSize: { xs: "24px", md: "34px", lg: "45px" },
        }}
        gutterBottom>
        {t(heading)}
      </Typography>

      <Typography
        component="p"
        variant="h6"
        sx={{
          color: "#147242",
          fontSize: { xs: "14px", md: "24px", lg: "30px" },
          fontWeight: "bold",
        }}>
        {t("FPF For Poultry Production")}
      </Typography>
    </Box>
  );
}
