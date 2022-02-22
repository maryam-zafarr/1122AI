import React from 'react';
import styled from 'styled-components';
import recording from '../assets/recording.svg';
import mute from "../assets/mute.svg";
import pause from "../assets/pause.svg";
import phone from "../assets/phone.svg";


const Container = styled.div`
    width: 100%;
    position: fixed;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
`
const Heading = styled.h1`
    display: flex;
    margin-left: 60px;
    width: 60%;
    font-size: 20px;
    font-weight: 300;
`
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
const CallActions = styled.div`
    cursor: pointer;
    height: 25px;
    width:10vw;
    display:flex;
    border: 1px solid #DFDFDF;
    border-radius: 6px;
    justify-content: space-between;
    align-items: center;
`
const MuteIconContainer = styled.div`
    border-right: 1px solid #DFDFDF;
    padding: 0 .5vw 0 .5vw;
    height: 100%;
    display: flex;
    align-items: center;
    &:hover {
        background-color: #e0d9d9
    }
`
const MuteIcon = styled.img`
    padding: 0 .5vw 0 .5vw;
    height: 70%;
    width: auto;
    
`
const PauseIcon = styled.img`
    height: 80%;
    width: auto;
    padding: 0.25vw 1vw 0.25vw 1vw;
    &:hover {
        background-color: #e0d9d9
    }
`
const PhoneIcon = styled.img`
    border-left: 1px solid #DFDFDF;
    padding: 0 .5vw 0 .5vw;
    height: 100%;
    width: auto;
    &:hover {
        background-color: #e0d9d9
    }
`
const RecordingTime = styled.div`
    margin-left: 1vw;
    width: 7vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height:4vh;
`
const RecIcon = styled.img`
    height:80%;
    width: auto;
    display: inline-block;
    padding-right: 0.5vw;
`
const Text = styled.h1`
    font-size: 20px;
    display: inline-block;
    font-weight:700;
    margin:0;
`

const Dialheader = () => {
  return (
    <Container>
        <Wrapper>
           <Heading>
               <b>Ongoing Call</b>&nbsp;| Case # AES90 | 0333-7863345
           </Heading>
            <IconContainer>
                <CallActions>
                    <MuteIconContainer>
                        <MuteIcon src={mute} />
                    </MuteIconContainer>
                    <PauseIcon src={pause} />
                    <PhoneIcon src={phone} />
                </CallActions>
                <RecordingTime>
                    <RecIcon src={recording} />
                    <Text>
                        01:25
                    </Text>
                </RecordingTime>
        </IconContainer>
        </Wrapper>
    </Container>
  )
  
};

export default Dialheader;
