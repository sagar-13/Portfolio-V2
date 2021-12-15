import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

export default function Footer() {
    return (
        <Grid align="center" container justify="center" spacing={0} id="footer">
            <Grid item xs={12}>
                <Button href="mailto:sagar.suri@mail.utoronto.ca">
                    <EmailIcon />
                </Button>
                <Button
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/sagar-suri-0b8885160/"
                >
                    <LinkedInIcon />
                </Button>

                <Button
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/sagar-13/"
                >
                    <GitHubIcon />
                </Button>
            </Grid>
        </Grid>
    );
}
