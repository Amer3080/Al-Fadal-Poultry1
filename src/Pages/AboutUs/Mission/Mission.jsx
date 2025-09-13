import { useContext, useEffect } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from "../../../assets/images/m1.avif";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../../Components/Context/DataContext";
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Mission() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <Container component="section" id="mission" sx={{ py: { xs: 6, md: 10 } }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        style={{ width: "100%" }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontSize: { xs: "50px", md: "40px" },
                fontWeight: 900,
                fontFamily: "Marhey",
                color: "#255946",
                mb: 1,
              }}>
              {t("Our Mission")}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ pt: 3, lineHeight: 1.5, fontSize: "25px" }}
              component="p">
              We strive to revolutionize industry standards through innovative
              solutions and unwavering commitment to excellence. Our mission is
              to empower businesses with cutting-edge technology while
              maintaining sustainable practices.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={image}
              alt="Team collaboration"
              loading="lazy"
              decoding="async"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
}

export default Mission;
