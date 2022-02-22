import { AssessmentOutlined, CallRounded, HomeOutlined, SettingsOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container =styled.div`
    position: fixed;     
    height: 100%;
    width: 50px;     
    z-index: 1;     
    top: 3.2em;
    overflow-x: hidden;  
    padding-top: 10px;
    border-right: 1px solid #f1ecec;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Top = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
`
const Icon = styled.div`
    cursor: pointer;
`
const Bottom = styled.div`
    flex: 1;
`
const Topbar = () => {
  return (
    <Container>
        <Top>
            <Icon>
                <HomeOutlined style={{paddingBottom: 20}}/>
            </Icon>
            <Icon>
                <AssessmentOutlined style={{paddingBottom: 20}}/>
            </Icon>
            <Icon>
                <CallRounded style={{paddingBottom: 20}}/>
            </Icon>
        </Top>
        <Bottom>
            <Icon>
                <SettingsOutlined/>
            </Icon>
        </Bottom>
    </Container>
  )
  
};

export default Topbar;
