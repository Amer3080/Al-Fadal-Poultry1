import { Box, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function FeatureSections({ features }) {
  const { t } = useTranslation();

  return features.map(({ imageUrl, heading, text }, i) => {
    const sectionId = `feature-section-${i}`;

    return (
      <Box
        component="section"
        key={sectionId}
        aria-labelledby={sectionId}
        sx={{ py: 8 }}>
        <Grid
          container
          spacing={4}
          alignItems="start"
          direction={i % 2 === 0 ? "row" : "row-reverse"}>
          {/* Image Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={imageUrl}
              alt={heading || ""}
              width="100%"
              height="auto"
              loading="lazy"
              sx={{ borderRadius: 2 }}
            />
          </Grid>

          {/* Text Column */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ px: 4 }}>
            <Typography
              id={sectionId}
              component="h2"
              variant="h4"
              gutterBottom
              sx={{
                fontSize: { xs: "20px", md: "35px" },
                fontWeight: 900,
                color: "#255946",
                fontFamily: "Marhey",
                textAlign: { xs: "center", md: "start" },
              }}>
              {t(heading)}
            </Typography>

            <Typography
              component="p"
              sx={{
                mt: 4,
                fontSize: "18px",
                lineHeight: 2,
                textAlign: { xs: "center", md: "start" },
              }}>
              {t(text)}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  });
}
