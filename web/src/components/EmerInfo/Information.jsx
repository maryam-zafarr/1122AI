import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import CaseInfo from "./CaseInfo";
import LocationInfo from "./LocationInfo";
import CallerInfo from "./CallerInfo";
import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';


const STabs = styled(Tabs)`
  
  font-size: 14px;
  margin-left: 7px;
  margin-right: 7px;
  width: 100%;
`;

const STabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
  width: 100%;
`;
STabList.tabsRole = 'TabList';

const STab = styled(Tab)`
  margin-right: 4px;
  padding: 4px;
  user-select: none;
  cursor: arrow;
  width: 33.333% ;
  text-align: center;

  &.is-selected {
    cursor: pointer;
    position: relative;
    text-align: center;
    height: 100%;
    background-color: #BBC0D0;
    border-radius: 5px;
    width: 33.333% ;
    left:0 ;
  }

  &:focus {
    outline: none;
    
  }
`;
STab.tabsRole = 'Tab';

const STabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  padding: 4px;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
STabPanel.tabsRole = 'TabPanel';




////////////////////////////////////////////




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
  margin-bottom: 15px;
`
const InfoSelect = styled.div`

  align-items: center;
  background: #d5d8e0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  margin: auto;
  position: relative;
  width: 90%;
  padding: 4px;
  height: 24px;
`
const SelectTab = styled.div`
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  text-align: center;
  width: 33.33%;
  height: 100%;
`
const Background = styled.div`
  background-color: #BBC0D0;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  width: 0;
  z-index: 60;
  transition: 0.2s;
`
const Text = styled.div`
  position: absolute;
  z-index: 1000000;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Active = styled.div`
  color: white;
`
const ActiveBackground = styled.div`
  left:0 ;
  width: 100%;
`
const Information = (props) => {

  return (
    <Container>
      <Heading>Emergency Information</Heading>
      <STabs selectedTabClassName='is-selected' selectedTabPanelClassName='is-selected'>
        <InfoSelect>
          <STabList>
            <STab>Info</STab>
            <STab>Location</STab>
            <STab>Caller</STab>
          </STabList>
        </InfoSelect>
          <STabPanel>
            <CaseInfo typeOfEmergency = {props.typeOfEmergency}
                      transcript = {props.transcript}
                      description = {props.description}
                      priority = {props.priority}
                      time = {props.time}
                      livesAtRisk = {props.livesAtRisk}/>
          </STabPanel>
          <STabPanel>
            <LocationInfo location = {props.location}/>
          </STabPanel>
          <STabPanel>
            <CallerInfo/>
          </STabPanel>
      </STabs>
    </Container>
  )
};

export default Information;
