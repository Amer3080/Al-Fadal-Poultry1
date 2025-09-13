import { Box, Card, styled, Grid } from "@mui/material";
import imageOne from "../../../assets/images/c1.avif";
import imageTwo from "../../../assets/images/c2.avif";
import imageThree from "../../../assets/images/c3.avif";
import Header from "../../../Hooks/Header";
import { memo, useContext, useEffect } from "react";
import image from "../../../assets/images/Frame.avif";
import { DataContext } from "../../../Components/Context/DataContext";
import { useTranslation } from "react-i18next";

const images = [
  {
    src: imageOne,
    alt: "ISO Certificate for Organic Poultry Standards",
  },
  {
    src: imageTwo,
    alt: "ISO Certificate for Food Safety Compliance",
  },
  {
    src: imageThree,
    alt: "ISO Certificate for Quality Assurance",
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s, box-shadow 0.3s",
  height: "100%",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 1.5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
  },
}));

function IsoCertificates() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  return (
    <>
      <Box
        component="section"
        aria-labelledby="iso-certificates-heading"
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          py: 4,
        }}>
        <Header
          firstText={t("")}
          secondText={t("ISO CERTIFICATES")}
          thirdText={t("FPF For Poultry Production")}
        />
      </Box>

      <Box
        component="section"
        aria-label={t("ISO Certified Gallery")}
        sx={{ py: 6 }}>
        <Grid container spacing={4} justifyContent="center" role="list">
          {images.map((img, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx} role="listitem">
              <StyledCard component="figure" aria-label={img.alt} tabIndex={0}>
                <Box
                  component="img"
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    width: "100%",
                    maxWidth: 320,
                    height: "auto",
                    display: "block",
                    borderRadius: 2,
                  }}
                />
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default memo(IsoCertificates);
