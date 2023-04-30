import React, { useState } from 'react';
import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';
import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <IoSearchOutline style={{ color: 'teal', fontSize: '16px' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <MenuItem hideAtMobile>REGISTER</MenuItem>
          <MenuItem hideAtMobile>SIGN IN</MenuItem>
          <MenuItem hideAtMobile>
          <GiShoppingCart 
            style={{ fontSize: '1.5rem', cursor: 'pointer', color: 'teal' }}
          />
          </MenuItem>
          <MenuIcon onClick={toggleMenu}>
            <AiOutlineMenu
              style={{ fontSize: '1.5rem', cursor: 'pointer', color: 'teal' }}
            />
          </MenuIcon>
        </Right>
      </Wrapper>
      {isMenuOpen && (
        <MobileMenu>
          <MobileMenuItem>REGISTER</MobileMenuItem>
          <MobileMenuItem>SIGN IN</MobileMenuItem>
          <MobileMenuItem>
            CHECKOUT
          </MobileMenuItem>
        </MobileMenu>
      )}
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  height: 5rem;
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    position: relative;
    height: 4rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const SearchContainer = styled.div`
  border: 1px solid var(--primary-teal);
  display: flex;
  align-items: center;
  margin-left: 15px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  margin-right: 5px;
`;

const Logo = styled.h1`
  font-weight: bold;
  margin-left: 1rem;

  @media (max-width: 1020px) {
    font-size: 1.2rem;
  }
`;

const Language = styled.span`
  display: flex;
  font-size: 1rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

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

  @media (max-width: 768px) {
    display: ${(props) => props.hideAtMobile && 'none'};
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 4rem;
  right: 0;
  width: 100%;
`;

const MobileMenuItem = styled.div`
  padding: 1rem;
  font-size: 1rem;
  color: var(--primary-teal);
  cursor: pointer;
  text-align: center;
  background: white;
  border-bottom: 1px solid lightgray;
  :hover {
    background: var(--primary-teal);
    color: white;
  }
`;

export default Navbar;



