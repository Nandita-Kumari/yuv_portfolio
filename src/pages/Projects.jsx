import React from "react";
import Navbar from "../components/Navbar";
import { Box, Toolbar, Typography } from "@mui/material";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
import musicImg from "../assets/achievements/AeroIndia_page-0001.jpg";

/* ===================== DATA ===================== */
const pitchDecks = [
  { id: 1, title: "Instawings", pdf: "Pitch-Deck-Instawings.pdf",  image: musicImg, },
  { id: 2, title: "Paypilot", pdf: "/Pitch-Deck-Paypilot.pdf", },
  { id: 3, title: "Arka Network", pdf: "/Pitch-Deck-ArkaNetwork.pdf", },
  
];

const caseStudies = [
  { id: 1, title: "Ikea", url: "/case-study" },
  { id: 2, title: "Tesco", url: "/case-study" },
  { id: 3, title: "Multidisciplinary analysis of interfaces; supply chain Event  management (SCEM)– RFID control theory", url: "/case-study" },
  { id: 4, title: "Google organisational culture", url: "/case-study" },
  { id: 5, title: "Artificial intelligence vs Human intelligence", url: "/case-study" },
  { id: 6, title: "Reviewing of Nike supply chain and Stake holder engagement", url: "/case-study" },
  { id: 7, title: "Legal policies and best practices", url: "/case-study" },
  { id: 8, title: "Visual merchandise", url: "/case-study" },
  { id: 9, title: "Materials used in VM", url: "/case-study" },
  { id: 10, title: "Evolution of luxury brands", url: "/case-study" },
  { id: 11, title: "Display dissapointment", url: "/case-study" },
  { id: 12, title: "Men buy women shop", url: "/case-study" },
  { id: 13, title: "Loreal", url: "/case-study" },
  { id: 14, title: "PITCH DECKS", url: "/case-study" },
  { id: 15, title: "Aarka networks", url: "/case-study" },
  { id: 16, title: "Instawings pvt limited", url: "/case-study" },
  { id: 17, title: "Systech", url: "/case-study" },
  { id: 18, title: "Paypilot", url: "/case-study" },
  { id: 19, title: "Choice Mobile", url: "/case-study" },
  { id: 20, title: "TTPL", url: "/case-study" },
  { id: 21, title: "Mobilink", url: "/case-study" },
  { id: 22, title: "LOGOS", url: "/case-study" },
  { id: 23, title: "Trisha tracon pvt limited", url: "/case-study" },
  { id: 24, title: "The tapio cafe", url: "/case-study" },
  { id: 25, title: "The paani equation", url: "/case-study" },
  { id: 26, title: "Allinone Hospitality", url: "/case-study" },
  { id: 27, title: "Cash Value", url: "/case-study" },
  { id: 28, title: "Choice mobile", url: "/case-study" },  
];

const projects = [
  { id: 1, title: "India’s Premier Music Festival", url: "/projects/fintech-dashboard" },
  { id: 2, title: "Smart water", url: "/projects/marketing-website" },
  { id: 3, title: "Corporate Communication", url: "/projects/portfolio" },
  { id: 4, title: "Haven And Helms", url: "/projects/admin-panel" },
  { id: 5, title: "Paytm business Model", url: "/projects/fintech-dashboard" },
  { id: 6, title: "Organisational structure and design of Royal Enfield Phillips heads up for tails", url: "/projects/marketing-website" },
  { id: 7, title: "50 years of fashion transformation", url: "/projects/portfolio" },
  { id: 8, title: "Retail Formats", url: "/projects/admin-panel" },
  { id: 9, title: "Her Grace wedding planners", url: "/projects/fintech-dashboard" },
  { id: 10, title: "MAP( museum of art and photography ) BANGALORE floor plan", url: "/projects/marketing-website" },
  { id: 11, title: "Globalisation and corporate culture", url: "/projects/portfolio" },
  { id: 12, title: "Barbie vs Brats", url: "/projects/admin-panel" },
  { id: 13, title: "Louis Vuitton business plan", url: "/projects/portfolio" },
  { id: 14, title: "BVLGARI Priving strategy", url: "/projects/admin-panel" },
  
];

const achievements = [
  { id: 1, title: "Aero India 2024", url: "/achievements/best-marketer", image: musicImg, },
  { id: 2, title: "JD Design Awards - Best Future Forge", url: "/achievements/user-growth" },
  
];

const productsAndPackaging = [
  { id: 1, title: "Hive guard helment", url: "/achievements/best-marketer" },
  { id: 2, title: "Nebula Saddle bag", url: "/achievements/user-growth" },
  { id: 3, title: "Hive tech shoes", url: "/achievements/best-marketer" },
  { id: 4, title: "Saijal stories", url: "/achievements/user-growth" },
  { id: 5, title: "Upbring", url: "/achievements/user-growth" },
];

/* ===================== SECTION COMPONENT ===================== */

const Section = ({ title, items }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.pdf) {
      navigate(`/viewer?file=${item.pdf}`);
    } else if (item.url) {
      navigate(item.url);
    }
  };

  return (
   <Box sx={{ mt: 8 }}>
      <Box sx={{ mb: 4 }}> 
        <Typography variant="h5" 
          sx={{ 
            fontWeight: 700, 
            letterSpacing: "2px", 
            display: "inline-block",
            position: "relative", 
            pb: 1, 
            "&::after": { 
              content: '""', 
              position: "absolute", 
              left: 0, 
              bottom: 0, 
              width: "100%", 
              height: "3px", 
              backgroundColor: "#db0000", 
              borderRadius: "2px", 
              }, 
              }} 
              > {title} 
              </Typography> 
              </Box>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {items.map((item) => (
          <Box
            key={item.id}
            onClick={() => handleClick(item)}
            sx={{
              minWidth: "260px",
              height: "160px",
              borderRadius: "14px",
              position: "relative",
              cursor: "pointer",
              overflow: "hidden",
              scrollSnapAlign: "start",

              backgroundImage: item.image ? `url(${item.image})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: item.image ? "transparent" : "#191818",

              border: "1px solid #222",
              transition: "0.35s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 6px 25px rgba(228,25,25,0.7)",
              },
            }}
          >
            {/* PDF badge */}
            {item.pdf && (
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  backgroundColor: "#db0000",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  px: 1,
                  py: "2px",
                  borderRadius: "6px",
                  zIndex: 2,
                }}
              >
                PDF
              </Box>
            )}

            {/* Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 2,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  textAlign: "center",
                  letterSpacing: "1px",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

/* ===================== MAIN PAGE ===================== */

export default function Projects() {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "#fff",
        pb: 10,
      }}
    >
      <Navbar />
      <Toolbar />
      <Hero />

      <Box sx={{ px: { xs: 2, md: 6 }, mt: 6 }}>   
        <Section title="Pitch Decks" items={pitchDecks}/>     
        <Section title="Projects" items={projects} />
        <Section title="Case Study's" items={caseStudies} />
        <Section title="Achievements" items={achievements} />
        <Section title="Products & Packaging" items={productsAndPackaging} />
      </Box>
    </Box>
  );
}
