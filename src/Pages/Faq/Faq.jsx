import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Card,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import {
  FaPlane,
  FaHotel,
  FaPassport,
  FaUmbrella,
  FaSuitcase,
  FaGlobeAmericas,
} from "react-icons/fa";
import { styled } from "@mui/material";
import HeroSection from "../../Components/HeroSection/HeroSection";
import { DataContext } from "../../Components/Context/DataContext";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import image from "../../assets/images/f.avif";

const StyledAccordion = styled(Accordion)(() => ({
  marginBottom: "16px",
  borderRadius: "8px !important",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  "&:before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: "0 0 16px 0",
  },
}));

const IconWrapper = styled(Box)({
  marginRight: "12px",
  display: "flex",
  alignItems: "center",
  color: "#255946",
});

const Faq = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  const faqData = [
    {
      id: "panel1",
      icon: <FaSuitcase size={24} />,
      question: t("What types of vacation packages do you offer?"),
      answer: t(
        "We offer a wide range of vacation packages including all-inclusive resort stays, adventure tours, luxury cruises, and customized itineraries. Our packages can be tailored to different budgets and preferences."
      ),
    },
    {
      id: "panel2",
      icon: <FaPlane size={24} />,
      question: t("How can I find the best flight deals?"),
      answer: t(
        "To find the best flight deals, we recommend booking 3-6 months in advance, being flexible with your travel dates, and using our price alert feature."
      ),
    },
    {
      id: "panel3",
      icon: <FaHotel size={24} />,
      question: t("What's included in your hotel accommodations?"),
      answer: t(
        "Our hotel accommodations vary by property but typically include standard amenities, daily housekeeping, and access to hotel facilities."
      ),
    },
    {
      id: "panel4",
      icon: <FaUmbrella size={24} />,
      question: t("What does your travel insurance cover?"),
      answer: t(
        "Our comprehensive travel insurance covers trip cancellation, medical emergencies, lost baggage, flight delays, and emergency evacuation."
      ),
    },
    {
      id: "panel5",
      icon: <FaPassport size={24} />,
      question: t("How can you assist with visa requirements?"),
      answer: t(
        "We provide guidance on visa requirements, help with documentation, and refer you to trusted visa service providers."
      ),
    },
    {
      id: "panel6",
      icon: <FaGlobeAmericas size={24} />,
      question: t("Can you recommend destinations based on my preferences?"),
      answer: t(
        "Yes! Our travel experts provide personalized recommendations based on your interests, budget, and travel style."
      ),
    },
  ];

  return (
    <main>
      <Helmet htmlAttributes={{ lang: locale }}>
        <title>{t("FAQ")}</title>
        <meta
          name="description"
          content="Natural Poultry products 100% from Al Fadal Establishment, committed to quality and food safety standards."
        />
      </Helmet>

      <section aria-labelledby="faq-heading">
        <HeroSection HeadText={t("FAQ")} />

        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            id="faq-heading"
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              color: "#255946",
              fontSize: { xs: "36px", md: "48px", lg: "56px" },
              fontWeight: 900,
              fontFamily: "El Messiri",
              mb: 6,
            }}>
            {t("Frequently Asked Questions")}
          </Typography>

          <Grid container spacing={4}>
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Box
                component="img"
                src={image}
                alt={t("FAQ Support Illustration")}
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3";
                  e.target.alt = "";
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Card
                elevation={3}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  height: "100%",
                  bgcolor: "background.paper",
                }}>
                {faqData.map((faqs) => (
                  <StyledAccordion
                    key={faqs.id}
                    expanded={expanded === faqs.id}
                    onChange={handleChange(faqs.id)}
                    aria-controls={`faq-panel-${faqs.id}`}
                    id={`faq-header-${faqs.id}`}>
                    <AccordionSummary
                      expandIcon={<IoIosArrowDown />}
                      aria-labelledby={`faq-header-${faqs.id}`}
                      sx={{
                        "& .MuiAccordionSummary-content": {
                          display: "flex",
                          alignItems: "center",
                        },
                      }}>
                      <IconWrapper>{faqs.icon}</IconWrapper>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{ color: "#333", fontSize: "1.1rem" }}>
                        {faqs.question}
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography component="p" sx={{ color: "#666", pl: 5 }}>
                        {faqs.answer}
                      </Typography>
                    </AccordionDetails>
                  </StyledAccordion>
                ))}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
    </main>
  );
};

export default Faq;
