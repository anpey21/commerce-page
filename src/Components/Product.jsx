import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';

const Product = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img}/>
      <Info>
        <Icon>
          <FaSearch />
        </Icon>
        <Icon>
          <FiShoppingCart />
        </Icon>
        <Icon>
          <AiOutlineHeart />
        </Icon>
      </Info>
    </Container>
  );
}

const Container = styled.div `
  min-width: 280px;
  height: 350px;
  flex: 1;
  margin: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Circle = styled.div `
  width: 200px;
  height: 200px;
  background-color: white;
  position: absolute;
`;

const Image = styled.img `
  width: 95%;
  height: 95%;
  object-fit: cover;
  z-index: 2;
`;

const Info = styled.div `
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top:0;
left: 0;
background-color: transparent;
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
:hover {
  opacity: 1;
}
`;

const Icon = styled.div `
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border-radius: 50%;
background-color: white;
opacity: 0.75;
margin: 5px;
cursor: pointer;
:hover {
  background-color: var(--coral);
  color: white;
  transition: all 0.2s ease;
 opacity: 1;
}
`;

export default Product;
