import React from "react";

import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

import uoft from "./../media/logos/uoft.png";
import sheridan from "./../media/logos/sheridan.png";
import Tech from "./Tech";


const Education = {
  1: {
    certificate: "Honours Bachelors of Science - Computer Science",
    school: "University of Toronto",
    time: "Sept 2015 – Aug 2020",
    image: uoft,
  },

  2: {
    certificate: "Certificate in Digital Communication",
    school: "Sheridan College",
    time: "Sept 2015 – Aug 2020",
    image: sheridan,
  },
};
export default function About() {
  return (
    <Grid
      data-aos="zoom-in-down" 
      id="about"
      container
      item
      xs={12}
      sm={10}
      md={8}
      lg={7}
      spacing={4}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography variant="h2">About Me</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6">
          I recently finished the computer science program at the University of Toronto.
          In my time at UofT, I had many great opportunities to work on a variety
          of challenging projects giving me an excellent base in development.{" "}
          <br /> <br />
        </Typography>

        <Typography variant="h6">
          During my Professional Experience Year (Co-Op Placement), I assisted
          with the development and testing of various Ministry of Education
          websites. More recently, I was able to work with the Toronto-based
          start-up, Just Vertical, to develop the iOS and Android companion
          application for their flagship product.
          <br /> <br />
        </Typography>
      </Grid>

      <Grid data-aos="zoom-in-down" item xs={12}>
        <br />
        <Typography variant="h3">Some technologies I've used</Typography>
      </Grid>


      <Tech />

      <Grid id="Education" container spacing={4}>
        <Grid item xs={12}>
          <br />
          <Typography data-aos="zoom-in-down" variant="h3">
            Education
          </Typography>
        </Grid>

        {Object.values(Education).map((item) => (
          <Grid
            data-aos="fade-down"
            key={item.school}
            container
            spacing={4}
            item
            xs={12}
          >
            <Grid item xs={6}>
              <img className="school-logo" src={item.image} alt={item.name} />
            </Grid>

            <Grid item xs={6}>
              <Typography align="right" variant="h6">
                {item.time}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">{item.certificate}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
