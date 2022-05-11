import React from 'react';
import styled from "styled-components";

const InfoForm = styled.div`
  margin: 30px 10px;
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
const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    position: relative;
    left: -2.5px;
`
const TagContainer = styled.div`
    background-color: #FAFAFA;
    border: 1px solid #D9D9D9;
    border-radius: 5px;
    cursor: pointer;
    height: 25px;
    margin: 4px 5px;
    padding-left: 10px;
    position: relative;
    width: calc(30%-3px);
`
const AddedTag = styled.div`
    overflow: hidden;
    height: 100%;
    padding-right: 15px;
    position: relative;
    width: calc(100% - 15px);
`

const CaseInfo = (props) => {
  return (
    <InfoForm>
      <Info>
        <Heading>Type Of Emergency</Heading>
        <TextInput>{props.typeOfEmergency}</TextInput>
      </Info>
      <Info>
        <Heading>Description</Heading>
        <TextInput>{props.transcript}</TextInput>
      </Info>
      <Info>
        <Heading>Extracted Keywords</Heading>
        <TextInput>
          <Tags>
            <TagContainer>
              <AddedTag>{props.description}</AddedTag>
            </TagContainer>
          </Tags>
        </TextInput>
      </Info>
      <Info>
        <Heading>Level Of Emergency</Heading>
        <TextInput>{props.priority}</TextInput>
      </Info>
      <Info>
        <Heading>Time of Occurence</Heading>
        <TextInput>{props.time}</TextInput>
      </Info>
      <Info>
        <Heading>Lives at Risk</Heading>
        <TextInput>{props.livesAtRisk}</TextInput>
      </Info>
    </InfoForm>
  );
};

export default CaseInfo;
