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
import { DataContext } from "../../../Components/Context/DataContext";
import { useTranslation } from "react-i18next";
import iconPng from "../../../assets/images/11.avif";

// lazy-load CSS و JS الخاصين بـ react-slick فقط عند الحاجة
const LazySlider = lazy(() =>
  Promise.all([
    import("slick-carousel/slick/slick.css"),
    import("slick-carousel/slick/slick-theme.css"),
    import("react-slick"),
  ]).then(([, , module]) => ({ default: module.default }))
);

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
    () =>
      [0, 1, 2, 3].map((_, idx) => (
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
            {t("Al-Fadal Poultry")}
          </Typography>
          <IconImage
            crossOrigin="anonymous"
            src={iconPng}
            alt={t("Chicken icon")}
            loading="lazy"
            decoding="async"
          />
        </LogoItem>
      )),
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
    <Box
      component="section"
      aria-labelledby="carousel-heading"
      sx={{ mb: 8, overflow: "hidden !important" }}>
      <Suspense
        fallback={<div style={{ textAlign: "center" }}>{t("Loading…")}</div>}>
        <LazySlider {...settings}>{slides}</LazySlider>
      </Suspense>
    </Box>
  );
}

export default memo(Carousel);
