import { useContext, useEffect, useMemo, lazy, Suspense, memo } from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import Header from "../../../Hooks/Header";
import { useInView } from "react-intersection-observer";
import { DataContext } from "../../../Components/Context/DataContext";
import { useTranslation } from "react-i18next";
import image from "../../../assets/images/Frame.avif";
const AnimatedNumbers = lazy(() => import("react-animated-numbers"));
import iconPng from "../../../assets/images/icon.avif";
const rawData = [
  { num: 46, sym: "K", textKey: "Areas" },
  { num: 24, sym: "+", textKey: "Experience" },
  { num: 30, sym: "T", textKey: "Products" },
  { num: 10, sym: "K", textKey: "Customers" },
];

function NumberCounters() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  const counters = useMemo(
    () =>
      rawData.map(({ num, sym, textKey }) => ({
        num,
        sym,
        text: t(textKey),
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
          firstText={t("High-quality Chickens")}
          secondText={t("Our numbers  the constant improvement in the quality")}
          thirdText={t("")}
        />
      </Box>
      <Box component="section" aria-labelledby="counters-heading" sx={{ p: 4 }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          ref={ref}
          sx={{ mt: 4 }}>
          {counters.map(({ num, sym, text }, idx) => (
            <Grid
              key={idx}
              size={{ xs: 12, md: 6, lg: 3 }}
              sx={{ textAlign: "center" }}>
              <Paper
                elevation={0}
                sx={{
                  position: "relative",
                  width: 300,
                  height: 300,
                  mx: "auto",
                  backgroundImage: `url(${iconPng})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}>
                <Suspense
                  fallback={<Typography variant="h4">0{sym}</Typography>}>
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{
                        fontSize: "4.5rem",
                        fontWeight: 700,
                        color: "white",
                        fontFamily: "Merienda",
                        lineHeight: 1,
                      }}>
                      <AnimatedNumbers
                        includeComma
                        animateToNumber={inView ? num : 0}
                        configs={(n) => ({
                          mass: 1,
                          tension: 230 + n * 5,
                          friction: 140,
                        })}
                        animationType="wobbly"
                        fontStyle={{}}
                      />
                      <Box
                        component="span"
                        sx={{
                          fontWeight: 700,
                          fontSize: "3rem",
                          fontFamily: "Roboto",
                        }}>
                        {sym}
                      </Box>
                    </Typography>
                  </Box>
                </Suspense>
              </Paper>

              <Typography
                variant="subtitle1"
                sx={{
                  mt: 2,
                  color: "#255946",
                  fontSize: "3rem",
                  fontWeight: 600,
                  fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                }}>
                {text}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default memo(NumberCounters);
