import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      component="main"
      sx={{
        display: "grid",
        placeItems: "center",
        minHeight: "100vh",
        bgcolor: "common.white",
        px: { xs: 6, lg: 8 },
        py: { xs: 24, sm: 32 },
      }}>
      <Box textAlign="center">
        {/* 404 Label */}
        <Typography
          variant="body1"
          sx={{ fontWeight: 600, color: "primary.main" }}>
          404
        </Typography>

        {/* Main Heading */}
        <Typography
          variant="h2"
          sx={{
            mt: 1,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "text.primary",
            fontSize: {
              xs: "2.5rem",
              sm: "3.75rem",
              md: "5rem",
              lg: "6rem",
            },
          }}>
          Page not found
        </Typography>

        {/* Subtext */}
        <Typography
          variant="subtitle1"
          sx={{
            mt: 2,
            fontWeight: 500,
            color: "text.secondary",
            fontSize: { xs: "1.125rem", sm: "1.25rem" },
          }}>
          Sorry, we couldn’t find the page you’re looking for.
        </Typography>

        {/* Action Buttons */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 4 }}>
          <Button
            variant="contained"
            href="/"
            sx={{
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "primary.dark" },
              px: 3,
              py: 1.5,
              fontSize: "0.875rem",
              fontWeight: 600,
            }}>
            Go back home
          </Button>

          <Button
            variant="text"
            href="/contact"
            sx={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "text.primary",
              "&:hover": { bgcolor: "action.hover" },
            }}>
            Contact support&nbsp;&rarr;
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
