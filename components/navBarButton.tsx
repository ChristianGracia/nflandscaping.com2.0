import * as React from "react";
import Link from "next/link";

const NavLinkButton = (props: any) => {
  return (
    <React.Fragment>
      <Link href={props.to} as={props.to} shallow>
        <a {...props.newTab && {target: "_blank", rel: "noreferrer"}}>{props.children}</a>
      </Link>
    </React.Fragment>
  );
};

export default NavLinkButton;
