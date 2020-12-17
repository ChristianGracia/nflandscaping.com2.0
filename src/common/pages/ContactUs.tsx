import * as React from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";

import { Store } from "common/redux/store";

interface ContactUsProps {
    title: string;
    updateTitle: any;
}

class ContactUs extends React.Component<ContactUsProps> {
    public render() {
        return (
            <React.Fragment>
                <Typography>ContactUs page</Typography>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: Store) => {
    return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
