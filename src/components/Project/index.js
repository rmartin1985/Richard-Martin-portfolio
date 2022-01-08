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
  CardActionArea,
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
      maxWidth: 345,
      margin: '5rem auto',
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
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer} key={project.id}>
              <CardActionArea component='div'>
                <CardMedia
                  component="img"
                  alt={project.title}
                  height='140'
                  image={project.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {projects[0].title}
                  </Typography>
                  <Typography variant="body2" color='textSecondary' component='p'>
                    Proident ut ea consequat do enim incididunt qui adipisicing magna consectetur irure. Dolor consequat exercitation occaecat consectetur. Cupidatat proident aliquip culpa nisi elit consectetur officia ea ea excepteur elit aliqua sunt. Ea sunt quis tempor ullamco nostrud excepteur id anim. Velit amet aliqua dolor ea sunt Lorem qui. Sit nostrud deserunt laborum pariatur aliqua cupidatat.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'>
                    Deployed
                  </Button>
                  <Button size='small' color='primary'>
                    GitHub
                  </Button>
                </CardActions>
              </CardActionArea>
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