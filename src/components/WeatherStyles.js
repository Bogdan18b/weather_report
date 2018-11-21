import styled from 'styled-components';

export const DailyStyleContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: max-content;
margin: 1rem;
padding: 1rem;
grid-gap: 3rem;
width: -webkit-fill-available;
@media (max-width: 800px) {
  grid-template-columns: repeat(2, 1fr);
}
`;

export const DailyStyleItem = styled.div`
font-size: 2rem;
text-align: center;
background-color: lightskyblue;
border-radius: .5rem;
padding: 1rem;
border: 2px solid lightgray;
  h1 {
    padding: 0.5rem;
    font-weight: 700;
    &:nth-child(2) {
      border-bottom: 3px solid blue;
      margin-bottom: 1.5rem;
    }
  }
  img {
    width: 40%;
    margin: 0 auto;
  }
`;

export const HourlyStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
`;

export const HourlyStyleItem = styled.div`
font-size: 2rem;
margin-left: auto;
margin-right: auto;
background-color: lightskyblue;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(30rem,1fr));
padding: 1rem;
margin: 1rem;
grid-gap: 1rem;
`;

export const HourlyList = styled.ul`
  font-size: 2rem;
  border: 1px solid black;
  padding: 0.5rem;
  background-color: #F3F4F6;
  background-size: 80%;
  position: relative;
  text-align: center;
  li > img {
    position: absolute;
    top: 0;
    right: 0;
    width: 25%;
  }
`;
