import Grid from "@mui/material/Grid";

interface ImageGridProps {
  images: string[];
  prepend: string;
}

const ImageGrid = (props: ImageGridProps) => {
  return (
    <>
      <Grid container>
        {props.images.map((item: string, index: number) => {
          return (
            <Grid key={index} item>
              <img src={`${props.prepend}${item}`} alt="gallery image" />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ImageGrid;
