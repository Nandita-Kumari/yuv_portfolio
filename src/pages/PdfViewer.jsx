import { Box, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export default function PdfViewer() {
  const [params] = useSearchParams();
  const file = params.get("file");

  return (
    <Box
      onContextMenu={(e) => e.preventDefault()}
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        position: "relative",
      }}
    >
      <iframe
        src={`/pdfs/${file}#toolbar=0&navpanes=0&scrollbar=0`}
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="Confidential PDF"
      />

      {/* Watermark */}
      <Typography
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
          fontWeight: 800,
          color: "#fff",
          opacity: 0.07,
          transform: "rotate(-30deg)",
          pointerEvents: "none",
        }}
      >
        CONFIDENTIAL
      </Typography>
    </Box>
  );
}
