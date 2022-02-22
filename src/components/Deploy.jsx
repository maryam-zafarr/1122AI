import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 30%;
  height: 47%;
  margin-left: 69%;
  top: 52%;
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

const Deploy = () => {
  return (
    <Container>
      <Heading>Dispatch Help</Heading>
    </Container>
  )
};

export default Deploy;
