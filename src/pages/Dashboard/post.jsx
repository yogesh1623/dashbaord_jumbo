import React from 'react';
import { Box, Avatar, CssBaseline, BottomNavigation, BottomNavigationAction } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import GoggleImg from './../../assets/images/glasses.jpg';
import CardComponent from '../../shared/atom/card';

const ActionCard = () => {
  return (
    <Box sx={{ pb: 2,  }}>
      <CssBaseline />
      <img src={GoggleImg} width="100%" height="280px" style={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px', }} />
      <CardComponent styles={{ marginTop: '-3rem', padding: '0px' }}>
        <BottomNavigation
          sx={{ borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', marginTop: '2rem', paddingTop: '0.5rem' }}>
          <BottomNavigationAction sx={{ marginTop: '-2rem' }} icon={<Avatar alt="image" src="https://qph.cf2.quoracdn.net/main-qimg-3970972e3a31bf6a85e4ac00e3541331" />} />
          <BottomNavigationAction icon={<FavoriteBorderOutlinedIcon sx={{ color: "#7266ba" }} />} />
          <BottomNavigationAction icon={<ChatBubbleOutlineOutlinedIcon sx={{ color: "#7266ba" }} />} />
          <BottomNavigationAction icon={<LinkIcon sx={{ color: "#7266ba" }} />} />
        </BottomNavigation>
      </CardComponent>
    </Box>
  );
}

export default ActionCard;
