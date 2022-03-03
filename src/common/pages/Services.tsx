import * as React from "react";
import { connect } from "react-redux";
import { Typography } from "@mui/material";

import { Store } from "common/redux/store";

interface ServicesProps {
    title: string;
    updateTitle: any;
}

class Services extends React.Component<ServicesProps> {
    public render() {
        return (
            <React.Fragment>
                <Typography>Services page</Typography>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: Store) => {
    return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
