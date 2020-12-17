import { createStyles } from "@material-ui/core";

const style = createStyles({
    gridContainer: {
        marginTop: 16,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    homeButtonContainer: {},
    menuButton: { padding: 0 },

    navContainer: {
        background: "transparent",
        boxShadow: "none"
    },
    socialMediaContainer: {},
    menuButtonContainer: {
        marginRight: 4
    },
    menuButtonsContainer: {
        display: "flex",
        flexDirection: "row"
    }
});

export default style;
