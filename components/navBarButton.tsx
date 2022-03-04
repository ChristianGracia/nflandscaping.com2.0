import * as React from "react";
import * as Button from "@mui/material/Button";
import Link from "next/link";

const NavLinkButton = (props: any) => {
  return (
    <React.Fragment>
      <Link href={props.to}>
        <a>{props.children}</a>
      </Link>
    </React.Fragment>
  );
};

export default NavLinkButton;
