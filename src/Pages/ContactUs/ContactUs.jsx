import { useState, useEffect, useContext } from "react";
import emailjs from "emailjs-com";
import {
  Container,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Snackbar,
  Alert,
  MenuItem,
  IconButton,
} from "@mui/material";
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import HeroSection from "../../Components/HeroSection/HeroSection";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { DataContext } from "../../Components/Context/DataContext";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  const subjects = [
    "Booking Inquiry",
    "Schedule Information",
    "Refund Request",
    "General Support",
    "Feedback",
  ];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
    validateField(name, value);
  };
  const validateField = (name, value) => {
    setErrors((err) => {
      const updated = { ...err };
      if (name === "name")
        updated.name =
          value.length < 3 ? "Name must be at least 3 characters" : "";
      if (name === "email")
        updated.email = !/^\S+@\S+\.\S+$/.test(value)
          ? "Invalid email format"
          : "";
      if (name === "subject")
        updated.subject = !value ? "Please select a subject" : "";
      if (name === "message")
        updated.message =
          value.length < 10 ? "Message must be at least 10 characters" : "";
      return updated;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid =
      Object.values(formData).every((v) => v) &&
      Object.values(errors).every((errMsg) => !errMsg);
    if (!isValid) return;
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      )
      .then(() => {
        setShowSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => setShowError(true));
  };
  return (
    <Box>
      <Helmet>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Natural Poultry products 100% from Al Fadal Establishment, committed to quality and food safety standards, reliable supply, and ISO certified."
        />
      </Helmet>
      <HeroSection HeadText="Contact Us" />
      <Container
        maxWidth="lg"
        sx={{ py: 4, direction: locale === "en" ? "ltr" : "rtl" }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              sx={{
                color: "#255946",
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 900,
                fontFamily: "El Messiri",
                mb: 2,
                textAlign: { xs: "center", md: "left" },
              }}>
              {t("Contact Us")}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              {/* Name Field (Text input) */}
              <TextField
                id="contact-name"
                name="name"
                label={t("Name")}
                autoComplete="name"
                fullWidth
                margin="normal"
                value={formData.name}
                onChange={handleInputChange}
                error={Boolean(errors.name)}
                helperText={errors.name}
                required
              />

              {/* Email Field (Text input) */}
              <TextField
                id="contact-email"
                name="email"
                label={t("Email")}
                autoComplete="email"
                fullWidth
                margin="normal"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
                required
              />

              {/* Subject Field (Select) */}
              <TextField
                label={t("Subject")}
                fullWidth
                select
                margin="normal"
                value={formData.subject}
                onChange={handleInputChange}
                error={Boolean(errors.subject)}
                helperText={errors.subject}
                required
                // 1) Override the label's htmlFor so it matches our custom id
                InputLabelProps={{ htmlFor: "contact-subject" }}
                // 2) Tell MUI to put id/name/autocomplete on the actual <select>
                SelectProps={{
                  native: false, // still using <MenuItem>, not <option>
                  inputProps: {
                    id: "contact-subject",
                    name: "subject",
                    autoComplete: "off",
                  },
                }}>
                {subjects.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>

              {/* Message Field (Textarea) */}
              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="contact-message">
                  {t("Message")}
                </InputLabel>
                <OutlinedInput
                  id="contact-message"
                  name="message"
                  autoComplete="off"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  error={Boolean(errors.message)}
                  label={t("Message")}
                />
                {errors.message && (
                  <FormHelperText error>{errors.message}</FormHelperText>
                )}
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  backgroundColor: "#255946",
                  color: "white",
                  ":hover": { backgroundColor: "#1e483f" },
                }}>
                {t("Send Message")}
              </Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                mb: 4,
                mt: 10,
                direction: locale === "en" ? "ltr" : "rtl",
              }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Contact Information
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <FaMapMarkerAlt style={{ marginRight: "8px" }} />
                  <Typography>
                    123 Railway Square, Transport City, TC 12345
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <FaPhone style={{ marginRight: "8px" }} />
                  <Typography>+1 (555) 123-4567</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <FaEnvelope style={{ marginRight: "8px" }} />
                  <Typography>support@railwayservice.com</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <FaClock style={{ marginRight: "8px" }} />
                  <Typography>Mon - Sat: 8:00 AM - 8:00 PM</Typography>
                </Box>
              </CardContent>
            </Card>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton
                  component={Link}
                  to="https://www.facebook.com/"
                  target="_blank"
                  aria-label="Facebook">
                  <FaFacebook />
                </IconButton>
                <IconButton
                  component={Link}
                  to="https://www.twitter.com/"
                  target="_blank"
                  aria-label="Twitter">
                  <FaTwitter />
                </IconButton>
                <IconButton
                  component={Link}
                  to="https://www.instagram.com/"
                  target="_blank"
                  aria-label="Instagram">
                  <FaInstagram />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Box
              sx={{
                width: "100%",
                height: { xs: 250, md: 300 },
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 3,
              }}>
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27722.334327813798!2d31.30792354362573!3d29.711305929845043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1459ca41bdd52aa3%3A0x5ea3088c30ad5f34!2z2KfZhNij2K7Ytdin2LXYjCDYp9mE2LXZgdiMINmF2K3Yp9mB2LjYqSDYp9mE2KzZitiy2Kk!5e0!3m2!1sar!2seg!4v1757389084985!5m2!1sar!2seg"></iframe>
            </Box>
          </Grid>
        </Grid>
        <Snackbar
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          open={showSuccess}
          autoHideDuration={6000}
          onClose={() => setShowSuccess(false)}>
          <Alert
            onClose={() => setShowSuccess(false)}
            severity="success"
            sx={{ width: "100%" }}>
            Your message has been sent!
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          open={showError}
          autoHideDuration={6000}
          onClose={() => setShowError(false)}>
          <Alert
            onClose={() => setShowError(false)}
            severity="error"
            sx={{ width: "100%" }}>
            Failed to send. Please try again later.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};
export default ContactUs;
