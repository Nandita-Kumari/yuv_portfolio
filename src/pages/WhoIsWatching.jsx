import { Box, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import entrepreneurImg from "../assets/entrepreneur.png";
import studentImg from "../assets/student.png";
import professionalImg from "../assets/professional.png";
import freelancerImg from "../assets/freelancer.png";

const options = [
  { label: "Entrepreneur", avatar: entrepreneurImg },
  { label: "Buisness Owner", avatar: studentImg },
  { label: "Marketer", avatar: professionalImg },
  { label: "HR", avatar: freelancerImg },
];

export default function WhoIsWatching() {
  const navigate = useNavigate();

  const handleSelect = (option) => {
    sessionStorage.setItem("userType", option.label);
    sessionStorage.setItem("userAvatar", option.avatar);
    navigate("/home");
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 5, fontWeight: 600, textAlign: "center" }}
      >
        Who’s Watching?
      </Typography>

      <Grid container spacing={3} maxWidth={600}>
        {options.map((item) => (
          <Grid item xs={6} key={item.label}>
            <Box
              onClick={() => handleSelect(item)}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1.5,
                cursor: "pointer",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Box
                component="img"
                src={item.avatar}
                alt={item.label}
                sx={{ width: 56, height: 56, objectFit: "contain" }}
              />
              <Typography sx={{ color: "white", fontSize: "0.7rem" }}>{item.label}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
