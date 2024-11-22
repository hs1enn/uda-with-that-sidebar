import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const RiverDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        backgroundColor: colors.black[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
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
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderRadius: '20px',
          padding: '20px',
          color: colors.grey[100],
          marginBottom: '-10px',
          position: 'relative',
          minHeight: '150px',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '30px',
            left: '10%',
            zIndex: 1,
          }}
        >
          <Typography variant="h3" fontWeight="bold">
            River Dashboard
          </Typography>
          <Typography variant="subtitle1">
            Unified Dashboard Analytics
          </Typography>
        </Box>
      </Box>

      {/* GRID LAYOUT */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        marginLeft="10%"
        p="20px"
        zIndex={1}
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor="rgba(255, 255, 255, 0.3)"
          borderRadius="30px"
          opacity="0.9"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="20px"
          zIndex={2}
        >
          <Typography variant="h5" color={colors.grey[100]}>
            Division 1
          </Typography>
        </Box>

        {/* Division 2 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="rgba(255, 255, 255, 0.3)"
          borderRadius="30px"
          opacity="0.9"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="20px"
          zIndex={2}
        >
          <Typography variant="h5" color={colors.grey[100]}>
            Division 2
          </Typography>
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="rgba(255, 255, 255, 0.3)"
          borderRadius="30px"
          opacity="0.9"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="20px"
          zIndex={2}
        >
          <Typography variant="h5" color={colors.grey[100]}>
            Division 3
          </Typography>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="rgba(255, 255, 255, 0.3)"
          borderRadius="30px"
          opacity="0.9"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="20px"
          zIndex={2}
        >
          <Typography variant="h5" color={colors.grey[100]}>
            Division 4
          </Typography>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="rgba(255, 255, 255, 0.3)"
          borderRadius="30px"
          opacity="0.9"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="20px"
          zIndex={2}
        >
          <Typography variant="h5" color={colors.grey[100]}>
            Division 5
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RiverDashboard;
