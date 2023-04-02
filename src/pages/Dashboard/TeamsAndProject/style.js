import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import COLORS from '../../../constants/color';


export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    marginBottom: '0.5rem',
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: COLORS.green,
    },
}));

export const styles = {
    chips: {marginBottom: '0.5rem', color: COLORS.white},
    title: {color: COLORS.grey2, fontWeight: '500', margin: '0.5rem auto'},
}