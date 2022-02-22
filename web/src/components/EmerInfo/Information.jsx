import CaseInfo from "./CaseInfo";
import LocationInfo from "./LocationInfo";
import CallerInfo from "./CallerInfo";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 30%;
  height: 85%;
  margin-bottom: 1%;
  margin-left: 38%;
  top: 90px;
  border: 1px solid #C7C2C2;
  box-sizing: border-box;
  border-radius: 6px;
  overflow-y: scroll
`
const Heading = styled.h1`
  font-size: 18px;
  line-height: 100%;
  margin-left: 5%;
  margin-top: 15px;
`

const Information = () => {
  
  return (
    <Container>
      <Heading>Emergency Information</Heading>
    </Container>
  )
};

export default Information;
