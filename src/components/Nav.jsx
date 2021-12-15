import React from "react";

import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/Email";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function NavLink(props) {
    return (
        <Link
            activeClass="nav-item-active"
            to={props.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={props.className ? props.className : "nav-item"}
        >
            <Typography variant="subtitle1">
                {props.text ? props.text : props.children}
            </Typography>
        </Link>
    );
}

function SagarSuriLogo(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={500}
            height={500}
            viewBox="0 0 375 375"
            className="sagarsurilogo"
            {...props}
        >
            <defs>
                <symbol overflow="visible" id="prefix__a">
                    <path d="M8.063-23.328v-17.016c0-1.738.867-2.61 2.609-2.61h16.86c1.738 0 2.609.872 2.609 2.61v12.5c0 4.324 2.16 6.485 6.484 6.485h7.75c4.32 0 6.484-2.16 6.484-6.485v-21.593L12.5-62.017c-2.96-.945-4.438-2.953-4.438-6.015v-38.203c0-7.59 2.004-13.38 6.016-17.36 4.008-3.976 9.785-5.969 17.328-5.969h18.188c7.644 0 13.445 1.981 17.406 5.938 3.957 3.95 5.938 9.746 5.938 17.39v17.172c0 1.688-.872 2.532-2.61 2.532h-16.86c-1.741 0-2.609-.844-2.609-2.531v-12.657c0-4.332-2.164-6.5-6.484-6.5h-7.75c-2.055 0-3.648.57-4.781 1.703-1.137 1.137-1.703 2.739-1.703 4.797v22.297l38.515 12.656c2.852 1.168 4.281 3.176 4.281 6.016v37.422c0 7.648-1.98 13.45-5.937 17.406C63.04-1.972 57.238 0 49.594 0H31.406c-7.543 0-13.32-1.988-17.328-5.969-4.012-3.976-6.015-9.765-6.015-17.36zm0 0" />
                </symbol>
            </defs>
            <path d="M366.45 366.45H375V375h-8.55zM0 8.55h8.55v357.9H0zm0 357.9h8.55V375H0zM366.45 8.55H375v357.9h-8.55zM8.55 366.45h357.9V375H8.55zM366.45 0H375v8.55h-8.55zM0 0h8.55v8.55H0zm8.55 0h357.9v8.55H8.55zm0 0" />
            <use xlinkHref="#prefix__a" x={147.056} y={241.758} />
        </svg>
    );
}

export default function Nav() {
    const [drawer, openDrawer] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        openDrawer(open);
    };

    const NavLinks = (
        <>
            <NavLink to="project" text="Projects" className="nav-item" />

            <RouterLink to="/projects" className="nav-item archive">
                {" "}
                <Typography variant="subtitle1">Archive</Typography>
            </RouterLink>

            <NavLink to="work" text="Work" className="nav-item" />
            <NavLink to="about" text="About" className="nav-item" />
            <Button
                className="nav-button"
                href="mailto:sagar.suri@mail.utoronto.ca"
            >
                {" "}
                <EmailIcon /> Contact
            </Button>
        </>
    );

    return (
        <HideOnScroll>
            <AppBar id="nav">
                <Toolbar>
                    <NavLink
                        to="top"
                        className="nav-title"
                        text={<SagarSuriLogo />}
                    />
                    <Hidden xsDown>{NavLinks}</Hidden>
                    <Hidden smUp>
                        <Button onClick={toggleDrawer(true)}>
                            {<MenuIcon />}
                        </Button>
                    </Hidden>

                    <Drawer
                        containerClassName="drawer"
                        anchor={"right"}
                        open={drawer}
                        onClose={toggleDrawer(false)}
                        classes={{ paper: "drawer" }}
                    >
                        <Button onClick={toggleDrawer(false)}>
                            {<CloseIcon />}
                        </Button>
                        {NavLinks}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}
