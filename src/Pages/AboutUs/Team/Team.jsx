import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
  Container,
  styled,
} from "@mui/material";
import imgMan from "../../../assets/images/man.avif";
import imgGirl from "../../../assets/images/girl.avif";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../../Components/Context/DataContext";
const StyledCard = styled(Card)(() => ({
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  },
  height: "100%",
}));

const Team = () => {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  const portfolioData = [
    {
      id: 1,
      name: t("Sarah Johnson"),
      title: "Frontend Developer",
      avatar: imgGirl,
      bio: "Passionate frontend developer with 5+ years of experience in creating responsive and user-friendly web applications. Specialized in React and Modern JavaScript.",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "UX Designer",
      avatar: imgMan,
      bio: "Creative UX designer focusing on user-centered design principles. Experienced in creating intuitive and accessible interfaces for web and mobile applications.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Full Stack Developer",
      avatar: imgGirl,
      bio: "Full stack developer with expertise in MERN stack. Passionate about building scalable web applications and implementing efficient backend solutions.",
    },
  ];

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: "50px", md: "40px" },
            fontWeight: 900,
            fontFamily: "Marhey",
            color: "#255946",
            mb: 6,
          }}>
          Our Team
        </Typography>
        <Grid container spacing={4}>
          {portfolioData.map(({ id, name, title, avatar, bio }) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={id}>
              <StyledCard>
                <CardContent sx={{ textAlign: "center", height: "100%" }}>
                  <Avatar
                    src={avatar}
                    alt={`${name}'s profile picture`}
                    loading="lazy"
                    sx={{
                      width: 120,
                      height: 120,
                      mx: "auto",
                      mb: 2,
                      border: "4px solid #fff",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontFamily: "Robot", fontWeight: "bold" }}
                    gutterBottom>
                    {name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ mb: 2, fontWeight: "900" }}>
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 3,
                      minHeight: 80,
                      lineHeight: 1.4,
                      fontSize: "20px",
                    }}>
                    {bio}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
