import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";

interface ImageGridProps {
  images: string[];
  prepend: string;
}

const ImageGrid = (props: ImageGridProps) => {
  const StyledContainer = styled.div(`
    .image {
      width: 100vw;
      max-width: 420px;
      height: 400px;
      margin: 0 auto;
    }
    .image-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 32px;
    }`)
  return (
    <StyledContainer>
      <Grid className="image-container" container>
        {props.images.map((item: string, index: number) => {
          return (
            <Grid key={index} item>
              <img className="image" src={`${props.prepend}${item}`} alt="gallery image" />
            </Grid>
          );
        })}
      </Grid>
    </StyledContainer>
  );
};

export default ImageGrid;
