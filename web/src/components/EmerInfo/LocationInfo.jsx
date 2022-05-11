import React from 'react';
import styled from "styled-components";

const InfoForm = styled.div`
  margin: 30px 15px;
  width: 300px;
`
const Info = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
  position: relative;
`
const Heading = styled.h1`
  background-color: #FFFFFF;
  font-size: 14px;
  color: #5c5858;
  font-weight: 400;
  left: 15px;
  line-height: 130%;
  margin: 0;
  padding: 0 8px;
  position: absolute;
  top: -10px;
`
const TextInput = styled.div`
  border: 1px solid #DFDFDF;
  border-radius: 5px;
  color: black;
  font-weight: 500 ;
  font-size: 15px;
  padding: 8px 22px 4px;
  width: 100%;
`
const TwoInfo = styled.div`
  align-items: center;
  display: inline-flex;
  width: 100%;
`
const Left = styled.div`
  margin-right: 60px;
  width: 120px ;
`

const LocationInfo = (props) => {
  return (
    <InfoForm>
      <Info>
        <Heading>City / Region</Heading>
        <TextInput>Rawalpindi</TextInput>
      </Info>
      <Info>
        <Heading>Area</Heading>
        <TextInput>{props.location}</TextInput>
      </Info>
      <Info>
        <Heading>Phase</Heading>
        <TextInput>02</TextInput>
      </Info>
      <TwoInfo>
        <Info>
          <Left>
            <Heading>Street Number</Heading>
            <TextInput>08-A</TextInput>
          </Left>
        </Info>
        <Info>
            <Left>
              <Heading>House Number</Heading>
              <TextInput>214</TextInput>
            </Left>
      </Info>
      </TwoInfo>
      <TwoInfo>
        <Info>
          <Left>
            <Heading>Longitude</Heading>
            <TextInput>71.331</TextInput>
          </Left>
        </Info>
        <Info>
            <Left>
              <Heading>Latitude</Heading>
              <TextInput>33.541</TextInput>
            </Left>
      </Info>
      </TwoInfo>
    </InfoForm>
  );
};

export default LocationInfo;
