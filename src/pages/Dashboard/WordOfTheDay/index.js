import React from 'react';
import { Box, CssBaseline, Grid, IconButton } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import CardComponent from '../../../shared/atom/card';
import TitleText from '../../../shared/constant/typography/title';

import { CONTENT } from './helper';
import COLORS from '../../../constants/color';

const WordOfTheDay = () => {
    return (
        <Box sx={{ pb: 7 }}>
            <CssBaseline />
            <CardComponent styles={{ padding: '1.2rem' }}>
                <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TitleText title="Word of the day" style={{ marginBottom: '0.8rem' }} />
                    <LoopIcon fontSize='small' />
                </Grid>
                {
                    CONTENT.map((ele, i)=>{
                        return <TitleText title={ele.text} style={ele.style} />
                    })
                }
               <IconButton sx={{ background: COLORS.purple1, padding: '5px 10px', borderRadius: '15%', color: COLORS.white }}><VolumeUpOutlinedIcon fontSize='small' /></IconButton>
            </CardComponent>
        </Box>
    );
}

export default WordOfTheDay;
