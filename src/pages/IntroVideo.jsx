import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import introVideo from "../assets/introVideo.mp4";

export default function IntroVideo() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [showSoundBtn, setShowSoundBtn] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => {});
    video.onended = () => navigate("/who");
  }, [navigate]);

  const enableSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = 1;
    video.play();
    setShowSoundBtn(false);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100dvh",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {/* 🎥 Responsive Video */}
      <Box
        component="video"
        ref={videoRef}
        src={introVideo}
        playsInline
        preload="auto"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: {
            xs: "contain", // 📱 mobile → no crop
            sm: "cover",   // 💻 tablet & desktop → cinematic
          },
        }}
      />

      {/* 🔊 Enable Sound Button */}
      {showSoundBtn && (
        <Button
          onClick={enableSound}
          sx={{
            position: "absolute",
            bottom: { xs: 20, md: 40 },
            right: { xs: 20, md: 40 },
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
            borderRadius: "30px",
            px: 2,
            py: 1,
            fontSize: "0.85rem",
            "&:hover": {
              background: "rgba(0,0,0,0.8)",
            },
          }}
        >
          🔊 Enable Sound
        </Button>
      )}
    </Box>
  );
}
