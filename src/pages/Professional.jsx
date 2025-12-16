import React from "react";
import Navbar from "../components/Navbar";
import roadmapImg from "../assets/roadmap2.png";
import { Box, Typography, Grid, Toolbar } from "@mui/material";
import upwork from "../assets/upwork_icon.png";
import zara from "../assets/ZARA.jpg";
import paypilot from "../assets/paypilot-icon.png"
import instawings from "../assets/instawings-icon.png"

export default function Professional() {
  const experienceSections = [
    {
      company: "PAYPILOT SOLUTIONS PRIVATE LIMITED",
      logo: paypilot, // already imported
      website: "https://www.paypilot.co.in",
      cards: [
        {
          title: "Role",
          front: "Marketing Manager",
          back: "Handled brand strategy, growth marketing, and campaign execution.",
        },
        {
          title: "Duration",
          front: "June 2025 – Present",
          back: "Leading marketing initiatives across multiple verticals.",
        },
        {
          title: "Skills",
          front: "SEO, Strategy",
          back: "SEO, Campaign Management, Analytics, Branding.",
        },
      ],
    },
    {
      company: "UPWORK",
      logo: upwork, // already imported
      website: "https://www.upwork.com",
      cards: [
        {
          title: "Role",
          front: "UI Consultant",
          back: "Worked closely with designers to align UI with brand identity.",
        },
        {
          title: "Duration",
          front: "2024 – 2025",
          back: "1+ year of hands-on experience in UI strategy.",
        },
        {
          title: "Impact",
          front: "UX Revamp",
          back: "Improved user engagement by 35% through UI revamp.",
        },
      ],
    },
    {
      company: "INSTAWINGS",
      logo: instawings, // already imported
      website: "https://instawings.com/",
      cards: [
        {
          title: "Role",
          front: "Brand Designer",
          back: "Designed visuals for seasonal campaigns and product launches.",
        },
        {
          title: "Duration",
          front: "2023 – 2024",
          back: "Worked with cross-functional marketing teams.",
        },
        {
          title: "Tools",
          front: "Figma",
          back: "Figma, Adobe Suite, Visual Storytelling.",
        },
      ],
    },
    {
      company: "ZARA",
      logo: zara, // already imported
      website: "https://www.upwork.com",
      cards: [
        {
          title: "Role",
          front: "Marketing Consultant",
          back: "Helped startups establish strong digital presence.",
        },
        {
          title: "Duration",
          front: "2022 – Present",
          back: "Worked with multiple brands and industries.",
        },
        {
          title: "Focus",
          front: "Growth",
          back: "Performance marketing & growth-driven strategies.",
        },
      ],
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "#fff",
        pb: 12,
      }}
    >
      <Navbar />
      <Toolbar/>

      {/* Roadmap Image */}
      <Box sx={{ width: "100%" }}>
        <img
          src={roadmapImg}
          alt="Professional Roadmap"
          style={{ width: "100%", display: "block" }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ px: { xs: 2, md: 6 }, mt: 8 }}>
        {/* Main Heading */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 10 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                letterSpacing: "2px",
              }}
            >
              Experience Journey
            </Typography>

            <Box
              sx={{
                width: { xs: "200px", sm: "360px" },
                height: "3px",
                backgroundColor: "#db0000",
                margin: "16px auto 0",
                borderRadius: "2px",
              }}
            />
          </Box>
        </Box>

        {/* Experience Sections */}
        {experienceSections.map((section, idx) => (
          <Box key={idx} sx={{ mb: 12 }}>
            {/* Company Title */}
            <Box
  sx={{
    display: "flex",
    justifyContent: { xs: "center", md: "flex-start" },
    alignItems: "center",
    mb: 5,
  }}
>
  <Box
    sx={{
      px: 3,
      py: 1,
      borderRadius: "10px",
      backgroundColor: "#0b0b0b",
      border: "1px solid #111",
      boxShadow: "0 0 20px rgba(228, 25, 25, 0.9)",
      display: "flex",
      alignItems: "center",
      gap: 2,
    }}
  >
    <a
      href={section.website}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "inherit" }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          letterSpacing: "3px",
        }}
      >
        {section.company}
      </Typography>

      {section.logo && (
        <img
          src={section.logo}
          alt={section.company + " logo"}
          style={{ height: "40px", width: "auto" }}
        />
      )}
    </a>
  </Box>
</Box>



            {/* Cards */}
            <Grid
              container
              spacing={4}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              {section.cards.map((card, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={8}
                  md={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  {/* Flip Card */}
                  <Box sx={{ perspective: "1000px" }}>
                    <Box
                      sx={{
                        width: { xs: "100%", sm: "320px" },
                        maxWidth: "320px",
                        height: "230px",
                        position: "relative",
                        transformStyle: "preserve-3d",
                        transition: "transform 0.8s",
                        "&:hover": {
                          transform: "rotateY(180deg)",
                          cursor: "pointer",
                        },
                      }}
                    >
                      {/* Front */}
                      <Box
                        sx={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          backfaceVisibility: "hidden",
                          backgroundColor: "#111",
                          borderRadius: 3,
                          border: "1px solid #222",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          boxShadow:
                            "0 4px 20px rgba(228, 25, 25, 0.45)",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 600, mb: 1 }}
                        >
                          {card.title}
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.9 }}>
                          {card.front}
                        </Typography>
                      </Box>

                      {/* Back */}
                      <Box
                        sx={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                          backgroundColor: "#0b0b0b",
                          borderRadius: 3,
                          border: "1px solid #db0000b8",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: 3,
                          boxShadow:
                            "0 6px 25px rgba(247, 33, 33, 0.85)",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "center", opacity: 0.9 }}
                        >
                          {card.back}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
