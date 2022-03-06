import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

interface Item {
  title: string;
  imageUrl: string;
}

interface GallerySectionCardProps {
  item: Item;
  handleClick: (title: any) => any;
}

const GallerySectionCard = ({ item, handleClick }: GallerySectionCardProps) => {
  const StyledContainer = styled.div(
    `
    .menu-item {
      width: 30vw;
      min-width: 300px;
      height: 300px;
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      margin: 0 7.5px 15px;
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
        width: 300px;
        // max-width: 500px;
        height: 300px;
        // height: 80vh;
        // height: 130%;
        background-image: url(images/gallery-sections/${item.imageUrl});
        background-position: center;
        background-size: center;
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
        color: #4a4a4a;
      }
    
      .subtitle {
        font-weight: lighter;
        font-size: 16px;
      }
    }
    `
  );
  return (
    <StyledContainer onClick={handleClick}>
      <Box className="menu-item">
        <Box
          className="background-image"
        />
        <Box className="content">
          <Typography component="h4" className="title">
            {item.title}
          </Typography>
          <Typography component="span" className="subtitle">
            View Now
          </Typography>
        </Box>
      </Box>
    </StyledContainer>
  );
};

export default GallerySectionCard;
