import React from "react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HelpCenterRoundedIcon from '@mui/icons-material/HelpCenterRounded';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';

export const NavBarData = [
    {
        title: "Home",
        icon: <HomeRoundedIcon />,
        link: "/home"
    },
    {
        title: "About",
        icon: <HelpCenterRoundedIcon />,
        link: "/about"
    },
    {
        title: "Contact",
        icon: <ContactsRoundedIcon />,
        link: "/contact"
    },
    {
        title: "Admin",
        icon: <AdminPanelSettingsRoundedIcon />,
        link: "/admin"
    },
]