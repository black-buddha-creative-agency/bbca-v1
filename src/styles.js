import styled from "styled-components";

export const HeroImage = styled.div`
	position: static;
	left: auto;
	right: 0;
	display: block;
	width: 100%;
	height: 100%;
	margin-bottom: 88px;
	border-top: 88px solid #fafafa;
	border-bottom: 88px solid #fafafa;
	background: no-repeat;
	background-size: cover;
	background-image: url(${({ src }) => src});
`;
