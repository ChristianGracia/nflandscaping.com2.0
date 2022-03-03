import * as React from "react";
import { connect } from "react-redux";
import { Typography } from "@mui/material";

import { Store } from "common/redux/store";

interface GalleryProps {
    title: string;
    updateTitle: any;
}

class Gallery extends React.Component<GalleryProps> {
    public render() {
        return (
            <React.Fragment>
                <Typography>Gallery page</Typography>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: Store) => {
    return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
