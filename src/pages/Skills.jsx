import Navbar from "../components/Navbar";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PaidIcon from "@mui/icons-material/Paid";
import HubIcon from "@mui/icons-material/Hub";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CampaignIcon from "@mui/icons-material/Campaign";
import PaletteIcon from "@mui/icons-material/Palette";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import GroupIcon from "@mui/icons-material/Group";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ArticleIcon from "@mui/icons-material/Article";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BrushIcon from "@mui/icons-material/Brush";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HandshakeIcon from "@mui/icons-material/Handshake";
import TimelineIcon from "@mui/icons-material/Timeline";
import PublicIcon from "@mui/icons-material/Public";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import BoltIcon from "@mui/icons-material/Bolt";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import ScienceIcon from "@mui/icons-material/Science";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ExploreIcon from "@mui/icons-material/Explore";





// Framer Motion
import { motion } from "framer-motion";

export default function Skills() {

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const cardsContainer = {
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardAnim = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const sections = [
    {
      heading: "Digital Marketing",
      items: [
        {
          icon: <TrendingUpIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "SEO Optimization",
          desc: "Optimized SEO for top Google rankings and organic traffic growth.",
        },
        {
          icon: <PaidIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Branding",
          desc: "Managed PPC campaigns delivering 3x ROI on ad spend.",
        },
        {
          icon: <HubIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "SEO Optimization",
          desc: "Executed multi-channel funnels integrating email, social, and web.",
        },
        {
          icon: <CompareArrowsIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Branding",
          desc: "A/B tested landing pages to boost conversion rates by 25%+.",
        },
        
      ],
    },

    {
      heading: "Brand Strategy",
      items: [
        {
          icon: <CampaignIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Frontend Development",
          desc: "Crafted brand positioning and messaging frameworks.",
        },
        {
          icon: <PaletteIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Backend Development",
          desc: "Designed visual identity systems and style guides.",
        },
        {
          icon: <AutorenewIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Backend Development",
          desc: "Led rebranding initiatives increasing market share.",
        },
      ],
    },

     {
      heading: "Campaign Management",
      items: [
        {
          icon: <AllInclusiveIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Frontend Development",
          desc: "Orchestrated full-funnel campaigns from ideation to ROI analysis.",
        },
        {
          icon: <RocketLaunchIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Backend Development",
          desc: "Coordinated cross platform launches with tight deadlines.",
        },
        {
          icon: <CurrencyRupeeIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Backend Development",
          desc: "Scaled high performing campaigns budget from INR 10K to INR 100K+.",
        },
      ],
    },

    {
      heading: "Social Media Management",
      items: [
        {
          icon: <AutoGraphIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Frontend Development",
          desc: "Built and optimized social media accounts from scratch, achieving top platform visibility and 5x organic reach growth.",
        },
        {
          icon: <MonetizationOnIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Backend Development",
          desc: "Managed paid social campaigns delivering 4x ROI on ad spend across Instagram, Facebook, and LinkedIn.",
        },
        {
          icon: <DeviceHubIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Backend Development",
          desc: "Executed multi platform content funnels integrating stories, reels, posts, and collaborations for seamless engagement.",
        },
         {
          icon: <ScienceIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Frontend Development",
          desc: "A/B tested content strategies and creatives to boost audience interaction rates by 30%+.",
        },
        
      ],
    },

    {
      heading: "Community and Influencer Management",
      items: [
        {
          icon: <Diversity3Icon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Frontend Development",
          desc: "Cultivated brand communities and messaging frameworks that fostered loyalty and user-generated content.",
        },
        {
          icon: <CalendarMonthIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Backend Development",
          desc: "Designed content calendars, visual themes, and response guidelines for consistent brand voice.",
        },
        {
          icon: <ExploreIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Backend Development",
          desc: "Led social media re-energization initiatives, expanding follower base and market presence.",
        },
        
      ],
    },

    {
      heading: "Content Creation",
      items: [
        {
          icon: <OndemandVideoIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Frontend Development",
          desc: "Produced viral video series garnering 1M+ views.",
        },
        {
          icon: <ArticleIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Backend Development",
          desc: "Wrote persuasive copy for ads and landing pages.",
        },
        {
          icon: <MenuBookIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Backend Development",
          desc: "Created infographics and ebooks driving 40% lead growth.",
        },
        {
          icon: <BrushIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Backend Development",
          desc: "Edited multimedia assets for brand consistency.",
        },
      ],
    },

    {
      heading: "Team Leadership",
      items: [
        {
          icon: <SupervisorAccountIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Frontend Development",
          desc: "Mentored 10+ juniors into senior roles.",
        },
        {
          icon: <HandshakeIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Backend Development",
          desc: "Aligned 5 cross functional teams on quarterly goals.",
        },
        {
          icon: <TimelineIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          // title: "Backend Development",
          desc: "Implemented agile workflows reducing project time by 30%.",
        },
        
      ],
    },   

    {
      heading: "TOOLS",
      items: [
        {
          icon: <PublicIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          title: "Social Media Marketing",
          desc: (
                  <Box
                    component="ul"
                    sx={{
                      listStyle: "none",
                      pl: 0,
                      mt: 1,
                      textAlign: "left",
                      "& li": {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        fontSize: "0.85rem",
                        mb: 0.7,
                      },
                    }}
                  >
                    <li>
                      <ChevronRightIcon sx={{ fontSize: 16, color: "#db0000" }} />
                      Meta Business Suite
                    </li>
                    <li>
                      <ChevronRightIcon sx={{ fontSize: 16, color: "#db0000" }} />
                      Buffer
                    </li>
                    <li>
                      <ChevronRightIcon sx={{ fontSize: 16, color: "#db0000" }} />
                      Hootsuite
                    </li>
                  </Box>
                ),

        },
        {
          icon: <BrushIcon  sx={{ fontSize: 50, color: "#db0000" }} />,
          title: "Ad Design & Creative",
          desc: (
                  <Box
                    component="ul"
                    sx={{
                      listStyle: "none",
                      pl: 0,
                      mt: 1,
                      textAlign: "left",
                      "& li": {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        fontSize: "0.85rem",
                        mb: 0.7,
                      },
                    }}
                  >
                    <li>
                      <ChevronRightIcon sx={{ fontSize: 16, color: "#db0000" }} />
                      Adobe Photoshop
                    </li>
                    <li>
                      <ChevronRightIcon sx={{ fontSize: 16, color: "#db0000" }} />
                      Figma
                    </li>
                    <li>
                      <ChevronRightIcon sx={{ fontSize: 16, color: "#db0000" }} />
                      Canva Pro
                    </li>
                    <li>
                      <ChevronRightIcon sx={{ fontSize: 16, color: "#db0000" }} />
                      Adobe Illustrator
                    </li>
                  </Box>
                ),

        },
        {
          icon: <AnalyticsIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          title: "Analytics & Data",
          desc: (
                  <Box
                    component="ul"
                    sx={{
                      listStyle: "none",
                      pl: 0,
                      mt: 1,
                      textAlign: "left",
                      "& li": {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        fontSize: "0.85rem",
                        mb: 0.7,
                      },
                    }}
                  >
                    <li>
                      <ChevronRightIcon sx={{ fontSize: 16, color: "#db0000" }} />
                      Google Analytics 4
                    </li>
                    <li>
                      <ChevronRightIcon sx={{ fontSize: 16, color: "#db0000" }} />
                      Google Ads
                    </li>
                    <li>
                      <ChevronRightIcon sx={{ fontSize: 16, color: "#db0000" }} />
                      SEMrush
                    </li>
                  </Box>
                ),

        },
        {
          icon: <BoltIcon sx={{ fontSize: 50, color: "#db0000" }} />,
          title: "Campaign & Automation",
          desc: (
                  <Box
                    component="ul"
                    sx={{
                      listStyle: "none",
                      pl: 0,
                      mt: 1,
                      textAlign: "left",
                      "& li": {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        fontSize: "0.85rem",
                        mb: 0.7,
                      },
                    }}
                  >
                    <li>
                      <ChevronRightIcon sx={{ fontSize: 16, color: "#db0000" }} />
                      HubSpot
                    </li>
                    <li>
                      <ChevronRightIcon sx={{ fontSize: 16, color: "#db0000" }} />
                      Adobe Premiere
                    </li>
                    <li>
                      <ChevronRightIcon sx={{ fontSize: 16, color: "#db0000" }} />
                      Grammarly
                    </li>
                  </Box>
                ),

        },
        
      ],
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "#fff",
        paddingBottom: "60px"
      }}
    >
      <Navbar />

      <Box sx={{ pt: 12, px: 2, textAlign: "center" }}>
        {sections.map((section, index) => (
          <Box key={index} sx={{ mb: 10 }}>
            
            {/* Section Heading Animation */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 5,
                  letterSpacing: "2px",
                  display: "inline-block",
                  paddingBottom: "5px",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "3px",
                    backgroundColor: "#db0000",
                    borderRadius: "2px",
                    boxShadow: "0 4px 20px rgba(200, 19, 19, 0.8)",
                  },
                }}
              >
                {section.heading}
              </Typography>
            </motion.div>

            {/* Cards Animation */}
            <motion.div
              variants={cardsContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Grid
                container
                spacing={4}
                justifyContent="center"
                sx={{ px: { xs: 2, sm: 4 } }}
              >
                {section.items.map((item, idx) => (
                  <Grid
                    item
                    key={idx}
                    xs={12}
                    sm={6}
                    md={3}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <motion.div variants={cardAnim} transition={{ duration: 0.5 }}>
                      <Card
                        sx={{
                          width: 260,
                          backgroundColor: "#111",
                          color: "#fff",
                          textAlign: "center",
                          borderRadius: 3,
                          paddingY: 3,
                          transition: "0.3s",
                          border: "1px solid #222",
                          "&:hover": {
                            transform: "translateY(-10px)",
                            boxShadow: "0 4px 20px rgba(200, 19, 19, 0.8)",
                            cursor: "pointer",
                          },
                        }}
                      >
                        <CardContent>
                          {item.icon}
                          <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ mt: 1, opacity: 0.8, px: 1 }}>
                            {item.desc}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Box>
        ))}
      </Box>
    </div>
  );
}
