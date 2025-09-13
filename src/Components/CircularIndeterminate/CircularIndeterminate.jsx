import React from "react";
import Box from "@mui/material/Box";
import logoMeta from "../../assets/images/Logo.avif?width=200;400&format=avif&metadata";

export default function Loader() {
  const { images = [] } = logoMeta;
  const avifSrcSet =
    (logoMeta.srcset && logoMeta.srcset.avif) ||
    (logoMeta.srcSet && logoMeta.srcSet.avif) ||
    "";

  if (!images.length || !avifSrcSet) {
    return (
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#90c99eff",
          overflow: "hidden",
          zIndex: 9999,
        }}>
        <img
          src={logoMeta.src || logoMeta}
          width={200}
          alt="logo"
          className="animate__animated animate__rotateIn"
        />
      </Box>
    );
  }
  const { src: defaultSrc, height } = images[0];

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#90c99eff",
        overflow: "hidden",
        zIndex: 9999,
      }}>
      <img
        src={defaultSrc}
        srcSet={avifSrcSet}
        sizes="200px"
        width={200}
        height={height}
        alt="logo"
        className="animate__animated animate__rotateIn"
      />
    </Box>
  );
}
