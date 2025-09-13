import {
  useContext,
  useEffect,
  useState,
  useMemo,
  lazy,
  Suspense,
  memo,
} from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Modal,
  styled,
  Divider,
} from "@mui/material";
import Header from "../../../Hooks/Header";
import { DataContext } from "../../../Components/Context/DataContext";
import { useTranslation } from "react-i18next";
import image from "../../../assets/images/Frame.avif";
import photo_girl from "../../../assets/images/girl.avif";
import photo_man from "../../../assets/images/man.avif";
const FaQuoteLeft = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaQuoteLeft }))
);
const FaQuoteRight = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaQuoteRight }))
);

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: "100%",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[10],
  },
}));

const rawTestimonials = [
  {
    id: 1,
    clientName: "Mohamed Ahmed",
    clientDesignation: "Local Resident",
    testimonialText:
      "The municipal corporation's new online service portal has made it incredibly easy to pay property taxes and access public services. The digital transformation is truly commendable.",
    profileImage: photo_man,
    rating: 5,
    date: "2024-01-15",
  },
  {
    id: 2,
    clientName: "Mona Ali",
    clientDesignation: "Small Business Owner",
    testimonialText:
      "The corporation's business licensing department has streamlined their processes significantly. Their support for local businesses during challenging times has been exceptional.",
    profileImage: photo_girl,
    rating: 4,
    date: "2024-01-10",
  },
  {
    id: 3,
    clientName: "Ahmed Fathy",
    clientDesignation: "Community Leader",
    testimonialText:
      "The public works department's responsiveness to community needs has improved dramatically. Their new complaint resolution system is efficient and citizen-friendly.",
    profileImage: photo_man,
    rating: 5,
    date: "2024-01-05",
  },
];

function Testimonials() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
  const testimonials = useMemo(
    () =>
      rawTestimonials.map((item) => ({
        ...item,
        tClientName: t(item.clientName),
        tDesignation: t(item.clientDesignation),
        tText: t(item.testimonialText),
        localizedDate: new Date(item.date).toLocaleDateString(locale),
      })),
    [t, locale]
  );
  const handleOpen = (item) => {
    setSelected(item);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
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
          firstText={t("About US")}
          secondText={t("We offer healthy & natural poultry such as chickens")}
          thirdText={t("")}
        />
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          my: 5,
          direction: locale === "en" ? "ltr" : "rtl",
        }}>
        <Grid container spacing={3}>
          {testimonials.map((rev) => (
            <Grid size={{ xs: 12, md: 4 }} key={rev.id}>
              <TestimonialCard
                onClick={() => handleOpen(rev)}
                role="button"
                aria-label={t("Open testimonial by {{name}}", {
                  name: rev.tClientName,
                })}>
                <CardContent sx={{ p: 4 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar
                      src={rev.profileImage}
                      alt={rev.tClientName}
                      imgProps={{ loading: "lazy", decoding: "async" }}
                      sx={{ width: 64, height: 64, mr: 2 }}
                    />
                    <Box sx={{ mr: 2 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                        }}>
                        {rev.tClientName}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        sx={{
                          fontFamily: locale === "en" ? "Roboto" : "Marhey",
                        }}>
                        {rev.tDesignation}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ position: "relative", mb: 2 }}>
                    <Suspense fallback={<Box height={24} />}>
                      {locale === "en" ? (
                        <FaQuoteLeft size={24} style={{ color: "#ddd" }} />
                      ) : (
                        <FaQuoteRight size={24} style={{ color: "#ddd" }} />
                      )}
                    </Suspense>
                    <Typography
                      variant="body1"
                      sx={{ mt: 1, textAlign: "center" }}>
                      {rev.tText}
                    </Typography>
                  </Box>

                  <Box display="flex" justifyContent="flex-start">
                    <Rating value={rev.rating} readOnly size="small" />
                  </Box>
                </CardContent>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="testimonial-modal-title"
          aria-describedby="testimonial-modal-description">
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: 600 },
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              direction: locale === "en" ? "ltr" : "rtl",
            }}>
            {selected && (
              <>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar
                    src={selected.profileImage}
                    alt={selected.tClientName}
                    imgProps={{ loading: "lazy", decoding: "async" }}
                    sx={{ width: 80, height: 80, mr: 2 }}
                  />
                  <Box sx={{ mr: 2 }}>
                    <Typography
                      id="testimonial-modal-title"
                      variant="h5"
                      sx={{
                        fontFamily: locale === "en" ? "Roboto" : "El Messiri",
                      }}>
                      {selected.tClientName}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      sx={{
                        fontFamily: locale === "en" ? "Roboto" : "Marhey",
                      }}>
                      {selected.tDesignation}
                    </Typography>
                  </Box>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography
                  id="testimonial-modal-description"
                  variant="body1"
                  sx={{ mb: 2 }}>
                  {selected.tText}
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center">
                  <Rating value={selected.rating} readOnly size="large" />
                  <Typography variant="body2" color="text.secondary">
                    {selected.localizedDate}
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </>
  );
}

export default memo(Testimonials);
