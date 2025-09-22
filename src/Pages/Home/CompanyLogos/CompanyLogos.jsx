import React, { useContext, useMemo, lazy, Suspense, memo } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { DataContext } from "../../../Components/Context/DataContext";
import logo1 from "../../../assets/images/logos/1.avif";
import logo2 from "../../../assets/images/logos/2.avif";
import logo3 from "../../../assets/images/logos/3.avif";
import logo4 from "../../../assets/images/logos/4.avif";
import logo5 from "../../../assets/images/logos/5.avif";
import logo6 from "../../../assets/images/logos/6.avif";

// lazy-load CSS و JS الخاصين بـ react-slick فقط عند الحاجة
const LazySlider = lazy(() =>
  Promise.all([
    import("slick-carousel/slick/slick.css"),
    import("slick-carousel/slick/slick-theme.css"),
    import("react-slick"),
  ]).then(([, , mod]) => ({ default: mod.default }))
);

const LogoSlide = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 10px",
  width: "100%",
});

function CompanyLogos() {
  const { locale } = useContext(DataContext);

  const logos = useMemo(
    () => [
      { src: logo1, alt: "Partner Company 1", width: 250, height: 150 },
      { src: logo2, alt: "Partner Company 2", width: 250, height: 150 },
      { src: logo3, alt: "Partner Company 3", width: 250, height: 150 },
      { src: logo4, alt: "Partner Company 4", width: 250, height: 150 },
      { src: logo5, alt: "Partner Company 5", width: 250, height: 150 },
      { src: logo6, alt: "Partner Company 6", width: 250, height: 150 },
    ],
    []
  );

  const settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 0,
      cssEase: "linear",
      pauseOnHover: false,
      rtl: locale === "ar",
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
      ],
      appendDots: (dots) => (
        <Box component="ul" sx={{ margin: 0, padding: 0 }}>
          {dots}
        </Box>
      ),
      accessibility: true,
      arrows: false,
    }),
    [locale]
  );

  return (
    <Box
      component="section"
      aria-label="Our Trusted Partners"
      sx={{ my: 4, overflow: "hidden" }}>
      <Suspense fallback={<Box>Loading partners…</Box>}>
        <LazySlider {...settings}>
          {logos.map(({ src, alt, width, height }, idx) => (
            <LogoSlide key={idx}>
              <Box
                component="img"
                crossOrigin="anonymous"
                src={src}
                alt={alt}
                loading="lazy"
                width={{ xs: 60, md: 150, lg: width }}
                height={{ xs: 60, md: 100, lg: height }}
                sx={{ objectFit: "contain", display: "block" }}
              />
            </LogoSlide>
          ))}
        </LazySlider>
      </Suspense>
    </Box>
  );
}

export default memo(CompanyLogos);
