import React from 'react';
import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';
import { GiShoppingCart } from 'react-icons/gi';

const Navbar = () => {
  return (
    <Container>
     <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
         <IoSearchOutline style={
            {color: "teal", fontSize: "16px"}
         } />
          </SearchContainer>
        </Left>
        <Center><Logo>LAMA.</Logo></Center>
        <Right>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <GiShoppingCart style={{
          fontSize: "1.5rem",
          cursor: "pointer",
          color: "teal"
        }} />
        </Right>
     </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  height: 5rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;

`;

const SearchContainer = styled.div`
border: 1px solid teal;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;

const Input = styled.input`
border: none;
`
const Logo = styled.h1`
font-weight: bold;
`;

const Language = styled.span`
display: flex;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;


`;

const Center = styled.div`
flex: 1;
text-align: center;
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
padding: 1rem;
font-size: 1rem;
cursor: pointer;
`;

export default Navbar;
