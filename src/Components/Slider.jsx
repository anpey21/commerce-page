import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import styled from 'styled-components';

const FullPageSlider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <AiOutlineArrowLeft />
      </Arrow>
      <SlideWrapper>
        <Slide>
          <ImageContainer>
            <Image src="./images/matcha-co-286fjLycNM8-unsplash.jpg" alt='image'/>
          </ImageContainer>
          <InfoContainer>
            <Title>MATCHA & CO</Title>
            <Description>
              100% organic premium culinary-grade matcha green tea powder.
            </Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </SlideWrapper>
      <Arrow direction="right">
        <AiOutlineArrowRight />
      </Arrow>
    </Container>
  );
}


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #f5f5f5;
`;

const Arrow = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: var(--coral);
  border-radius: 50%;
  position: absolute;
  color: white;
  top: 0;
  bottom: 0;
  margin:auto 1rem;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;


const SlideWrapper = styled.div`
  height: 100%;
  display: flex;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    overflow: scroll;
  }
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
  
`;

const Image = styled.img`
height: 80%;
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    height: 50%;
    align-items: center;
    flex-direction: column;
  }
  
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  @media only screen and (max-width: 1024px) {
    padding: 12px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: lighter;
  @media only screen and (max-width: 1024px) {
    font-size: 40px;
  }

`;

const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-style: italic;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  /*same as arrow*/
  opacity: 0.5;
  background-color: var(--coral);
  color: white;
  border: none;
  cursor: pointer;
  :hover {
    transition: all 0.5s ease;
    opacity: 0.7;
    transform: scale(1.1);
  }
`;


export default FullPageSlider;
