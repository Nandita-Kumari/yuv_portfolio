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

  // Generic Card Slider Component
  const CardSlider = ({ cards }) => (
    <div
      style={{
        display: "flex",
        overflowX: "auto",
        gap: "16px",
        padding: "0 20px 20px 20px",
        scrollSnapType: "x mandatory",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => navigate(card.link)}
          style={{
            minWidth: "260px",
            height: "160px",
            borderRadius: "14px",
            scrollSnapAlign: "start",
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 8px rgba(255,255,255,0.15)",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(200, 19, 19, 0.8)";
            e.currentTarget.style.transform = "scale(1.03)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 8px rgba(255,255,255,0.15)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <h3
            style={{
              background: "rgba(0,0,0,0.5)",
              padding: "8px 14px",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "700",
              textAlign: "center",
              color: "#fff",
            }}
          >
            {card.title}
          </h3>
        </div>
      ))}
    </div>
  );

  

  return (
    <>
      <h2
        style={{
          fontSize: "1.8rem",
          fontWeight: "700",
          marginLeft: "20px",
          marginBottom: "20px",
          marginTop: "50px",
        }}
      >
        Today's Top Picks For Recruiter
      </h2>
      <CardSlider cards={cards} />

      <h2
        style={{
          fontSize: "1.8rem",
          fontWeight: "700",
          marginLeft: "20px",
          marginBottom: "20px",
          marginTop: "50px",
        }}
      >
        Watchlist
      </h2>
      <CardSlider cards={cards2} />

      <h2
        style={{
          fontSize: "1.8rem",
          fontWeight: "700",
          marginLeft: "20px",
          marginBottom: "20px",
          marginTop: "50px",
        }}
      >
        Because you watched resume
      </h2>
      <CardSlider cards={cards3} />
    </>
  );
}
