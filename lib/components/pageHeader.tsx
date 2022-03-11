import styled from "@emotion/styled";

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return <StyledContainer>{title}</StyledContainer>;
};

const StyledContainer = styled.div`
  color: black;
  font-weight: bold;
  font-size: 30px;
  margin: 20px 0;
  text-align: center;
`;

export default PageHeader;
