import * as React from "react";
import AppRoutes from "./common/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { Typography } from "@mui/material";
// import AppBar from "common/containers/AppBar/AppBar.component";

export default function App() {
        return (
            <React.Fragment>
                {/* <AppBar /> */}
                {/* <AppRoutes/> */}
                <Typography variant="h4" component="h1" gutterBottom>
          Server-side rendering example
        </Typography>
            </React.Fragment>
        );
}
