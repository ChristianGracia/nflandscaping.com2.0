import * as React from "react";
import styled from "@emotion/styled";

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  const StyledContainer = styled.div`
    color: black;
    font-weight: bold;
    font-size: 30px;
    margin: 20px 0;
    text-align: center;
  `;
  return <StyledContainer>{title}</StyledContainer>;
};

export default PageHeader;
