import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import video from '../assets/IMG_5852.mp4';

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "75vh", sm: "75vh", md: "95vh" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Video */}
      <video
        src={video}
        autoPlay
        muted
        loop
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Content Over Video */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 20, sm: 30, md: 40 },
          left: { xs: 15, sm: 30, md: 50 },
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1, sm: 2 },
          maxWidth: { xs: "90%", sm: "90%", md: "95%" },
        }}
      >
        {/* Name */}
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.4rem", sm: "2rem", md: "2.3rem" },
            lineHeight: 1.2,
          }}
        >
          YOUVAKSHI THAKUR
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: { xs: "0.4rem", sm: "0.6rem", md: "0.8rem" },
            lineHeight: { xs: 1.3, sm: 1.5 },
            maxHeight: { xs: "6.2rem", sm: "none" },
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: { xs: 4, sm: "unset" },
            WebkitBoxOrient: "vertical",
            opacity: 0.9,
          }}
        >
         I'm Youvakshi Thakur, a dynamic marketing leader with a unique blend of creativity, strategy, and leadership. Originally from the scenic hills of Shimla and currently thriving in the vibrant landscape of Bangalore, I've spent the last four years shaping impactful brand narratives in both cities.
As a Marketing Manager, I specialize in social media strategy and brand architecture, driving meaningful engagement and elevating brand presence in a fast paced digital world. My journey has been one of transformation successfully designing and executing comprehensive brand ecosystems from the ground up. A key highlight: I led the creation of a complete brand identity for a growing IT fintech company, turning abstract ideas into a polished and powerful digital presence.
With expertise spanning product lifecycle management, enterprise level data governance, and Agile methodologies, I have a proven track record in delivering results. I excel in cross functional leadership, collaborating with diverse teams to bring visions to life and ensure seamless execution.
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1.2, sm: 2 },
            mt: { xs: 1, sm: 2 },
          }}
        >
          {/* Resume Button */}
          <Button
            variant="contained"
            sx={{
              fontSize: { xs: "0.65rem", sm: "0.8rem", md: "1rem" },
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: "bold",
              padding: { xs: "6px 10px", sm: "8px 18px" },
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <PlayArrowIcon sx={{ fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.3rem" } }} />
            Resume
          </Button>

          {/* LinkedIn Button */}
          <Button
            variant="outlined"
            sx={{
              fontSize: { xs: "0.65rem", sm: "0.8rem", md: "1rem" },
              padding: { xs: "6px 10px", sm: "8px 18px" },
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              color: "#fff",
              borderColor: "rgba(255,255,255,0.7)",
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.5)",
                borderColor: "#fff",
              },
            }}
          >
            <ErrorOutlineIcon sx={{ fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.3rem" } }} />
            LinkedIn
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
