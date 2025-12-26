import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import introVideo from "../assets/introVideo.mp4"; // your video

export default function IntroVideo() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play();
      video.onended = () => {
        navigate("/who"); // redirect after video ends
      };
    }
  }, [navigate]);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video
        ref={videoRef}
        src={introVideo}
        autoPlay
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
