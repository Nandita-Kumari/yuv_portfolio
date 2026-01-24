import React from "react";
import { useNavigate } from "react-router-dom";

import card1 from "../assets/cards/Card1.png";
import Experience from "../assets/cards/Experience.jpg";
import CaseStudy2 from "../assets/cards/CaseStudy2.jpg";
import blog from "../assets/BLOG.png";
import brandStrategy from "../assets/BrandStrategy.png";
import socialMediaMarketing from "../assets/DigitalMarketing.png";
import skillsImg from "../assets/skills.jpeg";
import achievementsImg from "../assets/achievements.jpeg";
import projectsImg from "../assets/projects.jpeg";
import newsletterImg from "../assets/newsletter.jpeg";
import { Box, Typography } from "@mui/material";

export default function Hero_Second() {
  const navigate = useNavigate();

  const cards = [
    { id: 1, title: "Skills", image: skillsImg, link: "/skills" },
    { id: 2, title: "Experience", image: Experience, link: "/professional" },
    { id: 3, title: "Projects", image: projectsImg, link: "/projectPage" },
  ];

  const cards2 = [
    { id: 1, title: "Brand Strategy", image: brandStrategy, link: "/skills" },
    { id: 2, title: "Social Media Marketing", image: socialMediaMarketing, link: "/skills" },
  ];

  const cards3 = [
    { id: 1, title: "Blogs", image: blog, link: "/projects" },
    { id: 2, title: "Case Study", image: CaseStudy2, link: "/case-study" },
    { id: 3, title: "News Letters", image: newsletterImg, link: "/projects" },
    { id: 4, title: "Achievements", image: achievementsImg, link: "/projects" },
  ];

  const CardSlider = ({ cards }) => (
    <Box
    sx={{
      display: "flex",
      overflowX: "auto",
      gap: { xs: 1.5, sm: 2 },

      /* ✅ KEY FIX */
      pl: { xs: 3, sm: 3 },
      pr: { xs: 2, sm: 3 },
      pb: 2,

      scrollSnapType: "x mandatory",
      "&::-webkit-scrollbar": { display: "none" },
    }}
  >
      {cards.map((card) => (
        <Box
          key={card.id}
          onClick={() => navigate(card.link)}
          sx={{
            minWidth: {
              xs: 220,
              sm: 260,
              md: 300,
            },
            height: {
              xs: 140,
              sm: 160,
              md: 180,
            },
            borderRadius: 2,
            scrollSnapAlign: "start",
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 0 8px rgba(255,255,255,0.15)",

            /* Desktop hover only */
            "@media (hover: hover)": {
              "&:hover": {
                transform: "scale(1.04)",
                boxShadow: "0 6px 22px rgba(200, 19, 19, 0.8)",
              },
            },
          }}
        >
          <Typography
            sx={{
              background: "rgba(0,0,0,0.55)",
              px: 2,
              py: 1,
              borderRadius: 1,
              fontSize: {
                xs: "0.75rem",
                sm: "0.9rem",
                md: "1rem",
              },
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
            }}
          >
            {card.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  const SectionTitle = ({ children }) => (
    <Typography
      sx={{
        fontSize: {
          xs: "1.2rem",
          sm: "1.5rem",
          md: "1.8rem",
        },
        fontWeight: 700,
        ml: { xs: 2, sm: 3 },
        mt: { xs: 4, sm: 6 },
        mb: 2,
      }}
    >
      {children}
    </Typography>
  );

  return (
    <>
      <SectionTitle>Today's Top Picks For Recruiter</SectionTitle>
      <CardSlider cards={cards} />

      <SectionTitle>Watchlist</SectionTitle>
      <CardSlider cards={cards2} />

      <SectionTitle>Because you watched resume</SectionTitle>
      <CardSlider cards={cards3} />
    </>
  );
}
