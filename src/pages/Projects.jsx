import React from "react";
import Navbar from "../components/Navbar";
import { Box, Toolbar, Typography } from "@mui/material";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
import musicImg from "../assets/achievements/AeroIndia_page-0001.jpg";
import tescoImg from "../assets/caseStudy/tesco.png";
import ikeaImg from "../assets/caseStudy/ikea.jpg";
import googleImg from "../assets/caseStudy/google.jpg";
import lorealImg from "../assets/caseStudy/loreal.jpg";
import nikeImg from "../assets/caseStudy/nike.jpg";
import jdDesignAwardImage from "../assets/achievements/jdDesignAward.jpg";
import smartWaterImg from "../assets/projects/smartWater.jpg";
import mapImg from "../assets/projects/map.jpg";
import barbieBratzImg from "../assets/projects/barbieBratz.jpg";
import lVImg from "../assets/projects/lV.jpg";
import bvlGariImg from "../assets/projects/bvlGari.jpg";
import theTapioCafeImg from "../assets/logos/theTapioCafe.jpg";
import cashValueImg from "../assets/logos/cashValue.jpg";
import thePaniEqnImg from "../assets/logos/thePaniEqn.jpg";
import brandColorpaypilotLogo from "../assets/logos/paypilotLogo.png";
import systechImg from "../assets/pitchDecks/systech.jpg";
import instawingsImg from "../assets/pitchDecks/instawings.jpg";
import arkaNetworksImg from "../assets/pitchDecks/arkaNetworks.jpg";
import ttplImg from "../assets/logos/ttplImg.jpg"; 
import allInOneHospitalityImg from "../assets/logos/allInOneHospitality.jpg";
import officialDPaypilotLogoImg from "../assets/logos/officialDPaypilotLogo.jpg";
import officialPaypilotLogoImg from "../assets/logos/officialPaypilotLogo.jpg";
import paypilotLogoImg from "../assets/logos/paypilotLogo.png"
import symbolPaypilotLogoImg from "../assets/logos/symbolPaypilotLogo.jpg";
/* ===================== DATA ===================== */
const pitchDecks = [
  { id: 1, pdf: "Pitch-Deck-Instawings.pdf",  image: instawingsImg, },
  { id: 2, pdf: "/Pitch-Deck-Paypilot.pdf", image: paypilotLogoImg },
  { id: 3, pdf: "/Pitch-Deck-ArkaNetwork.pdf", image: arkaNetworksImg },
  { id: 4, pdf: "/case-study", image: systechImg, },
];

const caseStudies = [
  { id: 1, url: "/case-study", image: ikeaImg, },
  { id: 2, url: "/case-study", image: tescoImg },
  // { id: 3, url: "/case-study", image: zaraImg },
  // { id: 4, url: "/case-study", image: tommyHilfigerImg },
  { id: 5, title: "Multidisciplinary analysis of interfaces; supply chain Event  management (SCEM)– RFID control theory", url: "/case-study" },
  { id: 6, url: "/case-study", image: googleImg },
  { id: 7, title: "Artificial intelligence vs Human intelligence", url: "/case-study" },
  { id: 8, url: "/case-study", image: nikeImg },
  // { id: 9, url: "/case-study", image: raymondImg },
  { id: 10, title: "Legal policies and best practices", url: "/case-study" }, 
  { id: 11, title: "Display dissapointment", url: "/case-study" },
  { id: 12, title: "Men buy women shop", url: "/case-study" },
  { id: 13, url: "/case-study", image: lorealImg },    
  { id: 14, title: "Choice Accessories", url: "/case-study" },  
  { id: 15, title: "Mobilink", url: "/case-study" },  
 
  
];

const projects = [
  { id: 1, title: "India’s Premier Music Festival", url: "/projects/fintech-dashboard" },
  { id: 2, url: "/projects/marketing-website", image: smartWaterImg },
  { id: 3, title: "Corporate Communication", url: "/projects/portfolio" },
  { id: 4, title: "Haven And Helms", url: "/projects/admin-panel" },
  { id: 5, title: "Paytm business Model", url: "/projects/fintech-dashboard" },
  { id: 6, title: "Organisational structure and design of Royal Enfield Phillips heads up for tails", url: "/projects/marketing-website" },
  { id: 7, title: "50 years of fashion transformation", url: "/projects/portfolio" },
  { id: 8, title: "Retail Formats", url: "/projects/admin-panel" },
  { id: 9, title: "Her Grace wedding planners", url: "/projects/fintech-dashboard" },
  { id: 10, url: "/projects/marketing-website", image: mapImg },
  { id: 11, title: "Globalisation and corporate culture", url: "/projects/portfolio" },
  { id: 12, url: "/projects/admin-panel", image: barbieBratzImg },
  { id: 13, url: "/projects/portfolio", image: lVImg },
  { id: 14, url: "/projects/admin-panel", image: bvlGariImg },
  
];

const achievements = [
  { id: 1, url: "/achievements/best-marketer", image: musicImg, },
  { id: 2, url: "/achievements/user-growth", image: jdDesignAwardImage },
  
];

const products = [
  { id: 1, title: "Hive guard helment", url: "/achievements/best-marketer" },
  { id: 2, title: "Nebula Saddle bag", url: "/achievements/user-growth" },
  { id: 3, title: "Hive tech shoes", url: "/achievements/best-marketer" },
  
];

const packaging = [
  
  { id: 1, title: "Instawings", url: "/achievements/best-marketer" },
  { id: 2, title: "Saijal stories", url: "/achievements/user-growth" },
  { id: 3, title: "Upbring", url: "/achievements/user-growth" },
];

const logos = [
  
  { id: 1, url: "/achievements/best-marketer",image: brandColorpaypilotLogo},
  { id: 2, url: "/achievements/best-marketer",image: officialPaypilotLogoImg},
  { id: 3, url: "/achievements/best-marketer",image: officialDPaypilotLogoImg},
  { id: 4, url: "/achievements/best-marketer",image: symbolPaypilotLogoImg},
  { id: 5, url: "/achievements/user-growth", image: allInOneHospitalityImg },
  { id: 6, url: "/achievements/user-growth", image: theTapioCafeImg },
  { id: 7, url: "/achievements/user-growth", image: thePaniEqnImg },
  { id: 8, url: "/achievements/user-growth", image: cashValueImg },
  { id: 9, url: "/case-study", image: ttplImg },
];

const proposals = [
  
  { id: 1, url: "/achievements/best-marketer",image: paypilotLogoImg},
  { id: 2, title: "All in One Hospitality", url: "/achievements/user-growth" },
  { id: 3, url: "/achievements/user-growth", image: theTapioCafeImg },
  { id: 4, url: "/achievements/user-growth", image: thePaniEqnImg },
  { id: 5, url: "/achievements/user-growth", image: cashValueImg },
];

const floorPlans = [
  
  { id: 1, url: "/achievements/best-marketer",image: paypilotLogoImg},
  { id: 2, title: "All in One Hospitality", url: "/achievements/user-growth" },
  { id: 3, url: "/achievements/user-growth", image: theTapioCafeImg },
  { id: 4, url: "/achievements/user-growth", image: thePaniEqnImg },
  { id: 5, url: "/achievements/user-growth", image: cashValueImg },
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
              backgroundSize: "contain",
backgroundRepeat: "no-repeat",
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
        <Section title="Products" items={products} />
        <Section title="Packaging" items={packaging} />
        <Section title="Logos" items={logos} />
        <Section title="Proposals" items={proposals} />
        <Section title="Floor Plans" items={floorPlans} />
      </Box>
    </Box>
  );
}
