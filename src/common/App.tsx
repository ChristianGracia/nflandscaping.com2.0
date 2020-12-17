import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "common/pages/Home";
import Services from "common/pages/Services";
import AboutUs from "common/pages/AboutUs";
import Gallery from "common/pages/Gallery";
import ContactUs from "common/pages/ContactUs";

import AppBar from "common/containers/AppBar/AppBar.component";

export default class App extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <AppBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/contact" component={ContactUs} />
                    <Route exact path="/about" component={AboutUs} />
                    <Route exact path="/gallery" component={Gallery} />
                </Switch>
            </React.Fragment>
        );
    }
}
