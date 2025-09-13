import { useContext, useEffect, useMemo } from "react";
import Header from "../../../Hooks/Header";
import image from "../../../assets/images/Frame.avif";
import imgJpg from "../../../assets/images/5.avif";
import {
  Box,
  Divider,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../../Components/Context/DataContext";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
}));

export default function Welcome() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  const features = useMemo(
    () => [
      t("Professional Farmers"),
      t("Quam orance semin"),
      t("Acinia simply free"),
    ],
    [t]
  );
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          py: 2,
          backgroundRepeat: "no-repeat",
          mb: 6,
          direction: locale === "en" ? "ltr" : "rtl",
        }}
        component="section"
        aria-labelledby="welcome-heading">
        <Header
          firstText={t("")}
          secondText={t("We offer high-quality chicken at wholesale prices!")}
          thirdText={t(
            "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          )}
        />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          mx: { xs: 1, lg: 5 },
          direction: locale === "en" ? "ltr" : "rtl",
        }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              crossOrigin="anonymous"
              component="img"
              src={imgJpg}
              alt="Farm welcome image"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              width={600}
              height={600}
              sx={{
                width: { xs: "100%", lg: "85%" },
                height: "auto",
                display: "block",
                mx: "auto",
                borderRadius: "50%",
              }}
            />
          </Grid>{" "}
          <Grid
            size={{ xs: 12, lg: 6 }}
            sx={{
              textAlign: {
                xs: "center",
                lg: locale === "en" ? "left" : "right",
              },
              my: { xs: 4, lg: 0 },
            }}>
            <Typography
              component="div"
              color="#575757"
              sx={{
                textTransform: "uppercase",
                my: 1,
                fontSize: "20px",
                fontFamily: "Marhey",
              }}>
              <Divider>{t("Our introduction")}</Divider>
            </Typography>

            <Typography
              component="h3"
              id="welcome-heading"
              sx={{
                color: "#255946",
                fontSize: { xs: "32px", md: "38px" },
                fontWeight: 800,
                my: 2,
                fontFamily: locale === "en" ? "Roboto" : "El Messiri",
              }}>
              {t("Agriculture & Organic Product")}
            </Typography>

            <Typography
              component="p"
              sx={{
                fontSize: "18px",
                color: "#575757",
                lineHeight: 1.8,
                mb: 3,
                fontFamily: locale === "en" ? "Roboto" : "Marhey",
              }}>
              {t(
                "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don't look even."
              )}
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "flex" },
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexWrap: "wrap",
                mt: 3,
                px: { xs: 3, lg: 0 },
              }}>
              <Paper elevation={0}>
                <Demo>
                  <List disablePadding>
                    {features.map((value, index) => (
                      <ListItem
                        key={index}
                        disableGutters
                        sx={{
                          py: 0.5,
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "row",
                        }}>
                        <ListItemIcon
                          sx={{
                            minWidth: { xs: 28, sm: 35 },
                            mr: locale === "en" ? 1 : 0,
                            ml: locale === "ar" ? 1 : 0,
                          }}>
                          <CheckCircleIcon color="warning" />
                        </ListItemIcon>
                        <ListItemText
                          disableTypography
                          primary={value}
                          sx={{
                            m: 0,
                            textAlign: locale === "ar" ? "right" : "left",
                            flex: "0 1 auto",
                            fontFamily:
                              locale === "en" ? "Roboto" : "El Messiri",
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Demo>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
