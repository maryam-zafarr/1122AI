import React from 'react';
import styled from 'styled-components';
import Caller from '../components/Caller';
import Deploy from '../components/Deploy';
import Dialheader from '../components/Dialheader';
import Information from '../components/EmerInfo/Information';
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar';
import Transcript from '../components/Transcript';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
const Container = styled.div`
`
const OngoingCall = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [caseDetail, setCaseDetail] = useState('Info');

  useEffect(() => {
    const getCaseDetail = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/cases/find/"+ id
        );
        setCaseDetail(res.data);
      } catch (err) {}
    };
    getCaseDetail();
  });

  return (
    <Container>
      <Navbar />
      <Topbar/>

      <Dialheader 
        caseNumber={caseDetail._id} 
        phoneNumber = {caseDetail.phoneNumber}
      />

      <Caller/>
      <Transcript/>

      <Information 
        typeOfEmergency = {caseDetail.typeOfEmergency}
        transcript = {caseDetail.transcript}
        description = {caseDetail.description}
        priority = {caseDetail.priority}
        time = {caseDetail.time}
        livesAtRisk = {caseDetail.livesAtRisk}
        location = {caseDetail.location}
      />

      <Deploy/>
    </Container>
  )
};

export default OngoingCall;
