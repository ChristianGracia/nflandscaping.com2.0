import * as React from "react";
import * as Button from "@mui/material/Button";
import Link from 'next/link'


const NavLinkButton = (props : any) => {
        return (
            <React.Fragment>
                <Link href={props.to}>
                    <Button.default>
                    {props.children}
                    </Button.default>
                </Link>
            </React.Fragment>
        );

}

export default NavLinkButton;
