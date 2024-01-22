import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Link from "next/link";

interface Item {
  title: string;
  imageUrl: string;
  path: string;
}

interface GallerySectionCardProps {
  item: Item;
}

const GallerySectionCard = ({ item, }: GallerySectionCardProps) => {
  const StyledContainer = styled.div(
    `
    .menu-item {
      width: 90vw;
      max-width: 500px;
      @media only screen and (min-width: 900px) {
          max-width: 40vw;
      }
      height: 300px;
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      // border: 1px solid black;
      margin: 10px 20px;
      overflow: hidden;
    
      &:hover {
        cursor: pointer;
        & .background-image {
          transform: scale(1.1);
          transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
        & .content {
          opacity: 0.9;
        }
      }
    
      .background-image {
        width: 90vw;
        max-width: 500px;
        height: 300px;
        background-image: url(images/gallery-sections/${item.imageUrl});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
    
      .content {
        height: 90px;
        padding: 0 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        opacity: 0.7;
        background-color: #fff;
        position: absolute;
      }
    
      .title {
        font-weight: bold;
        margin-bottom: 6px;
        font-size: 22px;
      }
    
      .subtitle {
        font-size: 16px;
      }
    }
    `
  );
  return (
    <StyledContainer>
      <Link href={`gallery/${item.path}`} >
        <Box className="menu-item">
          <Box className="background-image" />
          <Box className="content">
            <Typography component="h4" className="title">
              {item.title}
            </Typography>

            <Typography component="span" className="subtitle">
              View
            </Typography>
          </Box>
        </Box></Link>
    </StyledContainer>
  );
};

export default GallerySectionCard;
