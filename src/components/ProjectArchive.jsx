import React from "react";
import { Link } from "react-router-dom";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
class ProjectArchive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount() {
        fetch("https://api.github.com/users/sagar-13/repos")
            .then((res) => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result,
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            );
    }

    render() {
        const { error, isLoaded, items } = this.state;

        if (error) {
            return <Typography variant="h3">Error: {error.message}</Typography>;
        } else if (!isLoaded) {
            return <Typography variant="h3">Loading...</Typography>;
        } else {
            return (
                <Grid
                    data-aos="zoom-in-up"
                    id="project-archive"
                    container
                    spacing={2}
                >
                    <Grid item xs={4}>
                        <Button
                            className="main-button"
                            component={Link}
                            to={"/"}
                        >
                            Back
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h2">Project Archive</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6">
                            Below are projects I have worked on in the past or
                            am currently working on. Each project has a link
                            provided to the GitHub repository with the code and
                            a website if it's available.
                        </Typography>
                    </Grid>

                    <Hidden mdUp>
                        <Grid className="table-heading" item xs={4}>
                            <Typography variant="h5">Name</Typography>
                        </Grid>
                        <Grid className="table-heading" item xs={8}>
                            <Typography variant="h5">Description</Typography>
                        </Grid>
                    </Hidden>

                    {items.map((item) => (
                        <Grid
                            data-aos="fade-down"
                            data-aos-easing="ease"
                            data-aos-offset={110}
                            data-aos-once="true"
                            data-aos-duration="300"
                            className="table-row"
                            container
                            item
                            xs={12}
                            md={5}
                            key={item.name}
                            spacing={2}
                            alignItems="flex-start"
                        >
                            <Grid className="table-cell-1" item xs={4} md={12}>
                                <Typography variant="body1">
                                    {item.name}
                                </Typography>
                                <a href={item.html_url}>
                                    <GitHubIcon />
                                </a>
                                {item.homepage && (
                                    <a href={item.homepage}>
                                        <LinkIcon />
                                    </a>
                                )}
                            </Grid>
                            <Grid className="table-cell-2" item xs={8} md={12}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">
                                        {item.description}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            );
        }
    }
}

export default ProjectArchive;
