import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { GiRooster, GiBarn, GiToolbox } from "react-icons/gi";
import { FaHeadset, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "../../../Components/Context/DataContext";
import { useTranslation } from "react-i18next";

export default function OurService() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  const features = [
    {
      id: 1,
      icon: <GiRooster size={48} color="#F57C00" aria-hidden="true" />,
      title: t("Chickens"),
      description: t(
        "Healthy, free-range chickens raised in optimal conditions."
      ),
      link: "/services",
    },
    {
      id: 2,
      icon: <GiBarn size={48} color="#8D6E63" aria-hidden="true" />,
      title: t("Poultry Farm"),
      description: t("Advanced poultry farms with modern ventilation systems."),
      link: "/services",
    },
    {
      id: 3,
      icon: <GiToolbox size={48} color="#1976D2" aria-hidden="true" />,
      title: t("Chicken Equipment"),
      description: t("Efficient feeding and housing equipment for poultry."),
      link: "/services",
    },
    {
      id: 4,
      icon: <FaHeadset size={48} color="#388E3C" aria-hidden="true" />,
      title: t("Technical Support"),
      description: t("24/7 farm support and veterinary consultation."),
      link: "/services",
    },
  ];

  return (
    <Container component="section" sx={{ py: 8 }}>
      <Grid container spacing={4} role="list">
        {features.map(({ id, icon, title, description, link }) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={id} role="listitem">
            <Card
              component="article"
              elevation={3}
              sx={(theme) => ({
                position: "relative",
                p: 3,
                borderRadius: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, background 0.3s ease",
                bgcolor:
                  theme.palette.mode === "dark"
                    ? theme.palette.background.paper
                    : "#e0f2f1",
                "&:hover": {
                  transform: "translateY(-6px)",
                  bgcolor: "#b2dfdb",
                  "& .learn-more-container": {
                    bgcolor: theme.palette.background.default,
                  },
                  "& .learn-more-btn": {
                    bgcolor: "#255946",
                  },
                },
              })}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  pt: 2,
                  ariaHidden: true,
                }}>
                {icon}
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                <Typography
                  variant="h6"
                  component="p"
                  fontWeight={800}
                  gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <Box
                className="learn-more-container"
                sx={{
                  position: "absolute",
                  bottom: "2%",
                  right: "3%",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "background 0.3s ease",
                }}>
                <IconButton
                  component={Link}
                  to={link}
                  className="learn-more-btn"
                  aria-label={`${title} - Learn more`}
                  sx={{
                    width: 45,
                    height: 45,
                    bgcolor: "#49a760",
                    borderRadius: "50%",
                    color: "#fff",
                    transition: "background 0.3s ease",
                    "&:hover": {
                      bgcolor: "#255946",
                    },
                  }}>
                  <FaArrowRight />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
