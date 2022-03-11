import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";


interface SectionedImageProps {
  name: string,
  numberOfImages: number,
}
interface ImageGridProps {
  images: string[],
  prepend: string,
  sectionedImages: SectionedImageProps[],
}

const ImageGrid = (props: ImageGridProps) => {
  const createImages = (image: SectionedImageProps) => {
    return Array.from(Array(image.numberOfImages - 1).keys()).map((item) => {       
      return <img
      className="image"
      src={`${props.prepend}${image.name}/${item + 1}.JPG`}
      alt="gallery image"
    />
  })
}

  const renderSectionedImages = () => {
    return props.sectionedImages.map((image: SectionedImageProps, index: number) => {
      return (
        <Grid key={index} item>
          {createImages(image)}
        </Grid>
      );
    });
  }
  return (
    <StyledContainer>
      {props.sectionedImages.length > 0 ?  renderSectionedImages() : null}
      <Grid className="image-container" container>
        {props.images.map((item: string, index: number) => {
          return (
            <Grid key={index} item>
              <img
                className="image"
                src={`${props.prepend}${item}`}
                alt="gallery image"
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
