import React, {
  useContext,
  useEffect,
  useMemo,
  lazy,
  Suspense,
  memo,
} from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import carouselStyle from "./Carousel.Style.module.css";
import { DataContext } from "../../../Components/Context/DataContext";
import { useTranslation } from "react-i18next";
import iconPng from "../../../assets/images/11.avif";
const Slider = lazy(async () => {
  await Promise.all([
    import("slick-carousel/slick/slick.css"),
    import("slick-carousel/slick/slick-theme.css"),
  ]);
  return import("react-slick");
});

const LogoItem = styled(Box)({
  display: "flex !important",
  alignItems: "center !important",
  justifyContent: "space-around !important",
  margin: "0 10px",
  width: "100%",
});

const IconImage = styled("img")({
  width: 45,
  height: 45,
  flexShrink: 0,
});

function Carousel() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  const slides = useMemo(
    () => [
      t("Al-Fadal Poultry"),
      t("Al-Fadal Poultry"),
      t("Al-Fadal Poultry"),
      t("Al-Fadal Poultry"),
    ],
    [t]
  );

  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: false,
      rtl: locale === "ar",
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
      ],
    }),
    [locale]
  );

  return (
    <>
      <Box
        component="section"
        aria-labelledby="carousel-heading"
        sx={{ mb: 8 }}
        className={carouselStyle.custom_slider}>
        <Suspense
          fallback={<div style={{ textAlign: "center" }}>{t("Loading…")}</div>}>
          <Slider {...settings}>
            {slides.map((label, idx) => (
              <LogoItem key={idx}>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Marhey",
                    fontSize: "3.5vw",
                    fontWeight: 900,
                    color: "#255946",
                    whiteSpace: "nowrap",
                  }}>
                  {label}
                </Typography>
                <IconImage
                  crossOrigin="anonymous"
                  src={iconPng}
                  alt={t("Chicken icon")}
                  loading="lazy"
                  decoding="async"
                />
              </LogoItem>
            ))}
          </Slider>
        </Suspense>
      </Box>
    </>
  );
}

export default memo(Carousel);
