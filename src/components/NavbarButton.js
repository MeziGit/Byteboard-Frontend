import React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const body = getComputedStyle(document.body);

const ColourButton = styled(Button)(({ theme }) => ({
    backgroundColor: body.getPropertyValue('--colour-primary'),
    color: "white",
    fontFamily: getComputedStyle(document.body).getPropertyValue('--font-primary'),
    fontSize: "xx-large",
    textTransform: "none",
    horizontalAlignment: "right",

    '&:hover': {
        backgroundColor: body.getPropertyValue('--colour-secondary'),
    }
  }));



function NavbarButton(props) {
    return (
        <ColourButton className="btn-navbar" onClick={props.onClick}>{props.buttonText}</ColourButton>
    );
}

export default NavbarButton;