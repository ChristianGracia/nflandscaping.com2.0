import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import Image from "next/image";
import Box from "@mui/material/Box";
interface ImageGroupProps {
    images: string[];
    prepend: string;
    className?: string
}

const ImageGroup = (props: ImageGroupProps) => {
    return (
        <StyledContainer >
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
                className={"card " + props?.className ?? ""}
            > <Grid className="image-container" gap={4} container>
                    {props.images.map((item: string, index: number) => {
                        return (
                            <Grid key={index} item>
                                <Image
                                    className="image"
                                    src={`${props.prepend}${item}`}
                                    alt="gallery image"
                                    width={400}
                                    height={300}
                                />
                            </Grid>
                        );
                    })}
                </Grid></Box>
        </StyledContainer>
    );
};

const StyledContainer = styled.div(`
.image {
//   width: 100vw;
//   max-width: 420px;
//   height: 400px;
  margin: 0 auto;
}
.card{
    margin: 20px;
    // margin: 0 auto;
    // max-width: 900px;
    // box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.image-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
}`);

export default ImageGroup;
