import React from "react";
import { makeStyles } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@mui/material";

const useStyles = makeStyles({
  mainContainer: {
    background: '#233',
    height: '100%'
  },
  cardContainer: {
    width: '95%',
    margin: '5rem auto',
  },
  pictureContainer: {
    height: 300,
    width: '100%',
    '&:hover': {
      opacity: 0.3
    }

  },
});




function Project(props) {
  const projects = props.projects

  const classes = useStyles();

  return (
    <>
      <Box component='div' className={classes.mainContainer}>
        <Grid container justifyContent='center'>
          {projects.map((project) => (
            <Grid item sm={12} md={6} key={project.id}>
              <Card className={classes.cardContainer} >
                  <CardMedia
                  className={classes.pictureContainer}
                    component="img"
                    alt={project.title}
                    height='140'
                    image={project.img}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color='textSecondary' component='p'>
                      Proident ut ea consequat do enim incididunt qui adipisicing magna consectetur irure. Dolor consequat exercitation occaecat consectetur. Cupidatat proident aliquip culpa nisi elit consectetur officia ea ea excepteur elit aliqua sunt. Ea sunt quis tempor ullamco nostrud excepteur id anim. Velit amet aliqua dolor ea sunt Lorem qui. Sit nostrud deserunt laborum pariatur aliqua cupidatat.
                    </Typography>
                  </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button href={project.link} target='_blank' size='small' color='primary'>
                    Deployed
                  </Button>
                  <Button size='small' color='primary'>
                    <GitHub />
                  </Button>
                </CardActions>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Project;