import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        backgroundColor: colors.black[900],
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Gradient "stickers" */}
      <div
        style={{
          position: 'absolute',
          top: '-105%',
          left: '15%',
          width: '1100px',
          height: '1100px',
          background: `radial-gradient(circle, ${colors.cyan[100]} 0%, transparent 70%)`,
          borderRadius: '50%',
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          bottom: '-90%',
          left: '-35%',
          width: '1100px',
          height: '1100px',
          background: `radial-gradient(circle, ${colors.teal[100]} 0%, transparent 70%)`,
          borderRadius: '50%',
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          bottom: '-90%',
          right: '-35%',
          width: '1100px',
          height: '1100px',
          background: `radial-gradient(circle, ${colors.yellow[100]} 0%, transparent 70%)`,
          borderRadius: '50%',
          zIndex: 0,
        }}
      ></div>

      {/* Header Section */}
      <Box
        sx={{
          padding: "20px",
          color: colors.grey[100],
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Home Dashboard
        </Typography>
        <Typography variant="subtitle1">
          Explore Insights with Organized Layouts
        </Typography>
      </Box>

      {/* Content Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", // Two columns
          gap: "20px",
          width: "80%", // Center-aligned grid
          zIndex: 1,
        }}
      >
        {/* Division Boxes */}
        {Array.from({ length: 6 }, (_, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              height: "150px",
              opacity: 0.9,
              boxShadow: `0 4px 8px ${colors.grey[700]}`,
              transition: "transform 0.2s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: `0 8px 16px ${colors.grey[500]}`,
              },
            }}
          >
            <Typography variant="h6" color={colors.grey[100]}>
              Division {index + 1}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
