import { IoSendSharp } from 'react-icons/io5';
import styled from 'styled-components';

const Newsletter = () => {
  return (
    <Container>
      <Title>
        STAY CONNECTED
      </Title>
      <Desc>
        Watch out for exciting deals on your favorite products.
      </Desc>
      <InputContainer>
        <Input placeholder='Your Email' />
        <Button>
          <IoSendSharp />
        </Button>
        </InputContainer>
    </Container>
  );
}

const Container = styled.div `
  height: 40vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1 `
  font-size: 30px;
  margin-bottom: 20px;
  letter-spacing: 4px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Desc = styled.div `
  font-size: 16px;
  font-weight: ligh;
  font-style: italic;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const InputContainer = styled.div `
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Input = styled.input `
  border: none;
  outline: none;
  flex: 8;
  padding-left: 20px;
`; 

const Button = styled.button `
border: none;
background-color: coral;
color: white;
padding: 10px 20px;
cursor: pointer;
font-weight: bold;
`;

export default Newsletter;
