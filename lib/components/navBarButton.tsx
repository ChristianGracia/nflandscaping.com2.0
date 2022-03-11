import Link from "next/link";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const StyledContainer = styled.div(`
a {
  text-decoration: none;
  color: ${router.asPath === to ? "#2d77a9" : "black"};
  cursor: pointer;
  &:hover {
    color: grey;
  }
}
`);
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
