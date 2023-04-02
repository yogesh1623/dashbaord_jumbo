import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import TitleText from '../../../shared/constant/typography/title';
import { menuListItemStyle } from './style';

const MenuListItem = ({ title, list, open }) => {
    return (
        <>
            {open ? <TitleText title={title} style={menuListItemStyle.titleText} /> : null}
            <List>
                {list.map((item, i) => {
                let IconComponent = item.icon;
                return (
                    <ListItem key={i} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{minHeight: 35, justifyContent: open ? 'initial' : 'center', px: 2.5, p: 0}} >
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 1 : 'auto', justifyContent: 'center', }} >
                                <IconComponent fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={<TitleText title={item.title} style={menuListItemStyle.listText} />} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                )    
            })}
            </List>
        </>
    )
};

export default MenuListItem;