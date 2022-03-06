import { Fragment } from "react";
import Link from "next/link";

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
  return (
    <Fragment>
      <Link href={to} as={to} shallow>
        <a {...(newTab && { target: "_blank", rel: "noreferrer" })}>
          {children}
        </a>
      </Link>
    </Fragment>
  );
};

export default NavLinkButton;
