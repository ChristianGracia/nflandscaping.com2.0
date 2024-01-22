import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import Image from "next/image";
import Box from "@mui/material/Box";
// import { Divider as ThemeDivider } from "@mui/material";
interface DividerProps { }

const Divider = (props: DividerProps) => {
    return (
        <StyledContainer >
            <Box className='divider'>
                {/* <ThemeDivider /> */}
            </Box>

        </StyledContainer>
    );
};

const StyledContainer = styled.div(`
.divider {
    width: 10vw;
    margin: 40px auto;
    border-bottom: 2px dotted black;
}
`);

export default Divider;
