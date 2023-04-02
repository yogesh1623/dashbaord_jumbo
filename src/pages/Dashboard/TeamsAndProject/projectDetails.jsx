import React from 'react';
import { Chip, Avatar, AvatarGroup, Grid } from '@mui/material';
import COLORS from '../../../constants/color';
import TitleText from '../../../shared/constant/typography/title';
import { BorderLinearProgress, styles } from './style';

const ProjectsDetails = ({ title, subTitle, progress, members, chipStyle }) => {
    return (
        <Grid sx={{margin: '1rem auto'}}>
            <Chip label={title} size="small" sx={[styles.chips, chipStyle]} />
            <TitleText title={subTitle} style={{fontWeight: '500'}} />
            <TitleText title={`${progress}% completed`} style={styles.title} />
            <BorderLinearProgress variant="determinate" value={progress} />
            <AvatarGroup max={6} sx={{ justifyContent: 'flex-end' }}>
                {members?.map((item, i) => (<Avatar key={`people${i}`} src={item.source} />))}
            </AvatarGroup>
        </Grid>
    );
}

export default ProjectsDetails;