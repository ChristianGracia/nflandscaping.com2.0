import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#fff",
            light: "#2D77A9",
            dark: "#152238",
            contrastText: "#212121"
        },
        secondary: {
            main: "#7986cb",
            light: "#aab6fe",
            dark: "#49599a",
            contrastText: "#fafafa"
        },
        type: "light"
    }
});

export default theme;
