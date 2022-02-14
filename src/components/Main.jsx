import styled from "styled-components";
import { Homepage } from ".";

const Main = (props) => {
  return <Container><Homepage/></Container>;
};

const Container = styled.div`
  grid-area: main;
`;

export default Main;
