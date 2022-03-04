/** @jsxImportSource @emotion/react */
import * as React from "react";
import * as Button from "@mui/material/Button";
import Link from "next/link";
import { css } from '@emotion/react'

const NavLinkButton = (props: any) => {
  return (
    <React.Fragment>
      <Link href={props.to} as={props.to} shallow>
        <a
    >{props.children}</a>
      </Link>
    </React.Fragment>
  );
};

export default NavLinkButton;
