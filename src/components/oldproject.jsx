import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Video from "./../media/mock.gif";
import pcprtlist from "./../media/pcprtlist.png";
// import jailbreakSite from "./../media/jailbreakSite.gif";
import androidButton from "./../media/androidButton.png";
import iosButton from "./../media/iosButton.png";
import justVert from "./../media/logos/justVert.png";
import Button from "@material-ui/core/Button";
// import paint from "./../media/paint.png";

import { Link } from "react-router-dom";

export default function Project() {
  return (
    <Grid
      id="project"
      container
      item
      xs={12}
      sm={10}
      md={8}
      lg={7}
      spacing={4}
      justify="center"
    >
      <Grid item xs={12}>
        <Typography variant="h2">
          <div data-aos="zoom-in-down">Featured Projects</div>
        </Typography>
      </Grid>
      <Grid data-aos="zoom-in-up" item xs={6}>
        <img className="jv-video" src={Video} alt="Just Vertical App Demo" />
      </Grid>

      <Grid data-aos="zoom-in-down" container item xs={6} spacing={2}>
        <img className="jv-logo" src={justVert} alt="Just Vertical" />

        <Grid item xs={12}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps/details?id=com.justvertical&hl=en_CA"
          >
            <img
              className="market-link"
              src={androidButton}
              alt="Android App Store"
            />
          </a>
        </Grid>
        <Grid item xs={12}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://apps.apple.com/us/app/just-vertical/id1502200072"
          >
            <img className="market-link" src={iosButton} alt="iOS App Store" />
          </a>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography data-aos="fade-up" variant="h6">
          The companion mobile application for Just Vertical's flagship product,
          the AEVA vertical garden. Built with Flutter.
        </Typography>
      </Grid>


      
      <Grid item xs={4} container justify="center" spacing={1}>
        <Typography data-aos="zoom-in-up" variant="h5">
          pc.prt.lst
        </Typography>
      </Grid>

      <Grid item xs={8}>
        <img
          data-aos="zoom-in-down"
          className="jb-video"
          src={pcprtlist}
          alt="Apple Website Recreation Demo"
        />
      </Grid>

      <Grid item xs={12}>
        <Typography data-aos="fade-up" variant="h6">
          An auction site for computer components and electronics. 


          Built with Django, SQLite and Bootstrap. 
        </Typography>
      </Grid>




     
{/* 
      <Grid item xs={4} container justify="center" spacing={1}>
        <Typography data-aos="zoom-in-up" variant="h5">
          Apple Website Recreation
        </Typography>
      </Grid>

      <Grid item xs={8}>
        <img
          data-aos="zoom-in-down"
          className="jb-video"
          src={jailbreakSite}
          alt="Apple Website Recreation Demo"
        />
      </Grid>

      <Grid item xs={12}>
        <Typography data-aos="fade-up" variant="h6">
          Fully reponsive and created using only HTML/CSS without any additional
          styling frameworks.
        </Typography>
      </Grid> */}


 {/*
      <Grid item xs={6}>
        <img data-aos="zoom-in-up" className="paint" src={paint} alt="Paint" />
      </Grid>

      <Grid
        className="project-description"
        container
        justify="center"
        item
        xs={6}
        spacing={1}
      >
        <Typography data-aos="zoom-in-down" variant="h5">
          Paint
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography data-aos="fade-up" variant="h6">
          An MVC paint application built using Swing (Java). It features a blank canvas
          for painting with various tools available. The code
          utilizes various software design patterns and the project was managed
          using SCRUM.
        </Typography>
      </Grid> */}


      <Grid data-aos="fade-up" item xs={12}>
        <Typography  variant="h6">
          More projects:
        </Typography>
      </Grid>

       

      <Grid data-aos="fade-up" container justify="center" item xs={12} spacing={10}>

     
        
        <Button className="main-button" component={Link} to={"/projects"}>
          View Project Archive
        </Button>
      </Grid>
    </Grid>
  );
}
