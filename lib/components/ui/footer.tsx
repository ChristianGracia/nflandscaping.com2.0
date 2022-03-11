import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import NavLinkButton from "../navBarButton";
const Footer = () => {
  const StyledContainer = styled.div(`
    position: fixed;
    z-index: 3;
    bottom: 0;
    width: 100%;
    height: 25px;
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    .footer-item {
      margin: 0 2px;
    }
    .hidden {
      display: none;
    }
    @media only screen and (min-width: 347px) { 
      .hidden {
        display: flex;
      }
    }
  `);
  return (
    <StyledContainer>
      <Typography component="span" className="footer-item">
        Site built by
      </Typography>
      <NavLinkButton newTab={true} to="http://www.christiangracia.com">
        <Typography
          component="p"
          className="footer-item"
          sx={{ color: "blue" }}
        >
          christiangracia.com
        </Typography>
      </NavLinkButton>
      <Typography component="span" className="footer-item hidden">
        |
      </Typography>
      <Typography component="span" className="footer-item hidden">
        <small>Copyright &copy; 2022</small>
      </Typography>
    </StyledContainer>
  );
};

export default Footer;
