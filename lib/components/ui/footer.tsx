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
    padding: 3px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    .footer-item {
      margin: 2px;
    }
  `);
  return (
    <StyledContainer>
      <Typography component="span" className="footer-item">
        Site built by
      </Typography>
      <NavLinkButton newTab={true} to="http://www.christiangracia.com">
        <Typography
          component="span"
          className="footer-item"
          sx={{ color: "blue" }}
        >
          christiangracia.com
        </Typography>
      </NavLinkButton>
      <Typography component="span" className="footer-item">
        |
      </Typography>
      <small>Copyright &copy; 2022</small>
    </StyledContainer>
  );
};

export default Footer;
