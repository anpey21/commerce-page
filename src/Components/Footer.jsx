import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Title>
        Footer
      </Title>
      <Desc>
        Footer
      </Desc>
      <SocialLinks>
        Social Links
      </SocialLinks>
    </Container>
  );
}

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
`;

const Desc = styled.div`
`;

const SocialLinks = styled.div`
`;

export default Footer;
