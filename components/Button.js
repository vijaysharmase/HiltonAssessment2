import React from "react";
import styled from "styled-components";

const StyledButton = styled.input.attrs({ type: "button" })`
	font: 0.8em "Montserrat", sans-serif;
	border-radius: 3px;
	height: 2em;
	width: 5em;
	background-color: #e7e7e7;
`;

const Button = ({ ...props }) => <StyledButton {...props} />;

export default Button;
