import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import HeroSection from "../../Components/HeroSection/HeroSection.jsx";
import ServicesGrid from "./ServicesGrid/ServicesGrid.jsx";
import FeatureSections from "./FeatureSections/FeatureSections.jsx";
import ActionBanner from "./ActionBanner/ActionBanner.jsx";
import IsoCertificates from "./IsoCertificates/IsoCertificates.jsx";

import imageOne from "../../assets/images/s1.avif";
import imageTwo from "../../assets/images/s4.avif";
import imageThree from "../../assets/images/s5.avif";

import { DataContext } from "../../Components/Context/DataContext.jsx";

export default function Services() {
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  return (
    <>
      <Helmet htmlAttributes={{ lang: locale }}>
        <title>{t("Services")}</title>
        <meta
          name="description"
          content="Natural Poultry products 100% from Al Fadal Establishment, committed to quality and food safety standards, reliable supply, and ISO certified."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section aria-labelledby="services-hero">
          <HeroSection HeadText={t("Services")} />
        </section>

        {/* Services Grid */}
        <section aria-labelledby="services-grid">
          <h2 id="services-grid" style={{ display: "none" }}>
            {t("Our Services")}
          </h2>
          <ServicesGrid />
        </section>

        {/* Feature Sections */}
        <section aria-labelledby="feature-sections">
          <h2 id="feature-sections" style={{ display: "none" }}>
            {t("Feature Highlights")}
          </h2>
          <FeatureSections
            features={[
              {
                imageUrl: imageOne,
                heading: t("ORGANIC POULTRY FARMING"),
                text: t(
                  "Nulla suscipit quam id risus placerat consectetur. Mauris faucibus sapien sollicitudin porttitor feugiat. Suspendisse fringilla commodo."
                ),
              },
              {
                imageUrl: imageTwo,
                heading: t("ORGANIC POULTRY FARMING"),
                text: t(
                  "Nulla suscipit quam id risus placerat consectetur. Mauris faucibus sapien sollicitudin porttitor feugiat. Suspendisse fringilla commodo."
                ),
              },
              {
                imageUrl: imageThree,
                heading: t("ORGANIC POULTRY FARMING"),
                text: t(
                  "Nulla suscipit quam id risus placerat consectetur. Mauris faucibus sapien sollicitudin porttitor feugiat. Suspendisse fringilla commodo."
                ),
              },
            ]}
          />
        </section>

        {/* Action Banner */}
        <section aria-labelledby="action-banner">
          <h2 id="action-banner" style={{ display: "none" }}>
            {t("ISO Certificates")}
          </h2>
          <ActionBanner heading={t("ISO Certificates")} />
        </section>

        {/* ISO Certificates */}
        <section aria-labelledby="iso-certificates">
          <h2 id="iso-certificates" style={{ display: "none" }}>
            {t("Our Certifications")}
          </h2>
          <IsoCertificates />
        </section>
      </main>
    </>
  );
}
