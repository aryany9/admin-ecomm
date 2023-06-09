import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar';
import NavigationDrawer from './NavDrawer';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Toolbar, Typography, AppBar, Button } from '@mui/material';
import AppDrawer from './AppDrawer';

const LayoutStructure = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: start;
`

const LayoutChildren = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    /* background-color: black; */
`

const LayoutComponent = styled.div`
    padding-left: 2%;
    padding-right: 2%;
`

const drawerWidth = 240;

const Layout = ({ children, title, action }) => {
    return (
        <LayoutStructure>
            <AppDrawer />
            <LayoutChildren>
                <Toolbar >
                    <Typography fontWeight={'bold'} flexGrow={1} >
                        {title ?? 'Page'}
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                <LayoutComponent >

                    {children}
                    {/* <AppBar
                    position="fixed"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                >
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            Permanent drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <Box
                        component="main"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                    >
                        <Toolbar />
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                            enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                            imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                            Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                            Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                            nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                            leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                            feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                            sapien faucibus et molestie ac.
                        </Typography>
                        <Typography paragraph>
                            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                            eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                            neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                            tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                            sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                            tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                            tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                            posuere sollicitudin aliquam ultrices sagittis orci a.
                        </Typography>
                    </Box>
                </Box> */}
                </LayoutComponent>
            </LayoutChildren>
        </LayoutStructure >
    )
}

export default Layout