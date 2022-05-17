import React from 'react';
import styled from 'styled-components';
import Logs from '../components/Logs';
import Map from '../components/Map/Map';
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar';
import Topbar from '../components/Topbar';

const Container = styled.div`
`
const Wrapper = styled.div`
    margin-left: 60px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`

`
const Text = styled.h2`
    margin-top: 10px;
    margin-left: 10px;
    font-size: 26px ;
    font-weight: 400;
    color:#333333;
`
const Right = styled.div`
    background-color: grey;
    width: 800px;
    height: 100vh;
`
const Home = () => {
  return (
    <Container>
      <Navbar />
      <Topbar/>
      <Wrapper>
      <Left>
          <Text>
              AI Dashboard
          </Text>
          <SearchBar/>
          <Logs/>
      </Left>
      <Right>
        <Map/>
      </Right>
      </Wrapper>
    </Container>
  )
};

export default Home;
