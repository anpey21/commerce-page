import { IoSendSharp } from 'react-icons/io5';
import styled from 'styled-components';

const Newsletter = () => {
  return (
    <Container>
      <Title>
        Newsletter
      </Title>
      <Description>
      </Description>
      <InputContainer>
        <Input />
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
`;

const Description = styled.div `
`;

const InputContainer = styled.div `
`;

const Input = styled.input `
`; 

const Button = styled.button `
`;

export default Newsletter;
