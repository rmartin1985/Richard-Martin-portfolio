import React from "react";
import { Grid, Box, Typography, Avatar, } from '@mui/material';
import { makeStyles } from "@material-ui/core";
import Typed from 'react-typed';
import Particles from 'react-tsparticles'
import rickAvatar from '../assets/hero/new profile.png'

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

function About() {

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
                        strings={['Web Design', 'Web Development', 'MERN Stack']}
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


        // <Box height='100%' >
        //     <Grid container justifyContent='center' alignItems='center'>
        //         <h2 className="my-5" id="about">about me</h2>
        //         <p>
        //             Hello! I’m Richard. I am currently studying to be a full stack web developer through the University of Texas
        //             in Austin Coding Bootcamp. After years in the restaurant industry and most recently in Real Estate as an
        //             apartment locator, I am excited to take the next challenge and venture in to the world of web development. I
        //             have always excelled at any customer service role and I see web development as just another extension of
        //             customer service. I pride myself on being able to understand the needs of my client and deliver a product to
        //             them exactly as asked for.<br></br><br></br>

        //             In my personal life, I like to spend most of my nights hanging in with my beautiful wife, our dog Meatball
        //             the Great Pyrenees, and our cat Jersey the Maine Coon. I love to cook and I am always on the look out for a
        //             new recipe each week. I try to learn a new skill in the kitchen and perfect my craft every time I attempt a
        //             new dish. We are also season ticket holders for the Austin FC soccer team. If I am not cooking for my family
        //             or at a soccer game, then you can bet you will find me at a concert or any one of our Emo nights dancing and
        //             singing to the songs of my childhood.
        //         </p>

        //     </Grid>

        // </Box>

    );
}

export default About;