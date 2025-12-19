import React from "react";
import card1 from "../assets/cards/Card1.png";
import Experience from "../assets/cards/Experience.jpg";
import CaseStudy2 from "../assets/cards/CaseStudy2.jpg";
import blog from "../assets/BLOG.png";
import brandStrategy from "../assets/BrandStrategy.png";
import socialMediaMarketing from "../assets/DigitalMarketing.png";

export default function Hero_Second() {

    const cards = [
  { id: 1, title: "Skills", image: card1, link: "/skills" },
  { id: 2, title: "Experience", image: Experience, link: "/professional" },
  // { id: 3, title: "Certifications", image: card1, link: "/certifications" },
  // { id: 4, title: "Recommendations", image: card1, link: "/recommendations" },
  { id: 5, title: "Projects", image: card1, link: "/projects" },
  { id: 6, title: "Brand Strategy", image: brandStrategy, link: "/projects" },
  { id: 7, title: "Social Media Marketing", image: socialMediaMarketing, link: "/projects" },
];

const cards2 = [
  { id: 1, title: "Blogs", image: blog, link: "/blogs" },
  { id: 2, title: "Case Study", image: CaseStudy2, link: "/case-study" },
  { id: 3, title: "News Letters", image: card1, link: "/newsletters" },
  { id: 3, title: "Achievements", image: card1, link: "/achievements" },
];

    return(
        <>
            {/* Heading */}
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

      {/* Card Slider */}
      <div
        style={{
          display: "flex",
          overflowX: "scroll",
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
    onClick={() => window.location.href = card.link}
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
      }}
    >
      {card.title}
    </h3>
  </div>
))}

      </div>


            {/* Heading */}
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

      {/* Card Slider */}
      <div
        style={{
          display: "flex",
          overflowX: "scroll",
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

       {cards2.map((card) => (
  <div
    key={card.id}
    onClick={() => window.location.href = card.link}
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
      }}
    >
      {card.title}
    </h3>
  </div>
))}

      </div>
        </>
    );
}