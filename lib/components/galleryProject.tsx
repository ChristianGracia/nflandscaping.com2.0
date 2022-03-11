import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

interface GalleryProjectProps {
    name: string;
    numberOfImages: number;
}

const GalleryProject = ({ name, numberOfImages }: GalleryProjectProps) => {
  const StyledContainer = styled.div(``);

  return (
    <StyledContainer>
      <p>{name}</p>
    </StyledContainer>
  );
};

export default GalleryProject;
