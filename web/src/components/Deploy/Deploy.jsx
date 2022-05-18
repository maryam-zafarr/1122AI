import { useState } from "react";
import styled from "styled-components";
import ServicesCarousel from "./ServicesCarousel";

const Container = styled.div`
  position: absolute;
  width: 30%;
  height: 33%;
  margin-left: 69%;
  top: 64.5%;
  border: 1px solid #C7C2C2;
  box-sizing: border-box;
  border-radius: 6px;
  overflow-y: scroll;
  padding: 10px;
`
const Heading = styled.h1`
  font-size: 18px;
  line-height: 100%;
  margin-left: 5%;
  margin-top: 15px;
`

const Deploy = (props) => {

  return (
    <Container>
      <Heading>Dispatch Help</Heading>
      <ServicesCarousel unit={props.unit} case={props.case}/>
    </Container>
  )
};

export default Deploy;
