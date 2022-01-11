import React, { useState } from "react";
import { Grid, Box, Avatar, Container } from '@mui/material';
import { makeStyles } from "@material-ui/core";
// import Typed from 'react-typed';
import rickAvatar from '../assets/hero/new profile.png'
import pixel from '../assets/hero/pxArt.png'

const useStyles = makeStyles({
    typedContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        zIndex: 1
    }

})

function About() {
    const [over, setOver] = useState(false);

    const classes = useStyles();
    return (
        <>
            <Box className={classes.typedContainer} sx={{ backgroundColor: '#8d99ae' }}>
                <Container fixed>
                    <Grid>
                            <Avatar
                                onMouseOver={() => setOver(true)}
                                onMouseOut={() => setOver(false)}
                                src={over ? pixel : rickAvatar}
                                alt='Rick Martin'
                                sx={{ bgcolor: '#2b2d42', width: 200, height: 200 }}
                            />
                        <h2 className="my-5" id="about">about me</h2>
                        <p>
                            Hello! I'm Richard. Recently becomming a Full Stack Developer has been an excellent journey of personal and professional growth.
                            My background has always been in customer service with over a decade in the restaurant industry and most recently in real estate.
                            Web Development is just another extension of customer service. Highly motivated and dedicated to my clients to listen to their needs,
                            understand the product they envision, and then be able to create and deliver to them in a timely and efficient manner.
                            Whether creating a project solo or joining a team and collaborating to create something exciting and functional, I will deligently
                            until the final produt is exactly what was asked for.<br></br><br></br>

                            In my personal life, I like to spend most of my nights hanging in with my beautiful wife, our dog Meatball
                            the Great Pyrenees, and our cat Jersey the Maine Coon. I love to cook and I am always on the look out for a
                            new recipe each week. I try to learn a new skill in the kitchen and perfect my craft every time I attempt a
                            new dish. We are also season ticket holders for the Austin FC soccer team. If I am not cooking for my family
                            or at a soccer game, then you can bet you will find me at a concert or any one of our Emo nights dancing and
                            singing to the songs of my childhood.
                        </p>
                    </Grid>
                </Container>
            </Box>
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