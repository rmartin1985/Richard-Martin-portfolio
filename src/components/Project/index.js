import React from "react";
import { 
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    ListSubheader,
    makeStyles
 } from "@material-ui/core";

import { Info } from "@material-ui/icons";




function Project(props) {
    const projects = props.projects
    const useStyles = makeStyles(theme => ({
        clickableIcon: {
            color: 'green',
            '&:hover': {
                color: 'yellow',
            },
        },
    }));
    
    const classes = useStyles();

  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {projects.map((project) => (
        <ImageListItem key={project.id}>
          <img
            src={`${project.img}?w=248&fit=crop&auto=format`}
            srcSet={`${project.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={project.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={project.title}
            subtitle={project.author}
            actionIcon={
              <IconButton className={classes.clickableIcon}
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${project.title}`}
                
              >
                  <Info  />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default Project;