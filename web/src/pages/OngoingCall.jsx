import React from 'react';
import styled from 'styled-components';
import Caller from '../components/Caller';
import Deploy from '../components/Deploy';
import Dialheader from '../components/Dialheader';
import Information from '../components/EmerInfo/Information';
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar';
import Transcript from '../components/Transcript';

const Container = styled.div`
`
const OngoingCall = () => {
  return (
    <Container>
      <Navbar />
      <Topbar/>
      <Dialheader/>
      <Caller/>
      <Transcript/>
      <Information/>
      <Deploy/>
    </Container>
  )
};

export default OngoingCall;
