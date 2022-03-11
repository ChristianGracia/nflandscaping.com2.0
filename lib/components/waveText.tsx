import Box from "@mui/material/Box";
import styled from "@emotion/styled";
interface WaveTextProps {
  text: string;
  fontSize: number;
}

const WaveText = ({ text, fontSize }: WaveTextProps) => {
  return (
    <StyledContainer>
      {text.split("").map((item: string, index: number) => {
        return (
          <Box
            component="span"
            className="loading loading-animation"
            key={index}
          >
            <Box
              component="span"
              className="loading loading-animation finance-text"
              sx={{ fontSize, padding: item === " " ? 0.4 : 0.1 }}
            >
              {item}
            </Box>
          </Box>
        );
      })}
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  .loading {
    text-align: center;
    span {
      display: inline-block;
      margin: 0 -0.05em;
    }
  }

  .loading-animation {
    span {
      margin: 0 -0.05em;
      animation: loading-animation 0.7s infinite alternate;
      @for $i from 1 through 6 {
        &:nth-of-type(#{$i + 1}) {
          animation-delay: #{$i * 0.1}s;
        }
      }
    }
  }
  @keyframes loading-animation {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
`;

export default WaveText;
