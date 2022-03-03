import * as React from "react";
import { connect } from "react-redux";
import { Typography } from "@mui/material";

import { Store } from "common/redux/store";

interface HomeProps {
    title: string;
    updateTitle: any;
}

class Home extends React.Component<HomeProps> {
    public render() {
        return (
            <React.Fragment>
                <Typography>Home page</Typography>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: Store) => {
    return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
