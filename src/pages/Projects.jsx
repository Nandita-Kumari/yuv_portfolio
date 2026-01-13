import React from "react";
import Navbar from "../components/Navbar";
import { Box, IconButton, Toolbar, Typography } from "@mui/material";
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
import mythicMuscleImg from "../assets/logos/mythicMuscle.jpg";
import mapFloorPlanImg from "../assets/floorPlan/mapFloorPlan.jpg";
import pininFarinaImg from "../assets/proposals/PininFarina.jpg";
import inifdImg from "../assets/proposals/inifd.jpeg";
import paypilotFloorPlanImg from "../assets/floorPlan/paypilotFloorPlan.jpg";
import twenty47 from "../assets/floorPlan/twenty47.jpeg";
import twenty47Img from "../assets/floorPlan/twenty47Img.jpeg";
import ballImg from "../assets/pitchDecks/ball.png";
import projectVideo from '../assets/project_video.mp4';
import multidisciplinaryImg from '../assets/caseStudy/multidisciplinaryImg.jpeg';
import aiImg from "../assets/caseStudy/aiImg.jpeg";
import legalImg from "../assets/caseStudy/legalImg.jpeg";
import displayImg from "../assets/caseStudy/displayImg.jpeg";
import menImg from "../assets/caseStudy/menImg.jpeg";
import hiveHelmetImg from "../assets/products/hiveHelmet.jpeg";
import hiveShoesImg from "../assets/products/hiveShoes.jpeg";
import nebulaBagImg from "../assets/products/nebulaBag.jpeg";
import instawingsPackImg from "../assets/packaging/instawings.jpeg";
import saijalStoriesImg from "../assets/packaging/saijalStories.jpeg";
import instawingsPackImg2 from "../assets/packaging/instawings2.jpeg";
import instawingsPackImg3 from "../assets/packaging/instawings3.jpeg";
import instawingsPackImg4 from "../assets/packaging/instawings4.jpeg";
import instawingsPackImg5 from "../assets/packaging/instawings5.jpeg";
import instawingsPackImg6 from "../assets/packaging/instawings6.jpeg";
import instawingsPackImg7 from "../assets/packaging/instawings7.jpeg";
import instawingsPackImg8 from "../assets/packaging/instawings8.jpeg";
import saijalStoriesVid from "../assets/packaging/saijalStories2.mp4";
import upbringVid from "../assets/packaging/upbring.mp4";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
/* ===================== DATA ===================== */
const pitchDecks = [
  { id: 1, pdf: "cricketAcademy.pdf", image: ballImg},
  { id: 2, pdf: "Pitch-Deck-Instawings.pdf",  image: instawingsImg, },
  { id: 3, pdf: "/Pitch-Deck-Paypilot.pdf", image: paypilotLogoImg },
  { id: 4, pdf: "/Pitch-Deck-ArkaNetwork.pdf", image: arkaNetworksImg },
  { id: 5, pdf: "/case-study", image: systechImg, },
  { id: 6, pdf: "lVPitchDeck.pdf", image: lVImg, },
  
];

const caseStudies = [
  { id: 1, url: "/case-study", image: ikeaImg, targetId: "ikea" },
  { id: 2, url: "/case-study", image: tescoImg, targetId: "tesco" },
  // { id: 3, url: "/case-study", image: zaraImg, targetId: "zara" },
  // { id: 4, url: "/case-study", image: tommyHilfigerImg, targetId: "tommy"},
  { id: 5, url: "/case-study", image: multidisciplinaryImg, targetId: "multidisciplinary" },
  { id: 6, url: "/case-study", image: googleImg, targetId: "google" },
  { id: 7, url: "/case-study", image: aiImg, targetId: "artificial" },
  { id: 8, url: "/case-study", image: nikeImg, targetId: "nike" },
  // { id: 9, url: "/case-study", image: raymondImg, targetId: "raymond" },
  { id: 10, url: "/case-study", image: legalImg, targetId: "legal" }, 
  { id: 11, url: "/case-study", image: displayImg, targetId: "display" },
  { id: 12, url: "/case-study", image: menImg, targetId: "men" },
  { id: 13, url: "/case-study", image: lorealImg, targetId: "loreal" },    
  { id: 15, url: "/case-study", image: lVImg, targetId: "lv" },
 
  
];

const achievements = [
  { id: 1, image: musicImg, },
  { id: 2, image: jdDesignAwardImage },
  
];

const products = [
  { id: 1, title: "Hive guard helment", image: hiveHelmetImg, url: "/achievements/best-marketer" },
  { id: 2, title: "Nebula Saddle bag", image: nebulaBagImg, url: "/achievements/user-growth" },
  { id: 3, title: "Hive tech shoes", image: hiveShoesImg, url: "/achievements/best-marketer" },
  
];

const packaging = [
  
  { id: 1, media: [
      { type: "image", src: instawingsPackImg },
      { type: "image", src: instawingsPackImg2 },
      { type: "image", src: instawingsPackImg3 },
      { type: "image", src: instawingsPackImg4 },
      { type: "image", src: instawingsPackImg5 },
      { type: "image", src: instawingsPackImg6 },
      { type: "image", src: instawingsPackImg7 },
      { type: "image", src: instawingsPackImg8 },
    ],},
  { id: 2, media: [      
      { type: "image", src: saijalStoriesImg },
      { type: "video", src: saijalStoriesVid },
    ], },
  { id: 3, media: [
      { type: "video", src: upbringVid },
      
    ],},
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
  { id: 10, url: "/case-study", image: mythicMuscleImg },
];

const proposals = [
  
  { id: 1, pdf: "PininFarina.pdf",image: pininFarinaImg},
  { id: 2, pdf: "Inifd.pdf", image: inifdImg },
  // { id: 3, url: "/achievements/user-growth", image: theTapioCafeImg },
  // { id: 4, url: "/achievements/user-growth", image: thePaniEqnImg },
  // { id: 5, url: "/achievements/user-growth", image: cashValueImg },
];

const floorPlans = [
  
  { id: 1, previewImage: mapFloorPlanImg, image: mapImg},
  { id: 2, previewImage: paypilotFloorPlanImg, image: officialDPaypilotLogoImg },
  { id: 3, previewImage: twenty47, image: twenty47Img },
  // { id: 4, url: "/achievements/user-growth", image: thePaniEqnImg },
  // { id: 5, url: "/achievements/user-growth", image: cashValueImg },
];

/* ===================== SECTION COMPONENT ===================== */



const SlidingCard = ({ item, onClick }) => {
  const [index, setIndex] = React.useState(0);
  const media = item.media || [];

  const current = media[index];
  const isVideo = current?.type === "video";

  // Auto-slide ONLY for images
  React.useEffect(() => {
    if (!media.length || isVideo) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % media.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [index, isVideo, media.length]);

  const next = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % media.length);
  };

  const prev = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <Box
      onClick={onClick}
      sx={{
        minWidth: "260px",
        height: "160px",
        borderRadius: "14px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        backgroundColor: "#000",
        border: "1px solid #222",
      }}
    >
      {/* MEDIA */}
      {isVideo ? (
        <video
          src={current.src}
          autoPlay
          muted
          loop={true}
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${current?.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* LEFT ARROW */}
      <IconButton
        onClick={prev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 6,
          transform: "translateY(-50%)",
          color: "#fff",
          backgroundColor: "rgba(0,0,0,0.4)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      {/* RIGHT ARROW */}
      <IconButton
        onClick={next}
        sx={{
          position: "absolute",
          top: "50%",
          right: 6,
          transform: "translateY(-50%)",
          color: "#fff",
          backgroundColor: "rgba(0,0,0,0.4)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "0.75rem",
            letterSpacing: "1px",
            textAlign: "center",
          }}
        >
          {item.title}
        </Typography>
      </Box>
    </Box>
  );
};

  
const Section = ({ title, items }) => {
  const navigate = useNavigate();
  const isPackaging = title === "Packaging";



  const handleClick = (item) => {
  if (item.pdf) {
    navigate(`/viewer?file=${item.pdf}`);
    return;
  }

  if (item.previewImage) {
    window.open(item.previewImage, "_blank");
    return;
  }

  if (item.url) {
    navigate(item.url, {
      state: { scrollTo: item.targetId }, // 🔥 KEY LINE
    });
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
        {items.map((item) =>
  isPackaging && item.media ? (
    <SlidingCard
      key={item.id}
      item={item}
      onClick={() => handleClick(item)}
    />
  ) : (
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
      {/* Title Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.25))",
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
            textTransform: "uppercase",
          }}
        >
          {item.title}
        </Typography>
      </Box>
    </Box>
  )
)}


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
      <Hero videoSrc={projectVideo}/>

      <Box sx={{ px: { xs: 2, md: 6 }, mt: 6 }}>   
        <Section title="Pitch Decks" items={pitchDecks}/>     
        
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
