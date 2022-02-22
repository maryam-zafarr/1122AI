import { LocationOnOutlined, Search } from '@material-ui/icons';
import { InfoOutlined, LocalHospital } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 50px;
    border-bottom: 1px solid #f1ecec;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    display: flex;
    align-items: center;
`

const Title = styled.h2`
    margin-left: 10px;
`
const Center = styled.div`
    
`
const SearchBar = styled.div`
    width: 400px;
    height: 30px;
    border: 1px solid #DFDFDF;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 2px 10px;
`
const Input = styled.input`
    border: none;
    width: 400px;
    padding: 0px 10px;
    font-size: 14px;
`
const Right = styled.div`
    cursor: pointer;
`



const Navbar = () => {
  return (
      <Container>
          <Wrapper>
              <Left>
                  <LocalHospital style={{color:"#DE3C3C",fontSize:28,}}/>
                  <Title>1122-AI</Title>
              </Left>
              <Center>
              <SearchBar>
                  <LocationOnOutlined/>
                  <Input placeholder='Search for deployment location here'/>
                  <Search/>
              </SearchBar>
              </Center>
              <Right>
                  <InfoOutlined/>
              </Right>
          </Wrapper>
      </Container>
  )
};

export default Navbar;
