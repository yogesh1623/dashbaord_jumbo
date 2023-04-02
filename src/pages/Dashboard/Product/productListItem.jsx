import React from 'react';
import Grid from '@mui/material/Grid';

import TitleText from '../../../shared/constant/typography/title';
import listOfItems from './helper';
import COLORS from '../../../constants/color';
import { productListStyle as styles } from './style';

export default function ProductListItem() {
    return (
        <Grid container spacing={2}>
            {listOfItems.map((item, i) => {
                const { title, description, actualPrice, discountedPrice, source } = item;
                return(
                    <>
                        <Grid key={`item${i}`} item xs={12} sm={12} md={8} lg={6} sx={{ display: 'flex', mb: 1 }}>
                            <img src={source} style={styles.bgImg} />
                            <Grid>
                                <TitleText title={title} style={{ color: COLORS.black1 }} />
                                <TitleText title={description} style={styles.title} />
                                <Grid sx={{ display: 'flex' }}>
                                    <TitleText title={`$${actualPrice}`} style={styles.actualPrice} />
                                    <TitleText title={`$${discountedPrice}`} style={styles.discountedPrice} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </>
                )
                })}
        </Grid>
    );
}