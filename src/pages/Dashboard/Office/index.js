import React from 'react';
import { ListItemIcon, ListItemText, Divider, Stack, Typography, Box, CssBaseline, Fab, List, ListItem, } from '@mui/material';

import TitleText from '../../../shared/constant/typography/title';

import CardComponent from '../../../shared/atom/card';
import COLORS from '../../../constants/color';
import {CONTENT, SOCIAL_MEDIA} from './helper';
import { styles } from './style';

const OfficeCard = () => {
  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <CardComponent styles={styles.cardContainer}>
        <TitleText title="Our office" style={styles.titleText} />
        <List>
          {CONTENT.map((item, index) => (
            <>
              <ListItem key={item.id} sx={styles.listItemStyle}>
                <ListItemIcon sx={styles.listIcon}>{item.icon}</ListItemIcon>
                <ListItemText primary={<Typography sx={styles.listText}>{item.text}</Typography>}/>
              </ListItem>
              {index === CONTENT.length - 1 ? null : <Divider />}
            </>
          ))}
        </List>
        <Stack direction="row" spacing={1} sx={styles.socialContainer}>
          {SOCIAL_MEDIA.map((item, i) => ( <Fab key={i + 1} size="small" sx={{ background: item.color, color: COLORS.white }}>{item.icon}</Fab>))}
        </Stack>
      </CardComponent>
    </Box>
  );
}

export default OfficeCard;
