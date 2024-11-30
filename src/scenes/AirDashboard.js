import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const AirDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        backgroundColor: colors.cyan[200],
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Ensure the height doesn't extend below the viewport
        width: "100vw",
        overflow: "hidden", // Hide any overflow to prevent scrolling
        position: "relative", // Necessary to position stickers absolutely
      }}
    >
      {/* Gradient "stickers" */}
      <div
        style={{
          position: 'absolute',
          top: '-105%',
          left: '-45%',
          width: '1500px',
          height: '1500px',
          background: `linear-gradient(135deg, 
            rgba(0, 61, 166, 0.20) 60%, 
            rgba(0, 89, 172, 0.36) 70%,
            rgba(0, 154, 187, 0.73) 100%)`, 
          borderRadius: '50%', // Maintain rounded corners if needed
          filter: 'blur(20px)', // Apply a blur effect for softer edges
          zIndex: 0, // Behind the content
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          bottom: '-60%',
          right: '-35%',
          width: '1100px',
          height: '1100px',
          background: `linear-gradient(135deg, 
            rgba(0, 61, 166, 0.20) 60%, 
            rgba(0, 89, 172, 0.36) 70%,
            rgba(0, 154, 187, 0.73) 100%)`, 
          borderRadius: '50%', // Maintain rounded corners if needed
          filter: 'blur(20px)', // Apply a blur effect for softer edges
          transform: 'rotate(150deg)', // Rotate the gradient box
          zIndex: 0, // Behind the content
        }}
      ></div>

      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background
          borderRadius: '20px',
          padding: '20px',
          color: colors.grey[100],
          marginBottom: '-10px',
          position: 'relative', // Set parent container as relative
          minHeight: '150px',   // Adjust as needed for your layout
          zIndex: 1, // Ensure header is above stickers
        }}
      >
        {/* Positioned Text */}
        <Box
          sx={{
            position: 'absolute', // Absolute positioning for fine control
            top: '30px',          // Set specific distance from top
            left: '10%',         // Set specific distance from left
            zIndex: 1, // Ensure it stays above the stickers
          }}
        >
          <Typography variant="h3" fontWeight="bold">
            Air Quality Dashboard 
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
        p="20px" // Add padding to ensure inner content is spaced from edges
        zIndex={1} // Ensure grid layout stays above stickers
      >
        {/* ROW 1 */}
        {/* DIVISION 1 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor="rgba(255, 255, 255, 0.3)"
          borderRadius="30px"
          zIndex={2} // Ensure this is above stickers
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h6"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Carbon Dioxide
              </Typography>
              <Typography
                variant="h7"
                fontWeight="bold"
                color={colors.grey[100]}
              >
                Level
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            
          </Box>
        </Box>

        {/* Division 2 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="rgba(255, 255, 255, 0.3)"
          borderRadius="30px"
          zIndex={2} // Ensure this is above stickers
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h6"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Calendar
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            
          </Box>
        </Box>

        {/* ROW 2 */}
        {/* DIVISION 2 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="rgba(255, 255, 255, 0.3)"
          borderRadius="30px"
          opacity="0.9"
          display="grid"
          gridTemplateRows="repeat(2, 1fr)"
          gap="10px"
          p="20px"
          zIndex={2} // Ensure this is above stickers
        >
          <Box
            backgroundColor={colors.white[300]}
            borderRadius="6px"
            opacity="0.8"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="10px"
          >
            <Typography variant="h6" color={colors.grey[100]}>
              Sub Division 1
            </Typography>
          </Box>
          <Box
            backgroundColor={colors.white[300]}
            borderRadius="6px"
            opacity="0.8"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="10px"
          >
            <Typography variant="h6" color={colors.grey[100]}>
              Sub Division 2
            </Typography>
          </Box>
        </Box>

          {/* DIVISION 4 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="rgba(255, 255, 255, 0.3)"
          borderRadius="30px"
          zIndex={2} // Ensure this is above stickers
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h6"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Humidity
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            
          </Box>
        </Box>

        {/* DIVISION 5 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="rgba(255, 255, 255, 0.3)"
          borderRadius="30px"
          zIndex={2} // Ensure this is above stickers
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h6"
                fontWeight="600"
                color={colors.grey[100]}
              >
                PM10
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AirDashboard;
