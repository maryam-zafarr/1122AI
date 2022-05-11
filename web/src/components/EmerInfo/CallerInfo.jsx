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
const CallerDataHeading = styled.h2`
  font-size: 16px;
  font-weight: bolder;
`

const CallerInfo = ({item}) => {
  return (
    <InfoForm>
      <Info>
        <Heading>Caller Name</Heading>
        <TextInput>Ayesha Khan</TextInput>
      </Info>
      <Info>
        <Heading>Calling on behalf of someone?</Heading>
        <TextInput>No.</TextInput>
      </Info>
      <CallerDataHeading>Caller Data</CallerDataHeading>
      <TwoInfo>
        <Info>
          <Left>
            <Heading>Age</Heading>
            <TextInput>24</TextInput>
          </Left>
        </Info>
        <Info>
            <Left>
              <Heading>Blood Group</Heading>
              <TextInput>B+</TextInput>
            </Left>
      </Info>
      </TwoInfo>
      <Info>
        <Heading>Medical Conditions (If any)</Heading>
        <TextInput>
          <Tags>
            <TagContainer>
              <AddedTag>Diabetes</AddedTag>
            </TagContainer>
            <TagContainer>
              <AddedTag>High BP</AddedTag>
            </TagContainer>
          </Tags>
        </TextInput>
      </Info>
      <Info>
        <Heading>Allergies (If any)</Heading>
        <TextInput>
          <Tags>
            <TagContainer>
              <AddedTag>Pollen Allergy</AddedTag>
            </TagContainer>
          </Tags>
        </TextInput>
      </Info>
      <Info>
        <Heading>Additional Notes</Heading>
        <TextInput>None.</TextInput>
      </Info>
    </InfoForm>
  );
};

export default CallerInfo;
