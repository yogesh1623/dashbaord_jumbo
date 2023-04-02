import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

// Social Media
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import COLORS from '../../../constants/color';

export const CONTENT = [
    { icon: <LocationOnIcon fontSize="small" />, text: '488, blingum road, JP Street, NJ, California' },
    { icon: <CallIcon fontSize="small" />, text: '+01-992856-8535' },
    { icon: <MailOutlineOutlinedIcon fontSize="small" />, text: 'bob.builder@jobportal.com' },
];

export const SOCIAL_MEDIA = [
    { icon: <TwitterIcon fontSize="small" />, color: COLORS.lightBlue },
    { icon: <FacebookIcon fontSize="small" />, color: COLORS.darkblue },
    { icon: <InstagramIcon fontSize="small" />, color: COLORS.pink },
    { icon: <LinkedInIcon fontSize="small" />, color: COLORS.lightBlue },
];