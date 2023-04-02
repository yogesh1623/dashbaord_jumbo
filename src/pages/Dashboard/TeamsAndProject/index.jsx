import React from 'react';
import { Box, Chip, CssBaseline } from '@mui/material';
import ProjectsDetails from './projectDetails';
import TitleText from '../../../shared/constant/typography/title';
import COLORS from '../../../constants/color';
import CardComponent from '../../../shared/atom/card';
import { PEOPLEPROFILES, TEAMS } from './helper';

export default function TeamsCard() {
    return (
        <Box sx={{ pb: 7 }}>
            <CssBaseline />
            <CardComponent styles={{ padding: '1rem 1.5rem' }}>
                <TitleText title='Projects and teams' />
                {
                    TEAMS.map((ele)=>(
                        <ProjectsDetails
                            title={ele.title}
                            subTitle={ele.subTitle}
                            progress={ele.progressPercent}
                            members={PEOPLEPROFILES}
                            chipStyle={{ background: ele.bgColor }}
                        />
                    ))
                }
                <Chip label="Marketing" size="small" sx={{ background: COLORS.pink, color: COLORS.white }} />
            </CardComponent>
        </Box>
    );
}