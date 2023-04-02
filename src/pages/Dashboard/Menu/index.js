import React from 'react';
import { Stack } from '@mui/material';
import MenuListItem from './menuListItem';
import { MENU_ITEMS } from './helper/menuData';
import { stackStyle } from './style';

export default function Menu({ open }) {
    const menus = Object.keys(MENU_ITEMS).map(function(key) {
        return <MenuListItem title={key} list={MENU_ITEMS[key]} open={open} />
    });
    return (
        <Stack sx={stackStyle}>
            {menus}
        </Stack>
    );
}