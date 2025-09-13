import { lazy, useEffect, memo, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { DataContext } from "../../Components/Context/DataContext";
import { useTranslation } from "react-i18next";
const MySwiper = lazy(() => import("./Swiper/MySwiper"));
const Welcome = lazy(() => import("./Welcome/Welcome"));
const OurService = lazy(() => import("./OurService/OurService"));
const About = lazy(() => import("./About/About"));
const Carousel = lazy(() => import("./Carousel/Carousel"));
const Offering = lazy(() => import("./Offering/Offering"));
const Statistic = lazy(() => import("./Statistic/Statistic"));
// const CompanyLogos = lazy(() => import("./CompanyLogos/CompanyLogos"));
const MyGallery = lazy(() => import("./MyGallery/MyGallery"));
const Testimonials = lazy(() => import("./Testimonials/Testimonials"));
const IsoCertificates = lazy(() => import("./IsoCertificates/IsoCertificates"));

function Home() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Al-Fadal Poultry Farm",
        url: "https://www.yourdomain.com",
        logo: "https://www.yourdomain.com/logo.png",
        sameAs: [
          "https://www.facebook.com/yourpage",
          "https://www.instagram.com/yourpage",
        ],
      },
      {
        "@type": "WebSite",
        url: "https://www.yourdomain.com",
        name: "Al-Fadal Poultry Farm",
        description:
          "Explore Al-Fadal Poultry Farm: our services, gallery, testimonials, and more—all optimized for speed and SEO.",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{t("Home")}</title>
        <meta
          name="description"
          content="Natural Poultry products 100% from Al Fadal Establishment, committed to quality and food safety standards, reliable supply, and ISO certified."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main aria-label="Homepage">
        <MySwiper />
        <Welcome />
        <OurService />
        <About />
        <Carousel />
        <Offering />
        <Statistic />
        {/* <CompanyLogos /> */}
        <MyGallery />
        <IsoCertificates />
        <Testimonials />
      </main>
    </>
  );
}

export default memo(Home);
