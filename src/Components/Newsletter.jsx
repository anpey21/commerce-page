import { IoSendSharp } from 'react-icons/io5';
import styled from 'styled-components';

const Newsletter = () => {
  return (
    <Container>
      <Title>
        Newsletter
      </Title>
      <Desc>
        Get timely updates from your favorite products.
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
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1 `
  font-size: 70px;
  margin-bottom: 20px;
  color: #333;
`;

const Desc = styled.div `
  font-size: 16px;
  font-weight: lighter;
  font-style: italic;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const InputContainer = styled.div `
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

`;

const Input = styled.input `
  border: none;
  outline: none;
  flex: 8;
  padding-left: 20px;
`; 

const Button = styled.button `
border: none;
background-color: teal;
color: white;
padding: 10px 20px;
cursor: pointer;
font-weight: bold;
`;

export default Newsletter;
