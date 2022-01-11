import React from 'react'
import { makeStyles } from '@material-ui/core'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const useStyles = makeStyles({
    foot: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
    },
});


const Footer = () => {
    const classes = useStyles();

    return (

        <Box component='footer' className={classes.foot} >
            <BottomNavigation sx={{ bgcolor: '#8d99ae' }} showLabels>
                <BottomNavigationAction sx={{ color: '#2b2d42' }} href='https://github.com/rmartin1985' target='_blank' label="GitHub" className={classes.root} icon={<GitHubIcon />} />
                <BottomNavigationAction sx={{ color: '#2b2d42' }} href='https://www.linkedin.com/in/rickmartinatx/' target='_blank' label="LinkedIn" className={classes.root} icon={<LinkedInIcon />} />
                <BottomNavigationAction sx={{ color: '#2b2d42' }} href='https://www.instagram.com/rickmartin1985/' target='_blank' label="Instagram" className={classes.root} icon={<InstagramIcon />} />
            </BottomNavigation>
        </Box>

    )
}

export default Footer
