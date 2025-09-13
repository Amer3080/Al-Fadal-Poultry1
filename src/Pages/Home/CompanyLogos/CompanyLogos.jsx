import { useContext, useMemo, lazy, Suspense, memo } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataContext } from "../../../Components/Context/DataContext";
import logo1 from "../../../assets/images/logos/1.avif";
import logo2 from "../../../assets/images/logos/2.avif";
import logo3 from "../../../assets/images/logos/3.avif";
import logo4 from "../../../assets/images/logos/4.avif";
import logo5 from "../../../assets/images/logos/5.avif";
import logo6 from "../../../assets/images/logos/6.avif";
import logo7 from "../../../assets/images/logos/7.avif";
import logo8 from "../../../assets/images/logos/8.avif";
import logo9 from "../../../assets/images/logos/9.avif";
import logo10 from "../../../assets/images/logos/10.avif";
import logo11 from "../../../assets/images/logos/11.avif";
import logo12 from "../../../assets/images/logos/12.avif";

const Slider = lazy(() => import("react-slick"));

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
      { src: logo7, alt: "Partner Company 7", width: 250, height: 150 },
      { src: logo8, alt: "Partner Company 8", width: 250, height: 150 },
      { src: logo9, alt: "Partner Company 9", width: 250, height: 150 },
      { src: logo10, alt: "Partner Company 10", width: 250, height: 150 },
      { src: logo11, alt: "Partner Company 11", width: 250, height: 150 },
      { src: logo12, alt: "Partner Company 12", width: 250, height: 150 },
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
      rtl: locale === "ar" ? true : false,
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
      ],
      appendDots: (dots) => (
        <Box component="ul" sx={{ margin: 0, padding: 0 }}>
          {dots}
        </Box>
      ),
      // ARIA label for accessibility
      accessibility: true,
      arrows: false,
    }),
    [locale]
  );

  return (
    <>
      <Box
        component="section"
        aria-label="Our Trusted Partners"
        sx={{ my: 4, overflow: "hidden" }}>
        <Suspense fallback={<Box>Loading partners…</Box>}>
          <Slider {...settings}>
            {logos.map(({ src, alt, width, height }, idx) => (
              <LogoSlide key={idx}>
                <Box
                  crossOrigin="anonymous"
                  component="img"
                  src={src}
                  alt={alt}
                  loading="lazy"
                  width={{ xs: 60, md: 150, lg: width }}
                  height={{ xs: 60, md: 100, lg: height }}
                  sx={{
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </LogoSlide>
            ))}
          </Slider>
        </Suspense>
      </Box>
    </>
  );
}

export default memo(CompanyLogos);
