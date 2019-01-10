import React from "react";
import styled from "styled-components";

const StyledDropdown = styled.select`
	font: 0.8em "Montserrat", sans-serif;
	height: 2em;
	width: 3em;
`;

const Dropdown = ({ ...props }) => <StyledDropdown {...props} />;

export default Dropdown;
