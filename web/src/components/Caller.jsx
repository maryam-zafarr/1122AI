import React from 'react';
import styled from 'styled-components';
import avatar from '../assets/avatar.svg';

const Container = styled.div`
    margin-left: 60px;
    margin-top: 40px;
    padding: 10px 20px;
`
const Wrapper = styled.div`
    display: flex;

`
const Picture = styled.img`
    height: 50px;
    width: 50px;
`

const Text = styled.div`
    margin-left: 10px;
`
const Title = styled.span`
    font-size: 12px;
    color: #AFAAAA;
`
const Name = styled.p`
    font-size: 16px;
    font-weight: 500;
`
const Caller = () => {
  return (
      <Container>
          <Wrapper>
              <Picture src={avatar}/>
              <Text>
                  <Title>Caller</Title>
                  <Name>Ayesha Khan</Name>
              </Text>
          </Wrapper>
      </Container>
  )
};

export default Caller;
