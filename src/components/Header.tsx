import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-size: 6rem;
  font-weight: bold;
  padding: 1rem;
`;

interface Props {
  city: string;
}

const Header: React.FunctionComponent<Props> = ({ city }) => (
  <Title>{`Weather Report for ${city}`}</Title>
);

export default Header;
