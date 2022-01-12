import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import GitHubIcon from '@mui/icons-material/GitHub';
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
    background: '#8d99ae',
    height: '100%',
  },
  cardContainer: {
    width: '90%',
    minWidth: 350,
    margin: '5rem auto',
    border: '5px solid #2b2d42',
    borderRadius: '25px'
  },
  pictureContainer: {
    width: '100%',
    "&.MuiCardMedia-img": {
      backgroundColor: '#2b2d42',
    }
  },
  cardContent: {
    color: '#edf2f4',
    backgroundColor: '#d90429',
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '5px solid #2b2d42',
    alignItems: 'center'

  },
  cardActions: {
    backgroundColor: '#d90429'
  }
});

function Project(props) {
  const [selectElement, setSelectElement] = useState(0);

  const handleClick = (id) => {
    setSelectElement(id)
  }
  const [over, setOver] = useState(false);

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
                  sx={{
                    height: {
                      xs: 150,
                      md: 400
                    }, objectFit: { xs: 'contain', md: 'cover' }
                  }}
                  onMouseOver={() => {
                    handleClick(project.id);
                    setOver(true)
                  }}
                  onMouseOut={() => setOver(false)}
                  component="img"
                  alt={project.title}
                  image={selectElement === project.id && over ? project.hover : project.img}
                />
                <CardContent className={classes.cardContent} sx={{ height: 100}}>
                  <Typography gutterBottom variant="h5">
                    {project.title}
                  </Typography>

                  <CardActions className={classes.cardActions}>
                    <Button sx={{ color: '#edf2f4' }} href={project.link} target='_blank' size='small'>
                      Deployed
                    </Button>
                    <Button size='small' >
                      <GitHubIcon sx={{ color: '#edf2f4' }} />
                    </Button>
                  </CardActions>
                </CardContent>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Project;