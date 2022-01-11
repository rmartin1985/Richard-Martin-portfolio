import React from "react";
import { Grid, Box, Typography, Avatar, } from '@mui/material';
import { makeStyles } from "@material-ui/core";
import Typed from 'react-typed';
import Particles from 'react-tsparticles'
import rickAvatar from '../assets/avatar/new profile.png'

const useStyles = makeStyles(theme => ({
    title: {
        color: '#2b2d42'
    },
    subtitle: {
        color: '#ef233c',
        marginBottom: '3rem',
    },
    typedContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1

    }
}))

function Home() {

    const classes = useStyles();
    return (
        <>
            <Box className={classes.typedContainer}>
                <Grid container justifyContent='center'>
                    <Avatar
                        className={classes.avatar}
                        src={rickAvatar}
                        alt='Rick Martin'
                        sx={{ bgcolor: '#2b2d42', width: 200, height: 200 }}
                    />
                </Grid>
                <Typography className={classes.title} variant='h4'>
                    <Typed strings={['Richard Martin']} typeSpeed={40} showCursor={false} />
                </Typography>
                <Typography>

                </Typography>
                <Typography className={classes.subtitle} variant='h5'>
                    <Typed
                        strings={['Web Development', 'MERN Stack', 'JavaScript', 'GraphQL', 'jQuery']}
                        typeSpeed={40}
                        backSpeed={60}
                        loop />

                </Typography>
            </Box>
            <Particles
                params={{
                    particles: {
                        move: {
                            enable: true
                        },
                        links: {
                            enable: true,
                            opacity: 0.3
                        },
                        size: {
                            value: 2
                        },
                        number: {
                            value: 45,
                            density: {
                                enable: false,
                                value_area: 900,
                            }
                        }
                    }
                }}
            />
        </>
    );
}

export default Home;