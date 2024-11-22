import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                minHeight: '100vh', // Full viewport height
                width: '100vw', // Full viewport width
                padding: '50px',
                backgroundColor: colors.black[900], // Base fallback color
                color: colors.grey[100],
                overflow: 'hidden', // Prevent scrollbars
                position: 'relative', // To position gradients absolutely
            }}
        >
            {/* Gradient "stickers" */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '-105%',
                    left: '15%',
                    width: '1100px',
                    height: '1100px',
                    background: `radial-gradient(circle, ${colors.cyan[100]} 0%, transparent 70%)`,
                    borderRadius: '50%',
                    zIndex: 0, // Behind the content
                }}
            ></Box>
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '-90%',
                    left: '-35%',
                    width: '1100px',
                    height: '1100px',
                    background: `radial-gradient(circle, ${colors.teal[100]} 0%, transparent 70%)`,
                    borderRadius: '50%',
                    zIndex: 0, // Behind the content
                }}
            ></Box>
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '-90%',
                    right: '-35%',
                    width: '1100px',
                    height: '1100px',
                    background: `radial-gradient(circle, ${colors.yellow[100]} 0%, transparent 70%)`,
                    borderRadius: '50%',
                    zIndex: 0, // Behind the content
                }}
            ></Box>
        </Box>
    );
};

export default Calendar;
