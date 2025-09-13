import { memo } from "react";
import { Box, Grid, Typography, Card, styled } from "@mui/material";
import imageOne from "../../../assets/images/c1.avif";
import imageTwo from "../../../assets/images/c2.avif";
import imageThree from "../../../assets/images/c3.avif";

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

const StyledCard = styled(Card)(() => ({
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  },
  height: "100%",
  padding: "16px",
  borderRadius: "12px",
}));

function IsoCertificates() {
  return (
    <Box
      component="section"
      aria-labelledby="iso-certificates-heading"
      sx={{ py: 6 }}>
      <Typography
        id="iso-certificates-heading"
        component="h2"
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#255946",
          mb: 4,
        }}>
        ISO Certifications
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {images.map((img, idx) => (
          <Grid key={idx} size={{ xs: 12, sm: 6, md: 4 }}>
            <StyledCard>
              <Box
                component="img"
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                sx={{
                  width: "100%",
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
  );
}

export default memo(IsoCertificates);
