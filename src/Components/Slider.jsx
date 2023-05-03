import React from 'react';
import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import styled from 'styled-components';
import { sliderItems } from '../data';


const FullPageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <AiOutlineArrowLeft />
      </Arrow>
      <SlideWrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
          <Slide key={item.id} bg={item.bg}>
          <ImageContainer>
            <Image src={item.img} />
          </ImageContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Description>
              {item.desc}
            </Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        ))}
      </SlideWrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <AiOutlineArrowRight />
      </Arrow>
    </Container>
  );
}


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: var(--primary-teal);
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
`;


const SlideWrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #${(props) => props.bg};
`;

const Image = styled.img`
height: 80%;
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: lighter;
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
  opacity: 0.7;
  background-color: var(--coral);
  color: white;
  border: none;
  cursor: pointer;
  :hover {
    transition: all 0.5s ease;
    opacity: 1;
    transform: scale(1.1);
  }
`;


export default FullPageSlider;
