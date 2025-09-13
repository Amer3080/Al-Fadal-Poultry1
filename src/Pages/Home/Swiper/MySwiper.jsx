// src/Components/MySlider/MySlider.jsx
import React, { useContext, useEffect, useRef } from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../../Components/Context/DataContext.jsx";
import { Link } from "react-router-dom";
import "wicg-inert";

import img1 from "../../../assets/images/1.jpg";
import img2 from "../../../assets/images/2.jpg";
import img3 from "../../../assets/images/4.jpg";

const fadeZoom = keyframes`
  0%   { transform: scale(1); }
  100% { transform: scale(1.07); }
`;

const SlideImage = styled("img")`
  width: 100%;
  height: 100%; // fill the wrapper’s height
  object-fit: cover;
  animation: ${fadeZoom} 7.5s ease alternate infinite;
  z-index: 1;
`;

const GradientOverlay = styled(Box)({
  content: '""',
  position: "absolute",
  inset: 0,
  backgroundImage: "linear-gradient(180deg, #1e461600 0%, #1e4616b4 100%)",
  zIndex: 2,
  pointerEvents: "none",
});

const TextOverlay = styled(Box)({
  position: "absolute",
  top: "25%",
  left: 0,
  right: 0,
  zIndex: 3,
  textAlign: "center",
  color: "#fff",
});

export default function MySlider() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const { locale } = useContext(DataContext);
  const slickRef = useRef(null);

  // change language on locale updates
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  // inert hidden slides
  const handleAfterChange = () => {
    const root = slickRef.current?.innerSlider?.list;
    if (!root) return;
    Array.from(root.querySelectorAll(".slick-slide")).forEach((slide) => {
      const hidden = slide.getAttribute("aria-hidden") === "true";
      if (hidden) slide.setAttribute("inert", "");
      else slide.removeAttribute("inert");
    });
  };
  useEffect(handleAfterChange, []);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    adaptiveHeight: false,
    accessibility: true,
    focusOnChange: true,
    afterChange: handleAfterChange,
  };

  // toolbar.minHeight is 56px on mobile, 64px on md+

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}>
      <GradientOverlay />
      <Slider ref={slickRef} {...settings}>
        {[img3, img2, img1].map((src, idx) => (
          <Box
            key={idx}
            sx={{
              position: "relative",
              height: { xs: "", sm: "", md: "", lg: "", xl: "640px" },
            }}>
            <SlideImage src={src} alt={`Slide ${idx + 1}`} />
            <TextOverlay>
              {/* Semantically h2, visually h5 */}
              <Typography
                component="h2"
                variant="h5"
                sx={{ fontFamily: "Marhey", fontSize: "2vw" }}>
                {t("No antibiotics, no growth stimulants!")}
              </Typography>

              {/* Semantically h3, visually h2 */}
              <Typography
                component="h3"
                variant="h2"
                sx={{
                  fontSize: locale === "en" ? "5vw" : "6vw",
                  fontFamily: locale === "en" ? "Oleo Script" : "El Messiri",
                  fontWeight: locale === "en" ? 400 : 900,
                  my: 1,
                }}>
                {t("Fresh chickens for you every day!")}
              </Typography>

              {/* Semantically paragraph */}
              <Typography
                component="p"
                variant="body1"
                sx={{ fontFamily: "Marhey", fontSize: "2vw", mb: 2 }}>
                {t("From farm to table, our poultry is simply incredible!")}
              </Typography>

              <Button
                component={Link}
                to="/contact-us"
                variant="contained"
                color="success"
                sx={{
                  textTransform: "capitalize",
                  borderRadius: 2,
                  fontSize: { xs: 12, md: 25 },
                }}>
                {t("Contact Us")}
              </Button>
            </TextOverlay>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
