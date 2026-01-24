import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Toolbar,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Navbar from "../components/Navbar";
import profileImg from "../assets/Youvakshi.jpg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

export default function Contact() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#000",
          minHeight: "100vh",
          color: "#fff",
        }}
      >
        <Navbar />
        <Toolbar />

        {/* Profile Card */}
        <Box
          sx={{
            minHeight: { xs: "auto", md: "55vh" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: 2, sm: 4 },
            pt: { xs: 6, md: 12 },
            pb: { xs: 4, md: 8 },
          }}
        >
          <Card
            sx={{
              maxWidth: 900,
              width: "100%",
              backgroundColor: "#0b0b0b",
              borderRadius: 4,
              boxShadow: "0 0 30px rgba(219, 0, 0, 0.6)",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  gap: { xs: 3, md: 4 },
                }}
              >
                {/* Left - Profile Image */}
                <Box
                  sx={{
                    flex: { xs: "0 0 auto", md: "0 0 33%" },
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={profileImg}
                    alt="Profile"
                    sx={{
                      width: { xs: 140, sm: 160, md: 180 },
                      height: { xs: 140, sm: 160, md: 180 },
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "3px solid #db0000",
                    }}
                  />
                </Box>

                {/* Right - Content */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#bbb",
                      fontWeight: 700,
                      mb: 1,
                      fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
                    }}
                  >
                    Youvakshi Thakur
                  </Typography>

                  <Typography
                    sx={{
                      color: "#bbb",
                      mb: 3,
                      lineHeight: 1.7,
                      fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                    }}
                  >
                    Marketing strategist and growth-focused professional with
                    experience in brand building, performance marketing, and
                    full-funnel campaign execution.
                  </Typography>

                  <Button
                    component="a"
                    href="https://www.linkedin.com/in/youvakshi-thakur-1a9585166?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    startIcon={<LinkedInIcon />}
                    sx={{
                      backgroundColor: "#0A66C2",
                      textTransform: "none",
                      fontWeight: 600,
                      fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                      "&:hover": {
                        color: "#fff",
                      },
                    }}
                  >
                    Connect on LinkedIn
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Contact Info Section */}
        <Box
          sx={{
            textAlign: "center",
            px: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              color: "#ccc",
              mb: 3,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            }}
          >
            I'm always up for a chat or a matcha! Feel free to reach out.
          </Typography>

          {/* Email */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              px: { xs: 2, sm: 3 },
              py: 1.5,
              mb: 2,
              borderRadius: "30px",
              border: "1px solid #db0000",
              boxShadow: "0 0 18px rgba(219, 0, 0, 0.6)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#db000015",
                transform: "translateY(-2px)",
              },
            }}
            onClick={() => (window.location.href = "mailto:tyuv25@gmail.com")}
          >
            <EmailIcon sx={{ color: "#db0000" }} />
            <Typography sx={{ color: "#fff", fontWeight: 500, fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" } }}>
              tyuv25@gmail.com
            </Typography>
          </Box>

          <br />

          {/* Phone */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              px: { xs: 2, sm: 3 },
              py: 1.5,
              borderRadius: "30px",
              border: "1px solid #db0000",
              boxShadow: "0 0 18px rgba(219, 0, 0, 0.6)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#db000015",
                transform: "translateY(-2px)",
              },
            }}
            onClick={() => (window.location.href = "tel:+919816346491")}
          >
            <PhoneIcon sx={{ color: "#db0000" }} />
            <Typography sx={{ color: "#fff", fontWeight: 500, fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" } }}>
              +91 98163 46491
            </Typography>
          </Box>

          {/* Coffee Catch-up Text */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              // mb: 4,
              mt: 6,
              color: "#aaa",
              flexWrap: "wrap",
             
            }}
          >
            <VisibilityIcon sx={{ color: "#db0000" }} />
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
              }}
            >
              Or catch up over a coffee
            </Typography>
            <LocalCafeIcon sx={{ color: "#db0000" }} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
