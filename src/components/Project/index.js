import React from "react";
import { makeStyles } from "@material-ui/core";
// import { GitHub } from "@material-ui/icons";
import {
  // ImageList,
  // IconButton,
  // ImageListItem,
  // ImageListItemBar,
  Box,
  Grid,
  Card,
  // CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@mui/material";


//  import { ThemeProvider, createTheme } from "@mui/system";

const useStyles = makeStyles({
  mainContainer: {
    background: '#233',
    height: '100%'
  },
  cardContainer: {
    width: '95%',
    margin: '5rem auto',
    height: 400
  },
  cardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)",
  },
  pictureContainer: {
    top: 0,
    right: 0,
    height: '100%',
    width: '100%'
  },
  textSecondary: {
    color: "rgba(255,255,255,0.78)"
  },
  cardActions: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)",
  }
});



function Project(props) {
  const projects = props.projects

  const classes = useStyles();

  return (
    <>
      <Box component='div' className={classes.mainContainer}>
        <Grid container justifyContent='center'>
          {projects.map((project) => (
            <Grid item xs={12} sm={8} md={6} key={project.id}>
              <Card className={classes.cardContainer} >
                  <CardMedia
                    className={classes.pictureContainer}
                    component="img"
                    alt={project.title}
                    image={project.img}
                  />
                <CardContent id="content" className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className={classes.textSecondary} component='p'>
                    Sample Text
                  </Typography>
                </CardContent>

                <CardActions className={classes.cardActions}>
                  <Button size='small' color='inherit' variant="outlined">
                    Deployed
                  </Button>
                  <Button size='small' color='inherit' variant="outlined">
                    GitHub
                  </Button>
                </CardActions>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )





  // return (
  //     <ImageList cols={2} gap={25} sx={{ mt: 15, p: 5,
  //       "& :hover .MuiImageListItem-img": {opacity: 0.3 }, 
  //       "& :hover .MuiImageListItemBar-root": {opacity: 1 }}}>
  //       {projects.map((project) => (
  //         <ImageListItem
  //            key={project.id}>
  //           <img
  //             sx={{ opacity: 1 }}
  //             src={`${project.img}`}
  //             srcSet={`${project.img}`}
  //             alt={project.title}
  //             loading="lazy"
  //           />
  //           <ImageListItemBar 
  //             sx={{ opacity: 0 }}
  //             title={project.title}
  //             subtitle={project.author}
  //             actionIcon={
  //               <IconButton onClick={event => window.location.href = `${project.link}`} className={classes.clickableIcon}
  //                 sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
  //                 aria-label={`info about ${project.title}`}

  //               >
  //                 <GitHub />
  //               </IconButton>
  //             }
  //           />

  //         </ImageListItem>

  //       

  //     </ImageList>
  // );
}

export default Project;