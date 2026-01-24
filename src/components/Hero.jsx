import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function Hero({ videoSrc }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: {
          xs: "70dvh",
          sm: "75vh",
          md: "95vh",
        },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🎥 Responsive Video */}
      <Box
  component="video"
  src={videoSrc}
  autoPlay
  muted
  loop
  playsInline
  sx={{
    width: "100%",
    height: "100%",
    objectFit: {
      xs: "contain",
      sm: "cover",
    },
    objectPosition: {
      xs: "top center", // 👈 shift video upward on mobile
      sm: "center",
    },
    backgroundColor: "#000",
  }}
/>



      {/* 🌑 Overlay (optional but improves readability) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1))",
        }}
      />

      {/* 📝 Content */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 16, sm: 30, md: 50 },
          left: { xs: 16, sm: 30, md: 60 },
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1.2, sm: 2 },
          maxWidth: {
            xs: "92%",
            sm: "85%",
            md: "70%",
          },
        }}
      >
        {/* Description */}
        <Typography
          sx={{
            fontSize: {
              xs: "0.75rem",
              sm: "0.9rem",
              md: "1rem",
            },
            lineHeight: 1.6,
            opacity: 0.9,
            display: "-webkit-box",
            WebkitLineClamp: { xs: 5, sm: "unset" },
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          I'm Youvakshi Thakur, a dynamic marketing leader with a unique blend of
          creativity, strategy, and leadership. Originally from the scenic hills
          of Shimla and currently thriving in Bangalore, I've spent the last four
          years shaping impactful brand narratives.

          As a Marketing Manager, I specialize in social media strategy and brand
          architecture, building strong digital ecosystems and leading cross
          functional teams to deliver meaningful results.
        </Typography>

        {/* 🔘 Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1.2, sm: 2 },
            mt: { xs: 1, sm: 2 },
          }}
        >
          {/* Resume */}
          <Button
            variant="contained"
            component="a"
            href="/pdfs/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: {
                xs: "0.7rem",
                sm: "0.85rem",
                md: "1rem",
              },
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: 600,
              px: { xs: 1.5, sm: 2.5 },
              py: { xs: 0.7, sm: 1 },
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                backgroundColor: "#f2f2f2",
              },
            }}
          >
            <PlayArrowIcon
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                  md: "1.4rem",
                },
              }}
            />
            Resume
          </Button>

          {/* LinkedIn */}
          <Button
            component="a"
            href="https://www.linkedin.com/in/youvakshi-thakur-1a9585166"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{
              fontSize: {
                xs: "0.7rem",
                sm: "0.85rem",
                md: "1rem",
              },
              px: { xs: 1.5, sm: 2.5 },
              py: { xs: 0.7, sm: 1 },
              backgroundColor: "rgba(0,0,0,0.3)",
              color: "#fff",
              borderColor: "rgba(255,255,255,0.7)",
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.5)",
                borderColor: "#fff",
              },
            }}
          >
            <ErrorOutlineIcon
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                  md: "1.4rem",
                },
              }}
            />
            LinkedIn
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
