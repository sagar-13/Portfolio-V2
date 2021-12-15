import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import ListItem from "@material-ui/core/ListItem";
import justVert from "./../media/logos/justVert.png";
import Ministry from "./../media/logos/ministry_education.png";

export default function Work() {
    const [activeJob, setJob] = React.useState(0);

    return (
        <Grid
            id="work"
            container
            item
            xs={12}
            sm={10}
            md={8}
            lg={7}
            spacing={4}
            justify="flex-start"
        >
            <Grid item xs={12}>
                <Typography data-aos="zoom-in-down" variant="h2">
                    Where I've Worked
                </Typography>
            </Grid>

            <Grid item xs={12} lg={3}>
                <Grid container>
                    {Object.values(Jobs).map((job, index) => {
                        return (
                            <Grid>
                                <ListItem
                                    className={
                                        activeJob === index
                                            ? "active-job job"
                                            : "job"
                                    }
                                    button
                                    onClick={() => setJob(index)}
                                >
                                    <Typography
                                        data-aos="fade-right"
                                        variant="h4"
                                    >
                                        {job.company}
                                    </Typography>
                                </ListItem>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>

            <Grid
                data-aos="zoom-in-down"
                className="job-descriptions"
                item
                xs={12}
                lg={9}
            >
                <Typography variant="h4">
                    <img
                        className="work-image"
                        src={Jobs[activeJob].image}
                        alt={Jobs[activeJob].company}
                    />
                </Typography>

                <Typography variant="h3">{Jobs[activeJob].title} </Typography>
                <Typography variant="h6">{Jobs[activeJob].time} </Typography>
                {Jobs[activeJob].points.map((item) => (
                    <Typography key={item} variant="h6">
                        {item.charAt(0) === "-" ? (
                            <li
                                dangerouslySetInnerHTML={{
                                    __html: item.slice(1),
                                }}
                                className="sub-list"
                            />
                        ) : (
                            <li
                                dangerouslySetInnerHTML={{ __html: item }}
                                className="main-list"
                            />
                        )}
                    </Typography>
                ))}
            </Grid>
        </Grid>
    );
}

const Jobs = {
    0: {
        title: "Mobile Application Developer",
        company: "Just Vertical",
        time: "January - April 2020, August - November 2020",
        points: [
            "Designed the companion mobile application for Just Vertical’s flagship product, the AEVA vertical garden",
            "Researched user requirements, competitor offerings, and cross-platform development options",
            "Developed the final app for both iOS and Android using <b>Flutter<b/>",
            "Deployed both apps using <b>App Store Connect</b>, and <b>Google Play Console</b>",
            "Performed content and feature updates",
        ],
        image: justVert,
    },

    1: {
        title: "Application Programmer Analyst",
        company: "Ministry of Education",
        time: "September 2018 – August 2019.",
        points: [
            "Collaborated with development team and business architects to support development and testing of Ministry applications like OSAP (Ontario Student Assistance Program)",
            "Developed new data creation scripts (<b>Selenium</b>) that:",
            "-Reduced single script execution time by 80%",
            "-Allowed for running multiple scripts in parallel",
            "-Allowed for running scripts on all machines at no additional cost",
            "Developed test-case generators to convert business requirements to test-cases automatically   (<b>Python, Java</b>)",
            "Prepared documentation for the above tools and held meetings to train QA Team members on using them",
            "Logged defects on <b>HP Application Lifecycle Management</b>, and verified fixes on <b>JIRA</b>",
            "Completed accredited CO-OP program, Professional Experience Year (PEY)",
        ],
        image: Ministry,
    },
};
