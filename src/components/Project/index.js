import React from "react";
import { makeStyles } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import { 
  ImageList,
  IconButton,
  ImageListItem,
  ImageListItemBar,
 } from "@mui/material";

//  import { ThemeProvider, createTheme } from "@mui/system";



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

  // const theme = createTheme({
  //   text: {
  //     opacity: 0
  //   }
  // })

  return (
      <ImageList sx={{ width: 'auto', height: 'auto', "& :hover .MuiImageListItem-img": {opacity: 0.3 }, "& :hover .MuiImageListItemBar-root": {opacity: 1 }}}>
        {projects.map((project) => (
          <ImageListItem
             key={project.id}>
            <img
              sx={{ opacity: 1 }}
              src={`${project.img}`}
              srcSet={`${project.img}`}
              alt={project.title}
              loading="lazy"
            />
            <ImageListItemBar 
              sx={{ opacity: 0 }}
              title={project.title}
              subtitle={project.author}
              actionIcon={
                <IconButton onClick={event => window.location.href = `${project.link}`} className={classes.clickableIcon}
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${project.title}`}

                >
                  <GitHub />
                </IconButton>
              }
            />

          </ImageListItem>

        ))}

      </ImageList>
  );
}

export default Project;