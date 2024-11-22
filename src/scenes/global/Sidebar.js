import { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar"; 
import 'react-pro-sidebar/dist/css/styles.css'; 
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import logo from "../../static/logo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import TerrainRoundedIcon from '@mui/icons-material/TerrainRounded';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import ReplyIcon from '@mui/icons-material/Reply';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from "@mui/icons-material/Person";

const Item = ({ title, to, icon, selected, setSelected, bgColor }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isSelected = selected === title;

    return (
        <MenuItem
            active={isSelected}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={
                <Box
                    sx={{
                        backgroundColor: isSelected ? colors.white[900] : bgColor || "transparent",
                        padding: "8px",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transition: "background-color 0.3s",
                        "&:hover": {
                            backgroundColor: colors.teal[300],
                        },
                    }}
                >
                    {icon}
                </Box>
            }
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const SidebarComponent = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                position: "fixed",
                top: 30,
                left: 30,
                height: "75vh",
                zIndex: 1300,
                backgroundColor: isCollapsed ? "rgba(255, 255, 255, 0.2)" : "black", 
                borderRadius: "40px",
                boxShadow: isCollapsed ? "none" : "0 0 15px rgba(0, 0, 0, 0.2)",
                overflow: "hidden",
                transition: "background 0.3s",
                "& .pro-sidebar-inner": {
                    background: "transparent !important",
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 22px !important",
                },
                "& .pro-inner-item:hover": {
                    color: colors.yellow[700] + " !important",
                },
                "& .pro-menu-item.active": {
                    color: colors.teal[800] + " !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 25px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box display="flex" justifyContent="space-between" alignItems="center" ml="10px">
                                <img 
                                    src={logo}
                                    alt="Logo"
                                    style={{ width: "40px", height: "auto" }} 
                                />
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    <Box paddingBottom="10px" />
                    
                    <Box paddingLeft={isCollapsed ? undefined : "3%"} display="flex" flexDirection="column" gap="10px">
                        <Item title="Home" to="/homepage" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Air" to="/airdashboard" icon={<AirOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="River" to="/riverdashboard" icon={<WaterOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Soil" to="/soildashboard" icon={<TerrainRoundedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Calendar" to="/calendar" icon={<CalendarMonthIcon />} selected={selected} setSelected={setSelected} />
                    </Box>

                    <Box paddingBottom="50px" />

                    <Box paddingLeft={isCollapsed ? undefined : "3%"} display="flex" flexDirection="column" gap="10px">
                        <Item title="Profile" to="/profilepage" icon={<PersonIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Exit" to="/landingpage" icon={<ReplyIcon />} selected={selected} setSelected={setSelected} />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default SidebarComponent;
