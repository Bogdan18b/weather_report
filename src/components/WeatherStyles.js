import styled from 'styled-components';

export const DailyStyleContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
grid-auto-rows: max-content;
margin: 1rem;
padding: 1rem;
grid-gap: 2rem;
width: -webkit-fill-available;
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
    width: 60%;
    margin: 0 auto;
  }
`;

export const HourlyStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
`;

export const HourlyStyleItem = styled.div`
font-size: 20px;
margin-left: auto;
margin-right: auto;
background-color: lightskyblue;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
padding: 10px;
margin: 10px;
grid-gap: 10px;
`;

export const HourlyList = styled.ul`
font-size: 20px;
border: 1px solid black;
padding: 5px;
background-color: #F3F4F6;
background-size: 80%;
position: relative;

li > img {
  position: absolute;
  top: 0;
  right: 0;
  width: 25%;
}
`;
