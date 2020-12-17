import * as React from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";

import { Store } from "common/redux/store";

interface AboutUsProps {
    title: string;
    updateTitle: any;
}

class AboutUs extends React.Component<AboutUsProps> {
    public render() {
        return (
            <React.Fragment>
                <Typography>AboutUs page</Typography>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: Store) => {
    return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
