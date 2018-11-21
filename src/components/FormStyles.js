import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  justify-content: space-around;

  iframe {
    width: 90%;
    height: 50rem;
    margin: 2rem;
    border: 0.5rem solid lightskyblue;
    border-radius: 0.5rem;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Form = styled.div`
  text-align: center;
  font-size: 2rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: baseline;

  input {
    width: 30rem;
    border: 1px solid lightgray;
    border-radius: 2rem;
    background-color: lightskyblue;
    font-size: 2rem;
    padding: 0.5rem;
  }
`;

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 2rem;
  width: 15rem;
  padding: 0.5rem;
  background-color: blue;
  color: azure;
  margin: 0 auto;
  cursor: pointer;
  margin-top: 2rem;
  }

  &:hover {
  background-color: red;
  }
`;
