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

const drawerWidth = 240;

const AppDrawer = () => {
    const DrawerItems = {
        "Dashboard": <Dashboard />,
        "Manage Users": <Group />,
        "Manage Products": <Inventory2 />,
        "Manage Account": <AccountCircle />,
        "Logout": <Logout />
    }

    return (
        < Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }
            }
            variant="permanent"
            anchor="left"
        >
            <Toolbar title='Admin Ecomm' style={{ height: 70 }}>
                <div style={{ height: '100%', width: '100%', padding: 2, alignItems: 'center', alignContent: 'center' }}>
                    <EcommAdminSvgLogo width="5%" height='13%' />
                </div>
            </Toolbar>
            <Divider />
            <List>
                {Object.entries(DrawerItems).map((([text, icon]) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))
                )}
            </List>
        </Drawer >
    )
}

export default AppDrawer