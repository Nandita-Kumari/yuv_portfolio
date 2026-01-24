import React from "react";
import Navbar from "../components/Navbar";
import roadmapImg from "../assets/roadmap2.png";
import { Typography, Toolbar } from "@mui/material";
import upwork from "../assets/upwork_icon.png";
import zara from "../assets/ZARA.jpg";
import paypilot from "../assets/paypilot-icon.png"
import allInOneHospitality from "../assets/logos/allInOneHospitality.jpg"
import instawings from "../assets/instawings-icon.png"
import Box from '@mui/system/Box';
import Grid from '@mui/system/Grid';

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
          back: "As Marketing Manager at Paypilot Solutions Private Limited, I lead end to end marketing strategies in the competitive payment gateway and services industry. From social media management to high impact lead generation, I’ve excelled in acquiring and onboarding premium clients through innovative campaigns. Most notably, I founded and spearheaded the launch of the Paypilot Growth Suite a transformative revenue stream introducing six  services fueling significant business diversification, scalable growth, and strengthened client partnerships.",
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
      company: "All In One Hospitality (Mother Company)",
      logo: allInOneHospitality,
      website: "https://www.allinonehospitality.in",
      cards: [
        {
          title: "Role",
          front: "Marketing Manager",
          back: "At All in One Hospitality, I oversee social media strategies across all platforms for the parent company and its key brands Paypilot, Bharat Mart, and Rider Adda. I maintain consistent brand guidelines while driving exceptional engagement and visibility. Highlights include cultivating a powerful LinkedIn presence that amplifies brand authority, fosters community growth, and supports cross platform synergy for sustained audience expansion.",
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
          front: "Freelance Project Manager & Growth Consultant",
          back: "Managed diverse contract based projects on Upwork, specializing in project management, crafting compelling investor pitches, and guiding companies through scaling initiatives. Delivered end-to-end support for startups and businesses, from strategy formulation and pitch deck creation to execution roadmaps that accelerated growth. Excelled in time-bound contracts, ensuring seamless operations, stakeholder alignment, and measurable outcomes like successful funding rounds and operational expansions.",
        },
        {
          title: "Duration",
          front: "2020 – 2023",
          back: "Delivered end-to-end support for startups and businesses",
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
          front: "Social Media Specialist",
          back: "Transformed Instawings from zero social media presence by building all accounts from scratch across key platforms. Drove rapid growth in followers, customer acquisition, and collaborations including international partners from the US. Handled comprehensive branding for marquee clients such as Air India, Air Asia, Vistara, UltraTech, PVR, Prestige, Birkenstock, The Body Shop, Punjabi Grill, Smoor, Aubrey, and The Leela Palace Hotels, delivering cohesive strategies that elevated brand visibility and engagement.",
        },
        {
          title: "Duration",
          front: "2024",
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
          front: "Winter Intern (Visual Merchandising & Floor Operations)",
          back: "Gained hands on expertise in premium retail operations at Zara, managing visual merchandising to create captivating store displays that boosted product appeal and sales. Oversaw stock management, cash counter operations, and floor representation, while delivering exceptional customer service to drive satisfaction and loyalty. Excelled in fast-paced environments, honing skills in inventory control, customer engagement, and team coordination during peak winter campaigns.",
        },
        {
          title: "Duration",
          front: "2019",
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
    fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "1.75rem" }, // responsive sizes
    textAlign: { xs: "center", md: "left" }, // optional: align center on small screens
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
           <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
  {section.cards.map((card, index) => (
    <Grid item size={{xs:12, sm:8, md:4}} key={index}>
      <Box
        sx={{
          width: "100%",
          perspective: "1000px",
          overflow: "visible", // Prevent flip from spilling
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: { xs: 220, sm: 240, md: 260 },
            position: "relative",
            transformStyle: "preserve-3d",
            transition: "transform 0.8s",
            "&:hover": {
              transform: "rotateY(180deg)",
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
              borderRadius: 3,
              backgroundColor: "#111",
              border: "1px solid #222",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 4px 20px rgba(228,25,25,0.45)",
              px: 2,
            }}
          >
            <Typography
              sx={{ fontWeight: 600, mb: 1, textAlign: "center" }}
            >
              {card.title}
            </Typography>
            <Typography
              sx={{ textAlign: "center", fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }}
            >
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
              borderRadius: 3,
              backgroundColor: "#0b0b0b",
              border: "1px solid #db0000b8",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: 2,
              boxShadow: "0 6px 25px rgba(247,33,33,0.85)",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" }, textAlign: "center" }}
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
