import React from 'react';
import {Box, CssBaseline as HRLine, Typography, IconButton, Button } from '@mui/material';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import Grid from '@mui/material/Grid';
import MuiDrawer from '@mui/material/Drawer';
import SettingsIcon from '@mui/icons-material/Settings';

import logo from '../../assets/images/logoImg.png';
import { styled } from '@mui/material/styles';

import Menu from './Menu/index';
import Header from './header';

// Pages
import ActionCard from '../Dashboard/post';
import WordOfTheDay from './WordOfTheDay';
import OfficeCard from './Office';
import ProductCard from './Product';
import TeamsCard from './TeamsAndProject';

//constants 
import COLORS from '../../constants/color';

const DRAWER_WIDTH = 200;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0rem 1rem',
    ...theme.mixins.toolbar,
}));

const mixinsO = (theme) => ({
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const mixinsC = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: DRAWER_WIDTH,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...mixinsO(theme),
            '& .MuiDrawer-paper': mixinsO(theme),
        }),
        ...(!open && {
            ...mixinsC(theme),
            '& .MuiDrawer-paper': mixinsC(theme),
        }),
    }),
);

const floatingButtonStyle = {
    height: '45px',
    background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
    position: 'fixed',
    zIndex: 20,
    right : 0,
    top: '25%',
    display: 'flex',
    justifyContent:'flex-start',
    alignContent: 'center',
    borderTopLeftRadius: '35%',
    borderBottomLeftRadius: '35%',
    marginRight: '-1.4rem'
}

export default function Dashboard() {
    const [open, setOpen] = React.useState(true);
    const sections = [
        { component: WordOfTheDay , lg: 3, md: 6},
        { component: OfficeCard , lg: 4, md: 6},
        { component: ActionCard , lg: 5, md: 12},
        { component: ProductCard , lg: 8, md: 7},
        { component: TeamsCard , lg: 4, md: 5},
    ]
    return (
        <Box sx={{ display: 'flex' }}>
            <HRLine />
            <Header open={open} handleDrawerOpen={() => setOpen(true)} />
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <Typography sx={{color: COLORS.grey3, fontWeight: 'bold', display: 'flex', alignItems: 'center'}}><img src={logo} width="26%" style={{marginRight: '5px'}} /> jumbo</Typography>
                    <IconButton onClick={() => setOpen(false)}>
                        <MenuOpenOutlinedIcon fontSize="small" />
                    </IconButton>
                </DrawerHeader>
                <Menu open={open} />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, background: COLORS.grey1 }}>
                <DrawerHeader />
                <Button variant="outlined" sx={floatingButtonStyle}>
                    <SettingsIcon fontSize="small" sx={{color : COLORS.white}}/>
                </Button>
                <Grid container spacing={4} justifyContent="center" sx={{ padding: '0px 2rem' }} >
                    {
                        sections.map((element, i)=>{
                            let Component = element.component;
                            return <Grid key={i} item xs={12} sm={12} md={element.md} lg={element.lg}><Component /></Grid>;
                        })
                    }
                </Grid>
            </Box>
        </Box>
    );
}