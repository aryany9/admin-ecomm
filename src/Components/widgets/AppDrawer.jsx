import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Dashboard, Group, Inventory2, AccountCircle, Logout } from '@mui/icons-material';
import EcommAdminSvgLogo from '../../Assets/EcommExpressAdminSvg';
import MailIcon from '@mui/icons-material/Mail';
import EcommLogo from '../../Assets/ecomm-express.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useRef } from 'react';

const drawerWidth = 240;

const AppDrawer = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const navigate = useNavigate();
    // const DrawerItems = {
    //     "Dashboard": <Dashboard />,
    //     "Manage Users": <Group />,
    //     "Manage Products": <Inventory2 />,
    //     "Manage Account": <AccountCircle />,
    //     "Logout": <Logout />
    // }

    const DrawerItems = [
        {
            "title": "Dashboard",
            "icon": <Dashboard />,
            "onClick": () => navigate('/dashboard'),
            "path": '/dashboard'
        },
        {
            "title": "Manage Users",
            "icon": <Group />,
            "onClick": () => navigate('/users'),
            "path": '/users'
        },
        {
            "title": "Manage Products",
            "icon": <Inventory2 />,
            "onClick": () => navigate('/products'),
            "path": '/products'
        },
        {
            "title": "Manage Account",
            "icon": <AccountCircle />,
            "onClick": () => navigate('/account'),
            "path": '/account'
        },
        {
            "title": "Logout",
            "icon": <Logout />,
            "onClick": () => navigate('/login'),
            "path": '/login'
        }
    ]


    const location = useLocation();

    return (
        < Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    border: 'orange',
                    borderWidth: 5,
                    boxShadow: 1
                },
            }
            }
            variant="permanent"
            anchor="left"
        >
            <Toolbar title='Admin Ecomm' style={{ height: 70 }}>
                <img src={EcommLogo} style={{ width: '100%' }} />
            </Toolbar>
            <Divider />
            <List>
                {/* {Object.entries(DrawerItems).map((([text, icon]) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))
                )} */}
                {DrawerItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={item.path === location.pathname ? {
                        backgroundColor: 'primary.main', color: 'white', '& .MuiListItemIcon-root': {
                            color: 'white',
                        },
                    } : {}} >
                        <ListItemButton onClick={item.onClick} disabled={item.isEnabled} >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer >
    )
}

export default AppDrawer