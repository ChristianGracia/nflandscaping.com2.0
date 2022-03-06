
import Link from "next/link";
import styled from "@emotion/styled";

interface NavLinkButtonProps {
  to: string;
  newTab: boolean;
  children: any;
}

const NavLinkButton = ({
  to = "",
  children = null,
  newTab = false,
}: NavLinkButtonProps) => {
  const StyledContainer = styled.div(`
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
    &:hover {
      color: grey;
    }
  }
  `
  )
  return (
    <StyledContainer>
      <Link href={to} as={to} shallow>
        <a {...(newTab && { target: "_blank", rel: "noreferrer" })}>
          {children}
        </a>
      </Link>
    </StyledContainer>
  );
};

export default NavLinkButton;
