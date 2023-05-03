import React from 'react';
import styled from 'styled-components';

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}

const Container = styled.div `
  flex: 1;
  margin: 3px;
  height: 50vh;
  position: relative;
  `;

  const Image = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
  `;

  const Info = styled.div `
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  `;

  const Title = styled.h1 `
  color: white;
  margin-bottom: 20px;

  `;

  const Button = styled.button `
 /* styling same as slider button */
  border: none;
  padding: 10px;
  background-color: var(--coral);
  color: white;
  opacity: 0.85;
  cursor: pointer;
  font-weight: 600;
  :hover {
    opacity: 1;
    transform: scale(1.05);
    transition: all 0.5s ease;
  }

  `;

export default CategoryItem;
