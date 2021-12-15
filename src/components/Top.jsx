import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function Top() {
  return (
 
    <Grid
      id="top"
      data-aos="zoom-in-down"
      container
      spacing={4}
      justify="center"
    >
      <Grid item xs={12} sm={10} md={8} lg={7}>
        <Typography id="hi" variant="h4">
          Hi, my name is
        </Typography>

        <Typography variant="h1">Sagar Suri. </Typography>

        <Typography id="caption" variant="h4">
          I am a software engineer based in the Greater Toronto Area focused on
          building everything from mobile applications to responsive web
          experiences.
        </Typography>

        <Link
          to="project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}

        >
         <Button
          className="main-button"
        >
          <ArrowDownwardIcon/>
        </Button>
      </Link>
       


      </Grid>
    </Grid>


  );
}
