import React from "react";

import Grid from "@material-ui/core/Grid";

export default function devIcon() {
    const icons = [
        <i className="devicon-python-plain-wordmark colored"></i>,
        <img
            className="logo"
            src={require("./../media/logos/dart.png").default}
            alt="Dart"
        />,
        <i className="devicon-java-plain-wordmark colored"></i>,
        <i className="devicon-c-plain colored"></i>,
        <img
            className="logo"
            src={require("./../media/logos/racket.png").default}
            alt="Racket"
        />,
        <i class="devicon-haskell-plain-wordmark colored"></i>,
        <i className="devicon-html5-plain-wordmark colored"></i>,
        <i className="devicon-css3-plain-wordmark colored"></i>,
        <i className="devicon-javascript-plain colored"></i>,
        <i className="devicon-bootstrap-plain-wordmark colored"></i>,
        <i className="devicon-react-plain-wordmark colored"></i>,
        <i class="devicon-materialui-plain colored"></i>,
        <i className="devicon-express-original-wordmark colored"></i>,
        <i class="devicon-django-plain colored"></i>,
        <i className="devicon-wordpress-plain-wordmark colored"></i>,
        <img
            className="logo"
            src={require("./../media/logos/flutter.png").default}
            alt="Flutter"
        />,
        <i className="devicon-sass-original colored"></i>,
        <i className="devicon-mongodb-plain-wordmark colored"></i>,
        <i className="devicon-postgresql-plain-wordmark colored"></i>,

        <i className="devicon-nodejs-plain-wordmark colored"></i>,
        <i className="devicon-npm-original-wordmark colored"></i>,
        <i className="devicon-git-plain-wordmark colored "></i>,
        <i className="devicon-linux-plain"></i>,
        <i className="devicon-pycharm-plain colored"></i>,
        <i className="devicon-visualstudio-plain colored"></i>,
        <img
            className="logo"
            src={require("./../media/logos/eclipse.png").default}
            alt="Eclipse"
        />,
        <i className="devicon-illustrator-line colored"></i>,
        <i className="devicon-photoshop-line colored"></i>,
        <img
            className="logo"
            src={require("./../media/logos/hpalm.png").default}
            alt="HP Application Lifecycle Management / HP Quality Center"
        />,
        <img
            className="logo"
            src={require("./../media/logos/jira.png").default}
            alt="JIRA"
        />,
        <img
            className="logo"
            src={require("./../media/logos/selenium.png").default}
            alt="Selenium"
        />,
    ];

    return (
        <Grid
            container
            spacing={4}
            item
            xs={12}
            justify="center"
            alignItems="flex-end"
        >
            {icons.map((icon) => (
                <Grid data-aos="zoom-in-down" item xs={4} sm={3} md={2}>
                    {icon}
                </Grid>
            ))}
        </Grid>
    );
}
