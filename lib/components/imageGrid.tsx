import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import Image from "next/image";
interface ImageGridProps {
  images: string[];
  prepend: string;
}

const ImageGrid = (props: ImageGridProps) => {
  return (
    <StyledContainer>
      <Grid className="image-container" gap={4} container>
        {props.images.map((item: string, index: number) => {
          return (
            <Grid key={index} item>
              <Image
                className="image"
                src={`${props.prepend}${item}`}
                alt="gallery image"
                width={700}
                height={500}
              />
            </Grid>
          );
        })}
      </Grid>
    </StyledContainer>
  );
};

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
}`);

export default ImageGrid;
