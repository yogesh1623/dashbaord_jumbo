import React from 'react';
import { Box, CssBaseline, Grid, Button } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import TitleText from '../../../shared/constant/typography/title';
import CardComponent from '../../../shared/atom/card';
import COLORS from '../../../constants/color';
import ProductListItem from './productListItem';
import { styles } from './style';

const ProductCard= () => {
    return (
        <Box>
            <CssBaseline />
            <CardComponent styles={styles.cardContainer}>
                <Grid sx={styles.cardHeader}>
                    <TitleText title="Popular Products" style={{ marginBottom: '0.3rem' }} />
                    <MoreHorizOutlinedIcon fontSize='small' />
                </Grid>
                <TitleText title={'Checkout what other people are liking the most!'} style={styles.title} />
                <ProductListItem />
                <Button sx={styles.btn}>View All</Button>
            </CardComponent>
        </Box>
    );
}

export default ProductCard;
