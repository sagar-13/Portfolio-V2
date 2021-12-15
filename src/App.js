import React from "react";
import { Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Nav from "./components/Nav";
import Top from "./components/Top";
import About from "./components/About";
import Work from "./components/Work";
import Project from "./components/Project";
import ProjectArchive from "./components/ProjectArchive";
import Footer from "./components/Footer";
import "./styles.scss";
import AOS from "aos";
import "aos/dist/aos.css";


class App extends React.Component {
  componentDidMount() {
    AOS.init();
  }
  componentDidUpdate() {
    AOS.refresh();
  }
  render() {
    const main = (
      <Grid id="app" container>
        <Nav />
        <Top />
        <Project />
        <Work />
        <About />
        <Footer />
      </Grid>
    );
    return (
      <Switch>
        <Route exact path="/" render={() => main} />
        <Route path="/projects" render={() => <>
            <ProjectArchive />
            <Footer />
          </>
      } />
      </Switch>
    );
  }
}

export default App;
