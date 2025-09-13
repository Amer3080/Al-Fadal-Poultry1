import { Box, Fab, Toolbar } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
export default function MasterLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Toolbar />
      <main id="content">
        <ScrollToTop />
        <Outlet />
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab
            component={Link}
            to="https://web.whatsapp.com/"
            target="blank"
            color="success"
            aria-label="contact support"
            sx={{ position: "fixed", bottom: 20, right: 16 }}>
            <WhatsAppIcon fontSize="large" />
          </Fab>
        </Box>
      </main>
      <Footer />
    </>
  );
}
