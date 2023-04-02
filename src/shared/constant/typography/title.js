import React from 'react';
import Typography from '@mui/material/Typography';

const CardTitle = ({title, style}) => {
    return (
        <Typography sx={{fontSize: '14px', fontWeight: 'bold', ...style}}>{title}</Typography>
    )
}

export default CardTitle;