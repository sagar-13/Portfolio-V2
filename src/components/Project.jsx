import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Video from "./../media/mock.gif";
// import pcprtlststill from "./../media/pcprtlst.png";
import SSJ from "./../media/SSJ.png";
import pcprtlstfinal from "./../media/pcprtlstfinal.png";
import jv1 from "./../media/jv1.png";
import jv2 from "./../media/jv2.png";
import jv3 from "./../media/jv3.png";
import jv4 from "./../media/jv4.png";
// import pcprtlstmobile from "./../media/pcprtlstmobile.png";
// import jailbreakSite from "./../media/jailbreakSite.gif";
import androidButton from "./../media/androidButton.png";
import iosButton from "./../media/iosButton.png";
import justVert from "./../media/logos/justVert.png";
import GitHubIcon from "@material-ui/icons/GitHub";
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

            <Grid
                container
                alignContent="center"
                className="projectContainer"
                spacing={5}
            >
                <Grid data-aos="zoom-in-up" item xs={6}>
                    <img
                        className="jv-video"
                        src={Video}
                        alt="Just Vertical App Demo"
                    />
                </Grid>

                <Grid data-aos="zoom-in-down" container item xs={6} spacing={2}>
                    <Grid xs={12}>
                        <img
                            className="jv-logo"
                            src={justVert}
                            alt="Just Vertical"
                        />
                    </Grid>

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
                            <img
                                className="market-link"
                                src={iosButton}
                                alt="iOS App Store"
                            />
                        </a>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Typography data-aos="fade-up" variant="h6">
                        The companion mobile application for Just Vertical's
                        flagship product, the AEVA vertical garden. The app
                        features various guides, faqs, and videos taken from the
                        Just Vertical Website and re-implemented to be
                        mobile-friendly. It also features functionality to
                        remind users to water their AEVA or to add nutrients.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <ul className="builtWith" data-aos="fade-up">
                        <li>Dart</li>
                        <li>Flutter</li>
                    </ul>
                </Grid>
            </Grid>

            <Grid
                container
                justify="center"
                alignContent="center"
                className="projectContainer"
                spacing={5}
            >
                <Grid item xs={12}>
                    <Typography
                        data-aos="zoom-in-up"
                        variant="h3"
                        className="pcprtlstlogo"
                    >
                        pc.prt.lst
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <img
                        data-aos="zoom-in-down"
                        className="pcprtlst"
                        src={pcprtlstfinal}
                        alt="pcprtlst"
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography data-aos="fade-up" variant="h6">
                        An auction site for computer parts and electronics.
                        Users can browse and search through various categories
                        of listings which they can bid on, comment on, or add to
                        their watchlist. They can also start their own auctions
                        as sellers.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <ul className="builtWith" data-aos="fade-up">
                        <li>Django</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>SQLite</li>
                        <a href="https://github.com/sagar-13/pc.part.lst">
                            <GitHubIcon />
                        </a>
                    </ul>
                </Grid>
            </Grid>

            <Grid
                container
                // justify="space-between"
                // alignContent="space-between"
                className="projectContainer"
                spacing={1}
            >
                <Grid data-aos="zoom-in-down" item xs={12}>
                    <Typography data-aos="fade-up" variant="h5">
                        SSJ Fitness
                    </Typography>
                </Grid>

                <Grid data-aos="zoom-in-up" item xs={12} align="center">
                    <img className="ssj" src={SSJ} alt="SSJ Fitness" />
                </Grid>

                <Grid data-aos="zoom-in-down" item xs={12}>
                    <Typography data-aos="fade-up" variant="h6">
                        A work-in-progress fitness tracking web app. Current
                        functionality allows users to log their workout
                        progress, track goals, and use various utilities
                        including a plate calculator. It also features a growing
                        index of exercises for all major muscle groups as well
                        as various equipment types (currently 200 exercises).
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <ul className="builtWith" data-aos="fade-up">
                        <li>React</li>
                        <li>Firebase</li>
                        <li>SCSS</li>
                        <li>Material UI</li>
                    </ul>
                </Grid>
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
                {/* <Typography  variant="h4">
          That's not all...
        </Typography> */}
            </Grid>

            <Grid
                data-aos="fade-up"
                container
                justify="center"
                item
                xs={12}
                spacing={10}
            >
                <Button
                    className="main-button"
                    component={Link}
                    to={"/projects"}
                >
                    <Typography variant="h5"> View Project Archive</Typography>
                </Button>
            </Grid>
        </Grid>
    );
}
