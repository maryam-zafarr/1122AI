import { Link } from "react-router-dom"
import styled from 'styled-components';


const Container = styled.div`
    margin-top: 5px;
    margin-left: 10px;
`

const LogStatus = styled.div`
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    display: inline-flex;
    position: relative;
    height: 50px;
    margin-top: 12px;
    width: 85vh;
    border: 1px solid ${props => props.type === 'High' ? '#DE3C3C' : '#689FF2'};
`
const LogLine = styled.div`
    border-radius: 10px;
    height: 8px;
    left: 3%;
    padding: 0;
    position: absolute;
    top: -4px;
    width: 25%;
    background-color: ${props => props.type === 'High' ? '#DE3C3C' : '#689FF2'};
;
`
const Entry = styled.div`
    height: 80%;
    padding-right: 1%;
    display: flex;
    align-items: center;
`
const EntryDiv = styled.div`

`
const CallStatus = styled.div`
    width: 70px;
`
const CallCaseId = styled.div`
    width: 100px;
`
const CallTime = styled.div`
    width: 80px;
`
const CallLocation = styled.div`
    width: 90px ;
`
const CallType = styled.div`
    width: 90px ;
`
const Heading1 = styled.h1`
    color: #626262;
    display: inline-block;
    font-size: 14px;
    font-weight: 300;
    line-height: 100%;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
`
const Heading2 = styled.h2`
    display: inline-block;
    color: #333333;
    font-size: 14px;
    font-weight: 600;
    line-height: 100%;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
`
const Accept = styled.button`
    border: none;
    border-radius: 15px;
    height: 35px;
    margin-left: 15px;
    width: 80px;
    background-color: ${props => props.type === 'High' ? '#DE3C3C' : '#689FF2'};
    border: 'none';
    color: white ;
    cursor: pointer;
`
const Log = ({item}) => {
    return(
        <Container>
            <LogStatus type={item.priority}>
                <LogLine type={item.priority}></LogLine>
                <Entry>
                    <EntryDiv>
                        <CallStatus>
                            <Heading1>Priority</Heading1>
                            <Heading2>{item.priority}</Heading2>
                        </CallStatus>
                    </EntryDiv>
                    <EntryDiv>
                        <CallType>
                            <Heading1>Type</Heading1>
                            <Heading2>{item.typeOfEmergency}</Heading2>
                        </CallType>
                    </EntryDiv>
                    <EntryDiv>
                        <CallTime>
                            <Heading1>Time</Heading1>
                            <Heading2>{item.time}</Heading2>
                        </CallTime>
                    </EntryDiv>
                    <EntryDiv>
                        <CallLocation>
                            <Heading1>Location</Heading1>
                            <Heading2>{item.location}</Heading2>
                        </CallLocation>
                    </EntryDiv>
                    <EntryDiv>
                        <CallCaseId>
                            <Heading1>Case Id</Heading1>
                            <Heading2>{item._id}</Heading2>
                        </CallCaseId>
                    </EntryDiv>
                    <Link to={`/case/${item._id}`}>
                        <Accept type={item.priority}>View</Accept>
                    </Link>
                </Entry>
            </LogStatus>
        </Container>
    )
};


export default Log;
