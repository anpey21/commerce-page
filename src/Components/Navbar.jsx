import React from 'react';
import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';

const Navbar = () => {
  return (
    <Container>
     <Wrapper>
        <Left>
          <Language>EN</Language>
         <IoSearchOutline />
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
     </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  height: 5rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
display: flex;
justify-content: center;
text-align: center;
align-items: center;
padding: 2rem 0;
color: white;

`;

const Language = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
`;

const Left = styled.div`
flex: 1;
overflow: hidden;


`;

const Center = styled.div`
flex: 1;
`

const Right = styled.div`
flex: 1;
`;

export default Navbar;
