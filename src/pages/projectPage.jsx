import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Typography, IconButton, Toolbar } from "@mui/material";
import bgImage from "../assets/projectBG.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

/* -------- IMAGES ARRAY -------- */
import img1 from "../assets/Youvakshi.jpg";
import smartWaterImg from "../assets/projects/smartWater.jpg";
import img3 from "../assets/Youvakshi.jpg";
import img4 from "../assets/Youvakshi.jpg";
import img5 from "../assets/Youvakshi.jpg";
import img6 from "../assets/BLOG.png";
import img7 from "../assets/Youvakshi.jpg";
import img8 from "../assets/Youvakshi.jpg";
import mapImg from "../assets/projects/map.jpg";
import img10 from "../assets/Youvakshi.jpg";
import barbieBratzImg from "../assets/projects/barbieBratz.jpg";
import bvlGariImg from "../assets/projects/bvlGari.jpg";
import maxImg from "../assets/projects/max.jpeg";
import { useNavigate } from "react-router-dom";
import corporateImg from "../assets/projects/corporate.jpeg";
import materialsVMImg from "../assets/projects/materialsVM.jpeg";
import paytmImg from "../assets/projects/paytm.jpeg";
import yearsImg from "../assets/projects/years.jpeg";
import globalization from "../assets/projects/globalization.jpeg";
import musicImg from "../assets/projects/music.jpeg";
import havenHelmsImg from "../assets/projects/havenHelms.jpeg";
import Hero from "../components/Hero";
import projectVideo from '../assets/projectVideo.mp4';
import royalPhilips from "../assets/projects/royalPhilips.png";
// import vMImg from "../assets/projects/vM.jpeg";

const images = [
  { img: musicImg, title: "India’s Premier Music Festival", pdf: "Pitch-Deck-Instawings.pdf" },
  { img: smartWaterImg, title: "Smart Water", pdf: "smartWater.pdf" },
  { img: corporateImg, title: "Corporate Communication", pdf: "corporateCommunication.pdf" },
  { img: materialsVMImg, title: "Materials used in VM", pdf: "materialsVM.pdf" },
  // { img: vMImg, title: "Visual Merchandizing", pdf: "visualMerchandizing.pdf" },
  { img: havenHelmsImg, title: "Haven And Helms", pdf: "havenHelm.pdf" },   
  { img: paytmImg, title: "Paytm business Model", pdf: "paytmBM.pdf" },
  { img: royalPhilips, title: "Royal Enfield Phillips" },
  { img: yearsImg, title: "50 years of fashion transformation" }, 
  { img: globalization, title: "Globalisation and corporate culture", pdf: "globalisation.pdf" },
  { img: barbieBratzImg, title: "Barbie vs Bratz", pdf: "barbieBratz.pdf" }, 
  { img: bvlGariImg, title: "BVLGARI" },
  { img: maxImg, title: "Max", pdf: "Max.pdf" },
];


export default function ProjectPage() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const getOffset = (index, activeIndex, length) => {
  let diff = index - activeIndex;

  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;

  return diff;
};
const navigate = useNavigate();

const handleClick = (item) => {
  if (item.pdf) {
    navigate(`/viewer?file=${item.pdf}`);
    return;
  }
};


  return (
    <Box
          sx={{
            backgroundColor: "#000",
            minHeight: "100vh",
            color: "#fff",
            // pb: 10,
          }}
        >

          <Navbar />
      <Toolbar />
      <Hero videoSrc={projectVideo}/>
    <Box
      sx={{
        // minHeight: "100vh",
        // color: "#fff",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <Navbar /> */}
      

      {/* -------- HERO TEXT -------- */}
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            color: "#db0000",
            letterSpacing: "1px",
          }}
        >
          PROJECTS
        </Typography>

        <Typography variant="p" sx={{ opacity: 0.85}}>
          Years of quiet persistence
          <br />
          My foundational marketing adventures.
        </Typography>
      </Box>

      {/* -------- CAROUSEL -------- */}
      <Box
      
        sx={{
          position: "relative",
          // mt: 1,
          height: 520,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
       {images.map((item, index) => {
  const offset = getOffset(index, activeIndex, images.length);
  const absOffset = Math.abs(offset);

  return (
    <Box
      key={index}
      sx={{
        position: "absolute",
        transition: "transform 0.6s ease, opacity 0.6s ease",
        transform: `
          translateX(${offset * 280}px)
          scale(${index === activeIndex ? 1 : 0.82})
        `,
        opacity: absOffset > 4 ? 0 : 1 - absOffset * 0.18,
        zIndex: 10 - absOffset,
        cursor: index === activeIndex ? "pointer" : "default",
      }}
      onClick={(e) => {
        e.stopPropagation();

        if (index === activeIndex && item.pdf) {
          handleClick(item); // ✅ redirect
        } else {
          setActiveIndex(index); // ✅ move to center
        }
      }}
    >
      <img
        src={item.img}
        alt={item.title}
        style={{
          width: index === activeIndex ? 300 : 280,
          height: index === activeIndex ? 400 : 380,
          objectFit: "contain",
          borderRadius: 6,
        }}
      />

      {/* TITLE PILL */}
      <Box
        sx={{
          mt: 3,
          px: index === activeIndex ? 3 : 2.5,
          py: index === activeIndex ? 1.2 : 1,
          bgcolor: "#db0000",
          borderRadius: 999,
          mx: "auto",
          width: "fit-content",
        }}
      >
        <Typography
          sx={{
            fontSize: index === activeIndex ? "0.95rem" : "0.85rem",
            fontWeight: 600,
            color: "#fff",
            whiteSpace: "nowrap",
          }}
        >
          {item.title}
        </Typography>
      </Box>
    </Box>
  );
})}


        {/* -------- NAV BUTTONS -------- */}
       <IconButton
  onClick={(e) => {
    e.stopPropagation();
    handlePrev();
  }}
  sx={{
    position: "absolute",
    left: 40,
    color: "#fff",
    bgcolor: "rgba(0,0,0,0.4)",
    "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
    zIndex: 50,
  }}
>
  <ArrowBackIosNewIcon />
</IconButton>

        <IconButton
  onClick={(e) => {
    e.stopPropagation();
    handleNext();
  }}
  sx={{
    position: "absolute",
    right: 40,
    color: "#fff",
    bgcolor: "rgba(0,0,0,0.4)",
    "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
    zIndex: 50,
  }}
>
  <ArrowForwardIosIcon />
</IconButton>

      </Box>
    </Box>
    </Box>
  );
}
