import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 31%;
  height: 73.5%;
  margin-left: 82px;
  top: 170px;
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

const Transcript = () => {
  return (
    <Container>
      <Heading>Transcript</Heading>
    </Container>
  )
};

export default Transcript;
