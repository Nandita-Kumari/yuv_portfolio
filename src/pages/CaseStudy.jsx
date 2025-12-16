import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Divider, Toolbar, Typography } from "@mui/material";
import caseStudyImg from "../assets/CaseStudy.png";

/* ================= DATA ================= */
const caseStudies = [
  {
    id: "ikea",
    title: "IKEA",
    content:
      "Put in 100+ hours of research per case study checking trends, testing ideas, and working with remote teams. Turned weak posts into 3x engagement wins and up to 300% growth in followers and sales.",
  },
  {
    id: "tesco",
    title: "TESCO",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior.",
  },
  {
    id: "analysis",
    title:
      "Multidisciplinary analysis of interfaces; supply chain Event management (SCEM) – RFID control theory",
    content:
      "Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.",
  },
  {
    id: "google",
    title: "Google organisational culture",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.Put in 100+ hours of research per case study checking trends, testing ideas, and working with remote teams. Turned weak posts into 3x engagement wins and up to 300% growth in followers and sales.",
  },
  {
    id: "ai",
    title: "Artificial intelligence vs Human intelligence",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior.",
  },
  {
    id: "nike",
    title:
      "Reviewing of Nike supply chain and Stake holder engagement ",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.Put in 100+ hours of research per case study checking trends, testing ideas, and working with remote teams. Turned weak posts into 3x engagement wins and up to 300% growth in followers and sales.",
  },
  {
    id: "legal",
    title: "Legal policies and best practices",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior.",
  },
  {
    id: "visual",
    title:
      "Visual merchandise",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.Put in 100+ hours of research per case study checking trends, testing ideas, and working with remote teams. Turned weak posts into 3x engagement wins and up to 300% growth in followers and sales.",
  },
  {
    id: "VM",
    title: "Materials used in VM",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior.",
  },
  {
    id: "evolution",
    title:
      "Evolution of luxury brands",
    content:
      "Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.",
  },
  {
    id: "display",
    title: "Display dissapointment",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.Put in 100+ hours of research per case study checking trends, testing ideas, and working with remote teams. Turned weak posts into 3x engagement wins and up to 300% growth in followers and sales.",
  },
  {
    id: "men",
    title:
      "Men buy women shop",
    content:
      "Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.",
  },
  {
    id: "Loreal",
    title: "Loreal ",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.Put in 100+ hours of research per case study checking trends, testing ideas, and working with remote teams. Turned weak posts into 3x engagement wins and up to 300% growth in followers and sales.",
  },
  {
    id: "pitch",
    title:
      "PITCH DECKS",
    content:
      "Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.",
  },
  {
    id: "aarka",
    title: "Aarka networks",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.Put in 100+ hours of research per case study checking trends, testing ideas, and working with remote teams. Turned weak posts into 3x engagement wins and up to 300% growth in followers and sales.",
  },
  {
    id: "instawings",
    title:
      "Instawings pvt limited",
    content:
      "Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.",
  },
  {
    id: "systech",
    title: "Systech",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.Put in 100+ hours of research per case study checking trends, testing ideas, and working with remote teams. Turned weak posts into 3x engagement wins and up to 300% growth in followers and sales.",
  },
  {
    id: "paypilot",
    title:
      "Paypilot",
    content:
      "Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.",
  },
  {
    id: "choice",
    title: "Choice Mobile",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior.",
  },
  {
    id: "ttpl",
    title:
      "TTPL",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.Put in 100+ hours of research per case study checking trends, testing ideas, and working with remote teams. Turned weak posts into 3x engagement wins and up to 300% growth in followers and sales.",
  },
  {
    id: "mobilink",
    title: "Mobilink",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior.",
  },
  {
    id: "logos",
    title:
      "LOGOS",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.Put in 100+ hours of research per case study checking trends, testing ideas, and working with remote teams. Turned weak posts into 3x engagement wins and up to 300% growth in followers and sales.",
  },
  {
    id: "trisha",
    title: "Trisha tracon pvt limited",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior.",
  },
  {
    id: "tapio",
    title:
      "The tapio cafe",
    content:
      "Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.",
  },
  {
    id: "paani",
    title: "The paani equation",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.Put in 100+ hours of research per case study checking trends, testing ideas, and working with remote teams. Turned weak posts into 3x engagement wins and up to 300% growth in followers and sales.",
  },
  {
    id: "allinone",
    title:
      "Allinone Hospitality",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.Put in 100+ hours of research per case study checking trends, testing ideas, and working with remote teams. Turned weak posts into 3x engagement wins and up to 300% growth in followers and sales.",
  },
  {
    id: "cash",
    title: "CASH Value",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.Put in 100+ hours of research per case study checking trends, testing ideas, and working with remote teams. Turned weak posts into 3x engagement wins and up to 300% growth in followers and sales.",
  },
];

/* ================= COMPONENT ================= */
export default function CaseStudy() {
  const sectionRefs = useRef({});
  const [activeSection, setActiveSection] = useState(null);

  /* ===== Scroll Spy Logic ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff", pb: 12 }}>
      <Navbar />
      <Toolbar />

      {/* ========== HERO SECTION ========== */}
      <Box
        sx={{
          px: { xs: 2, md: 8 },
        //   mt: 6,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 6,
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, letterSpacing: "2px", mb: 3, color: "#db00009b" }}
          >
            MEMES TO METRICS
          </Typography>

          <Typography variant="h6" sx={{ opacity: 0.85, mb: 2 }}>
            Building Brands That Stick
          </Typography>

          <Typography sx={{ opacity: 0.85, lineHeight: 1.8 }}>
            Put in 100+ hours of research per case study checking trends, testing
            ideas, and working with remote teams. Turned weak posts into 3x
            engagement wins and up to 300% growth in followers and sales.
          </Typography>
        </Box>

        <Box sx={{ borderRadius: "18px", overflow: "hidden" }}>
          <img src={caseStudyImg} alt="Case Study" style={{ width: "100%" }} />
        </Box>
      </Box>

      {/* ========== MAIN CONTENT GRID ========== */}
      <Box
        sx={{
          px: { xs: 2, md: 8 },
          mt: 8,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "8fr 4fr" },
          gap: 6,
        }}
      >
        {/* LEFT CONTENT */}
        <Box>
          {caseStudies.map((item) => (
  <Box
    key={item.id}
    ref={(el) => (sectionRefs.current[item.id] = el)}
    data-id={item.id}
    sx={{
      mb: 5,
      scrollMarginTop: "120px", // ✅ FIX
    }}
  >
    <Typography
      variant="h6"
      sx={{
        fontWeight: 700,
        letterSpacing: "1.5px",
        color: "#db00009b",
        mb: 1,
      }}
    >
      {item.title}
    </Typography>

    <Typography sx={{ opacity: 0.85, fontSize: "0.75rem", lineHeight: 1.8 }}>
      {item.content}
    </Typography>
  </Box>
))}

        </Box>

        {/* RIGHT HIGHLIGHTS */}
        <Box
          sx={{
            backgroundColor: "#0e0e0e",
            borderRadius: "16px",
            p: 4,
            height: "fit-content",
            position: { md: "sticky" },
            top: 100,
          }}
        >
          <Typography
  variant="h5"
  sx={{
    fontWeight: 700,
    mb: 3,
    p: 1.5,
    borderRadius: "10px",
    border: "1px solid rgba(219, 0, 0, 0.25)",
    boxShadow: "0 0 18px rgba(219, 0, 0, 0.35)",
  }}
>
  CASE STUDY HIGHLIGHTS
</Typography>


          <Divider sx={{ mb: 3, backgroundColor: "#333" }} />

          {caseStudies.map((item) => (
            <Typography
              key={item.id}
              onClick={() =>
                sectionRefs.current[item.id]?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              sx={{
                mb: 1,
                cursor: "pointer",
                fontSize: "0.8rem",
                color:
                  activeSection === item.id ? "#db0000" : "rgba(255,255,255,0.85)",
                fontWeight: activeSection === item.id ? 600 : 400,
                paddingLeft: activeSection === item.id ? "8px" : "0",
                transition: "0.3s",
                "&:hover": {
                  color: "#db0000",
                  paddingLeft: "8px",
                },
              }}
            >
              • {item.title.length > 35
                ? item.title.slice(0, 35) + "..."
                : item.title}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
