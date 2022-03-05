import * as React from "react";
import styled from "@emotion/styled";

interface PageHeaderProps {
    title: string;
}

const PageHeader = (props: PageHeaderProps) => {
    const StyledContainer = styled.div`
        color: black;
        font-weight: bold;
        font-size: 30px;
        margin-top: 20px;
        text-align: center;
    `
  return (
    <StyledContainer>
        {props.title}
    </StyledContainer>
  );
};

export default PageHeader;
