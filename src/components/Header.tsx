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
  country: string;
}

const Header: React.FunctionComponent<Props> = ({ city, country }) => (
  <Title>5 Days Weather Report for {city + ", " + country}</Title>
);

export default Header;
