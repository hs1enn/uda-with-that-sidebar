import React from 'react';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { tokens } from '../theme';
import logoImage from '../static/logo.png'; // Adjust this path to your logo

const LandingPage = ({
    logoPosition = { top: '12%', left: '60%' }, // Default logo position
    buttonPosition = { top: '72%', left: '70.2%' }, // Default button position
}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();

    // Button styles
    const buttonStyles = {
        padding: '10px 40px',
        fontSize: '18px',
        backgroundColor: colors.grey[100],
        color: colors.grey[900],
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'transform 0.2s, background-color 0.3s, box-shadow 0.3s', // Smooth effects
        outline: 'none',
        position: 'absolute', // Enable positioning via props
        ...buttonPosition,
    };

    const handleMouseOver = (e) => {
        e.target.style.backgroundColor = colors.grey[200];
        e.target.style.boxShadow = `0px 5px 15px ${colors.cyan[400]}`;
        e.target.style.transform = 'translateY(-2px)';
    };

    const handleMouseOut = (e) => {
        e.target.style.backgroundColor = colors.grey[100];
        e.target.style.boxShadow = 'none';
        e.target.style.transform = 'translateY(0)';
    };

    const handleMouseDown = (e) => {
        e.target.style.transform = 'translateY(2px)';
        e.target.style.boxShadow = `0px 2px 8px ${colors.grey[300]}`;
    };

    const handleMouseUp = (e) => {
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = `0px 5px 15px ${colors.grey[400]}`;
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                minHeight: '100vh',
                width: '100vw',
                padding: '50px',
                backgroundColor: colors.black[900],
                color: colors.grey[100],
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {/* Gradient "stickers" */}
            <div style={{
                position: 'absolute',
                top: '-105%',
                left: '15%',
                width: '1100px',
                height: '1100px',
                background: `radial-gradient(circle, ${colors.cyan[100]} 0%, transparent 70%)`,
                borderRadius: '50%',
                zIndex: 0,
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-90%',
                left: '-35%',
                width: '1100px',
                height: '1100px',
                background: `radial-gradient(circle, ${colors.teal[100]} 0%, transparent 70%)`,
                borderRadius: '50%',
                zIndex: 0,
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-90%',
                right: '-35%',
                width: '1100px',
                height: '1100px',
                background: `radial-gradient(circle, ${colors.yellow[100]} 0%, transparent 70%)`,
                borderRadius: '50%',
                zIndex: 0,
            }}></div>

            {/* Content: Text */}
            <div style={{
                marginLeft: '50px',
                maxWidth: '50%',
                textAlign: 'left',
                zIndex: 1,
                position: 'relative',
            }}>
                <h1 style={{
                    marginBottom: '20px',
                    fontSize: '100px',
                    fontWeight: 'bold',
                    lineHeight: '1.1',
                }}>
                    <span style={{ color: colors.cyan[700] }}>U</span>NIFIED <br />
                    <span style={{ color: colors.teal[700] }}>D</span>ASHBOARD <br />
                    <span style={{ color: colors.yellow[700] }}>A</span>NALYTICS
                </h1>
                <hr style={{
                    width: '624px',
                    border: `1px solid ${colors.grey[100]}`,
                    margin: '0',
                }} />
                <p style={{
                    fontSize: '25px',
                    color: colors.grey[100],
                    lineHeight: '1.2',
                    fontWeight: 'lighter',
                }}>
                    Turn data into actions,<br />transform insights into impact.
                </p>
            </div>

            {/* Logo */}
            <div
                style={{
                    position: 'absolute',
                    ...logoPosition, // Apply logo position dynamically
                    zIndex: 1,
                }}
            >
                <img src={logoImage} alt="Logo" style={{ width: '500px', height: 'auto' }} />
            </div>

            {/* Button */}
            <button
                style={buttonStyles}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onClick={() => navigate('/login')} // Navigate to the login page
            >
                Proceed
            </button>
        </div>
    );
};

export default LandingPage;
