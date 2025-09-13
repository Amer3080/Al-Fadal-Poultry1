import { useContext, useEffect, useMemo, memo } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import { DataContext } from "../../../Components/Context/DataContext";
import Header from "../../../Hooks/Header";
import { useTranslation } from "react-i18next";
import image from "../../../assets/images/Frame.avif";
import img1 from "../../../assets/images/s3.avif";
import img2 from "../../../assets/images/s5.avif";
import img3 from "../../../assets/images/s2.avif";
import img4 from "../../../assets/images/s1.avif";

const rawContent = [
  {
    img: img1,
    title: "Chicken Quality",
    content: "Lorem ium dolor sit ametad pisicing elit sed simply do ut.",
  },
  {
    img: img2,
    title: "Chicken Best",
    content: "Lorem ium dolor sit ametad pisicing elit sed simply do ut.",
  },
  {
    img: img3,
    title: "Chicken Healthy",
    content: "Lorem ium dolor sit ametad pisicing elit sed simply do ut.",
  },
  {
    img: img4,
    title: "The Best Poultry",
    content: "Lorem ium dolor sit ametad pisicing elit sed simply do ut.",
  },
];

function Offering() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  const offerings = useMemo(
    () =>
      rawContent.map((item) => ({
        ...item,
        title: t(item.title),
        content: t(item.content),
      })),
    [t]
  );

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
          firstText={t("What We’re Offering")}
          secondText={t("Hatch to Harvest for Best Poultry Products")}
          thirdText=""
        />
      </Box>
      <Box
        component="section"
        aria-labelledby="offering-heading"
        sx={{
          my: { xs: 2, md: 5, lg: 10 },
          mt: { xs: 5, md: 0 },
          direction: locale === "en" ? "ltr" : "rtl",
        }}>
        {/* Decorative header */}

        <Grid container spacing={3}>
          {offerings.map(({ img, title, content }, idx) => (
            <Grid
              key={idx}
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={{ display: "flex", justifyContent: "center", my: 4 }}>
              <Card sx={{ maxWidth: 300, pb: 1 }}>
                <CardActionArea>
                  <CardMedia
                    crossOrigin="anonymous"
                    component="img"
                    src={img}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    height="140"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        color: "#255946",
                        fontWeight: 700,
                        my: 1,
                        fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                      }}>
                      {title}
                    </Typography>
                    <Divider />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}>
                      {content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default memo(Offering);
